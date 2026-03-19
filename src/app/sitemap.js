import { getProducts } from '@/lib/strapi';

export default async function sitemap() {
  const baseUrl = 'https://www.gearpro-transmission.com';
  const locales = ['en', 'zh'];
  
  const productsEn = await getProducts('en');
  const productsZh = await getProducts('zh');

  const productPages = [
    ...productsEn.map((product) => ({
      url: `${baseUrl}/en/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
    ...productsZh.map((product) => ({
      url: `${baseUrl}/zh/products/${product.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))
  ];

  const staticPages = locales.flatMap((locale) => [
    {
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/${locale}/products`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/${locale}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    }
  ]);

  return [...staticPages, ...productPages];
}
