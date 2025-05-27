import { Link } from "react-router-dom";

function CartPage({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    alert("¡Gracias por tu compra! 😎\n(En proyecto: integración con pasarela de pago)");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
    <h2 className="text-3xl font-semibold mb-6 border-b pb-2">Carrito de compras</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">El carrito está vacío.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white shadow-md rounded-lg p-4"
            >
              <div className="flex items-center">
                <img
                  src={item.b64Image}
                  alt={item.name}
                  className="w-24 h-24 object-contain mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} MXN</p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
              >
                Eliminar
              </button>
            </div>
          ))}
          <div className="text-right font-semibold text-lg mt-4">
            Total: ${total.toFixed(2)} MXN
          </div>
          <div className="flex justify-between mt-6">
            <Link
              to="/"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
            >
              Seguir comprando
            </Link>
            <button
              onClick={handleCheckout}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
            >
              Pagar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
