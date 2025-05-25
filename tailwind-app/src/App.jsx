import './App.css';
import Card from './Card';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import TeamSection from './TeamSection';
import NotFound from './NotFound';
import Nav from './Nav';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const products = [

  {
    name: "Electronic Frozen Soap",
    model: "978-1-894542-44-9",
    hexColor: "#494719",
    b64Image: "/assets/casualmujer.png",
    properties: "Una camta cómoda para el uso diario. Hecha con algodón suave."
  },

    {
      name: "Intelligent Soft Pants",
      model: "978-1-56619-909-4",
      hexColor: "#123456",
      b64Image: "/assets/deportivamujer.png",
      properties: "Pantalosdsadnes casuales con ajuste moderno y bolsillos funcionales."
    },
    {
      name: "Refined Cotton Shirt",
      model: "978-1-4028-9462-6",
      hexColor: "#abcdef",
      b64Image: "/assets/urbanamujer.png",
      properties: "Camisa formal ideal para la oficina o eventos sociales."
    },
    {
      name: "Refined Cotton Shirt",
      model: "978-1-4028-9462-6",
      hexColor: "#abcdef",
      b64Image: "https://picsum.photos/seed/5hfs23eX/640/480",
      properties: "Camisa formal ideal para la oficina o eventos sociales."
    },
    {
      name: "Electronic Frozen Soap",
      model: "978-1-894542-44-9",
      hexColor: "#494719",
      b64Image: "https://picsum.photos/seed/5htb27xeX/640/480",
      properties: "Una camiseta cómoda para el uso diario. Hecha con algodón suave."
    },
    {
      name: "Intelligent Soft Pants",
      model: "978-1-56619-909-4",
      hexColor: "#123456",
      b64Image: "https://picsum.photos/seed/5hsagdxeX/640/480",
      properties: "Pantalones casuales con ajuste moderno y bolsillos funcionales."
    },
    {
      name: "Refined Cotton Shirt",
      model: "978-1-4028-9462-6",
      hexColor: "#abcdef",
      b64Image: "https://picsum.photos/seed/5hfs23eX/640/480",
      properties: "Camisa formal ideal para la oficina o eventos sociales."
    },
    {
      name: "Refined Cotton Shirt",
      model: "978-1-4028-9462-6",
      hexColor: "#abcdef",
      b64Image: "https://picsum.photos/seed/5hfs23eX/640/480",
      properties: "Camisa formal ideal para la oficina o eventos sociales."
    }
  ];

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
        <Route path="/" element={
          <div className="text-center">
            <h1 className="text-4xl font-bold mt-8"></h1>
            <Carousel />
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {products.map((product, index) => (
                // Aquí envuelvo cada Card en un div con la animación
                <div key={index} className="rotate-center">
                  <Card product={product} />
                </div>
              ))}
            </div>
          </div>
        } />
        <Route path="/Acerca De" element={<About />} />
        <Route path="/Contacto" element={<ContactUs />} />
        <Route path="/Hombre" element={<TeamSection />} />
        <Route path="/Mujer" element={<TeamSection />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
