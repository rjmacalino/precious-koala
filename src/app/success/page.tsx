'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const { clear } = useCart();
  useEffect(() => { clear(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-4 py-16 text-center max-w-[480px] mx-auto">
          <div className="w-16 h-16 rounded-full bg-[#d1fae5] flex items-center justify-center mb-2">
            <svg width="32" height="32" fill="none" stroke="#059669" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h1 className="text-[clamp(1.8rem,4vw,2.4rem)] font-extrabold text-ink">Order confirmed!</h1>
          <p className="text-ink-soft text-[1rem] leading-[1.7]">
            Thanks for shopping with Precious Koala. In a real store you&apos;d get an email
            confirmation right now &mdash; but this is a demo, so just enjoy the moment.
          </p>
          <Link href="/products" className="btn-primary mt-4">Keep Shopping</Link>
        </div>
      </div>
    </section>
  );
}
