'use client';

import Link from 'next/link';
import Image from 'next/image';
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
          <Image
            src="/images/logo.jpg"
            alt="Dental Art Logo"
            width={50}
            height={50}
            className="logo-img"
            style={{ objectFit: 'contain', borderRadius: '8px' }}
          />
          <div className="logo-text">
            {isAr ? (
              <>
                <span className="logo-name" style={{ fontFamily: "'Cairo', sans-serif" }}>عيادة الكنزي لطب الأسنان</span>
                <span className="logo-subtitle">Dental Art</span>
              </>
            ) : (
              <>
                <span className="logo-name">ELKENZI</span>
                <span className="logo-subtitle">Dental Art — Cabinet Dentaire</span>
              </>
            )}
          </div>
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
