import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import InstaCarousel from '@/components/InstaCarousel';
import NewsletterForm from '@/components/NewsletterForm';

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-white flex flex-col">
        {/*
          Mobile: 1 col, text centered, image below
          md (≥861px): 2-col grid — text left, image right (viewport-relative column)
        */}
        <div className="flex-1 grid grid-cols-1 items-start text-center pt-8 pb-0 px-5 md:grid-cols-[1fr_50vw] md:items-center md:text-left md:pt-[4.5rem] md:pb-20 md:pl-[clamp(4rem,8vw,12rem)] md:pr-0 lg:grid-cols-[1fr_54vw] xl:grid-cols-[1fr_64vw]">

          <div>
            <p className="text-[clamp(1.5rem,3.5vw,2.5rem)] font-bold text-orange leading-none mb-[0.15rem]">
              Breast Milk
            </p>
            <h1 className="text-display font-medium text-ink mb-6">Storage Bags</h1>
            <p className="text-[1.1rem] text-ink-soft mb-9 max-w-[460px] leading-[1.75] mx-auto md:mx-0">
              Pre-sterilised, BPA-free storage bags with a{' '}
              <span className="text-orange font-bold">smart temperature indicator</span>, leak-proof double-zip
              seal and a self-standing base, keeping every{' '}
              <span className="text-orange font-bold">precious drop</span> safe and fresh.
            </p>
            <Link href="/products" className="btn-shop">SHOP NOW</Link>
          </div>

          <div className="hero-visual justify-center md:justify-end pb-12 pt-6 md:pt-0 md:pb-0">
            <Image
              src="/assets/banner.png"
              alt="Precious Koala Breast Milk Storage Bags"
              width={540}
              height={400}
              priority
              className="relative z-[1] w-[min(540px,100%)] drop-shadow-[0_24px_34px_rgba(120,100,70,0.22)]"
            />
          </div>
        </div>
      </section>

      {/* ── Trust strip ── */}
      <div className="relative z-[1] bg-sand border-t border-line border-b">
        <ul className="max-w-container mx-auto py-4 px-6 flex flex-wrap justify-around gap-x-4 gap-y-3" role="list">
          {['BPA-Free & Eco', 'Pre-Sterilised', 'Temperature Indicator', 'Double-Zip Seal', 'Free Shipping $50+'].map(item => (
            <li key={item} className="flex items-center gap-2 text-[0.88rem] font-bold text-ink tracking-[0.01em]">
              <span className="w-[7px] h-[7px] rounded-full bg-orange flex-shrink-0 inline-block" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Featured products ── */}
      <section className="relative z-[1] bg-white py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-heading text-ink mb-3">Shop Our Storage Bags</h2>
            <p className="text-ink-soft max-w-[520px] mx-auto text-[1.05rem]">
              220ml capacity, pre-sterilised and ready to use. Pick the pack that fits your routine.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-[1.75rem] sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* ── Our Commitment ── */}
      <section className="bg-gradient-to-b from-cream to-[#fff7d6] py-20">
        <div className="container grid grid-cols-1 gap-[2.5rem] md:grid-cols-[1fr_1.05fr] md:gap-[3.5rem] items-center">

          {/* media — visible md+ only */}
          <div className="hidden md:block relative rounded-[1.5rem_1.5rem_6rem_1.5rem] overflow-hidden shadow-hover aspect-[4/5] max-w-[420px] mx-auto md:max-w-none">
            <span className="deco-squares" aria-hidden="true" />
            <span className="deco-dots" aria-hidden="true" />
            <Image
              src="/assets/commitment.jpg"
              alt="A Precious Koala breast milk storage bag"
              width={480}
              height={600}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <h2 className="commitment-title text-orange text-[clamp(1.75rem,4vw,2.5rem)] mb-[0.65rem]">
              Our Commitment
            </h2>
            <p className="text-ink-soft mb-7 max-w-[460px] text-[1.03rem]">
              Precious Koala is dedicated to providing the best and safest eco-friendly baby products.
            </p>
            <ul className="flex flex-col gap-[0.8rem]" role="list">
              {[
                { ico: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M2 22c0-5.5 4.5-10 10-10s10 4.5 10 10"/><path d="M12 12C12 7 8 3 3 3c0 5 3.5 9 9 9z"/><path d="M12 12c0-5 4-9 9-9-0 5-4 9-9 9z"/></svg>, text: 'Recyclable, Eco-Friendly Material' },
                { ico: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>, text: 'Large Capacity Fresh-Keeping Breastmilk' },
                { ico: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 2h8l1 6H7L8 2z"/><path d="M7 8l-2 14h14L17 8"/><line x1="12" y1="11" x2="12" y2="18"/></svg>, text: 'Self-Standing Base Suitable for Deep Freezer' },
                { ico: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>, text: 'Gamma-Ray Pre-Sterilised' },
                { ico: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 00-5 0v11.26a4.5 4.5 0 105 0z"/></svg>, text: 'Smart Temperature Indicator' },
                { ico: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>, text: 'Double Zip Closure and Tamper-Evident Safety Seal' },
              ].map(({ ico, text }) => (
                <li key={text} className="flex items-center gap-[1.1rem] bg-white rounded-[1rem] py-[0.9rem] px-[1.35rem] shadow-card transition-[transform,box-shadow] duration-[180ms] hover:translate-x-[5px] hover:shadow-hover">
                  <span className="flex-shrink-0 w-[46px] h-[46px] rounded-full bg-orange inline-flex items-center justify-center shadow-[0_4px_12px_rgba(249,184,47,0.45)]" aria-hidden="true">
                    {ico}
                  </span>
                  <h3 className="text-[0.97rem] font-bold text-ink leading-[1.35]">{text}</h3>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Orange feature band ── */}
      <section className="bg-orange relative overflow-hidden py-20">
        <span className="orange-band-deco" aria-hidden="true" />
        <div className="container grid grid-cols-1 gap-12 items-center text-center md:grid-cols-2 md:text-left">
          <div>
            <p className="text-white/90 text-[1rem] font-semibold mb-[0.25rem] flex items-center gap-3 justify-center md:justify-start after:content-[''] after:block after:w-[60px] after:h-[2px] after:bg-white/60 after:rounded-sm">
              Premium Quality
            </p>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.2rem)] text-white font-extrabold mb-4">
              Trusted by Thousands<br />of Australian Mums
            </h2>
            <p className="text-white/85 mb-6">
              Our breast milk storage bags are designed to keep every precious drop safe, fresh, and ready when your baby needs it most.
            </p>
            <Link
              href="/products"
              className="btn-shop mt-6 !bg-[#fef09e] !text-ink !shadow-[0_8px_18px_rgba(0,0,0,0.12)] hover:!bg-[#f5e070] hover:!text-ink"
            >
              SHOP NOW
            </Link>
          </div>

          <div className="flex items-center justify-center order-[-1] md:order-none">
            <div className="relative bg-sand rounded-[60%_40%_55%_45%/45%_55%_45%_55%] p-8 shadow-[0_12px_40px_rgba(0,0,0,0.12)]">
              <Image
                src="/assets/banner.png"
                alt="Precious Koala Breast Milk Storage Bags"
                width={420}
                height={340}
                style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── How to use ── */}
      <section className="relative z-[1] bg-white py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-heading text-ink mb-3">Simple to Use, Every Time</h2>
            <p className="text-ink-soft">From fridge to feed in a few easy steps.</p>
          </div>
          <div className="grid grid-cols-1 gap-[1.75rem] sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: '1', title: 'Sterilise & Wash', desc: 'Prepare your area, sterilise tools and surfaces, and wash hands thoroughly.' },
              { num: '2', title: 'Fill & Seal', desc: 'Remove the perforated tab, pour in breast milk and reseal with the double zip.' },
              { num: '3', title: 'Freeze & Serve', desc: 'Store flat in the freezer. To serve, defrost in warm water and pour into a bottle.' },
            ].map(step => (
              <div key={step.num} className="bg-white border border-line rounded-[1.25rem] p-8 text-center shadow-card transition-[transform,box-shadow] duration-200 hover:-translate-y-[5px] hover:shadow-hover">
                <span className="inline-flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-orange text-white text-[1.3rem] font-extrabold shadow-[0_6px_16px_rgba(249,184,47,0.4)]">
                  {step.num}
                </span>
                <h3 className="text-[1.08rem] font-bold mb-2">{step.title}</h3>
                <p className="text-[0.93rem] text-ink-soft leading-[1.65]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Instagram carousel ── */}
      <section className="relative py-20 bg-white overflow-hidden">
        <span className="insta-dots absolute w-[130px] h-[200px] opacity-45 top-8 left-4" aria-hidden="true" />
        <span className="insta-dots absolute w-[130px] h-[200px] opacity-45 bottom-8 right-4" aria-hidden="true" />
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-heading text-orange uppercase tracking-[0.03em] mb-3">OUR INSTA SHOTS</h2>
            <p className="text-ink-soft">Real mums, real moments. Follow us for more.</p>
          </div>
          <InstaCarousel />
        </div>
      </section>

      {/* ── Customer reviews ── */}
      <section className="bg-sand py-20 pb-[4.5rem]">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-[clamp(1.6rem,4vw,2.4rem)] uppercase tracking-[0.04em] text-ink font-extrabold">
              WHAT OUR <span className="text-orange">CUSTOMER</span> SAY
            </h2>
            <p className="text-ink-soft mt-3">Real feedback from real parents across Australia.</p>
          </div>
          <div className="grid grid-cols-1 gap-[1.75rem] sm:grid-cols-2">
            <div className="bg-white rounded-[1.5rem] p-8 border-b-4 border-orange relative shadow-[0_4px_24px_rgba(100,70,20,0.07)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-hover">
              <span className="absolute top-3 right-6 text-[6rem] leading-none text-cream font-serif pointer-events-none">&ldquo;</span>
              <div className="text-orange text-[1.15rem] mb-[0.85rem] tracking-[0.12em]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <h3 className="text-[1.1rem] font-bold mb-[0.6rem]">Great product, easy to use</h3>
              <p className="text-[0.93rem] text-ink-soft mb-[1.1rem] leading-[1.7]">These bags are fantastic. The double-zip is so secure and the temperature indicator is genuinely useful. Worth every cent.</p>
              <span className="text-orange font-extrabold text-[0.95rem]">Sarah M.</span>
            </div>
            <div className="bg-white rounded-[1.5rem] p-8 border-b-4 border-orange relative shadow-[0_4px_24px_rgba(100,70,20,0.07)] transition-[transform,box-shadow] duration-200 hover:-translate-y-1 hover:shadow-hover mt-6 sm:mt-0">
              <span className="absolute top-3 right-6 text-[6rem] leading-none text-cream font-serif pointer-events-none">&ldquo;</span>
              <div className="text-orange text-[1.15rem] mb-[0.85rem] tracking-[0.12em]">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <h3 className="text-[1.1rem] font-bold mb-[0.6rem]">Best storage bags I&apos;ve tried</h3>
              <p className="text-[0.93rem] text-ink-soft mb-[1.1rem] leading-[1.7]">I&apos;ve tried three different brands and Precious Koala is by far the best. Self-standing, no leaks, and they stack perfectly in the freezer.</p>
              <span className="text-orange font-extrabold text-[0.95rem]">Emma T.</span>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-10">
            <span className="w-[10px] h-[10px] rounded-full bg-orange scale-[1.3] block" />
            <span className="w-[10px] h-[10px] rounded-full bg-line block" />
            <span className="w-[10px] h-[10px] rounded-full bg-line block" />
            <span className="w-[10px] h-[10px] rounded-full bg-line block" />
          </div>
        </div>
      </section>

      {/* ── Newsletter ── */}
      <section className="bg-white text-center py-20 px-6 relative overflow-hidden">
        <span className="newsletter-deco" aria-hidden="true" />
        <div className="relative z-[1]">
          <p className="text-orange text-[1rem] font-bold mb-2 tracking-[0.04em]">News Letter</p>
          <h2 className="text-subhead uppercase tracking-[0.04em] font-extrabold mb-3">SIGN UP FOR OUR LATEST NEWS</h2>
          <div className="w-12 h-[3px] bg-orange rounded-sm mx-auto my-3 mb-8" />
          <NewsletterForm />
        </div>
      </section>

      {/* ── Video promo band ── */}
      <section className="grid grid-cols-1 sm:grid-cols-2 min-h-[260px]">
        <div className="video-band-left bg-orange px-10 py-12 flex flex-col justify-center">
          <p className="text-white/80 text-[0.9rem] font-semibold mb-2 flex items-center gap-[0.6rem] after:content-[''] after:block after:w-[40px] after:h-[2px] after:bg-white/50 after:rounded-sm">
            The Baby Shop
          </p>
          <h2 className="text-[clamp(1.2rem,2.5vw,1.6rem)] text-white font-extrabold">
            Premium Baby Products<br />You Can Trust
          </h2>
        </div>
        <div className="bg-sand flex items-center justify-center gap-6">
          <Image src="/assets/logo.png" alt="Precious Koala" width={160} height={160} style={{ opacity: 0.35 }} />
          <button
            className="w-[60px] h-[60px] bg-orange border-none rounded-full text-white cursor-pointer flex items-center justify-center shadow-[0_6px_20px_rgba(255,189,89,0.5)] transition-[transform,box-shadow] duration-200 flex-shrink-0 hover:scale-[1.08] hover:shadow-[0_8px_24px_rgba(255,189,89,0.6)]"
            aria-label="Play video"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </section>
    </>
  );
}
