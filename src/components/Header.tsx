'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/cn';

export default function Header() {
  const { count } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // transparent treatment only on the homepage before scroll
  const isTransparent = pathname === '/' && !scrolled;

  const iconClass = cn(
    'relative inline-flex cursor-pointer bg-transparent border-none p-0',
    'transition-[color,transform] duration-200 hover:-translate-y-px',
    isTransparent ? 'text-white' : 'text-orange hover:text-orange-dark'
  );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isTransparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white border-b border-[#f3f3f3] shadow-[0_2px_12px_rgba(0,0,0,0.04)]'
      )}
    >
      {/* demo notice */}
      <div className="bg-[#fffbeb] border-b border-[#fde68a] py-2 px-4 text-center text-[0.82rem] text-[#92400e]">
        <strong className="font-bold">Demo store</strong> — no real payments. Checkout uses test card{' '}
        <code className="font-mono font-semibold">4242 4242 4242 4242</code> with any future date / CVC.
      </div>

      {/*
        Mobile (< 621px): 3-col grid [hamburger | logo | icons] with nav dropdown spanning full width
        Desktop (≥ 621px): flex row [logo | nav (ml-auto) | icons]
      */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 py-2 sm:flex sm:items-center sm:gap-4 sm:px-[clamp(4rem,8vw,12rem)] sm:py-[0.6rem]">

        {/* hamburger — mobile only */}
        <button
          className={cn(
            'justify-self-start sm:hidden bg-transparent border-none text-[1.5rem] cursor-pointer p-0 leading-none',
            isTransparent ? 'text-white' : 'text-orange'
          )}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(o => !o)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        {/* logo */}
        <Link
          href="/"
          aria-label="Precious Koala home"
          className="justify-self-center flex items-center gap-2 sm:justify-self-auto sm:order-1"
        >
          <Image
            src="/assets/logo.png"
            alt="Precious Koala logo"
            width={56}
            height={56}
            style={{ height: 56, width: 'auto' }}
          />
        </Link>

        {/* account + cart icons */}
        <div className="justify-self-end flex items-center gap-5 sm:justify-self-auto sm:order-3 sm:ml-6 sm:gap-[1.25rem]">
          <span className={iconClass} aria-label="Account">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3.2" />
              <path d="M6.5 18.5c1-2.6 3-3.7 5.5-3.7s4.5 1.1 5.5 3.7" />
            </svg>
          </span>
          <Link href="/cart" className={cn(iconClass, 'relative')} aria-label="Cart">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="20" r="1.4" /><circle cx="17" cy="20" r="1.4" />
              <path d="M2 3h2.2l2.4 12h11l2.4-9H6.5" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-orange text-white text-[0.65rem] font-bold min-w-[1.05rem] h-[1.05rem] px-[0.3rem] rounded-[1rem] inline-flex items-center justify-center border-2 border-white">
                {count > 9 ? '9+' : count}
              </span>
            )}
          </Link>
        </div>

        {/* nav links */}
        <nav
          className={cn(
            // mobile: full-width dropdown
            'col-span-3 flex-col bg-cream border-t border-line px-6 py-4 gap-4 -mx-4',
            menuOpen ? 'flex' : 'hidden',
            // desktop: inline flex row
            'sm:flex sm:flex-row sm:col-auto sm:ml-auto sm:gap-14 sm:order-2',
            'sm:bg-transparent sm:border-none sm:px-0 sm:py-0 sm:mr-0 sm:items-center'
          )}
          aria-label="Primary"
        >
          {[
            { href: '/',         label: 'Home' },
            { href: '/about',    label: 'About Us' },
            { href: '/products', label: 'Shop' },
            { href: '/faqs',     label: 'FAQs' },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-base font-semibold text-orange hover:text-orange-dark transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
