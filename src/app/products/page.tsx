import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = { title: 'Shop — Precious Koala' };

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-ink mb-2">All Products</h1>
        <p className="text-ink-soft">BPA-free, pre-sterilised storage bags for busy parents.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}
