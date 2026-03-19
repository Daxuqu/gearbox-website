'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header({ dict = {}, lang = 'en', switchText = '中文' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const localePrefix = `/${lang}`;

  const navLinks = [
    { href: `${localePrefix}`, label: dict.home || 'Home' },
    { href: `${localePrefix}/products`, label: dict.products || 'Products' },
    { href: `${localePrefix}/about`, label: dict.about || 'About Us' },
    { href: `${localePrefix}/contact`, label: dict.contact || 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <Link href={localePrefix} className={styles.logo}>
          <div className={styles.logoIcon}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2"/>
              <circle cx="18" cy="18" r="6" fill="currentColor"/>
              <path d="M18 4V10M18 26V32M4 18H10M26 18H32M8 8L12.5 12.5M23.5 23.5L28 28M28 8L23.5 12.5M12.5 23.5L8 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoName}>WGG</span>
            <span className={styles.logoTag}>Transmission</span>
          </div>
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.navLinkActive : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href={`${localePrefix}/contact`} className="btn btn-accent" onClick={() => setMenuOpen(false)}>
            {dict.contact || 'Get a Quote'}
          </Link>
          
          <Link 
            href={lang === 'en' ? '/zh' : '/en'} 
            className={styles.langSwitcher}
            style={{ fontWeight: 600, color: 'var(--primary-color)', marginLeft: '1rem', textDecoration: 'none' }}
          >
            {switchText}
          </Link>
        </nav>

        <button
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
