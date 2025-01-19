import React, { useState } from 'react'
import Card from './Card'
import { PlusIcon } from './Icons'
import AddCardModal from './AddCardModal'

function Cards() {
  const [cards, setCards] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [cardNumber, setCardNumber] = useState('')
  const [isValid, setIsValid] = useState(true)

  React.useEffect(() => {
    const savedCards = JSON.parse(localStorage.getItem('cards')) || []
    setCards(savedCards)
  }, [])

  const handleDelete = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id)
    setCards(updatedCards)
    localStorage.setItem('cards', JSON.stringify(updatedCards))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!isValid) return

    const name = event.target.name.value
    const newCard = {
      id: Math.random(),
      cardNumber,
      name
    }
    const updatedCards = [...cards, newCard]
    setCards(updatedCards)
    localStorage.setItem('cards', JSON.stringify(updatedCards))
    setShowModal(false)
    setCardNumber('')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">Tus Tarjetas</h1>
        <p className="text-gray-600 max-w-lg mx-auto">
          Esta información solo se guarda en tu dispositivo. Si cambias de teléfono, deberás ingresarla nuevamente.
        </p>
      </header>

      <div className="flex flex-col gap-y-4 mt-6">
        {cards.map((card) => (
          <Card key={card.id} card={card} onDelete={handleDelete} />
        ))}

        {cards.length === 0 && (
          <p className="text-center text-gray-500">No tienes tarjetas agregadas.</p>
        )}
      </div>

      <button
        className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md mt-6 flex items-center justify-center gap-x-2 mx-auto hover:bg-blue-700 transition"
        onClick={() => setShowModal(true)}
      >
        <PlusIcon /> Agregar Tarjeta
      </button>

      <AddCardModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmit}
        cardNumber={cardNumber}
        setCardNumber={(value) => {
          setCardNumber(value)
          setIsValid(value.replace(/-/g, '').length === 16)
        }}
        isValid={isValid}
      />
    </div>
  )
}

export default Cards
