import { useState } from "react";
import { Link } from "react-router-dom";

function CartPage({ cartItems, removeFromCart }) {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const shippingCost = 99;
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal + shippingCost;

  const handleCheckout = () => {
    if (!formData.name || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      alert("Por favor completa todos los campos del formulario.");
      return;
    }

    alert(`¡Gracias por tu compra, ${formData.name}! 😎\nTotal pagado: $${total.toFixed(2)} MXN`);
    // Aquí iría lógica para enviar datos a una pasarela de pago
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 border-b pb-2">🛒 Carrito de compras</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">El carrito está vacío.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Productos en el carrito */}
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white shadow rounded-lg p-4"
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

            <div className="text-right mt-4">
              <p>Subtotal: ${subtotal.toFixed(2)} MXN</p>
              <p>Envío: ${shippingCost.toFixed(2)} MXN</p>
              <p className="text-xl font-bold">Total: ${total.toFixed(2)} MXN</p>
            </div>
            <Link
              to="/"
              className="inline-block mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
            >
              Seguir comprando
            </Link>
          </div>

          {/* Formulario de pago */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">💳 Información de pago</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-700">Nombre del titular</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="Juan Pérez"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Número de tarjeta</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Fecha de expiración</label>
                  <input
                    type="text"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-gray-700">CVV</label>
                  <input
                    type="text"
                    name="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="123"
                    maxLength={4}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
              >
                Pagar ${total.toFixed(2)} MXN
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
