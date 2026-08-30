"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import {
  addDish,
  removeDish,
  cartTotal,
  cartCount,
  type Dish,
  type CartItem,
} from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  add: (dish: Dish) => void;
  remove: (dishId: string) => void;
  clear: () => void;
  total: number;
  count: number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = useCallback((dish: Dish) => {
    setItems((prev) => addDish(prev, dish));
  }, []);

  const remove = useCallback((dishId: string) => {
    setItems((prev) => removeDish(prev, dishId));
  }, []);

  const clear = useCallback(() => {
    setItems([]);
  }, []);

  const total = useMemo(() => cartTotal(items), [items]);

  const count = useMemo(() => cartCount(items), [items]);

  return (
    <CartContext.Provider value={{ items, add, remove, clear, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const value = useContext(CartContext);
  if (!value) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return value;
}
