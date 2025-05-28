
import { Link } from "react-router-dom";
import { FaShoppingBag, FaSearch, FaUser } from "react-icons/fa";
import reactLogo from "./assets/simp.gif";

function Nav({ cartItemsCount }) {
  const navigation = [
    { title: "Hombre", href: "/Hombre" },
    { title: "Mujer", href: "/Mujer" },
    { title: "Electrónica", href: "/Electrónica" },
    { title: "Joyería", href: "/Joyería" },
    { title: "Acerca De", href: "/Acerca De" },
    { title: "Dudas y Comentarios", href: "/Contacto" }
  ];

  return (
    <header className="bg-yellow-400 shadow-sm sticky top-0 z-50 border-b">
      <div className="bg-yellow-100 text-sm text-gray-600 px-4 py-2 flex justify-between items-center">
        <span>Envío gratis en compras mayores a $99</span>
        <div className="flex gap-4">
          <Link to="/">Ayuda</Link>
          <Link to="/">Mi cuenta</Link>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src={reactLogo} alt="Logo" className="h-8 w-auto" />
          <span className="text-2xl font-bold text-gray-800">BartoStyle</span>
        </Link>

        <nav className="hidden md:flex gap-8 font-medium">
          {navigation.map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="text-gray-700 hover:text-black transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <FaSearch className="text-xl cursor-pointer text-gray-600 hover:text-black" />
          <Link to="/login">
            <FaUser className="text-xl cursor-pointer text-gray-600 hover:text-black" />
          </Link>
          <Link to="/carrito" className="relative">
            <FaShoppingBag className="text-2xl text-gray-700 hover:text-black" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1.5">
                {cartItemsCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      <div className="md:hidden flex justify-center gap-4 pb-3 border-t">
        {navigation.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </header>
  );
}

export default Nav;
