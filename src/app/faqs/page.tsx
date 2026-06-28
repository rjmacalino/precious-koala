'use client';

import { useState } from 'react';
import { cn } from '@/lib/cn';

const FAQS = [
  { q: 'Are the bags pre-sterilised?', a: 'Yes — every bag is gamma-ray sterilised before packaging, so you can use them straight out of the box without any boiling or steaming.' },
  { q: 'What does the temperature indicator do?', a: 'The heat-sensitive ink strip turns from blue to white if the bag has been exposed to temperatures above 4°C, letting you know the cold-chain may have been broken.' },
  { q: 'How long can I store breast milk?', a: 'Up to 4 days in the fridge (0–4°C) and up to 12 months in a deep freezer (−18°C or lower). Always label bags with the date and time.' },
  { q: 'Are the bags BPA-free?', a: 'Absolutely. Our bags are made from BPA-free PET/LDPE food-grade plastic and comply with Australian food safety standards.' },
  { q: 'Can I heat milk directly in the bag?', a: "We recommend thawing in the fridge overnight or holding the sealed bag under warm running water. Don't microwave — it creates hot spots and destroys antibodies." },
  { q: 'Do you ship outside Melbourne?', a: 'We ship Australia-wide. Standard flat rate $6.95. Free shipping on orders over $50.' },
  { q: 'What if I receive a damaged product?', a: 'Email us at hello@preciouskoala.com.au with a photo within 14 days of receiving your order and we will send a replacement or issue a full refund — no questions asked.' },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-line rounded-[1rem] overflow-hidden bg-white mb-3">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left text-[1.02rem] font-bold text-ink cursor-pointer bg-transparent border-none transition-colors duration-200 hover:text-orange"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {q}
        {/* keep faq-q-icon as class name if you wanna style it in CSS, but we just use inline rotation here */}
        <span
          className={cn(
            'flex-shrink-0 w-[28px] h-[28px] rounded-full bg-orange text-white inline-flex items-center justify-center text-[1.4rem] leading-none transition-transform duration-300',
            open && 'rotate-45'
          )}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      {/*
        Always mounted so the max-height CSS transition can run.
        Previously used {open && <div>} which unmounts the element and kills the animation.
      */}
      <div className={cn('faq-body', open && 'open')}>
        <p className="text-ink-soft text-[0.97rem] leading-[1.7]">{a}</p>
      </div>
    </div>
  );
}

export default function FaqsPage() {
  return (
    <>
      {/* page-band */}
      <div className="relative z-[1] bg-gradient-to-br from-[#fff8e8] via-[#fef3c7] to-[#fde68a] text-center py-12 px-6">
        <h1 className="text-heading text-ink mb-2">FAQs</h1>
        <p className="text-ink-soft text-[1.05rem]">Everything you need to know about our products and service.</p>
      </div>
      <section className="py-20">
        <div className="container">
          <div className="max-w-[800px] mx-auto">
            {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>
    </>
  );
}
