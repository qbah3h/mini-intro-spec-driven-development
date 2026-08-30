import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customer, phone, address, notes, total, items } = body as {
      customer: string;
      phone: string;
      address: string;
      notes?: string;
      total: number;
      items: { dishId: string; quantity: number; price: number }[];
    };

    if (!customer || !phone || !address || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Datos incompletos" }, { status: 400 });
    }

    const order = await prisma.$transaction(async (tx) => {
      const created = await tx.order.create({
        data: {
          customer,
          phone,
          address,
          notes: notes || null,
          total,
        },
      });

      for (const item of items) {
        await tx.orderItem.create({
          data: {
            quantity: item.quantity,
            price: item.price,
            dishId: item.dishId,
            orderId: created.id,
          },
        });
      }

      return created;
    });

    return NextResponse.json({ id: order.id }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error al guardar el pedido" }, { status: 500 });
  }
}
