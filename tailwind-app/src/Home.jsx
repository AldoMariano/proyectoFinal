import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Banner Promocional */}
      <div className="w-full relative h-[500px]">
        <img
          src="/assets/promo1.png"
          alt="Banner promocional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center p-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NUEVA COLECCIÓN</h1>
          <p className="text-lg md:text-xl mb-6">Descubre lo más nuevo para esta temporada</p>
          <Link
            to="/Hombre"
            className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Comprar ahora
          </Link>
        </div>
      </div>

      {/* Cinta Hot Sale */}
      <div className="w-full bg-red-600 py-2 text-center text-white text-lg font-semibold tracking-wider">
        🔥 ¡HOT SALE! Descuentos hasta del 60% en todas las categorías 🔥
      </div>

      {/* Categorías */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-6 max-w-6xl">
        <Link to="/Hombre" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
          <img src="/assets/Hombre.png" alt="Hombre" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 bg-black/50 w-full text-white text-xl font-semibold text-center py-3">
            Hombre
          </div>
        </Link>
        <Link to="/Mujer" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
          <img src="/assets/mujer.png" alt="Mujer" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 bg-black/50 w-full text-white text-xl font-semibold text-center py-3">
            Mujer
          </div>
        </Link>
        <Link to="/Joyería" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
          <img src="/assets/joyeria.png" alt="Joyería" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 bg-black/50 w-full text-white text-xl font-semibold text-center py-3">
            Joyería
          </div>
        </Link>
        <Link to="/Electrónica" className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition">
          <img src="/assets/electronica.png" alt="Electrónica" className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
          <div className="absolute bottom-0 bg-black/50 w-full text-white text-xl font-semibold text-center py-3">
            Electrónica
          </div>
        </Link>
      </div>

      {/* Sección visual inferior */}
<div className="w-full max-w-6xl px-6 mt-16 mb-10">
  <div className="rounded-2xl overflow-hidden shadow-xl bg-black h-[500px] flex justify-center items-center">
    <img
      src="/assets/promo2.png"
      alt="Promoción especial"
      className="max-h-full object-contain"
    />
  </div>
</div>
    </div>
  );
}

export default Home;
