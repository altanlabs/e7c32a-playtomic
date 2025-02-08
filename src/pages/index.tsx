import { Link } from "react-router-dom"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Dribla, reserva y juega
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Encuentra canchas, jugadores y torneos. Todo en un solo lugar.
            </p>
            <div className="flex gap-4">
              <Link
                to="/booking"
                className="bg-[#FFA726] hover:bg-[#FF9800] text-white px-8 py-3 rounded-md font-medium transition-colors"
              >
                Reservar ahora
              </Link>
              <Link
                to="/courts"
                className="border border-gray-300 dark:border-gray-700 hover:border-[#FFA726] px-8 py-3 rounded-md font-medium transition-colors"
              >
                Ver canchas
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Reserva fácil</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Encuentra y reserva canchas en segundos
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Juega más</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Únete a partidos y conoce nuevos jugadores
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Compite</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Participa en torneos y mejora tu ranking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para empezar a jugar?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Únete a la comunidad de baloncesto 3x3 más grande de España
          </p>
          <Link
            to="/booking"
            className="bg-[#FFA726] hover:bg-[#FF9800] text-white px-8 py-3 rounded-md font-medium transition-colors inline-block"
          >
            Reservar ahora
          </Link>
        </div>
      </section>
    </div>
  )
}