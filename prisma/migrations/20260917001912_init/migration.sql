-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "pack" TEXT NOT NULL,
    "priceCents" INTEGER NOT NULL,
    "image" TEXT NOT NULL,
    "badge" TEXT,
    "blurb" TEXT NOT NULL,
    "specs" TEXT[],

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);
