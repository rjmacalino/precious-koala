'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function SuccessPage() {
  const { clear } = useCart();

  // clear the cart when landing here
  useEffect(() => { clear(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-ink mb-3">Order confirmed!</h1>
      <p className="text-ink-soft leading-relaxed mb-8">
        Thanks for shopping with Precious Koala. In a real store you&apos;d get an email confirmation —
        but this is a demo, so just enjoy the moment.
      </p>
      <Link
        href="/products"
        className="bg-orange hover:bg-orange-dark text-ink font-semibold px-6 py-3 rounded-xl transition-colors inline-block"
      >
        Keep Shopping
      </Link>
    </div>
  );
}
