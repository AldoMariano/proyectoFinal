import { useEffect, useState } from "react";
import Card from "./Card";

function CategoryPage({ category, categoryLabel, addToCart }) {
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = data.map((product) => ({
          id: product.id,
          name: product.title,
          model: `ID-${product.id}`,
          hexColor: "#000000",
          b64Image: product.image,
          properties: product.description,
          price: product.price,
          category: product.category,
        }));
        setCategoryProducts(formattedProducts);
      })
      .catch((error) => console.error("Error al cargar productos:", error));
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">
        Categoría: {categoryLabel}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {categoryProducts.map((product) => (
          <Card
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;

