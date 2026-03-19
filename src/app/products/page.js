import { Suspense } from 'react';
import ProductsContent from './ProductsContent';
import { getProducts } from '@/lib/strapi';

export const metadata = {
  title: 'Products — Industrial Gearboxes & Speed Reducers',
  description: 'Browse our complete catalog of industrial gearboxes: RV worm reducers, R helical gear reducers, K bevel gearboxes, F parallel shaft gearboxes, and S helical worm gearboxes.',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
      <ProductsContent initialProducts={products} />
    </Suspense>
  );
}
