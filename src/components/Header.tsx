'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      {/* demo banner is inside the fixed header so it scrolls with it */}
      <div className="demo-banner">
        <strong>Demo store</strong> — no real payments. Checkout uses test card{' '}
        <code>4242 4242 4242 4242</code> with any future date / CVC.
      </div>

      <div className="header-inner">

        {/* hamburger — always left */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* logo — center on mobile, left on desktop */}
        <Link href="/" className="brand" aria-label="Precious Koala home">
          <Image src="/assets/logo.png" alt="Precious Koala logo" width={56} height={56} style={{ height: 56, width: 'auto' }} />
        </Link>

        {/* icons — always right */}
        <div className="header-actions">
          <span className="icon-btn" aria-label="Account">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3.2"/>
              <path d="M6.5 18.5c1-2.6 3-3.7 5.5-3.7s4.5 1.1 5.5 3.7"/>
            </svg>
          </span>
          <Link href="/cart" className="icon-btn cart-link" aria-label="Cart">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="20" r="1.4"/><circle cx="17" cy="20" r="1.4"/>
              <path d="M2 3h2.2l2.4 12h11l2.4-9H6.5"/>
            </svg>
            {count > 0 && <span className="cart-count">{count > 9 ? '9+' : count}</span>}
          </Link>
        </div>

        {/* nav links — dropdown on mobile, inline on desktop */}
        <nav className={`nav-menu${menuOpen ? ' open' : ''}`} aria-label="Primary">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/products" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link href="/faqs" onClick={() => setMenuOpen(false)}>FAQs</Link>
        </nav>

      </div>
    </header>
  );
}
