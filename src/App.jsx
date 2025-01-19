import React from 'react'
import BanmetOption from './components/BanmetOption'
import Cards from './components/Cards'
import Operations from './components/Operations'

function App() {
  const [tabName, setTabName] = React.useState('Options')
  return (
    <div className="min-h-screen w-full px-10 max-w-screen-lg mx-auto border  py-20">
      {/* render 2 tabs. Options and Cards */}
      <h2 className='text-2xl text-center font-bold mb-2'>Transfermovil Web USSD</h2>
      <p className='text-balance mb-3 text-center text-lg'>Una alternativa web para poder almacenar las tarjetas. Ideal para los que sufren de tener un iPhone en Qba</p>
      <div className="flex justify-center mb-10">
        <button
          className={`py-2 px-4 w-1/3 rounded ${tabName === 'Options' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          onClick={() => setTabName('Options')}
        >
          Opciones
        </button>
        <button
          className={`py-2 px-4 w-1/3 rounded ${tabName === 'Opetations' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          onClick={() => setTabName('Opetations')}
        >
          Operaciones
        </button>
        <button
          className={`py-2 px-4 w-1/3 rounded ${tabName === 'Cards' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          onClick={() => setTabName('Cards')}
        >
          Tarjetas
        </button>
      </div>

      {/* render the content of the selected tab */}
      <div className="ml-4 ">
        {tabName === 'Options' && (
          <BanmetOption />
        )}
        {tabName === 'Opetations' && (
          <Operations />
        )}
        {tabName === 'Cards' && (
          <Cards />
        )}
      </div>
    </div>
  )
}

export default App