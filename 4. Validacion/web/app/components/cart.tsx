"use client";

import { useCart } from "./cart-provider";

export default function Cart() {
  const { items, remove, total, count } = useCart();

  if (count === 0) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <p className="text-zinc-500">El carrito está vacío</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h2 className="mb-4 text-xl font-semibold">Tu pedido</h2>
      <ul className="mb-4 space-y-3">
        {items.map((item) => (
          <li
            key={item.dish.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex-1">
              <p className="font-medium">{item.dish.name}</p>
              <p className="text-sm text-zinc-500">
                {item.quantity} x ${item.dish.price.toLocaleString("es-AR")}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-semibold">
                ${(item.dish.price * item.quantity).toLocaleString("es-AR")}
              </span>
              <button
                onClick={() => remove(item.dish.id)}
                className="rounded-full border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
              >
                Quitar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <span className="text-lg font-semibold">Total</span>
        <span className="text-xl font-bold">
          ${total.toLocaleString("es-AR")}
        </span>
      </div>
    </div>
  );
}
