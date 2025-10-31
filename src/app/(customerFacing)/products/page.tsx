import db from "@/db/db"

export default async function ProductsPage() {
  const products = await db.product.findMany() // no filter, no cache
  console.log("PRODUCTS FROM DB:", products)   // check terminal

  if (products.length === 0) return <p>No products in DB</p>

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((p) => (
        <div key={p.id} className="border p-4 rounded">
          <img src={p.imagePath} alt={p.name} className="h-40 w-full object-cover" />
          <h2 className="mt-2 font-bold">{p.name}</h2>
          <p>${(p.priceInCents / 100).toFixed(2)}</p>
        </div>
      ))}
    </div>
  )
}