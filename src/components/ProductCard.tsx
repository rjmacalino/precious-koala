'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="bg-white border border-line rounded-[1.25rem] overflow-hidden flex flex-col transition-[transform,box-shadow] duration-[220ms] shadow-card hover:-translate-y-1.5 hover:shadow-hover">
      <Link
        href={`/products/${product.id}`}
        className="relative flex items-center justify-center aspect-[4/3] bg-gradient-to-br from-[#fff9ed] to-[#fff4d6]"
      >
        {product.badge && (
          <span className="absolute top-[0.85rem] left-[0.85rem] bg-orange text-white text-[0.7rem] font-extrabold uppercase tracking-[0.06em] py-[0.3rem] px-[0.8rem] rounded-[1rem] shadow-[0_2px_8px_rgba(249,184,47,0.4)]">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={225}
          style={{ maxHeight: '85%', width: 'auto', objectFit: 'contain' }}
        />
      </Link>

      <div className="p-[1.25rem_1.35rem_1.35rem] flex flex-col gap-[0.35rem] flex-1">
        <Link href={`/products/${product.id}`}>
          <h3 className="text-[1.05rem] font-bold leading-[1.3]">{product.name}</h3>
        </Link>
        <p className="text-ink-soft text-[0.85rem]">{product.pack}</p>
        <div className="mt-auto pt-[0.85rem] flex items-center justify-between">
          <span className="text-[1.3rem] font-extrabold text-orange-dark">
            ${product.price.toFixed(2)}
          </span>
          <button className="btn-primary btn-sm" onClick={() => add(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
