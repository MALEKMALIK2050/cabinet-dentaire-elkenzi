#!/usr/bin/env python3
"""
translate_to_arabic.py
-----------------------
Regenere automatiquement les pages arabes (dossier ar/) a partir des pages
francaises (index.html, about.html, gallery.html, contact.html), en:

  1. Traduisant tout le texte visible vers l'arabe (moteur Google Translate,
     via la librairie "deep-translator" - gratuit, pas de cle API requise).
  2. Ajustant automatiquement lang="ar", dir="rtl".
  3. Corrigeant les chemins (css/, js/, images/) pour tenir compte du
     sous-dossier ar/.
  4. Reconstruisant le menu deroulant de langue (liens FR <-> AR).
  5. Protegeant les termes qui ne doivent JAMAIS etre traduits automatiquement
     (nom du cabinet, nom du docteur, adresse, telephone, email, reseaux
     sociaux...) via un glossaire, pour eviter les traductions fantaisistes.

UTILISATION
-----------
    pip install beautifulsoup4 deep-translator lxml
    python translate_to_arabic.py

Lancez-le depuis le dossier racine du site (celui qui contient index.html,
about.html, gallery.html, contact.html, css/, js/, ar/).

Chaque fois que vous modifiez une page FR, relancez simplement le script:
il regenere les 4 pages AR a jour, sans rien retaper a la main.

NOTE: ce script a besoin d'un acces Internet (il appelle un service de
traduction en ligne). Il ne fonctionnera pas dans un environnement sans
reseau.
"""

import os
import re
import sys
import time
from pathlib import Path

try:
    from bs4 import BeautifulSoup, NavigableString, Comment, Doctype, CData
except ImportError:
    sys.exit("Il manque 'beautifulsoup4'. Installez-le avec:\n"
              "    pip install beautifulsoup4 lxml")

try:
    from deep_translator import GoogleTranslator
except ImportError:
    sys.exit("Il manque 'deep-translator'. Installez-le avec:\n"
              "    pip install deep-translator")


# --------------------------------------------------------------------------
# CONFIGURATION - a adapter si votre structure de site change
# --------------------------------------------------------------------------

SITE_ROOT = Path(__file__).parent
FR_PAGES = ["index.html", "about.html", "gallery.html", "contact.html"]
AR_DIR = SITE_ROOT / "ar"

# Termes proteges: ne seront jamais envoyes au traducteur automatique.
# Cle = texte francais exact (ou fragment) -> Valeur = traduction arabe fixe.
# Ajoutez ici toute nouvelle information (nom, adresse, etc.) que vous voulez
# figer manuellement plutot que de laisser la machine traduire.
GLOSSARY = {
    "CABINET DENTAIRE ELKENZI": "عيادة الكنزي لطب الأسنان",
    "Cabinet Dentaire ELKENZI": "عيادة الكنزي لطب الأسنان",
    "DENTAIRE ELKENZI": "الكنزي لطب الأسنان",
    "Dr Belguidoum": "الدكتور بلقيدوم",
    "drbelguidoum.93@gmail.com": "drbelguidoum.93@gmail.com",
    "0799 13 49 59": "0799 13 49 59",
    "Ruisseau": "الرويسو",
    "Algiers, Algeria": "الجزائر العاصمة، الجزائر",
    "16000": "16000",
}

# Balises dont le contenu ne doit jamais etre traduit
SKIP_TAGS = {"script", "style"}

# Classes CSS dont le contenu ne doit jamais etre traduit
# (marque, icones, boutons de langue deja geres manuellement)
SKIP_CLASSES = {"logo", "lang-dropdown-btn", "lang-dropdown-caret", "social-links"}


# --------------------------------------------------------------------------
# TRADUCTION
# --------------------------------------------------------------------------

_translator = GoogleTranslator(source="fr", target="ar")
_cache = {}  # evite de retraduire deux fois la meme phrase


def protect_glossary(text):
    """Remplace les termes proteges par des jetons neutres avant traduction."""
    tokens = {}
    protected = text
    for i, (term, _) in enumerate(GLOSSARY.items()):
        if term in protected:
            token = f"§{i}§"
            protected = protected.replace(term, token)
            tokens[token] = term
    return protected, tokens


def restore_glossary(translated, tokens):
    """Remet les traductions arabes fixes a la place des jetons."""
    for token, term in tokens.items():
        translated = translated.replace(token, GLOSSARY[term])
    return translated


