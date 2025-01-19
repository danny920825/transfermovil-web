import { USSDCodes } from '../mocks/data'
import HeaderComponent from './HeaderComponent'

function Operations() {
  const operations = USSDCodes.find((banco) => banco.banco === 'Banmet').Operaciones

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-100 pb-8">
      <HeaderComponent bankType={'Banmet'}>Operaciones de Banmet</HeaderComponent>

      <div className="flex flex-wrap justify-center gap-x-3 gap-y-6 mt-8 w-full">
        {operations.map((operation) => (
          <a
            key={operation.id}
            href={`tel:${operation.code}`}
            className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 w-72 transform hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
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
