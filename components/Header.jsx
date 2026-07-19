'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const navItemsFr = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

const navItemsAr = [
  { href: '/ar', label: 'الرئيسية' },
  { href: '/ar/a-propos', label: 'من نحن' },
  { href: '/ar/galerie', label: 'معرض الصور' },
  { href: '/ar/contact', label: 'اتصل بنا' },
];

export default function Header({ lang = 'fr' }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const isAr = lang === 'ar';
  const navItems = isAr ? navItemsAr : navItemsFr;

  // Get the corresponding page path in the other language
  const getOtherLangPath = () => {
    if (isAr) {
      // AR → FR: remove /ar prefix
      const frPath = pathname.replace(/^\/ar/, '') || '/';
      return frPath;
    } else {
      // FR → AR: add /ar prefix
      return `/ar${pathname === '/' ? '' : pathname}`;
    }
  };

  // Close language dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <header>
      <div className="container navbar">
        <Link href={isAr ? '/ar' : '/'} className="logo">
          <span style={{ fontSize: '2rem' }}>🦷</span>
          {isAr ? (
            <>عيادة <span>الكنزي لطب الأسنان</span></>
          ) : (
            <>CABINET <span>DENTAIRE ELKENZI</span></>
          )}
        </Link>

        <div className="navbar-right">
          <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={pathname === item.href ? 'active' : ''}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div
            className={`lang-dropdown${langOpen ? ' active' : ''}`}
            ref={langRef}
          >
            <button
              className="lang-dropdown-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLangOpen(!langOpen);
              }}
            >
              🌐 {isAr ? 'AR' : 'FR'}{' '}
              <span className="lang-dropdown-caret">▾</span>
            </button>
            <div className="lang-dropdown-content">
              <Link
                href={isAr ? getOtherLangPath() : pathname}
                className={!isAr ? 'active-lang' : ''}
                onClick={() => setLangOpen(false)}
              >
                🇫🇷 Français
              </Link>
              <Link
                href={isAr ? pathname : getOtherLangPath()}
                className={isAr ? 'active-lang' : ''}
                onClick={() => setLangOpen(false)}
              >
                🇩🇿 العربية
              </Link>
            </div>
          </div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={isAr ? 'فتح القائمة' : 'Ouvrir le menu'}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
