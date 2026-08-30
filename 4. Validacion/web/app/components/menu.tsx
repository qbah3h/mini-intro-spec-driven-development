"use client";

import { useCart } from "./cart-provider";

type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

export default function Menu({ dishes }: { dishes: Dish[] }) {
  const { add } = useCart();

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {dishes.map((dish) => (
        <div
          key={dish.id}
          className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
        >
          {dish.image.startsWith("data:") || dish.image.includes("placehold.co") ? (
            <div className="mb-4 flex h-48 w-full items-center justify-center rounded-xl bg-amber-500 p-4 text-center font-semibold text-white">
              {dish.name}
            </div>
          ) : (
            <img
              src={dish.image}
              alt={dish.name}
              className="mb-4 h-48 w-full rounded-xl object-cover"
            />
          )}
          <h3 className="text-lg font-semibold">{dish.name}</h3>
          <p className="mb-4 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
            {dish.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">
              ${dish.price.toLocaleString("es-AR")}
            </span>
            <button
              onClick={() => add(dish)}
              className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:bg-zinc-800"
            >
              Agregar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
