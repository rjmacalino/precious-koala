import { notFound } from 'next/navigation';
import Image from 'next/image';
import { PRODUCTS, getProduct } from '@/data/products';
import AddToCartButton from './AddToCartButton';

// next.js 15: params is a promise in async server components
export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  return { title: product ? `${product.name} — Precious Koala` : 'Product not found' };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="rounded-2xl overflow-hidden border border-line">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={450}
            className="w-full object-cover"
            priority
          />
        </div>

        <div>
          {product.badge && (
            <span className="inline-block bg-orange text-ink text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3">
              {product.badge}
            </span>
          )}
          <h1 className="text-2xl font-bold text-ink mb-1">{product.name}</h1>
          <p className="text-ink-soft text-sm mb-4">{product.pack}</p>
          <p className="text-3xl font-bold text-ink mb-5">${product.price.toFixed(2)}</p>
          <p className="text-ink-soft leading-relaxed mb-6">{product.blurb}</p>

          <ul className="mb-8 space-y-2">
            {product.specs.map(s => (
              <li key={s} className="flex items-center gap-2 text-sm text-ink">
                <span className="w-4 h-4 rounded-full bg-orange flex-shrink-0" />
                {s}
              </li>
            ))}
          </ul>

          <AddToCartButton productId={product.id} />
        </div>
      </div>
    </div>
  );
}
