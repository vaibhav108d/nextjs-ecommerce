import { PrismaClient } from "@prisma/client"
import slugify from "slugify"

const prisma = new PrismaClient()

async function main() {
  await prisma.product.deleteMany()

  const products = [
    {
      name: "T-Shirt",
      slug: slugify("T-Shirt"),
      category: "Apparel",
      inventory: 25,
      priceInCents: 1999,
      filePath: "/products/tshirt.zip",
      imagePath: "/products/tshirt.jpg",
      description: "A comfy cotton t-shirt",
      isAvailableForPurchase: true,
    },
    {
      name: "Mug",
      slug: slugify("Mug"),
      category: "Drinkware",
      inventory: 15,
      priceInCents: 999,
      filePath: "/products/mug.zip",
      imagePath: "/products/mug.jpg",
      description: "Ceramic coffee mug",
      isAvailableForPurchase: true,
    },
    {
      name: "Sticker Pack",
      slug: slugify("Sticker Pack"),
      category: "Accessories",
      inventory: 50,
      priceInCents: 499,
      filePath: "/products/stickers.zip",
      imagePath: "/products/stickers.jpg",
      description: "Set of 5 vinyl stickers",
      isAvailableForPurchase: true,
    },
  ]

  for (const p of products) await prisma.product.create({ data: p })

  console.log("✅ Seeded products")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })