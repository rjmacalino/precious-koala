import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            <Image src="/assets/logo.png" alt="Precious Koala" width={52} height={52} />
            <span className="brand-text">Precious Koala</span>
          </div>
          <p className="footer-address">123 Somewhere Street,<br />Melbourne, VIC, Australia</p>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram" className="social-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="#" aria-label="Twitter" className="social-icon">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
            </a>
          </div>
        </div>

        {/* Sitemap */}
        <div className="footer-col">
          <h4><span className="footer-col-dot" />Sitemap</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/products">Shop</Link>
          <Link href="/faqs">Contact Us</Link>
        </div>

        {/* Policy */}
        <div className="footer-col">
          <h4><span className="footer-col-dot" />Policy</h4>
          <Link href="/faqs">FAQs</Link>
          <Link href="#">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4><span className="footer-col-dot" />Get in touch</h4>
          <p className="footer-contact-item">099999999999</p>
          <p className="footer-contact-item">preciouskoala@gmail.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Precious Koala. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
}
