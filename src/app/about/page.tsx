import Image from 'next/image';
import Link from 'next/link';

export const metadata = { title: 'About Us — Precious Koala' };

export default function AboutPage() {
  return (
    <>
      {/* page-band */}
      <div className="relative z-[1] bg-gradient-to-br from-[#fff8e8] via-[#fef3c7] to-[#fde68a] text-center py-12 px-6">
        <h1 className="text-heading text-ink mb-2">
          About <span className="text-orange">Precious Koala</span>
        </h1>
        <p className="text-ink-soft text-[1.05rem]">Born in Melbourne, made for parents everywhere.</p>
      </div>

      <section className="py-20">
        <div className="container">

          {/* our story — 2-col on md+ */}
          <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-heading text-ink mb-6">Our Story</h2>
              <p className="text-ink-soft text-[1rem] leading-[1.75] mb-5">
                Precious Koala was born in Melbourne out of a simple frustration: why were breast milk
                storage bags so fiddly to seal, impossible to stand upright, and full of materials
                you wouldn&apos;t want anywhere near your baby?
              </p>
              <p className="text-ink-soft text-[1rem] leading-[1.75] mb-5">
                We spent two years working with OBGYN nurses and materials scientists to develop a bag
                that is pre-sterilised, self-standing, double-zip sealed, and fitted with a
                heat-sensitive ink strip so you always know if the milk was exposed to warmth.
              </p>
              <p className="text-ink-soft text-[1rem] leading-[1.75] mb-8">
                Made in a BPA-free, ISO-certified facility and shipped from Melbourne &mdash; because
                Australian parents deserve products that actually work.
              </p>
              <Link href="/products" className="btn-primary">Shop Now</Link>
            </div>
            <div className="rounded-[1.5rem] overflow-hidden shadow-hover aspect-[3/2] md:aspect-auto">
              <Image
                src="/assets/about-melbourne.jpg"
                alt="Melbourne — where Precious Koala was born"
                width={560}
                height={375}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* stats */}
          <div className="grid grid-cols-2 gap-6 mb-20 md:grid-cols-4">
            {[
              { value: '2,000+', label: 'Parents served' },
              { value: '99.4%', label: 'Satisfaction rate' },
              { value: '2021',  label: 'Founded in Melbourne' },
              { value: '100%',  label: 'BPA-free' },
            ].map(s => (
              <div key={s.label} className="bg-white border border-line rounded-[1.25rem] p-6 text-center shadow-card">
                <span className="block text-[2.2rem] font-extrabold text-orange leading-none mb-2">{s.value}</span>
                <span className="text-ink-soft text-[0.88rem]">{s.label}</span>
              </div>
            ))}
          </div>

          {/* commitment section — 2-col on md+ */}
          <div className="grid grid-cols-1 gap-[2.5rem] md:grid-cols-[1fr_1.05fr] md:gap-[3.5rem] items-center">
            <div className="hidden md:block relative rounded-[1.5rem_1.5rem_6rem_1.5rem] overflow-hidden shadow-hover aspect-[4/5]">
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
              <h2 className="commitment-title text-orange text-[clamp(1.75rem,4vw,2.5rem)] mb-[0.65rem]">
                Our Commitment
              </h2>
              <p className="text-ink-soft mb-7 text-[1.03rem]">
                Every product we make is held to the highest safety and sustainability standards.
              </p>
              <ul className="flex flex-col gap-[0.8rem]" role="list">
                {[
                  '&#127807; Recyclable, Eco-Friendly Material',
                  '&#129514; Self-Standing Base Suitable for Deep Freezer',
                  '&#9728;&#65039; Gamma-Ray Pre-Sterilised',
                  '&#127777;&#65039; Smart Temperature Indicator',
                  '&#128274; Double Zip Closure',
                ].map(item => (
                  <li key={item} className="flex items-center gap-[1.1rem] bg-white rounded-[1rem] py-[0.9rem] px-[1.35rem] shadow-card transition-[transform,box-shadow] duration-[180ms] hover:translate-x-[5px] hover:shadow-hover">
                    <h3 className="text-[0.97rem] font-bold text-ink" dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
