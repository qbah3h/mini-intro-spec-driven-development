export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolved = await Promise.resolve(params as any);
  const { id } = resolved as { id: string };

  const order = await prisma.order.findUnique({
    where: { id },
    include: {
      items: {
        include: { dish: true },
      },
    },
  });

  if (!order) {
    return (
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Pedido no encontrado</h1>
        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-foreground px-6 py-2 text-background"
        >
          Volver al menú
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10">
      <h1 className="mb-6 break-words text-2xl font-bold sm:text-3xl">¡Pedido confirmado!</h1>
      <p className="mb-2 text-zinc-600 dark:text-zinc-400">
        Pedido n.º <span className="font-semibold">{order.id}</span>
      </p>
      <p className="mb-6 text-sm text-zinc-500">
        Realizado el {new Date(order.createdAt).toLocaleString("es-AR")}
      </p>

      <div className="mb-6 break-words rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-4 text-lg font-semibold">Datos del cliente</h2>
        <p>
          <strong>Nombre:</strong> {order.customer}
        </p>
        <p>
          <strong>Teléfono:</strong> {order.phone}
        </p>
        <p>
          <strong>Dirección:</strong> {order.address}
        </p>
        {order.notes && (
          <p>
            <strong>Notas:</strong> {order.notes}
          </p>
        )}
      </div>

      <div className="mb-6 rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-4 text-lg font-semibold">Detalle</h2>
        <ul className="space-y-3">
          {order.items.map((item) => (
            <li
              key={item.id}
              className="flex flex-wrap items-center justify-between gap-4 sm:flex-nowrap"
            >
              <span className="min-w-0 break-words">
                {item.quantity} x {item.dish.name}
              </span>
              <span className="flex-shrink-0 font-semibold">
                ${(item.price * item.quantity).toLocaleString("es-AR")}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex items-center justify-between border-t border-zinc-200 pt-4 dark:border-zinc-800">
          <span className="text-lg font-semibold">Total</span>
          <span className="text-xl font-bold">
            ${order.total.toLocaleString("es-AR")}
          </span>
        </div>
      </div>

      <Link
        href="/"
        className="inline-block rounded-full bg-foreground px-6 py-3 text-background transition hover:bg-zinc-800"
      >
        Volver al menú
      </Link>
    </div>
  );
}
