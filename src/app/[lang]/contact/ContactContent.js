'use client';

import { useSearchParams } from 'next/navigation';
import styles from './contact.module.css';

const contactInfo = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    title: 'Email',
    value: 'info@gearpro-transmission.com',
    link: 'mailto:info@gearpro-transmission.com',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
    title: 'Phone / WhatsApp',
    value: '+86 15325008533',
    link: 'https://wa.me/8615325008533',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Factory Address',
    value: 'Wenzhou Industrial Zone, Zhejiang, China 325000',
    link: null,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Business Hours',
    value: 'Mon - Sat: 8:00 AM - 6:00 PM (GMT+8)',
    link: null,
  },
];

export default function ContactContent({ lang = 'en' }) {
  const searchParams = useSearchParams();
  const productInterest = searchParams.get('product') || '';

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Get in Touch</span>
          <h1>Contact Us</h1>
          <p>Have questions or need a quote? We typically respond within 24 hours.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={`section`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formCard}>
              <h2>Send Us a Message</h2>
              <p className={styles.formSubtitle}>Fill out the form below and our sales team will get back to you shortly.</p>
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-name">Full Name *</label>
                    <input id="contact-name" type="text" placeholder="John Smith" required />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email">Email Address *</label>
                    <input id="contact-email" type="email" placeholder="john@company.com" required />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-company">Company Name</label>
                    <input id="contact-company" type="text" placeholder="Your Company Ltd." />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="contact-phone">Phone / WhatsApp</label>
                    <input id="contact-phone" type="tel" placeholder="+1 234 567 8900" />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-product">Product of Interest</label>
                  <select id="contact-product" defaultValue={productInterest}>
                    <option value="">— Select a product series —</option>
                    <option value="RV Series Worm Gearbox">RV Series Worm Gearbox</option>
                    <option value="R Series Helical Gear Reducer">R Series Helical Gear Reducer</option>
                    <option value="K Series Helical Bevel Gearbox">K Series Helical Bevel Gearbox</option>
                    <option value="F Series Parallel Shaft Gearbox">F Series Parallel Shaft Gearbox</option>
                    <option value="S Series Helical Worm Gearbox">S Series Helical Worm Gearbox</option>
                    {productInterest && !['RV Series Worm Gearbox', 'R Series Helical Gear Reducer', 'K Series Helical Bevel Gearbox', 'F Series Parallel Shaft Gearbox', 'S Series Helical Worm Gearbox'].includes(productInterest) && (
                      <option value={productInterest}>{productInterest}</option>
                    )}
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="contact-message">Your Message *</label>
                  <textarea id="contact-message" rows="5" placeholder="Please describe your requirements, including quantity, application, and any specific specifications..." required></textarea>
                </div>
                <button type="submit" className="btn btn-accent btn-lg" style={{ width: '100%' }}>
                  Send Inquiry →
                </button>
                <p className={styles.formNote}>
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className={styles.infoCol}>
              <div className={styles.infoCards}>
                {contactInfo.map((info, i) => (
                  <div key={i} className={styles.infoCard}>
                    <div className={styles.infoIcon}>{info.icon}</div>
                    <div>
                      <h4 className={styles.infoTitle}>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} className={styles.infoValue} target="_blank" rel="noopener noreferrer">
                          {info.value}
                        </a>
                      ) : (
                        <span className={styles.infoValue}>{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapInner}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <p>Wenzhou, Zhejiang, China</p>
                  <span>Map integration available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
