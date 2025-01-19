function HeaderComponent({children, bankType}) {
  const bankColor = bankType === 'Banmet' ? 'bg-gradient-to-r from-green-600 to-green-800' : 'bg-gradient-to-r from-red-600 to-red-800'
  return (
    <header className={`w-full ${bankColor} text-white py-4 mb-6 rounded-t-lg shadow-md`}>
        <h1 className="text-2xl font-bold text-center">{children}</h1>
      </header>
  )
}

export default HeaderComponent