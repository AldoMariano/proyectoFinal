import imgDefault from './assets/react.svg';

function Card(props) {
  const { product } = props;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm w-72 h-96 flex flex-col overflow-hidden dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="w-full h-48 object-cover rounded-t-lg"
          src={product.b64Image ? product.b64Image : imgDefault}
          alt={product.name}
        />
      </a>
      <div className="p-4 flex flex-col justify-between flex-grow">
        <div>
          <a href="#">
            <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white truncate">
              {product.name ? product.name : 'Title'}
            </h5>
          </a>
          <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 overflow-hidden text-ellipsis line-clamp-3">
            {product.properties ? product.properties : 'Body description'}
          </p>
        </div>
        <a
          href="#"
          className="mt-4 inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ver producto
        </a>
      </div>
    </div>
  );
}

export default Card;
