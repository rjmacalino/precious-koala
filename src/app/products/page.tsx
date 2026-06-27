import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export const metadata = { title: 'Shop — Precious Koala' };

export default function ProductsPage() {
  return (
    <>
      <div className="page-band">
        <h1>Shop All Products</h1>
        <p>BPA-free, pre-sterilised breast milk storage bags</p>
      </div>
      <section className="section">
        <div className="container">
          <div className="product-grid">
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}
