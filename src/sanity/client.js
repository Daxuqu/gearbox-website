import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: 'vusqpqxy',
  dataset: 'production',
  apiVersion: '2024-03-20',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function getProducts() {
  const query = `*[_type == "product"] | order(id asc) {
    id,
    "slug": slug.current,
    name,
    series,
    seriesName,
    model,
    category,
    shortDescription,
    description,
    features,
    applications,
    specs,
    "imageUrl": image.asset->url
  }`;
  const products = await client.fetch(query);
  // Parse specs string back to object
  return products.map(p => ({
    ...p,
    specs: p.specs ? JSON.parse(p.specs) : {}
  }));
}

export async function getProductBySlug(slug) {
  const query = `*[_type == "product" && slug.current == $slug][0] {
    id,
    "slug": slug.current,
    name,
    series,
    seriesName,
    model,
    category,
    shortDescription,
    description,
    features,
    applications,
    specs,
    "imageUrl": image.asset->url
  }`;
  const product = await client.fetch(query, { slug });
  if (product) {
    product.specs = product.specs ? JSON.parse(product.specs) : {};
  }
  return product;
}

export async function getRelatedProducts(category, excludeId) {
  const query = `*[_type == "product" && category == $category && id != $excludeId][0...3] {
    id,
    "slug": slug.current,
    name,
    shortDescription,
    "imageUrl": image.asset->url
  }`;
  return client.fetch(query, { category, excludeId });
}
