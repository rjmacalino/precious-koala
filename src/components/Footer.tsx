import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Image src="/assets/logo.png" alt="Precious Koala" width={48} height={48} />
          <p>Premium baby products made with love, for parents who deserve the best.</p>
        </div>
        <div>
          <h4>Shop</h4>
          <Link href="/products">All Products</Link>
          <Link href="/cart">Cart</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About Us</Link>
          <Link href="/faqs">FAQs</Link>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Precious Koala. All rights reserved. &middot; Melbourne, AU
      </div>
    </footer>
  );
}
