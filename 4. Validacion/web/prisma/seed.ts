import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function placeholderImage(name: string) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300"><rect width="400" height="300" fill="#f59e0b"/><text x="200" y="150" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#fff">${name}</text></svg>`;
  const base64 = Buffer.from(svg).toString("base64");
  return `data:image/svg+xml;base64,${base64}`;
}

const dishes = [
  {
    name: "Milanesa con puré",
    description: "Milanesa de carne con puré de papas casero",
    price: 8500,
    image: "/images/milanesa.jpg",
  },
  {
    name: "Ravioles de ricota",
    description: "Ravioles de ricota y espinaca con salsa roja",
    price: 9200,
    image: "/images/ravioli.jpg",
  },
  {
    name: "Ensalada César",
    description: "Pollo, croutones, queso parmesano y aderezo césar",
    price: 6500,
    image: "/images/ensalada.jpg",
  },
];

async function main() {
  for (const dish of dishes) {
    const existing = await prisma.dish.findFirst({
      where: { name: dish.name },
    });
    if (existing) {
      await prisma.dish.update({
        where: { id: existing.id },
        data: dish,
      });
    } else {
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
