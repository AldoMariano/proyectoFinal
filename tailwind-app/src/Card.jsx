import imgDefault from './assets/react.svg';

function Card({ product, addToCart }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md w-72 flex flex-col overflow-hidden transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="bg-white flex items-center justify-center h-48 overflow-hidden">
        <img
          className="object-contain max-h-full"
          src={product.b64Image ? product.b64Image : imgDefault}
          alt={product.name}
        />
      </div>

      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <h5 className="text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h5>
          <p className="text-sm text-gray-600 mt-1 h-12 overflow-hidden">
            {product.properties}
          </p>
          <p className="text-base font-bold text-green-600 mt-3">
            {formatPrice(product.price)}
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <a
            href="#"
            className="inline-block text-sm text-center text-white bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2 transition"
          >
            Ver producto
          </a>
          <button
            onClick={() => addToCart(product)}
            className="inline-block text-sm text-center text-white bg-green-600 hover:bg-green-700 rounded-md px-4 py-2 transition"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
