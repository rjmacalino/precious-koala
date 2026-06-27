'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { PRODUCTS } from '@/data/products';

const SHIPPING = 6.95;

export default function CartPage() {
  const { items, setQty, remove, total, count } = useCart();
  const router = useRouter();

  const cartItems = Object.entries(items)
    .map(([id, qty]) => ({ product: PRODUCTS.find(p => p.id === id)!, qty }))
    .filter(e => e.product);

  function handleCheckout() {
    // demo: skip straight to success. real impl would POST to /api/checkout for a Stripe session url
    router.push('/success');
  }

  if (count === 0) {
    return (
      <section className="section">
        <div className="container">
          <div className="cart-empty">
            <span>🛒</span>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven&apos;t added anything yet.</p>
            <Link href="/products" className="btn btn-primary">Shop now</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="page-band">
        <h1>Your Cart</h1>
      </div>
      <section className="section">
        <div className="container">
          <div className="cart-grid">
            <div className="cart-list">
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} className="cart-row">
                  <div className="cart-row-media">
                    <Image src={product.image} alt={product.name} width={80} height={80} style={{ maxHeight: '80%', width: 'auto' }} />
                  </div>
                  <div className="cart-row-info">
                    <h3>{product.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--ink-soft)' }}>{product.pack}</p>
                    <div className="qty-control small" style={{ marginTop: '0.5rem' }}>
                      <button onClick={() => setQty(product.id, qty - 1)}>−</button>
                      <span>{qty}</span>
                      <button onClick={() => setQty(product.id, qty + 1)}>+</button>
                    </div>
                  </div>
                  <span className="cart-row-price">${(product.price * qty).toFixed(2)}</span>
                  <button className="link-btn" onClick={() => remove(product.id)}>Remove</button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-line"><span>Subtotal</span><span>${total.toFixed(2)}</span></div>
              <div className="summary-line"><span>Shipping</span><span>${SHIPPING.toFixed(2)}</span></div>
              <div className="summary-line total"><span>Total</span><span>${(total + SHIPPING).toFixed(2)}</span></div>
              <button onClick={handleCheckout} className="btn btn-primary btn-lg">Checkout</button>
              <p className="cart-note">Demo store — test card: 4242 4242 4242 4242</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
