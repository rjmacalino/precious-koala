import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import InstaCarousel from '@/components/InstaCarousel';
import NewsletterForm from '@/components/NewsletterForm';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-pretitle">Breast Milk</p>
            <h1>Storage Bags</h1>
            <p className="hero-desc">
              Pre-sterilised, BPA-free storage bags with a{' '}
              <span className="accent">smart temperature indicator</span>, leak-proof double-zip
              seal and a self-standing base, keeping every{' '}
              <span className="accent">precious drop</span> safe and fresh.
            </p>
            <Link href="/products" className="btn-shop">SHOP NOW</Link>
          </div>
          <div className="hero-visual">
            <Image
              src="/assets/banner.png"
              alt="Precious Koala Breast Milk Storage Bags"
              width={540}
              height={400}
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust-strip">
        <ul role="list">
          <li>BPA-Free &amp; Eco</li>
          <li>Pre-Sterilised</li>
          <li>Temperature Indicator</li>
          <li>Double-Zip Seal</li>
          <li>Free Shipping $50+</li>
        </ul>
      </div>

      {/* Featured products */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Shop Our Storage Bags</h2>
            <p>220ml capacity, pre-sterilised and ready to use. Pick the pack that fits your routine.</p>
          </div>
          <div className="product-grid">
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="commitment">
        <div className="container commitment-grid">
          <div className="commitment-media">
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
          <div className="commitment-content">
            <h2 className="commitment-title">Our Commitment</h2>
            <p className="commitment-sub">Precious Koala is dedicated to providing the best and safest eco-friendly baby products.</p>
            <ul className="commit-list" role="list">
              <li><span className="commit-ico" aria-hidden="true">🌿</span><h3>Recyclable, Eco-Friendly Material</h3></li>
              <li><span className="commit-ico" aria-hidden="true">🧊</span><h3>Large Capacity Fresh-Keeping Breastmilk</h3></li>
              <li><span className="commit-ico" aria-hidden="true">🧴</span><h3>Self-Standing Base Suitable for Deep Freezer</h3></li>
              <li><span className="commit-ico" aria-hidden="true">☀️</span><h3>Gamma-Ray Pre-Sterilised</h3></li>
              <li><span className="commit-ico" aria-hidden="true">🌡️</span><h3>Smart Temperature Indicator</h3></li>
              <li><span className="commit-ico" aria-hidden="true">🔒</span><h3>Double Zip Closure and Tamper-Evident Safety Seal</h3></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Orange feature band */}
      <section className="orange-band">
        <span className="orange-band-deco" aria-hidden="true" />
        <div className="container orange-band-inner">
          <div className="orange-band-text">
            <p className="orange-band-eyebrow">Premium Quality</p>
            <h2>Trusted by Thousands<br />of Australian Mums</h2>
            <p>Our breast milk storage bags are designed to keep every precious drop safe, fresh, and ready when your baby needs it most.</p>
            <Link href="/products" className="btn-shop" style={{ marginTop: '1.5rem' }}>SHOP NOW</Link>
          </div>
          <div className="orange-band-visual">
            <div className="orange-band-blob">
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

      {/* How to use */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Simple to Use, Every Time</h2>
            <p>From fridge to feed in a few easy steps.</p>
          </div>
          <div className="features-grid">
            <div className="feature"><span className="step-num">1</span><h3>Sterilise &amp; Wash</h3><p>Prepare your area, sterilise tools and surfaces, and wash hands thoroughly.</p></div>
            <div className="feature"><span className="step-num">2</span><h3>Fill &amp; Seal</h3><p>Remove the perforated tab, pour in breast milk and reseal with the double zip.</p></div>
            <div className="feature"><span className="step-num">3</span><h3>Freeze &amp; Serve</h3><p>Store flat in the freezer. To serve, defrost in warm water and pour into a bottle.</p></div>
          </div>
        </div>
      </section>

      {/* Insta shots carousel */}
      <section className="insta">
        <span className="insta-dots insta-dots-l" aria-hidden="true" />
        <span className="insta-dots insta-dots-r" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <h2 className="insta-title">OUR INSTA SHOTS</h2>
            <p>Real mums, real moments. Follow us for more.</p>
          </div>
          <InstaCarousel />
        </div>
      </section>

      {/* Customer reviews */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-head">
            <h2 className="reviews-title">WHAT OUR <span>CUSTOMER</span> SAY</h2>
            <p>Real feedback from real parents across Australia.</p>
          </div>
          <div className="reviews-grid">
            <div className="review-card">
              <div className="review-stars">★★★★★</div>
              <h3>Great product, easy to use</h3>
              <p>These bags are fantastic. The double-zip is so secure and the temperature indicator is genuinely useful. Worth every cent.</p>
              <span className="review-author">Sarah M.</span>
            </div>
            <div className="review-card review-card-featured">
              <span className="review-quote">&ldquo;</span>
              <div className="review-stars">★★★★★</div>
              <h3>Best storage bags I&apos;ve tried</h3>
              <p>I&apos;ve tried three different brands and Precious Koala is by far the best. Self-standing, no leaks, and they stack perfectly in the freezer.</p>
              <span className="review-author">Emma T.</span>
            </div>
          </div>
          <div className="reviews-dots">
            <span className="reviews-dot active" /><span className="reviews-dot" /><span className="reviews-dot" /><span className="reviews-dot" />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section">
        <span className="newsletter-deco" aria-hidden="true" />
        <div className="newsletter-inner">
          <p className="newsletter-eyebrow">News Letter</p>
          <h2>SIGN UP FOR OUR LATEST NEWS</h2>
          <div className="newsletter-divider" />
          <NewsletterForm />
        </div>
      </section>

      {/* Video promo band */}
      <section className="video-band">
        <div className="video-band-left">
          <p className="video-band-eyebrow">The Baby Shop</p>
          <h2>Premium Baby Products<br />You Can Trust</h2>
        </div>
        <div className="video-band-right">
          <Image src="/assets/logo.png" alt="Precious Koala" width={160} height={160} style={{ opacity: 0.35 }} />
          <button className="play-btn" aria-label="Play video">
            <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
      </section>
    </>
  );
}
