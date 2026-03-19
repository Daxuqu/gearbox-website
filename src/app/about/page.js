import styles from './about.module.css';

export const metadata = {
  title: 'About Us — WGG',
  description: 'Learn about WGG — a leading industrial gearbox manufacturer with 15+ years of experience, ISO certified quality, and exports to 60+ countries worldwide.',
};

const milestones = [
  { year: '2008', title: 'Company Founded', description: 'Started as a small gearbox workshop in Zhejiang, China.' },
  { year: '2011', title: 'ISO 9001 Certified', description: 'Achieved ISO 9001 quality management certification.' },
  { year: '2014', title: 'Export Expansion', description: 'Began exporting to Southeast Asia, Middle East and Africa.' },
  { year: '2016', title: 'New Factory', description: 'Moved to a 15,000 sqm modern manufacturing facility.' },
  { year: '2019', title: 'CE Certification', description: 'Products CE certified for European market access.' },
  { year: '2022', title: 'Global Reach', description: 'Exports to 60+ countries with 2,000+ active customers.' },
  { year: '2024', title: 'R&D Center', description: 'Established advanced R&D center for new product development.' },
];

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System' },
  { name: 'CE', description: 'European Conformity' },
  { name: 'SGS', description: 'Product Inspection & Testing' },
  { name: 'CCC', description: 'China Compulsory Certification' },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">About WGG</span>
          <h1>Your Trusted Gearbox Manufacturing Partner</h1>
          <p>15+ years of excellence in industrial gear transmission solutions, serving customers across 60+ countries.</p>
        </div>
      </section>

      {/* Company Intro */}
      <section className={`section`}>
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introImage}>
              <div className={styles.introImagePlaceholder}>
                <span>🏭</span>
                <p>Factory Overview</p>
              </div>
            </div>
            <div className={styles.introContent}>
              <span className="section-label">Who We Are</span>
              <h2>Precision Engineering, Global Delivery</h2>
              <p>
                WGG is a professional manufacturer of industrial gearboxes and speed reducers, 
                located in Zhejiang, China — the heart of China's gear manufacturing industry.
              </p>
              <p>
                With a modern 15,000 sqm facility, advanced CNC machining centers, and a team of 120+ experienced 
                engineers and workers, we produce over 50,000 units of gearboxes annually, serving customers in 
                60+ countries across Asia, Europe, Americas, Africa, and the Middle East.
              </p>
              <p>
                Our product range covers RV worm gear reducers, R helical gear reducers, K helical bevel gearboxes, 
                F parallel shaft gearboxes, and S helical worm gearboxes — providing complete solutions for nearly 
                every industrial application.
              </p>
              <div className={styles.introStats}>
                <div className={styles.introStat}>
                  <strong>15,000</strong>
                  <span>sqm Factory</span>
                </div>
                <div className={styles.introStat}>
                  <strong>120+</strong>
                  <span>Employees</span>
                </div>
                <div className={styles.introStat}>
                  <strong>50,000+</strong>
                  <span>Annual Output</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className={`section ${styles.milestonesSection}`}>
        <div className="container">
          <span className="section-label">Our Journey</span>
          <h2 className="section-title">Company Milestones</h2>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <h4>{m.title}</h4>
                  <p>{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className={`section`} id="certifications">
        <div className="container">
          <span className="section-label">Quality Assurance</span>
          <h2 className="section-title">Our Certifications</h2>
          <p className="section-subtitle">
            We maintain the highest quality standards to ensure every gearbox meets international requirements.
          </p>
          <div className={styles.certsGrid}>
            {certifications.map((cert, i) => (
              <div key={i} className={styles.certCard}>
                <div className={styles.certIcon}>🏅</div>
                <h3 className={styles.certName}>{cert.name}</h3>
                <p className={styles.certDesc}>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory */}
      <section className={`section ${styles.factorySection}`} id="factory">
        <div className="container">
          <span className="section-label">Manufacturing Excellence</span>
          <h2 className="section-title">Our Factory & Equipment</h2>
          <p className="section-subtitle">
            State-of-the-art manufacturing equipment and strict quality control processes ensure consistent product quality.
          </p>
          <div className={styles.factoryGrid}>
            {['CNC Machining Center', 'Gear Hobbing Machine', 'Heat Treatment Furnace', 'Quality Testing Lab', 'Assembly Line', 'Finished Goods'].map((item, i) => (
              <div key={i} className={styles.factoryItem}>
                <div className={styles.factoryImage}>
                  <span>📸</span>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
