import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Nav from './Nav';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import CategoryPage from './CategoryPage';
import CartPage from './CartPage';
import Home from './Home';
import Login from './Login';
function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const categoryMapping = {
    "men's clothing": "Hombre",
    "women's clothing": "Mujer",
    "electronics": "Electrónica",
    "jewelery": "Joyería"
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const formattedProducts = data.map(product => ({
          id: product.id,
          name: product.title,
          model: `ID-${product.id}`,
          hexColor: "#000000",
          b64Image: product.image,
          properties: product.description,
          price: product.price,
          category: product.category
        }));
        setProducts(formattedProducts);
      })
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  const categoryRoutes = Object.entries(categoryMapping).map(([key, label]) => (
    <Route
      key={key}
      path={`/${label}`}
      element={
        <CategoryPage
          key={key} 
          category={key}
          categoryLabel={label}
          addToCart={addToCart}
          cartItemsCount={cartItems.length}
        />
      }
    />
  ));

  return (
    <BrowserRouter>
      <Nav cartItemsCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Acerca De" element={<About />} />
        <Route path="/Contacto" element={<ContactUs />} />
        {categoryRoutes}
        <Route
          path="/carrito"
          element={
            <CartPage
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
