import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const dishes = [
  {
    name: "Milanesa con puré",
    description: "Milanesa de carne con puré de papas casero",
    price: 8500,
    image: "https://placehold.co/400x300?text=Milanesa",
  },
  {
    name: "Ravioles de ricota",
    description: "Ravioles de ricota y espinaca con salsa roja",
    price: 9200,
    image: "https://placehold.co/400x300?text=Ravioles",
  },
  {
    name: "Ensalada César",
    description: "Pollo, croutones, queso parmesano y aderezo césar",
    price: 6500,
    image: "https://placehold.co/400x300?text=Ensalada",
  },
];

async function main() {
  for (const dish of dishes) {
    const existing = await prisma.dish.findFirst({
      where: { name: dish.name },
    });
    if (!existing) {
      await prisma.dish.create({ data: dish });
    }
  }
  console.log("Platos sembrados correctamente");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
