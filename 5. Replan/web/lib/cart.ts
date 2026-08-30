export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export type CartItem = {
  dish: Dish;
  quantity: number;
};

export function addDish(items: CartItem[], dish: Dish): CartItem[] {
  const existing = items.find((i) => i.dish.id === dish.id);
  if (existing) {
    return items.map((i) =>
      i.dish.id === dish.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...items, { dish, quantity: 1 }];
}

export function removeDish(items: CartItem[], dishId: string): CartItem[] {
  return items
    .map((i) =>
      i.dish.id === dishId ? { ...i, quantity: i.quantity - 1 } : i
    )
    .filter((i) => i.quantity > 0);
}

export function cartTotal(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.dish.price * i.quantity, 0);
}

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, i) => sum + i.quantity, 0);
}
