import './App.css';
import Card from './Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CategoryPage from './CategoryPage';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const formattedProducts = data.map(product => ({
          name: product.title,
          model: `ID-${product.id}`,
          hexColor: "#000000",
          b64Image: product.image,
          properties: product.description,
          price: product.price
        }));
        setProducts(formattedProducts);
      })
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  };

  const carouselItems = [
    { type: 'image', src: '/assets/promo1.png' },
    { type: 'image', src: '/assets/mujer1.png' },
    { type: 'video', src: '/assets/video1.mp4' }
  ];

  const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="w-[90%] h-[400px] mx-auto mt-6">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <div key={index} className="w-full h-[400px]">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`carousel-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <video
                  className="w-full h-full object-cover rounded-lg"
                  autoPlay
                  loop
                  muted
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div className="text-center">
              <Carousel />
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                {products.map((product, index) => (
                  <Card key={index} product={product} addToCart={addToCart} />
                ))}
              </div>

              {/* Carrito debajo del catálogo */}
              <div className="mt-10 bg-white p-4 max-w-xl mx-auto rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Carrito de compras</h2>
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">El carrito está vacío.</p>
                ) : (
                  <ul className="space-y-2">
                    {cartItems.map((item, index) => (
                      <li key={index} className="text-left">
                        🛒 {item.name} - ${item.price.toFixed(2)} MXN
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          }
        />
        <Route path="/Acerca De" element={<About />} />
        <Route path="/Contacto" element={<ContactUs />} />
        <Route
          path="/Hombre"
          element={<CategoryPage category="men's clothing" addToCart={addToCart} />}
        />
        <Route
          path="/Mujer"
          element={<CategoryPage category="women's clothing" addToCart={addToCart} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
