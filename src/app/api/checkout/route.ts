import { NextResponse } from 'next/server';
import { PRODUCTS } from '@/data/products';

// In production this would use Stripe:
// import Stripe from 'stripe';
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { items } = await req.json() as { items: Record<string, number> };

  // build line items so you can see the shape for when Stripe is wired up
  const lineItems = Object.entries(items)
    .map(([id, qty]) => {
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return null;
      return {
        price_data: {
          currency: 'aud',
          product_data: { name: `${product.name} — ${product.pack}` },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: qty,
      };
    })
    .filter(Boolean);

  console.log('checkout items:', lineItems); // dev only

  // real stripe call would look like:
  // const session = await stripe.checkout.sessions.create({
  //   mode: 'payment',
  //   line_items: lineItems,
  //   success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
  //   cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cart`,
  // });
  // return NextResponse.json({ url: session.url });

  // demo: just send them to /success
  return NextResponse.json({ url: '/success' });
}
