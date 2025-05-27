import './App.css';
import Card from './Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import NotFound from './NotFound';
import Nav from './Nav';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import CategoryPage from './CategoryPage';
import CartPage from './CartPage';
import Login from './Login'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const categoryRoutes = Object.entries(categoryMapping).map(([key, label]) => (
    <Route
      key={key}
      path={`/${label}`}
      element={
        <CategoryPage
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
        <Route path="/login" element={<Login />} /> 
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
            </div>
          }
        />
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
