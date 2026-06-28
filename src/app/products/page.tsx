import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = { title: 'Shop — Precious Koala' };

export default function ProductsPage() {
  return (
    <>
      {/* page-band — Bug 2 fix: visible warm gradient instead of same-color stops */}
      <div className="relative z-[1] bg-gradient-to-br from-[#fff8e8] via-[#fef3c7] to-[#fde68a] text-center py-12 px-6">
        <h1 className="text-heading text-ink mb-2">Shop All Products</h1>
        <p className="text-ink-soft text-[1.05rem]">BPA-free, pre-sterilised breast milk storage bags</p>
      </div>
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 gap-[1.75rem] sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
