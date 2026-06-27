'use client';

import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ productId }: { productId: string }) {
  const { add, items } = useCart();
  const qty = items[productId] || 0;

  return (
    <div>
      <button
        onClick={() => add(productId)}
        className="btn btn-primary btn-lg"
      >
        {qty > 0 ? `Add More (${qty} in cart)` : 'Add to Cart'}
      </button>
    </div>
  );
}
