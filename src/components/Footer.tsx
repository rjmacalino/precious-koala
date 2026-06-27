import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-sand border-t border-line mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-ink-soft">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Image src="/assets/logo.png" alt="Precious Koala" width={28} height={28} />
            <span className="font-semibold text-ink">Precious Koala</span>
          </div>
          <p className="leading-relaxed">Premium baby products made with love, for Melbourne parents who deserve the best.</p>
        </div>

        <div>
          <p className="font-semibold text-ink mb-3">Links</p>
          <ul className="space-y-2">
            <li><Link href="/products" className="hover:text-orange-dark transition-colors">Shop</Link></li>
            <li><Link href="/about" className="hover:text-orange-dark transition-colors">About Us</Link></li>
            <li><Link href="/faqs" className="hover:text-orange-dark transition-colors">FAQs</Link></li>
            <li><Link href="/cart" className="hover:text-orange-dark transition-colors">Cart</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-ink mb-3">Get in touch</p>
          <p>hello@preciouskoala.com.au</p>
          <p className="mt-1">Melbourne, VIC, Australia</p>
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-ink-soft">
        &copy; {new Date().getFullYear()} Precious Koala. All rights reserved.
      </div>
    </footer>
  );
}
