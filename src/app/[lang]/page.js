import Link from 'next/link';
import styles from './page.module.css';
import { getDictionary } from '@/dictionaries';
import { getProducts } from '@/lib/strapi';

const seriesList = [
  { id: 'worm', name: 'RV Series', title: 'Worm Gear Reducers', description: 'Compact, self-locking, wide ratio range', icon: '⚙️' },
  { id: 'helical', name: 'R Series', title: 'Helical Gear Reducers', description: 'High efficiency, smooth & quiet operation', icon: '🔩' },
  { id: 'bevel', name: 'K Series', title: 'Helical Bevel Gearboxes', description: 'Right-angle output, high torque density', icon: '🔧' },
  { id: 'parallel', name: 'F Series', title: 'Parallel Shaft Gearboxes', description: 'Space-saving, direct machine mounting', icon: '⛓️' },
  { id: 'helical-worm', name: 'S Series', title: 'Helical Worm Gearboxes', description: 'Combined efficiency, ultra-high ratios', icon: '🛠️' },
];

const advantagesList = [
  { icon: '🏭', title: '15+ Years', subtitle: 'Manufacturing Experience', description: 'Established in 2008 with deep expertise in gearbox design and production.' },
  { icon: '🌍', title: '60+', subtitle: 'Countries Served', description: 'Trusted by customers across Asia, Europe, Americas, Africa and Middle East.' },
  { icon: '✅', title: 'ISO 9001', subtitle: 'Certified Quality', description: 'Rigorous quality management with CE, ISO, and SGS certifications.' },
  { icon: '🚚', title: '15 Days', subtitle: 'Fast Delivery', description: 'Large inventory and efficient production for rapid order fulfillment.' },
];

const stats = [
  { value: '50,000+', label: 'Units Exported Annually' },
  { value: '60+', label: 'Countries & Regions' },
  { value: '2,000+', label: 'Active Customers' },
  { value: '99.2%', label: 'Quality Pass Rate' },
];

export default async function HomePage({ params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  
  // Use locale in getProducts call
  const products = await getProducts(lang === 'zh' ? 'zh-Hans' : 'en');

  const prefix = `/${lang}`;

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroPattern}></div>
        </div>
        <div className={`container ${styles.heroContent}`}>
          <span className={styles.heroBadge}>🏭 Professional Gearbox Manufacturer Since 2008</span>
          <h1 className={`${styles.heroTitle} slide-up`}>
            {dict.hero.title}
          </h1>
          <p className={`${styles.heroSubtitle} slide-up`} style={{ animationDelay: '0.1s' }}>
            {dict.hero.subtitle}
          </p>
          <div className={`${styles.heroCtas} slide-up`} style={{ animationDelay: '0.2s' }}>
            <Link href={`${prefix}/contact`} className="btn btn-accent btn-lg">
              {dict.hero.cta_quote}
            </Link>
            <Link href={`${prefix}/products`} className="btn btn-outline btn-lg" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.4)' }}>
              {dict.hero.cta_catalog}
            </Link>
          </div>
          <div className={`${styles.heroTrust} slide-up`} style={{ animationDelay: '0.3s' }}>
             {dict.hero.trust}
          </div>
        </div>
      </section>

      {/* Product Series */}
      <section className={`section ${styles.seriesSection}`}>
        <div className="container">
          <span className="section-label">{dict.nav.products}</span>
          <h2 className="section-title">{dict.series.title}</h2>
          <p className="section-subtitle">
            {dict.series.subtitle}
          </p>
          <div className={styles.seriesGrid}>
            {seriesList.map((s, i) => {
              const count = products.filter(p => p.category === s.id).length;
              return (
                <Link href={`${prefix}/products?category=${s.id}`} key={s.id} className={styles.seriesCard} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className={styles.seriesIcon}>{s.icon}</div>
                  <div className={styles.seriesInfo}>
                    <span className={styles.seriesName}>{s.name}</span>
                    <h3 className={styles.seriesTitle}>{s.title}</h3>
                    <p className={styles.seriesDesc}>{s.description}</p>
                    <span className={styles.seriesCount}>{count} models →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center">
            <Link href={`${prefix}/products`} className="btn btn-primary" style={{ marginTop: '2rem' }}>
              {dict.hero.cta_catalog}
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={`section ${styles.advantagesSection}`}>
        <div className="container">
          <span className="section-label">Why WGG</span>
          <h2 className="section-title">{dict.advantages.title}</h2>
          <p className="section-subtitle">
            {dict.advantages.subtitle}
          </p>
          <div className={styles.advantagesGrid}>
            {advantagesList.map((adv, i) => (
              <div key={i} className={styles.advantageCard}>
                <div className={styles.advantageIcon}>{adv.icon}</div>
                <div className={styles.advantageValue}>{adv.title}</div>
                <div className={styles.advantageLabel}>{adv.subtitle}</div>
                <p className={styles.advantageDesc}>{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className={styles.statsSection}>
        <div className={`container ${styles.statsGrid}`}>
          {stats.map((stat, i) => (
            <div key={i} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>{dict.cta.title}</h2>
            <p>{dict.cta.subtitle}</p>
            <div className={styles.ctaButtons}>
              <Link href={`${prefix}/contact`} className="btn btn-accent btn-lg">
                {dict.cta.button}
              </Link>
              <Link href={`${prefix}/products`} className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: 'white' }}>
                {dict.nav.products}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
