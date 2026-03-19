'use client';

import styles from './productDetail.module.css';

export default function InquiryForm({ productName, productModel }) {
  return (
    <div className={styles.inquiryCard}>
      <div className={styles.inquiryInfo}>
        <h2>Interested in {productModel}?</h2>
        <p>Fill out the form and our team will get back to you with pricing and details within 24 hours.</p>
      </div>
      <form className={styles.inquiryForm} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.formRow}>
          <input type="text" placeholder="Your Name *" required className={styles.formInput} />
          <input type="email" placeholder="Email Address *" required className={styles.formInput} />
        </div>
        <div className={styles.formRow}>
          <input type="text" placeholder="Company Name" className={styles.formInput} />
          <input type="tel" placeholder="Phone / WhatsApp" className={styles.formInput} />
        </div>
        <input type="text" value={productName} readOnly className={`${styles.formInput} ${styles.formInputReadonly}`} />
        <textarea placeholder="Your requirements or questions..." rows="3" className={styles.formTextarea}></textarea>
        <button type="submit" className="btn btn-accent btn-lg" style={{ width: '100%' }}>
          Send Inquiry →
        </button>
      </form>
    </div>
  );
}
