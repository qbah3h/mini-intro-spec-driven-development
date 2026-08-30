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
        <h1 className="text-3xl font-bold">A la Orden</h1>
      </header>
      <main className="grid gap-8 lg:grid-cols-[1fr_24rem]">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Nuestros platos</h2>
          <Menu dishes={dishes} />
        </section>
        <aside className="space-y-6">
          <Cart />
          <OrderForm />
        </aside>
      </main>
    </div>
  );
}
