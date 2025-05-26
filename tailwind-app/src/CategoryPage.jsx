import { useEffect, useState } from "react";
import Card from "./Card";

function CategoryPage({ category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const formattedProducts = data.map((product) => ({
          name: product.title,
          model: `ID-${product.id}`,
          hexColor: "#000000",
          b64Image: product.image,
          properties: product.description,
          price: product.price, 
        }));

        setProducts(formattedProducts);
      })
      .catch((err) => console.error("Error al cargar productos por categoría:", err));
  }, [category]);

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {products.map((product, index) => (
        <Card key={index} product={product} />
      ))}
    </div>
  );
}

export default CategoryPage;
