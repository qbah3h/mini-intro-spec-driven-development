export const dynamic = "force-dynamic";

import { prisma } from "@/lib/prisma";
import Menu from "./components/menu";
import Cart from "./components/cart";
import OrderForm from "./components/order-form";

export default async function Home() {
  const dishes = await prisma.dish.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold sm:text-3xl">A la Orden</h1>
      </header>

      <section className="mb-10 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="mb-3 text-xl font-semibold sm:text-2xl">Quiénes somos</h2>
        <p className="text-zinc-700 dark:text-zinc-300">
          Somos A la Orden, una plataforma pensada para conectar a las personas con restaurantes de forma simple y confiable. Creemos que pedir comida debe ser fácil, rápido y sin fricciones, tanto para quienes piden como para quienes preparan y entregan.
        </p>
      </section>

      <main className="grid gap-8 lg:grid-cols-[1fr_24rem]">
        <section className="min-w-0">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl">Nuestros platos</h2>
          <Menu dishes={dishes} />
        </section>
        <aside className="min-w-0 space-y-6">
          <Cart />
          <OrderForm />
        </aside>
      </main>
    </div>
  );
}
