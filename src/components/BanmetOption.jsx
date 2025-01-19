
import {USSDCodes} from '../mocks/data'

function BanmetOption() {
  const Options = USSDCodes.find((banco) => banco.banco === 'Banmet').Sesion
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl">Banmet Options</h1>
      <div className="flex flex-col w-full">
       {/* render every option as a anchor tag showing only the title and href attribute lauch tel function*/}
        {Options.map((option) => (
          <a
            key={option.id}
            href={`tel:${option.code}`}
            className="bg-green-800 text-white p-4 m-2 w-1/2 text-center mx-auto"
          >
            {option.title}
          </a>
        ))}
        
      </div>
    </div>
  )
}

export default BanmetOption