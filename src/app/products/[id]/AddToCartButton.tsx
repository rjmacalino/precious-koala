'use client';

import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ productId }: { productId: string }) {
  const { add, items } = useCart();
  const qty = items[productId] || 0;

  return (
    <div className="flex flex-col gap-3">
      <button
        onClick={() => add(productId)}
        className="w-full py-3 bg-orange hover:bg-orange-dark text-ink font-semibold rounded-xl transition-colors"
      >
        {qty > 0 ? `Add More (${qty} in cart)` : 'Add to Cart'}
      </button>
    </div>
  );
}
