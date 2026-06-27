'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { add, items } = useCart();
  const inCart = !!items[product.id];

  return (
    <article className="bg-white rounded-2xl border border-line overflow-hidden flex flex-col hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`} className="block overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="p-4 flex flex-col flex-1 gap-2">
        {product.badge && (
          <span className="self-start text-xs font-semibold bg-orange text-ink px-2 py-0.5 rounded-full">
            {product.badge}
          </span>
        )}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-ink text-sm leading-snug hover:text-orange-dark transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-ink-soft">{product.pack}</p>
        <p className="font-bold text-ink mt-auto">${product.price.toFixed(2)}</p>

        <button
          onClick={() => add(product.id)}
          className="mt-2 w-full py-2 rounded-xl bg-orange text-ink text-sm font-semibold hover:bg-orange-dark transition-colors"
        >
          {inCart ? 'Add More' : 'Add to Cart'}
        </button>
      </div>
    </article>
  );
}
