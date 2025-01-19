import React from 'react'
import BanmetOption from './components/BanmetOption'
import Cards from './components/Cards'
import Operations from './components/Operations'

function App() {
  const [tabName, setTabName] = React.useState('Options')

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 max-w-screen-lg mx-auto py-10">
      {/* Encabezado */}
      <header className="text-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-2">Transfermovil Web USSD</h2>
        <p className="text-lg">
          Una alternativa web para almacenar tus tarjetas y gestionar operaciones. 
          Ideal para los que sufren de tener un iPhone en Qba.
        </p>
      </header>

      {/* Tabs */}
      <div className="flex justify-center mt-8">
        {['Options', 'Opetations', 'Cards'].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 sm:px-6 mx-1 sm:mx-2 rounded-lg text-base sm:text-lg font-semibold transition ${
              tabName === tab
                ? 'bg-blue-500 text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setTabName(tab)}
          >
            {tab === 'Options' ? 'Opciones' : tab === 'Opetations' ? 'Operaciones' : 'Tarjetas'}
          </button>
        ))}
      </div>

      {/* Contenido del tab seleccionado */}
      <div className="mt-8 bg-white rounded-lg shadow-md">
        {tabName === 'Options' && <BanmetOption />}
        {tabName === 'Opetations' && <Operations />}
        {tabName === 'Cards' && <Cards />}
      </div>
    </div>
  )
}

export default App
