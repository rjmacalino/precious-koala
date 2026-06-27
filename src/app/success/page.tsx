'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const { clear } = useCart();
  useEffect(() => { clear(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="section">
      <div className="container">
        <div className="success-page">
          <div className="success-icon">
            <svg width="32" height="32" fill="none" stroke="#059669" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: '0.75rem' }}>Order confirmed!</h1>
          <p style={{ color: 'var(--ink-soft)', marginBottom: '2rem' }}>
            Thanks for shopping with Precious Koala. In a real store you&apos;d get an email
            confirmation right now — but this is a demo, so just enjoy the moment.
          </p>
          <Link href="/products" className="btn btn-primary">Keep Shopping</Link>
        </div>
      </div>
    </section>
  );
}
