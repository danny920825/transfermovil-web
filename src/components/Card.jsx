import { useState } from 'react'
import { CopiedIcon, CopyIcon } from './Icons'

function Card({ card }) {
  const [showFullCard, setShowFullCard] = useState(false)
  const [copied, setCopied] = useState(false)

  const CopyToClipboard = () => {
    navigator.clipboard.writeText(card.cardNumber)
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
      <div className="flex flex-nowrap items-center gap-x-2">
      <p className="text-2xl font-bold mt-2">
        {showFullCard
          ? card.cardNumber // Muestra el número completo
          : `**** **** **** ${card.cardNumber.slice(-4)}`} {/* Oculta el número */}
      </p>
      {/* Botón de copiar */}
      {showFullCard && (
        <button
          onClick={CopyToClipboard}
          className="mt-2 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
        >
          {copied ? <CopiedIcon /> : <CopyIcon />}
        </button>
      )}
      </div>
      {/* Botón de alternar visibilidad */}
      <button
        onClick={() => setShowFullCard(!showFullCard)}
        className="mt-4 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-100"
      >
        {showFullCard ? 'Ocultar Número' : 'Mostrar Número'}
      </button>
    </div>
  )
}

export default Card
