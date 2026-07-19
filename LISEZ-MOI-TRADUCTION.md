# Traduction automatique FR → AR

Ce script régénère les 4 pages arabes (`ar/index.html`, `ar/about.html`,
`ar/gallery.html`, `ar/contact.html`) à partir des pages françaises, sans
que vous ayez à recopier/traduire chaque modification à la main.

## Installation (une seule fois)

```bash
pip install -r requirements.txt
```

Il vous faut Python 3 et une connexion Internet (le script appelle un
service de traduction en ligne gratuit).

## Utilisation

À chaque fois que vous modifiez `index.html`, `about.html`, `gallery.html`
ou `contact.html` (la version française), lancez simplement :

```bash
python translate_to_arabic.py
```

Le script :
- traduit tout le texte visible vers l'arabe,
- passe automatiquement en `dir="rtl"`,
- corrige les chemins vers `css/`, `js/`, `images/`,
- reconstruit le sélecteur de langue (liens FR ↔ AR),
- écrase les fichiers dans le dossier `ar/` avec la version à jour.

## Le glossaire (important)

En haut du fichier `translate_to_arabic.py`, le dictionnaire `GLOSSARY`
fige certains termes pour qu'ils ne soient jamais "mal traduits" par la
machine (nom du cabinet, adresse, téléphone, email...). Si vous ajoutez une
nouvelle information sensible dans les pages FR (nom d'un médecin, nom de
quartier, etc.), ajoutez-la aussi dans `GLOSSARY` avec sa traduction arabe
correcte — comme ça le script ne la traduira jamais automatiquement de
travers.

## Limites à connaître

- La traduction automatique reste une traduction automatique : **relisez
  toujours le résultat dans `ar/`** avant de publier, surtout les phrases
  longues ou les tournures médicales spécifiques.
- Le script réécrit entièrement les fichiers `ar/*.html` à chaque
  exécution. Si vous avez fait des retouches manuelles directement dans
  `ar/`, elles seront perdues au prochain lancement — pensez plutôt à
  corriger le glossaire ou le texte source en français.
