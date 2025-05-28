import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Heart, Truck, Shield } from 'lucide-react';

function AcercaDe() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const reseñas = [
    {
      id: 1,
      nombre: "María García",
      ciudad: "Ciudad de México",
      comentario: "La calidad de la ropa es increíble. Cada pieza que he comprado ha superado mis expectativas. El estilo es único y moderno.",
      rating: 5,
      foto: "https://i.pinimg.com/736x/38/1f/8b/381f8be71c429502ce30d81eb8a1485f.jpg"
    },
    {
      id: 2,
      nombre: "Carlos Rodríguez",
      ciudad: "Guadalajara",
      comentario: "Barto Style ha revolucionado mi guardarropa. Sus diseños son frescos y la atención al cliente es excepcional.",
      rating: 5,
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 3,
      nombre: "Ana López",
      ciudad: "Monterrey",
      comentario: "Me encanta la diversidad de estilos que ofrecen. Siempre encuentro algo perfecto para cada ocasión.",
      rating: 5,
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    },
    {
      id: 4,
      nombre: "Diego Martínez",
      ciudad: "Puebla",
      comentario: "La experiencia de compra online es súper fácil y los productos llegan en perfectas condiciones.",
      rating: 5,
      foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face"
    }
  ];

  const modelosFotos = [
    "https://i.pinimg.com/736x/98/11/f9/9811f97a94ee1246bcc72da8dd9e35b2.jpg",
    "https://i.pinimg.com/736x/06/ff/fb/06fffba0ed625a561222d0e946811f77.jpg",
    "https://i.pinimg.com/736x/ed/b4/64/edb46401ee99244d79eeb9a489bfd461.jpg",
    "https://i.pinimg.com/736x/2d/f2/2f/2df22f948f91fb59b6c20e20e69b1f93.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reseñas.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reseñas.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reseñas.length) % reseñas.length);
  };

  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Hero Section */}
      <div className="relative px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200" aria-hidden="true">
            <defs>
              <pattern id="hero-pattern" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-pattern)" />
          </svg>
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500 bg-clip-text text-transparent">
            Barto Style
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-600 max-w-2xl mx-auto">
            Redefiniendo la moda contemporánea con estilo, calidad y personalidad única para cada ocasión
          </p>
        </div>
      </div>

      {/* Quiénes Somos */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">¿Quiénes Somos?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Barto Style nació de la pasión por crear ropa que no solo se vea increíble, sino que también haga que cada persona se sienta segura y auténtica. Somos una marca mexicana comprometida con la calidad, la innovación y el estilo contemporáneo.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Desde nuestros inicios, hemos trabajado incansablemente para ofrecer piezas únicas que reflejen la personalidad de quienes las portan. Cada diseño cuenta una historia, cada prenda es una declaración de estilo.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">50K+</div>
                <div className="text-sm text-gray-600">Clientes Satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">500+</div>
                <div className="text-sm text-gray-600">Diseños Únicos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-600">5</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div 
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <img 
                src={isHovering 
                  ? "https://i.pinimg.com/736x/88/8a/6d/888a6d52fa06ac244420b540a2922ab1.jpg" 
                  : "https://i.pinimg.com/736x/8e/02/d2/8e02d25d0422f6c4b509d3a6e2dec228.jpg"
                } 
                alt="Tienda Barto Style" 
                className="w-64 h-80 object-cover rounded-2xl shadow-2xl transition-all duration-500 ease-in-out"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border-2 border-yellow-200">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-gray-900">Hecho con amor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nuestro Impacto */}
      <div className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Nuestro Impacto</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Más que una marca de ropa, somos una comunidad que impulsa la confianza y la autoexpresión
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-yellow-200">
                <Shield className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Calidad Garantizada</h3>
              <p className="text-gray-600">
                Cada prenda pasa por rigurosos controles de calidad para asegurar durabilidad y comodidad excepcionales.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-yellow-200">
                <Truck className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Envíos Seguros</h3>
              <p className="text-gray-600">
                Entrega rápida y segura en toda la República Mexicana, con seguimiento en tiempo real de tu pedido.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-yellow-200">
                <Heart className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compromiso Social</h3>
              <p className="text-gray-600">
                Apoyamos a artesanos locales y prácticas sustentables para crear un impacto positivo en nuestras comunidades.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carrusel de Reseñas */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-lg text-gray-600">Historias reales de personas que confían en Barto Style</p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden border border-yellow-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-amber-500"></div>
              
              <div className="flex items-center justify-between mb-6">
                <button 
                  onClick={prevReview}
                  className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-yellow-700" />
                </button>
                
                <div className="flex space-x-2">
                  {reseñas.map((_, index) => (
                    <div 
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentReview ? 'bg-yellow-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={nextReview}
                  className="p-2 rounded-full bg-yellow-100 hover:bg-yellow-200 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-yellow-700" />
                </button>
              </div>
              
              <div className="text-center">
                <img 
                  src={reseñas[currentReview].foto} 
                  alt={reseñas[currentReview].nombre}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-800 mb-4 italic">
                  "{reseñas[currentReview].comentario}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-gray-900">{reseñas[currentReview].nombre}</div>
                  <div className="text-gray-600">{reseñas[currentReview].ciudad}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Galería de Modelos */}
      <div className="bg-yellow-50 py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Nuevas colecciones en Barto Style®</h2>
            <p className="text-lg text-gray-600">Descubre la colección 2025 en todos nuestros apartados</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
            {modelosFotos.map((foto, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="aspect-square">
                  <img 
                    src={foto} 
                    alt={`Modelo usando Barto Style ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-sm font-semibold">Colección 2025</div>
                  <div className="text-xs">Estilo Contemporáneo</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Únete a la Comunidad Barto Style
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Descubre tu estilo único y forma parte de una comunidad que celebra la individualidad
          </p>
          <button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-yellow-600 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explorar Colección
          </button>
        </div>
      </div>
    </div>
  );
}

export default AcercaDe;