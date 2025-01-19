import { useState } from 'react'
import { CopiedIcon, CopyIcon, TrashIcon } from './Icons'

function Card({ card, onDelete  }) {
  const [showFullCard, setShowFullCard] = useState(false)
  const [copied, setCopied] = useState(false)

  const CopyToClipboard = () => {
    const cleanNumber = card.cardNumber.replace(/-/g, '') // Elimina los guiones
    navigator.clipboard.writeText(cleanNumber)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reset after 2 seconds
  }

  const generateBgGradient = () => {
    const BankType = card.cardNumber.slice(5, 9) // Obtener el segundo bloque (9598, 1299, etc.)
    if (BankType === '9598') return 'bg-gradient-to-r from-green-600 to-green-800 text-white'
    if (BankType === '1299') return 'bg-gradient-to-r from-red-600 to-red-800 text-white'
    return 'bg-gradient-to-r from-gray-300 to-gray-400 text-black' // Color predeterminado
  }

  return (
    <div
    key={card.id}
    className={`p-6 rounded-lg shadow-lg ${generateBgGradient()} flex flex-col items-center max-w-sm`}
  >
      <h2 className="text-lg font-semibold">{card.name}</h2>
      <div className="grid gap-y-2 text-center mt-4 w-full">
        {/* Número de tarjeta */}
        <p className="text-xl font-bold break-all">
          {showFullCard
            ? card.cardNumber // Mostrar número completo
            : `**** **** **** ${card.cardNumber.slice(-4)}`} {/* Ocultar número */}
        </p>

        {/* Botón de copiar */}
        {showFullCard && (
          <button
            onClick={CopyToClipboard}
            className="bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition w-10 mx-auto"
          >
            {copied ? <CopiedIcon /> : <CopyIcon />}
          </button>
        )}
      </div>

      {/* Botones de acciones */}
      <div className="flex justify-between items-center gap-x-4 mt-4 w-full">
        <button
          onClick={() => setShowFullCard(!showFullCard)}
          className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100 flex-grow"
        >
          {showFullCard ? 'Ocultar Número' : 'Mostrar Número'}
        </button>
        <button
          onClick={() => onDelete(card.id)}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
        >
          <TrashIcon className="inline-block w-5 h-5" />
        </button>
      </div>
    </div>
  )
}

export default Card
