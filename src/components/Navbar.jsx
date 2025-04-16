export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-brand">
      <div className="text-white font-bold text-2xl">GreenStore</div>
      <ul className="hidden md:flex gap-6 text-white">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
}
