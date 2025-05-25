import './App.css';
import Card from './Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection';
import NotFound from './NotFound';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryPage from './CategoryPage';


function App() {
  const [products, setProducts] = useState([]);

  // Cargar productos desde la API al iniciar
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const formattedProducts = data.map(product => ({
          name: product.title,
          model: `ID-${product.id}`,
          hexColor: "#000000",
          b64Image: product.image,
          properties: product.description
        }));
        setProducts(formattedProducts);
      })
      .catch(err => console.error("Error al cargar productos:", err));
  }, []);

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
              <h1 className="text-4xl font-bold mt-8">BARTOSTYLE</h1>
              <Carousel />
              <div className="flex flex-wrap justify-center gap-6 mt-10">
                {products.map((product, index) => (
                  <div key={index} className="rotate-center">
                    <Card product={product} />
                  </div>
                ))}
              </div>
            </div>
          }
        />
        <Route path="/Acerca De" element={<About />} />
        <Route path="/Contacto" element={<ContactUs />} />
        <Route path="/Hombre" element={<TeamSection />} />
        <Route path="/Mujer" element={<TeamSection />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/Hombre" element={<CategoryPage category="men's clothing" />} />
        <Route path="/Mujer" element={<CategoryPage category="women's clothing" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
