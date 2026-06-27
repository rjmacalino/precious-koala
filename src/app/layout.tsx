import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-main',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Precious Koala | Baby Products',
  description: 'Premium breast milk storage bags for Melbourne parents.',
  icons: {
    icon: '/assets/logokoala.png',
    apple: '/assets/logokoala.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
