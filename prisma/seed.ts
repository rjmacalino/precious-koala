import "dotenv/config";
import { PrismaClient } from "../src/generated/prisma/client.js";

const prisma = new PrismaClient();

const PRODUCTS = [
  {
    id: "bmsb-220-30",
    name: "Breast Milk Storage Bags 220ml",
    pack: "30 Pack",
    priceCents: 1495,
    image: "/assets/banner.png",
    badge: "Best Seller",
    blurb:
      "Pre-sterilised, self-standing storage bags with a smart temperature indicator and double-zip seal.",
    specs: ["220ml capacity", "30 bags", "Gamma-ray pre-sterilised", "BPA-free PET/LDPE"],
  },
  {
    id: "bmsb-220-60",
    name: "Breast Milk Storage Bags 220ml",
    pack: "60 Pack (Value)",
    priceCents: 2695,
    image: "/assets/banner.png",
    badge: "Best Value",
    blurb:
      "Double the supply for busy weeks. Same trusted seal, temperature indicator and self-standing base.",
    specs: ["220ml capacity", "60 bags", "Gamma-ray pre-sterilised", "BPA-free PET/LDPE"],
  },
  {
    id: "bmsb-220-90",
    name: "Breast Milk Storage Bags 220ml",
    pack: "90 Pack (Family)",
    priceCents: 3795,
    image: "/assets/banner.png",
    badge: null,
    blurb:
      "Our largest pack for stocking up the freezer. Eco-friendly, recyclable and freezer-safe.",
    specs: ["220ml capacity", "90 bags", "Gamma-ray pre-sterilised", "BPA-free PET/LDPE"],
  },
];

async function main() {
  for (const product of PRODUCTS) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: product,
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
