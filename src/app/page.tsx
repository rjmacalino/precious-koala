import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

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
              alt="A Precious Koala breast milk storage bag held in hand"
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

      {/* How to use */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Simple to Use, Every Time</h2>
            <p>From fridge to feed in a few easy steps.</p>
          </div>
          <div className="features-grid">
            <div className="feature"><span className="step-num" aria-hidden="true">1</span><h3>Sterilise &amp; Wash</h3><p>Prepare your area, sterilise tools and surfaces, and wash hands thoroughly.</p></div>
            <div className="feature"><span className="step-num" aria-hidden="true">2</span><h3>Fill &amp; Seal</h3><p>Remove the perforated tab, pour in breast milk and reseal with the double zip.</p></div>
            <div className="feature"><span className="step-num" aria-hidden="true">3</span><h3>Freeze &amp; Serve</h3><p>Store flat in the freezer. To serve, defrost in warm water and pour into a bottle.</p></div>
          </div>
        </div>
      </section>

      {/* Insta grid */}
      <section className="insta">
        <span className="insta-dots insta-dots-l" aria-hidden="true" />
        <span className="insta-dots insta-dots-r" aria-hidden="true" />
        <div className="container">
          <div className="section-head">
            <h2 className="insta-title">Our Insta Shots</h2>
          </div>
          <div className="insta-grid">
            {[1,2,3,4,5].map(n => (
              <div key={n} className="insta-card">
                <Image src={`/assets/insta-${n}.jpg`} alt={`Customer photo ${n}`} width={200} height={200} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band">
        <h2>Ready to stock up?</h2>
        <p>Join 2,000+ Australian parents who trust Precious Koala.</p>
        <Link href="/products" className="btn btn-primary">Shop Now</Link>
      </section>
    </>
  );
}
