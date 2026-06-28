'use client';

import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ productId }: { productId: string }) {
  const { add, items } = useCart();
  const qty = items[productId] || 0;

  return (
    <button
      onClick={() => add(productId)}
      className="btn-primary w-full justify-center py-[0.9rem] text-[1.05rem]"
    >
      {qty > 0 ? `Add More (${qty} in cart)` : 'Add to Cart'}
    </button>
  );
}
