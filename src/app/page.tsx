import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 max-w-lg">
            <span className="inline-block bg-cream text-ink text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Made for Melbourne mums
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
              Store more,<br />stress less.
            </h1>
            <p className="text-ink-soft leading-relaxed mb-8">
              Pre-sterilised breast milk storage bags with a temperature indicator and double-zip seal.
              Trusted by 2,000+ parents across Australia.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/products" className="bg-orange hover:bg-orange-dark text-ink font-semibold px-6 py-3 rounded-xl transition-colors">
                Shop Now
              </Link>
              <Link href="/about" className="border border-line text-ink font-semibold px-6 py-3 rounded-xl hover:bg-line transition-colors">
                Our Story
              </Link>
            </div>
          </div>
          <div className="flex-1 max-w-md w-full">
            <Image
              src="/assets/banner.png"
              alt="Precious Koala breast milk storage bags"
              width={560}
              height={400}
              className="rounded-2xl shadow-lg w-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-orange/10 border-y border-line py-6">
        <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
          {[
            { icon: '🧪', label: 'Pre-sterilised' },
            { icon: '🌡️', label: 'Temp indicator' },
            { icon: '🔒', label: 'Double-zip seal' },
            { icon: '♻️', label: 'Eco-friendly' },
          ].map(t => (
            <div key={t.label} className="flex flex-col items-center gap-1">
              <span className="text-2xl">{t.icon}</span>
              <span className="font-medium text-ink">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-ink mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Instagram-ish gallery */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <h2 className="text-2xl font-bold text-ink mb-6">Real mums, real stories</h2>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
          {[1,2,3,4,5].map(n => (
            <div key={n} className="aspect-square rounded-xl overflow-hidden">
              <Image
                src={`/assets/insta-${n}.jpg`}
                alt={`Customer photo ${n}`}
                width={200}
                height={200}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
