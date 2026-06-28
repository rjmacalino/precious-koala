import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-sand text-ink pt-14 pb-6 border-t border-line">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">

          {/* Brand */}
          <div className="flex flex-col gap-[0.85rem]">
            <div className="flex items-center gap-[0.6rem] justify-center sm:justify-start">
              <Image src="/assets/logo.png" alt="Precious Koala" width={233} height={54} style={{ height: 54, width: 'auto' }} />
            </div>
            <p className="text-[0.88rem] text-ink-soft leading-[1.7]">
              123 Somewhere Street,<br />Melbourne, VIC, Australia
            </p>
            <div className="flex gap-[0.6rem] justify-center sm:justify-start mt-1">
              {[
                { label: 'Instagram', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
                { label: 'Facebook',  icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg> },
                { label: 'Twitter',   icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
              ].map(({ label, icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-[38px] h-[38px] rounded-full bg-orange text-white flex items-center justify-center line-height-0 transition-[background,transform] duration-200 hover:bg-orange-dark hover:-translate-y-0.5"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col gap-[0.1rem]">
            <h4 className="text-[1rem] font-bold text-ink mb-3 flex items-center gap-2 justify-center sm:justify-start">
              <span className="inline-block w-[22px] h-[22px] bg-orange rounded-full flex-shrink-0" />
              Sitemap
            </h4>
            {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Shop'], ['/faqs', 'Contact Us']].map(([href, label]) => (
              <Link key={href} href={href} className="text-ink-soft text-[0.9rem] leading-[2] transition-colors duration-200 hover:text-orange-dark">{label}</Link>
            ))}
          </div>

          {/* Policy */}
          <div className="flex flex-col gap-[0.1rem]">
            <h4 className="text-[1rem] font-bold text-ink mb-3 flex items-center gap-2 justify-center sm:justify-start">
              <span className="inline-block w-[22px] h-[22px] bg-orange rounded-full flex-shrink-0" />
              Policy
            </h4>
            {[['/faqs', 'FAQs'], ['#', 'Privacy Policy'], ['#', 'Terms of Service']].map(([href, label]) => (
              <Link key={label} href={href} className="text-ink-soft text-[0.9rem] leading-[2] transition-colors duration-200 hover:text-orange-dark">{label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-[0.1rem]">
            <h4 className="text-[1rem] font-bold text-ink mb-3 flex items-center gap-2 justify-center sm:justify-start">
              <span className="inline-block w-[22px] h-[22px] bg-orange rounded-full flex-shrink-0" />
              Get in touch
            </h4>
            <p className="text-ink-soft text-[0.9rem] leading-[2]">099999999999</p>
            <p className="text-ink-soft text-[0.9rem] leading-[2]">preciouskoala@gmail.com</p>
          </div>

        </div>

        <div className="mt-8 pt-5 border-t border-line text-center text-[0.82rem] text-ink-soft">
          &copy; {new Date().getFullYear()} Precious Koala. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
