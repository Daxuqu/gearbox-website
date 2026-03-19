import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProducts, getProductBySlug, getRelatedProducts } from '@/sanity/client';
import styles from './productDetail.module.css';
import InquiryForm from './InquiryForm';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.seriesName}`,
    description: product.shortDescription + ` High quality ${product.series} series gearbox from WGG. Factory direct pricing with worldwide delivery.`,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = await getRelatedProducts(product.category, product.id);

  return (
    <>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <Link href={`/products?category=${product.category}`}>{product.seriesName}</Link>
          <span>/</span>
          <span className={styles.breadcrumbCurrent}>{product.model}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className={styles.detailSection}>
        <div className="container">
          <div className={styles.detailGrid}>
            {/* Image Column */}
            <div className={styles.imageCol}>
              <div className={styles.mainImage}>
                <div className={styles.imagePlaceholder}>
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                  ) : (
                    <svg width="120" height="120" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                      <circle cx="18" cy="18" r="6" fill="currentColor" opacity="0.15"/>
                      <path d="M18 4V10M18 26V32M4 18H10M26 18H32M8 8L12.5 12.5M23.5 23.5L28 28M28 8L23.5 12.5M12.5 23.5L8 28" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.2"/>
                    </svg>
                  )}
                  <span>{product.model}</span>
                </div>
              </div>
              <div className={styles.imageTrust}>
                <span>✅ ISO 9001 Certified</span>
                <span>✅ CE Marked</span>
                <span>✅ Factory Direct</span>
              </div>
            </div>

            {/* Info Column */}
            <div className={styles.infoCol}>
              <span className={styles.seriesTag}>{product.seriesName}</span>
              <h1 className={styles.productTitle}>{product.name}</h1>
              <p className={styles.productDesc}>{product.description}</p>

              {/* Key Specs Preview */}
              <div className={styles.quickSpecs}>
                <div className={styles.quickSpec}>
                  <span className={styles.quickSpecLabel}>Output Torque</span>
                  <span className={styles.quickSpecValue}>{product.specs['Output Torque']}</span>
                </div>
                <div className={styles.quickSpec}>
                  <span className={styles.quickSpecLabel}>Ratio Range</span>
                  <span className={styles.quickSpecValue}>{product.specs['Ratio Range']}</span>
                </div>
                <div className={styles.quickSpec}>
                  <span className={styles.quickSpecLabel}>Input Power</span>
                  <span className={styles.quickSpecValue}>{product.specs['Input Power']}</span>
                </div>
              </div>

              {/* CTA */}
              <div className={styles.ctaGroup}>
                <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className="btn btn-accent btn-lg">
                  Request Quote for {product.model}
                </Link>
                <a
                  href={`https://wa.me/8615325008533?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(product.name)}%20(${product.model}).%20Please%20send%20me%20more%20details%20and%20pricing.`}
                  className="btn btn-outline btn-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💬 WhatsApp Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Specs Table */}
      <section className={`section ${styles.specsSection}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Technical Specifications</h2>
          <div className={styles.specsTable}>
            <table>
              <tbody>
                {Object.entries(product.specs).map(([key, value]) => (
                  <tr key={key}>
                    <td className={styles.specKey}>{key}</td>
                    <td className={styles.specValue}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={`section ${styles.featuresSection}`}>
        <div className="container">
          <div className={styles.featuresGrid}>
            <div>
              <h2 className={styles.sectionTitle}>Key Features</h2>
              <ul className={styles.featuresList}>
                {product.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary-500)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className={styles.sectionTitle}>Applications</h2>
              <div className={styles.appTags}>
                {product.applications.map((app, i) => (
                  <span key={i} className={styles.appTag}>{app}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Inquiry Form */}
      <section className={styles.inquirySection}>
        <div className="container">
          <InquiryForm productName={product.name} productModel={product.model} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className={`section`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Related Products</h2>
            <div className={styles.relatedGrid}>
              {relatedProducts.map(rp => (
                <Link href={`/products/${rp.slug}`} key={rp.id} className={styles.relatedCard}>
                  <div className={styles.relatedImage}>
                    <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                      <circle cx="18" cy="18" r="6" fill="currentColor" opacity="0.2"/>
                    </svg>
                  </div>
                  <h4>{rp.name}</h4>
                  <p>{rp.shortDescription}</p>
                  <span className={styles.productCta}>View Details →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* JSON-LD Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            brand: { "@type": "Brand", name: "WGG" },
            model: product.model,
            category: product.seriesName,
            manufacturer: {
              "@type": "Organization",
              name: "WGG",
              url: "https://www.gearpro-transmission.com",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              priceCurrency: "USD",
              priceSpecification: { "@type": "PriceSpecification" },
              url: `https://www.gearpro-transmission.com/products/${product.slug}`,
            },
          }),
        }}
      />
    </>
  );
}
