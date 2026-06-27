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
    // In a real app this would hit /api/checkout to create a Stripe session.
    // For the demo we just jump straight to the success page.
    router.push('/success');
  }

  if (count === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">🛒</p>
        <h1 className="text-2xl font-bold text-ink mb-2">Your cart is empty</h1>
        <p className="text-ink-soft mb-6">Looks like you haven&apos;t added anything yet.</p>
        <Link href="/products" className="bg-orange hover:bg-orange-dark text-ink font-semibold px-6 py-3 rounded-xl transition-colors inline-block">
          Shop now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-ink mb-8">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Items */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map(({ product, qty }) => (
            <div key={product.id} className="bg-white rounded-2xl border border-line p-4 flex gap-4">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-ink text-sm">{product.name}</p>
                <p className="text-xs text-ink-soft mb-3">{product.pack}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-line rounded-lg overflow-hidden">
                    <button
                      onClick={() => setQty(product.id, qty - 1)}
                      className="px-2.5 py-1 hover:bg-line transition-colors text-sm"
                    >−</button>
                    <span className="px-3 text-sm font-semibold">{qty}</span>
                    <button
                      onClick={() => setQty(product.id, qty + 1)}
                      className="px-2.5 py-1 hover:bg-line transition-colors text-sm"
                    >+</button>
                  </div>
                  <button
                    onClick={() => remove(product.id)}
                    className="text-xs text-ink-soft hover:text-red-500 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <p className="font-bold text-ink text-sm self-start">${(product.price * qty).toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-white rounded-2xl border border-line p-6 self-start sticky top-24">
          <h2 className="font-bold text-ink mb-4">Order Summary</h2>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between">
              <span className="text-ink-soft">Subtotal</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink-soft">Shipping</span>
              <span className="font-medium">${SHIPPING.toFixed(2)}</span>
            </div>
            <div className="border-t border-line pt-2 flex justify-between font-bold text-ink">
              <span>Total</span>
              <span>${(total + SHIPPING).toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full py-3 bg-orange hover:bg-orange-dark text-ink font-semibold rounded-xl transition-colors"
          >
            Checkout
          </button>

          <p className="text-center text-xs text-ink-soft mt-3">
            Demo: use card <span className="font-mono">4242 4242 4242 4242</span>
          </p>
        </div>
      </div>
    </div>
  );
}
