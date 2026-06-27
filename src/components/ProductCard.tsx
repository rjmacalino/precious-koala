'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();

  return (
    <article className="product-card">
      <Link href={`/products/${product.id}`} className="product-card-media">
        {product.badge && <span className="card-badge">{product.badge}</span>}
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={225}
          style={{ maxHeight: '85%', width: 'auto', objectFit: 'contain' }}
        />
      </Link>
      <div className="product-card-body">
        <Link href={`/products/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="pack-label">{product.pack}</p>
        <div className="product-card-foot">
          <span className="price">${product.price.toFixed(2)}</span>
          <button className="btn btn-primary btn-sm" onClick={() => add(product.id)}>
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
