import Image from 'next/image';

export const metadata = { title: 'About Us — Precious Koala' };

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold text-ink mb-5">Our Story</h1>
          <p className="text-ink-soft leading-relaxed mb-4">
            Precious Koala was born in Melbourne out of a simple frustration: why were breast milk
            storage bags so fiddly to seal, impossible to stand upright, and full of materials
            you wouldn&apos;t want anywhere near your baby?
          </p>
          <p className="text-ink-soft leading-relaxed mb-4">
            We spent two years working with OBGYN nurses and materials scientists to develop a bag
            that is pre-sterilised, self-standing, double-zip sealed, and fitted with a heat-sensitive
            ink strip so you always know if the milk was exposed to warmth.
          </p>
          <p className="text-ink-soft leading-relaxed">
            Made in a BPA-free, ISO-certified facility and shipped from Melbourne — because
            Australian parents deserve products that actually work.
          </p>
        </div>
        <Image
          src="/assets/about-melbourne.jpg"
          alt="Melbourne — where Precious Koala was born"
          width={560}
          height={400}
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      <div className="bg-white rounded-2xl border border-line p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { value: '2,000+', label: 'Parents served' },
          { value: '99.4%', label: 'Satisfaction rate' },
          { value: '2021', label: 'Founded in Melbourne' },
          { value: '100%', label: 'BPA-free' },
        ].map(s => (
          <div key={s.label}>
            <p className="text-3xl font-bold text-ink mb-1">{s.value}</p>
            <p className="text-sm text-ink-soft">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Image
          src="/assets/commitment.jpg"
          alt="Our commitment to quality"
          width={1200}
          height={450}
          className="rounded-2xl w-full object-cover h-64 md:h-80"
        />
      </div>
    </div>
  );
}
