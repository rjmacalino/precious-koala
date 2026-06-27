'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'Are the bags pre-sterilised?',
    a: 'Yes — every bag is gamma-ray sterilised before packaging, so you can use them straight out of the box without any boiling or steaming.',
  },
  {
    q: 'What does the temperature indicator do?',
    a: 'The heat-sensitive ink strip on the front of each bag turns from blue to white if the bag has been exposed to temperatures above 4°C, letting you know the cold-chain may have been broken.',
  },
  {
    q: 'How long can I store breast milk?',
    a: 'Up to 4 days in the fridge (0–4°C) and up to 12 months in a deep freezer (−18°C or lower). Always label bags with the date and time.',
  },
  {
    q: 'Are the bags BPA-free?',
    a: 'Absolutely. Our bags are made from BPA-free PET/LDPE food-grade plastic and comply with Australian food safety standards.',
  },
  {
    q: 'Can I heat milk directly in the bag?',
    a: "We recommend thawing in the fridge overnight or holding the sealed bag under warm running water. Don't microwave — it creates hot spots and destroys antibodies.",
  },
  {
    q: 'Do you ship outside Melbourne?',
    a: 'We ship Australia-wide. Standard flat rate $6.95. Free shipping on orders over $50.',
  },
  {
    q: 'What if I receive a damaged product?',
    a: 'Email us at hello@preciouskoala.com.au with a photo within 14 days of receiving your order and we will send a replacement or issue a full refund — no questions asked.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line last:border-0">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full py-4 flex justify-between items-center text-left gap-4 hover:text-orange-dark transition-colors"
      >
        <span className="font-semibold text-ink">{q}</span>
        <span className="flex-shrink-0 text-ink-soft text-lg">{open ? '−' : '+'}</span>
      </button>
      {open && <p className="pb-4 text-ink-soft leading-relaxed text-sm">{a}</p>}
    </div>
  );
}

export default function FaqsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14">
      <h1 className="text-3xl font-bold text-ink mb-2">Frequently Asked Questions</h1>
      <p className="text-ink-soft mb-8">Everything you need to know about our products and service.</p>
      <div className="bg-white rounded-2xl border border-line px-6">
        {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
      </div>
    </div>
  );
}
