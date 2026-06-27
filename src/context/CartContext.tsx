'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { PRODUCTS } from '@/data/products';

const CART_KEY = 'pk_cart'; // same key as v1 so old carts carry over

interface CartContextValue {
  items: Record<string, number>;
  add: (id: string) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  total: number;
}

const CartContext = createContext<CartContextValue | null>(null);

function calcTotal(items: Record<string, number>): number {
  return Object.entries(items).reduce((sum, [id, qty]) => {
    const p = PRODUCTS.find(p => p.id === id);
    return p ? sum + p.price * qty : sum;
  }, 0);
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CART_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch (_) {}
  }, []);

  const save = useCallback((next: Record<string, number>) => {
    setItems(next);
    localStorage.setItem(CART_KEY, JSON.stringify(next));
  }, []);

  const add = useCallback((id: string) => {
    setItems(prev => {
      const next = { ...prev, [id]: (prev[id] || 0) + 1 };
      localStorage.setItem(CART_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const remove = useCallback((id: string) => {
    setItems(prev => {
      const next = { ...prev };
      delete next[id];
      localStorage.setItem(CART_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems(prev => {
      const next = { ...prev };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      localStorage.setItem(CART_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const clear = useCallback(() => save({}), [save]);

  const count = Object.values(items).reduce((s, n) => s + n, 0);
  const total = calcTotal(items);

  return (
    <CartContext.Provider value={{ items, add, remove, setQty, clear, count, total }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
