'use client';

import { useState, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import styles from './products.module.css';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'worm', label: 'RV Worm Gear' },
  { id: 'helical', label: 'R Helical Gear' },
  { id: 'bevel', label: 'K Bevel Gear' },
  { id: 'parallel', label: 'F Parallel Shaft' },
  { id: 'helical-worm', label: 'S Helical Worm' },
];

export default function ProductsContent({ initialProducts = [], lang = 'en' }) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let result = initialProducts;
    if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.series.toLowerCase().includes(query) ||
        p.model.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query)
      );
    }
    return result;
  }, [activeCategory, searchQuery]);

  return (
    <>
      {/* Page Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <span className="section-label">Product Catalog</span>
          <h1>Industrial Gearbox Solutions</h1>
          <p>Explore our complete range of speed reducers and gearboxes for every industrial application.</p>
        </div>
      </section>

      {/* Filters */}
      <section className={styles.filtersSection}>
        <div className="container">
          <div className={styles.filtersBar}>
            <div className={styles.categoryTabs}>
              {categories.map(cat => (
                <button
                  key={cat.id}
                  className={`${styles.categoryTab} ${activeCategory === cat.id ? styles.categoryTabActive : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className={styles.searchBox}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search by model or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className={styles.productsSection}>
        <div className="container">
          <p className={styles.resultCount}>
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>
          <div className={styles.productsGrid}>
            {filteredProducts.map((product, i) => (
              <Link
                href={`/${lang}/products/${product.slug}`}
                key={product.id}
                className={styles.productCard}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <div className={styles.productImage}>
                  <div className={styles.productImagePlaceholder}>
                    <svg width="64" height="64" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="18" cy="18" r="16" stroke="currentColor" strokeWidth="1.5" opacity="0.3"/>
                      <circle cx="18" cy="18" r="6" fill="currentColor" opacity="0.2"/>
                      <path d="M18 4V10M18 26V32M4 18H10M26 18H32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
                    </svg>
                  </div>
                  <span className={styles.productBadge}>{product.series} Series</span>
                </div>
                <div className={styles.productInfo}>
                  <span className={styles.productModel}>{product.model}</span>
                  <h3 className={styles.productName}>{product.name}</h3>
                  <p className={styles.productDesc}>{product.shortDescription}</p>
                  <div className={styles.productSpecs}>
                    <span>Torque: {product.specs['Output Torque']}</span>
                    <span>Ratio: {product.specs['Ratio Range']}</span>
                  </div>
                  <span className={styles.productCta}>View Details →</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.noResults}>
              <p>No products found matching your criteria.</p>
              <button className="btn btn-outline" onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
