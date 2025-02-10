import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              DRIBLA RESERVA JUEGA
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">
              Encuentra tu aro, jugadores y torneos. Todo en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800] text-black font-bold">
                  Reserva tu aro
                </Button>
              </Link>
              <Link to="/aros">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Ver aros disponibles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-black border border-gray-800">
              <div className="mb-6 inline-block p-4 bg-gray-800 rounded-full">
                <MapPin className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Encuentra tu aro</h3>
              <p className="text-gray-400">
                Localiza los mejores aros de baloncesto cerca de ti
              </p>
            </Card>

            <Card className="p-8 text-center bg-black border border-gray-800">
              <div className="mb-6 inline-block p-4 bg-gray-800 rounded-full">
                <Trophy className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Reserva fácilmente</h3>
              <p className="text-gray-400">
                Proceso de reserva simple y rápido, sin complicaciones
              </p>
            </Card>

            <Card className="p-8 text-center bg-black border border-gray-800">
              <div className="mb-6 inline-block p-4 bg-gray-800 rounded-full">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Juega y disfruta</h3>
              <p className="text-gray-400">
                Únete a partidos o crea los tuyos propios
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">150+</div>
              <div className="text-gray-400">Aros disponibles</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">2,500+</div>
              <div className="text-gray-400">Jugadores activos</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Reservas realizadas</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-gray-400">Usuarios satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            ¿Listo para jugar?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Únete a la comunidad de baloncesto más grande de España
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800] text-black font-bold">
              Reserva tu aro ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}