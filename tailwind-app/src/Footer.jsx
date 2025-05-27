import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 mt-20 border-t">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        {/* Tienda */}
        <div>
          <h4 className="text-lg font-semibold mb-4">BartoStyle</h4>
          <ul className="space-y-2">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Hombre">Hombre</Link></li>
            <li><Link to="/Mujer">Mujer</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </div>

        {/* Información */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Información</h4>
          <ul className="space-y-2">
            <li><Link to="/Acerca De">Acerca de</Link></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Términos y condiciones</a></li>
            <li><a href="#">Envíos y devoluciones</a></li>
          </ul>
        </div>

        {/* Ayuda */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Ayuda</h4>
          <ul className="space-y-2">
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Soporte técnico</a></li>
            <li><a href="#">Rastrea tu pedido</a></li>
            <li><a href="#">Promociones</a></li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
          <div className="flex space-x-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 py-4 border-t">
        © {new Date().getFullYear()} BartoStyle. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
