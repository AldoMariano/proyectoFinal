// src/CategoryPage.jsx
import { useEffect, useState } from "react";
import Card from "./Card";

function CategoryPage({ category }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      });
  }, [category]);

  return (
    <div className="text-center mt-8">
      <h2 className="text-3xl font-bold mb-6">{category.toUpperCase()}</h2>
      {loading ? (
        <div className="text-lg animate-pulse text-blue-600">Cargando productos...</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {products.map((product) => (
            <Card key={product.id} product={{
              name: product.title,
              properties: product.description,
              b64Image: product.image
            }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
