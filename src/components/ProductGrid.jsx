const products = [
  { id: 1, name: "ropa", price: "$180", image: "https://via.placeholder.com/300" },
  { id: 2, name: "aaaa", price: "$40", image: "https://via.placeholder.com/300" },
  { id: 3, name: "Tenis", price: "$120", image: "https://via.placeholder.com/300" },
];

export default function ProductGrid() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Nuestros Productos</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-2xl shadow p-4 hover:scale-105 transition">
            <img src={product.image} alt={product.name} className="rounded-xl h-48 w-full object-cover" />
            <h3 className="mt-4 text-xl font-semibold">{product.name}</h3>
            <p className="text-brand-dark font-bold">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
