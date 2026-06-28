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
      {/* page-band */}
      <div className="relative z-[1] bg-gradient-to-br from-[#fff8e8] via-[#fef3c7] to-[#fde68a] py-8 px-6">
        <p className="text-[0.85rem] text-ink-soft text-center">
          <Link href="/" className="hover:text-orange transition-colors duration-200">Home</Link>
          {' / '}
          <Link href="/products" className="hover:text-orange transition-colors duration-200">Shop</Link>
          {' / '}
          <span className="text-ink font-semibold">{product.name}</span>
        </p>
      </div>
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">

            {/* product image */}
            <div className="relative bg-gradient-to-br from-[#fff9ed] to-[#fff4d6] rounded-[1.5rem] overflow-hidden flex items-center justify-center aspect-square">
              {product.badge && (
                <span className="absolute top-[0.85rem] left-[0.85rem] bg-orange text-white text-[0.7rem] font-extrabold uppercase tracking-[0.06em] py-[0.3rem] px-[0.8rem] rounded-[1rem] shadow-[0_2px_8px_rgba(249,184,47,0.4)]">
                  {product.badge}
                </span>
              )}
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                style={{ maxHeight: '80%', width: 'auto' }}
                priority
              />
            </div>

            {/* product info */}
            <div>
              <h1 className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-extrabold text-ink mb-2">{product.name}</h1>
              <p className="text-ink-soft text-[0.9rem] mb-4">{product.pack}</p>
              <p className="text-[2rem] font-extrabold text-orange-dark mb-4">${product.price.toFixed(2)}</p>
              <p className="text-ink-soft text-[0.97rem] leading-[1.75] mb-6">{product.blurb}</p>
              <ul className="flex flex-col gap-2 mb-8" role="list">
                {product.specs.map(s => (
                  <li key={s} className="flex items-center gap-2 text-[0.93rem] text-ink-soft">
                    <span className="w-[6px] h-[6px] rounded-full bg-orange flex-shrink-0 inline-block" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <AddToCartButton productId={product.id} />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
