import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'About Us — Precious Koala' };

export default function AboutPage() {
  return (
    <>
      <div className="page-band">
        <h1>About <span style={{ color: 'var(--orange)' }}>Precious Koala</span></h1>
        <p>Born in Melbourne, made for parents everywhere.</p>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-hero">
            <div>
              <h1>Our Story</h1>
              <p>
                Precious Koala was born in Melbourne out of a simple frustration: why were breast milk
                storage bags so fiddly to seal, impossible to stand upright, and full of materials
                you wouldn&apos;t want anywhere near your baby?
              </p>
              <p>
                We spent two years working with OBGYN nurses and materials scientists to develop a bag
                that is pre-sterilised, self-standing, double-zip sealed, and fitted with a
                heat-sensitive ink strip so you always know if the milk was exposed to warmth.
              </p>
              <p>
                Made in a BPA-free, ISO-certified facility and shipped from Melbourne — because
                Australian parents deserve products that actually work.
              </p>
              <Link href="/products" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>Shop Now</Link>
            </div>
            <div className="about-hero-media">
              <Image
                src="/assets/about-melbourne.jpg"
                alt="Melbourne — where Precious Koala was born"
                width={560}
                height={375}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          <div className="stats-grid">
            {[
              { value: '2,000+', label: 'Parents served' },
              { value: '99.4%', label: 'Satisfaction rate' },
              { value: '2021', label: 'Founded in Melbourne' },
              { value: '100%', label: 'BPA-free' },
            ].map(s => (
              <div key={s.label} className="stat-box">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="commitment">
        <div className="container commitment-grid">
          <div className="commitment-media">
            <span className="deco-squares" aria-hidden="true" />
            <span className="deco-dots" aria-hidden="true" />
            <Image
              src="/assets/commitment.jpg"
              alt="Our commitment to quality"
              width={480}
              height={600}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div>
            <h2 className="commitment-title">Our Commitment</h2>
            <p className="commitment-sub">Every product we make is held to the highest safety and sustainability standards.</p>
            <ul className="commit-list" role="list">
              <li><span className="commit-ico">🌿</span><h3>Recyclable, Eco-Friendly Material</h3></li>
              <li><span className="commit-ico">🧴</span><h3>Self-Standing Base Suitable for Deep Freezer</h3></li>
              <li><span className="commit-ico">☀️</span><h3>Gamma-Ray Pre-Sterilised</h3></li>
              <li><span className="commit-ico">🌡️</span><h3>Smart Temperature Indicator</h3></li>
              <li><span className="commit-ico">🔒</span><h3>Double Zip Closure</h3></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
