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
    // demo: skip straight to success
    router.push('/success');
  }

  if (count === 0) {
    return (
      <section className="py-24">
        <div className="container">
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <span className="text-[3rem]">&#128722;</span>
            <h2 className="text-[1.5rem] font-bold">Your cart is empty</h2>
            <p className="text-ink-soft">Looks like you haven&apos;t added anything yet.</p>
            <Link href="/products" className="btn-primary mt-2">Shop now</Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* page-band */}
      <div className="relative z-[1] bg-gradient-to-br from-[#fff8e8] via-[#fef3c7] to-[#fde68a] text-center py-12 px-6">
        <h1 className="text-heading text-ink">Your Cart</h1>
      </div>
      <section className="py-16">
        <div className="container">
          {/* 2-col on lg: items | summary */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_340px]">

            {/* items list */}
            <div className="flex flex-col gap-4">
              {cartItems.map(({ product, qty }) => (
                <div key={product.id} className="bg-white border border-line rounded-[1.25rem] p-5 flex gap-5 items-center shadow-card">
                  <div className="w-[90px] h-[90px] rounded-[0.75rem] bg-gradient-to-br from-[#fff9ed] to-[#fff4d6] flex items-center justify-center flex-shrink-0">
                    <Image src={product.image} alt={product.name} width={80} height={80} style={{ maxHeight: '80%', width: 'auto' }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[1rem] mb-0.5">{product.name}</h3>
                    <p className="text-ink-soft text-[0.85rem]">{product.pack}</p>
                    {/* qty control */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="w-7 h-7 rounded-full border border-line bg-sand text-ink font-bold text-[1rem] inline-flex items-center justify-center cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-colors duration-150"
                        onClick={() => setQty(product.id, qty - 1)}
                      >
                        &minus;
                      </button>
                      <span className="min-w-[1.5rem] text-center font-bold text-[0.95rem]">{qty}</span>
                      <button
                        className="w-7 h-7 rounded-full border border-line bg-sand text-ink font-bold text-[1rem] inline-flex items-center justify-center cursor-pointer hover:bg-orange hover:text-white hover:border-orange transition-colors duration-150"
                        onClick={() => setQty(product.id, qty + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <span className="text-[1.15rem] font-extrabold text-orange-dark">${(product.price * qty).toFixed(2)}</span>
                    <button className="link-btn text-[0.8rem]" onClick={() => remove(product.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            {/* order summary */}
            <div className="bg-white border border-line rounded-[1.25rem] p-7 shadow-card h-fit sticky top-[7.5rem]">
              <h2 className="text-[1.2rem] font-extrabold mb-6">Order Summary</h2>
              <div className="flex justify-between py-3 border-b border-line text-[0.95rem]">
                <span className="text-ink-soft">Subtotal</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-3 border-b border-line text-[0.95rem]">
                <span className="text-ink-soft">Shipping</span>
                <span className="font-semibold">${SHIPPING.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-4 text-[1.1rem] font-extrabold">
                <span>Total</span>
                <span className="text-orange-dark">${(total + SHIPPING).toFixed(2)}</span>
              </div>
              <button onClick={handleCheckout} className="btn-primary w-full justify-center mt-2">
                Checkout
              </button>
              <p className="text-center text-[0.78rem] text-ink-soft mt-3">
                Demo store — test card: 4242 4242 4242 4242
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
