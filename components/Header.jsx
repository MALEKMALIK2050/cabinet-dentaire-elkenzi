'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const DentalArtLogo = () => (
  <svg className="logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Tooth shape */}
    <path
      d="M24 4C18.5 4 14 7 12 11C10 15 10 20 11 24C12 28 14 34 16 40C17 43 19 44 20 44C21.5 44 22 42 22.5 39C23 36 23.5 33 24 33C24.5 33 25 36 25.5 39C26 42 26.5 44 28 44C29 44 31 43 32 40C34 34 36 28 37 24C38 20 38 15 36 11C34 7 29.5 4 24 4Z"
      fill="url(#toothGrad)"
      stroke="#991B1B"
      strokeWidth="1.5"
    />
    {/* Face silhouette */}
    <path
      d="M20 14C20 14 21 12 24 12C27 12 28 14 28 14C28 14 29 17 28 20C27 22 26 23 24 24C22 23 21 22 20 20C19 17 20 14 20 14Z"
      fill="url(#faceGrad)"
      opacity="0.85"
    />
    {/* Shine */}
    <ellipse cx="19" cy="12" rx="3" ry="4" fill="white" opacity="0.3" />
    <defs>
      <linearGradient id="toothGrad" x1="12" y1="4" x2="36" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FECACA" />
        <stop offset="50%" stopColor="#DC2626" />
        <stop offset="100%" stopColor="#991B1B" />
      </linearGradient>
      <linearGradient id="faceGrad" x1="20" y1="12" x2="28" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#FEE2E2" />
        <stop offset="100%" stopColor="#FECACA" />
      </linearGradient>
    </defs>
  </svg>
);

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
          <DentalArtLogo />
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
