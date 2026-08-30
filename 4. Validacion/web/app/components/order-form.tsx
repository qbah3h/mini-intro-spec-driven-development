"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "./cart-provider";

export default function OrderForm() {
  const { items, total, count, clear } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const payload = {
      customer: String(formData.get("customer")),
      phone: String(formData.get("phone")),
      address: String(formData.get("address")),
      notes: String(formData.get("notes")),
      total,
      items: items.map((i) => ({
        dishId: i.dish.id,
        quantity: i.quantity,
        price: i.dish.price,
      })),
    };

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("No se pudo crear el pedido");
      const data = await res.json();
      clear();
      router.push(`/pedido/${data.id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  }

  if (count === 0) {
    return null;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
    >
      <h2 className="mb-4 text-xl font-semibold">Datos de envío</h2>
      <div className="grid gap-4">
        <div>
          <label htmlFor="customer" className="mb-1 block text-sm font-medium">
            Nombre
          </label>
          <input
            id="customer"
            name="customer"
            required
            className="w-full rounded-xl border border-zinc-300 p-3 dark:border-zinc-700 dark:bg-zinc-900"
            placeholder="Juan Pérez"
          />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium">
            Teléfono
          </label>
          <input
            id="phone"
            name="phone"
            required
            className="w-full rounded-xl border border-zinc-300 p-3 dark:border-zinc-700 dark:bg-zinc-900"
            placeholder="11 1234-5678"
          />
        </div>
        <div>
          <label htmlFor="address" className="mb-1 block text-sm font-medium">
            Dirección de envío
          </label>
          <input
            id="address"
            name="address"
            required
            className="w-full rounded-xl border border-zinc-300 p-3 dark:border-zinc-700 dark:bg-zinc-900"
            placeholder="Av. Siempre Viva 123"
          />
        </div>
        <div>
          <label htmlFor="notes" className="mb-1 block text-sm font-medium">
            Notas
          </label>
          <textarea
            id="notes"
            name="notes"
            rows={3}
            className="w-full rounded-xl border border-zinc-300 p-3 dark:border-zinc-700 dark:bg-zinc-900"
            placeholder="Sin sal, llamar al timbre..."
          />
        </div>
      </div>
      {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full rounded-full bg-foreground py-3 font-medium text-background transition hover:bg-zinc-800 disabled:opacity-60"
      >
        {loading
          ? "Enviando..."
          : `Confirmar pedido - $${total.toLocaleString("es-AR")}`}
      </button>
    </form>
  );
}
