import imgDefault from './assets/react.svg';

function Card({ product, addToCart }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('es-MX', {
      style: 'currency',
      currency: 'MXN'
    }).format(price);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-72 flex flex-col overflow-hidden dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition-transform duration-300 hover:scale-105">
      <a href="#">
        <img
          className="w-full h-48 object-contain rounded-t-lg bg-white"
          src={product.b64Image ? product.b64Image : imgDefault}
          alt={product.name}
        />
      </a>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <a href="#">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {product.name}
            </h5>
          </a>
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 overflow-hidden text-ellipsis line-clamp-3">
            {product.properties}
          </p>
          <p className="text-base font-semibold text-green-600 dark:text-green-400 mt-2">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <a
            href="#"
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver producto
          </a>
          <button
            onClick={() => addToCart(product)}
            className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