def translate_text(text):
    """Traduit une chaine de texte en preservant le glossaire, avec cache."""
    stripped = text.strip()
    if not stripped:
        return text
    # Ne pas traduire des chaines purement numeriques / symboles
    if re.fullmatch(r"[\d\s\-\+\.,:/()]+", stripped):
        return text

    if stripped in _cache:
        translated_core = _cache[stripped]
    else:
        protected, tokens = protect_glossary(stripped)
        try:
            translated_core = _translator.translate(protected)
        except Exception as exc:
            print(f"  [!] Echec de traduction pour: {stripped[:50]!r} ({exc})")
            translated_core = protected  # on garde le francais plutot que planter
        translated_core = restore_glossary(translated_core, tokens)
        _cache[stripped] = translated_core
        time.sleep(0.15)  # petite pause pour rester correct avec le service

    # Reinjecte les espaces de debut/fin d'origine
    leading = text[: len(text) - len(text.lstrip())]
    trailing = text[len(text.rstrip()):]
    return f"{leading}{translated_core}{trailing}"


def should_skip(node):
    """Determine si un noeud de texte doit etre laisse tel quel."""
    parent = node.parent
    while parent is not None:
        if parent.name in SKIP_TAGS:
            return True
        classes = parent.get("class", []) if parent.get("class") else []
        if any(c in SKIP_CLASSES for c in classes):
            return True
        parent = parent.parent
    return False


def translate_soup(soup):
    for node in soup.find_all(string=True):
        if isinstance(node, (Comment, Doctype, CData)):
            continue
        if not isinstance(node, NavigableString):
            continue
        if not node.strip():
            continue
        if should_skip(node):
            continue
        new_text = translate_text(str(node))
        node.replace_with(new_text)


# --------------------------------------------------------------------------
# AJUSTEMENTS STRUCTURELS (chemins, lang/dir, menu de langue)
# --------------------------------------------------------------------------

def fix_paths(soup):
    """Reecrit css/, js/, images/ pour pointer un niveau au-dessus (ar/)."""
    for tag, attr in [("link", "href"), ("script", "src"), ("img", "src")]:
        for el in soup.find_all(tag):
            val = el.get(attr)
            if val and (val.startswith("css/") or val.startswith("js/") or val.startswith("images/")):
                el[attr] = "../" + val


def fix_lang_dropdown(soup, page_name):
    """Reconstruit le menu deroulant de langue pour la version arabe."""
    dropdown = soup.find("div", class_="lang-dropdown-content")
    if not dropdown:
        return
    links = dropdown.find_all("a")
    if len(links) != 2:
        return
    fr_link, ar_link = links[0], links[1]
    fr_link["href"] = f"../{page_name}"
    if "active-lang" in (fr_link.get("class") or []):
        fr_link["class"] = [c for c in fr_link["class"] if c != "active-lang"]
    ar_link["href"] = page_name
    existing = ar_link.get("class") or []
    if "active-lang" not in existing:
        existing.append("active-lang")
    ar_link["class"] = existing

    btn = soup.find("button", class_="lang-dropdown-btn")
    if btn:
        for s in btn.find_all(string=True, recursive=False):
            if "FR" in s:
                s.replace_with(s.replace("FR", "AR"))


def fix_html_root(soup):
    html_tag = soup.find("html")
    if html_tag:
        html_tag["lang"] = "ar"
        html_tag["dir"] = "rtl"


def fix_active_nav(soup, page_name):
    """S'assure que le lien actif dans le nav correspond bien a la page."""
    for a in soup.select("ul.nav-links a"):
        href = a.get("href")
        if href == page_name:
            classes = a.get("class") or []
            if "active" not in classes:
                classes.append("active")
            a["class"] = classes
        else:
            classes = a.get("class") or []
            if "active" in classes:
                classes.remove("active")
                a["class"] = classes


# --------------------------------------------------------------------------
# PIPELINE PRINCIPAL
# --------------------------------------------------------------------------

def process_page(fr_path: Path):
    page_name = fr_path.name
    print(f"-> Traduction de {page_name} ...")

    with open(fr_path, "r", encoding="utf-8") as f:
        soup = BeautifulSoup(f.read(), "lxml")

    fix_html_root(soup)
    fix_paths(soup)
    fix_lang_dropdown(soup, page_name)
    translate_soup(soup)
    fix_active_nav(soup, page_name)

    AR_DIR.mkdir(exist_ok=True)
    out_path = AR_DIR / page_name
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(str(soup))

    print(f"   OK -> {out_path}")


def main():
    missing = [p for p in FR_PAGES if not (SITE_ROOT / p).exists()]
    if missing:
        sys.exit(f"Fichiers introuvables dans {SITE_ROOT}: {missing}\n"
                  f"Lancez ce script depuis le dossier racine du site.")

    print("Traduction automatique FR -> AR")
    print("=" * 40)
    for page in FR_PAGES:
        process_page(SITE_ROOT / page)
    print("=" * 40)
    print("Termine. Verifiez les pages dans le dossier ar/ avant mise en ligne")
    print("(la traduction automatique peut contenir des erreurs a relire).")


if __name__ == "__main__":
    main()
