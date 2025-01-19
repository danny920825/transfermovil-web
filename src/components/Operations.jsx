import { USSDCodes } from '../mocks/data'

function Operations() {
  const operations = USSDCodes.find((banco) => banco.banco === 'Banmet').Operaciones

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100">
      <header className="w-full py-6 bg-gradient-to-r from-green-700 to-green-500 text-white shadow-md">
        <h1 className="text-3xl font-bold text-center">Banmet Operations</h1>
      </header>

      <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
        {operations.map((operation) => (
          <a
            key={operation.id}
            href={`tel:${operation.code}`}
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 w-60 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
          >
            <h2 className="text-lg font-semibold text-gray-800">{operation.title}</h2>
            {/* <p className="text-green-700 font-medium mt-2">{operation.code}</p> */}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Operations
