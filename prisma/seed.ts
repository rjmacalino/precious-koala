import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";
import { PRODUCTS } from "../src/data/products.js";

const prisma = new PrismaClient();

async function main() {
  for (const product of PRODUCTS) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: {
        id: product.id,
        name: product.name,
        pack: product.pack,
        priceCents: Math.round(product.price * 100),
        image: product.image,
        badge: product.badge ?? null,
        blurb: product.blurb,
        specs: product.specs,
      },
    });
  }

  console.log(`Seeded ${PRODUCTS.length} products`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
