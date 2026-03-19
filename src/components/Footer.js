import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.col}>
            <div className={styles.brand}>
              <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="2"/>
                <circle cx="18" cy="18" r="6" fill="currentColor"/>
                <path d="M18 4V10M18 26V32M4 18H10M26 18H32M8 8L12.5 12.5M23.5 23.5L28 28M28 8L23.5 12.5M12.5 23.5L8 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <span>GearPro Transmission</span>
            </div>
            <p className={styles.description}>
              Professional manufacturer and exporter of industrial gearboxes and speed reducers. Serving global customers with quality, reliability, and competitive pricing since 2008.
            </p>
          </div>

          {/* Products */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Products</h4>
            <ul className={styles.links}>
              <li><Link href="/products?category=worm">RV Worm Gearbox</Link></li>
              <li><Link href="/products?category=helical">R Helical Gear Reducer</Link></li>
              <li><Link href="/products?category=bevel">K Helical Bevel Gearbox</Link></li>
              <li><Link href="/products?category=parallel">F Parallel Shaft Gearbox</Link></li>
              <li><Link href="/products?category=helical-worm">S Helical Worm Gearbox</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/about#certifications">Certifications</Link></li>
              <li><Link href="/about#factory">Factory Tour</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <ul className={styles.contactList}>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <a href="mailto:info@gearpro-transmission.com">info@gearpro-transmission.com</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                <a href="tel:+8613800138000">+86 138 0013 8000</a>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Zhejiang, China</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} GearPro Transmission. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/contact">Privacy Policy</Link>
            <Link href="/contact">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
