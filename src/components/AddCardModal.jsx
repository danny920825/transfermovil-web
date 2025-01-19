function AddCardModal({ isOpen, onClose, onSubmit, cardNumber, setCardNumber, isValid }) {
  const formatCardNumber = (value) => {
    let sanitized = value.replace(/[^0-9]/g, '')
    return sanitized.match(/.{1,4}/g)?.join('-') || ''
  }

  const handleCardNumberChange = (e) => {
    const value = e.target.value
    setCardNumber(formatCardNumber(value))
  }

  if (!isOpen) return null // Si no está abierto, no renderizamos nada

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Nueva Tarjeta</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block font-medium">Número de Tarjeta</label>
            <input
              type="text"
              id="cardNumber"
              value={cardNumber}
              onChange={handleCardNumberChange}
              className={`w-full p-3 border rounded-md focus:ring-2 ${
                isValid ? 'focus:ring-blue-500' : 'border-red-500'
              }`}
              placeholder="9225-9598-7123-4567"
              required
            />
            {!isValid && (
              <p className="text-red-500 text-sm mt-1">
                El número de tarjeta debe tener 16 dígitos (4 bloques de 4).
              </p>
            )}
          </div>
          <div>
            <label htmlFor="name" className="block font-medium">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex justify-end gap-x-4">
            <button
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className={`px-4 py-2 rounded-lg ${
                isValid ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
              disabled={!isValid}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddCardModal