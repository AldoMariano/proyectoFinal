import { useState } from 'react';

function DudasYComentarios() {
  const [activeTab, setActiveTab] = useState('comentarios');
  const [toggleStates, setToggleStates] = useState({});
  const [rating, setRating] = useState(0);

  const toggleFAQ = (index) => {
    setToggleStates(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqs = [
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer: "Aceptamos tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal, transferencias bancarias y pagos en efectivo contra entrega en algunas zonas."
    },
    {
      question: "¿Cuánto tiempo tarda la entrega?",
      answer: "El tiempo de entrega varía según tu ubicación. Generalmente entregamos en 2-5 días hábiles para envíos nacionales y 7-15 días para envíos internacionales."
    },
    {
      question: "¿Puedo devolver un producto si no me gusta?",
      answer: "Sí, tienes 30 días desde la fecha de compra para devolver cualquier producto en su estado original. Los gastos de envío de devolución corren por cuenta del cliente."
    },
    {
      question: "¿Cómo puedo conocer mi talla correcta?",
      answer: "En cada producto encontrarás una guía de tallas detallada. También puedes contactarnos y te ayudaremos a elegir la talla perfecta según tus medidas."
    },
    {
      question: "¿Ofrecen descuentos por compras al mayoreo?",
      answer: "Sí, ofrecemos descuentos especiales para compras de 10 piezas o más. Contacta nuestro equipo de ventas para obtener una cotización personalizada."
    },
    {
      question: "¿Los productos tienen garantía?",
      answer: "Todos nuestros productos cuentan con garantía de calidad. Si encuentras algún defecto de fabricación, te reemplazamos el producto sin costo adicional."
    }
  ];

  return (
    <div className="isolate pt-20 bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Dudas y Comentarios
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          En <span className="font-semibold text-yellow-600">Barto Style</span>, tu opinión es muy valiosa para nosotros. 
          Nos ayuda a mejorar constantemente y ofrecer la mejor experiencia de compra.
        </p>
      </div>

      {/* Tabs */}
      <div className="mx-auto max-w-4xl">
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('comentarios')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'comentarios'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Comentarios y Opiniones
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'faq'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Preguntas Frecuentes
            </button>
          </nav>
        </div>

        {/* Comentarios Tab */}
        {activeTab === 'comentarios' && (
          <div className="mx-auto max-w-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Comparte tu experiencia
              </h3>
              <p className="text-gray-600">
                Tu opinión nos ayuda a crecer y mejorar cada día
              </p>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  />
                </div>
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">
                  Califica tu experiencia
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`text-2xl ${
                        star <= rating ? 'text-yellow-400' : 'text-gray-300'
                      } hover:text-yellow-400 transition-colors`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>

              {/* Tipo de comentario */}
              <div>
                <label htmlFor="comment-type" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tipo de comentario
                </label>
                <select
                  id="comment-type"
                  name="comment-type"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="producto">Opinión sobre producto</option>
                  <option value="servicio">Experiencia de compra</option>
                  <option value="entrega">Proceso de entrega</option>
                  <option value="sugerencia">Sugerencia de mejora</option>
                  <option value="general">Comentario general</option>
                </select>
              </div>

              {/* Comentario */}
              <div>
                <label htmlFor="comment" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tu comentario u opinión
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  rows="5"
                  placeholder="Compártenos tu experiencia, sugerencias o cualquier comentario..."
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                ></textarea>
              </div>

              {/* Checkbox */}
              <div className="flex items-start space-x-3">
                <input
                  id="publish-consent"
                  name="publish-consent"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="publish-consent" className="text-sm text-gray-600">
                  Autorizo que mi comentario pueda ser publicado en la página web de Barto Style 
                  (tu email no será mostrado públicamente)
                </label>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-yellow-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors"
                >
                  Enviar Comentario
                </button>
              </div>
            </div>
          </div>
        )}

        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Preguntas Frecuentes
              </h3>
              <p className="text-gray-600">
                Encuentra respuestas rápidas a las dudas más comunes
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-medium text-gray-900">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        toggleStates[index] ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {toggleStates[index] && (
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                ¿No encontraste lo que buscabas?
              </p>
              <button
                onClick={() => setActiveTab('comentarios')}
                className="inline-flex items-center px-4 py-2 border border-yellow-600 text-yellow-600 rounded-md hover:bg-indigo-50 transition-colors"
              >
                Contáctanos directamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DudasYComentarios;