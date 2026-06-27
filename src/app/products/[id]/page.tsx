import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, getProduct } from '@/data/products';
import AddToCartButton from './AddToCartButton';

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  return { title: product ? `${product.name} — Precious Koala` : 'Not found' };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <>
      <div className="page-band">
        <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>
          <Link href="/">Home</Link> / <Link href="/products">Shop</Link> / {product.name}
        </p>
      </div>
      <section className="section">
        <div className="container">
          <div className="detail-wrap">
            <div className="detail-media">
              {product.badge && <span className="card-badge">{product.badge}</span>}
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                style={{ maxHeight: '80%', width: 'auto' }}
                priority
              />
            </div>
            <div className="detail-info">
              <h1>{product.name}</h1>
              <p className="pack-label">{product.pack}</p>
              <p className="detail-price">${product.price.toFixed(2)}</p>
              <p className="detail-blurb">{product.blurb}</p>
              <ul className="detail-specs" role="list">
                {product.specs.map(s => <li key={s}>{s}</li>)}
              </ul>
              <AddToCartButton productId={product.id} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
