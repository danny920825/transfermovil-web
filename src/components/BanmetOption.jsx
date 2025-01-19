import { USSDCodes } from '../mocks/data'

function BanmetOption() {
  const Options = USSDCodes.find((banco) => banco.banco === 'Banmet').Sesion

  return (
    <div className="flex flex-col items-center">
      {/* Título */}
      <header className="w-full bg-gradient-to-r from-green-600 to-green-800 text-white py-4 mb-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Opciones de Banmet</h1>
      </header>

      {/* Opciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-4">
        {Options.map((option) => (
          <a
            key={option.id}
            href={`tel:${option.code}`}
            className="block bg-white text-green-700 p-4 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 text-center font-semibold"
          >
            {option.title}
          </a>
        ))}
      </div>
    </div>
  )
}

export default BanmetOption
