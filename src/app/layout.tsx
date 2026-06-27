import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DemoBanner from '@/components/DemoBanner';

export const metadata: Metadata = {
  title: 'Precious Koala | Baby Products',
  description: 'Premium breast milk storage bags and baby products for Melbourne parents.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-sand min-h-screen flex flex-col font-sans text-ink">
        <CartProvider>
          <DemoBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
