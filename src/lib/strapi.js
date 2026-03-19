const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337/api';

export async function getProducts(lang = 'en') {
  const locale = lang === 'zh' ? 'zh-Hans' : 'en';
  try {
    // Strapi v5 formatting: Use robust error handling
    const res = await fetch(`${STRAPI_URL}/products?locale=${locale}&pagination[limit]=100`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    
    const result = await res.json();
    // In Strapi v5, by default attributes are somewhat flattened in response,
    // or nested depending on configuration. Standard v5 defaults to flat.
    return result.data || [];
  } catch (error) {
    console.error('Failed to fetch from Strapi', error);
    return [];
  }
}

export async function getProductBySlug(slug, lang = 'en') {
  const locale = lang === 'zh' ? 'zh-Hans' : 'en';
  try {
    const res = await fetch(`${STRAPI_URL}/products?locale=${locale}&filters[slug][$eq]=${slug}`, {
      cache: 'no-store'
    });
    if (!res.ok) return null;
    
    const result = await res.json();
    return result.data && result.data.length > 0 ? result.data[0] : null;
  } catch (error) {
    console.error('Failed to fetch product by slug from Strapi', error);
    return null;
  }
}

export async function getRelatedProducts(category, excludeSlug, lang = 'en') {
  const locale = lang === 'zh' ? 'zh-Hans' : 'en';
  try {
    const res = await fetch(`${STRAPI_URL}/products?locale=${locale}&filters[category][$eq]=${category}&filters[slug][$ne]=${excludeSlug}&pagination[limit]=3`, {
      cache: 'no-store'
    });
    if (!res.ok) return [];
    
    const result = await res.json();
    return result.data || [];
  } catch (error) {
    console.error('Failed to fetch related products from Strapi', error);
    return [];
  }
}
