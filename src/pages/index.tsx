import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy, Star } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#0A0F1C]">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/headers/basketball-hoop.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              DRIBLA RESERVA JUEGA
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Encuentra tu aro, jugadores y torneos. Todo en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800] text-black font-bold">
                  Reserva tu aro
                </Button>
              </Link>
              <Link to="/aros">
                <Button size="lg" variant="outline" className="border-[#FFA726] text-[#FFA726] hover:bg-[#FFA726] hover:text-black">
                  Ver aros disponibles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">¿Cómo funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-[#0A0F1C] border-2 hover:border-[#FFA726] transition-colors">
              <div className="mb-6 inline-block p-4 bg-[#FFA726]/20 rounded-full">
                <MapPin className="h-12 w-12 text-[#FFA726]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Encuentra tu aro</h3>
              <p className="text-gray-400">
                Localiza los mejores aros cerca de ti
              </p>
            </Card>

            <Card className="p-8 text-center bg-[#0A0F1C] border-2 hover:border-[#4CAF50] transition-colors">
              <div className="mb-6 inline-block p-4 bg-[#4CAF50]/20 rounded-full">
                <Trophy className="h-12 w-12 text-[#4CAF50]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Reserva fácilmente</h3>
              <p className="text-gray-400">
                Proceso de reserva simple y rápido, sin complicaciones
              </p>
            </Card>

            <Card className="p-8 text-center bg-[#0A0F1C] border-2 hover:border-[#2196F3] transition-colors">
              <div className="mb-6 inline-block p-4 bg-[#2196F3]/20 rounded-full">
                <Users className="h-12 w-12 text-[#2196F3]" />
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
            <div className="bg-[#0A0F1C] p-6 rounded-lg border-2 border-[#FFA726]/20">
              <div className="text-5xl font-bold text-[#FFA726] mb-2">150+</div>
              <div className="text-gray-300">Aros disponibles</div>
            </div>
            <div className="bg-[#0A0F1C] p-6 rounded-lg border-2 border-[#4CAF50]/20">
              <div className="text-5xl font-bold text-[#4CAF50] mb-2">2,500+</div>
              <div className="text-gray-300">Jugadores activos</div>
            </div>
            <div className="bg-[#0A0F1C] p-6 rounded-lg border-2 border-[#2196F3]/20">
              <div className="text-5xl font-bold text-[#2196F3] mb-2">10K+</div>
              <div className="text-gray-300">Reservas realizadas</div>
            </div>
            <div className="bg-[#0A0F1C] p-6 rounded-lg border-2 border-[#9C27B0]/20">
              <div className="text-5xl font-bold text-[#9C27B0] mb-2">98%</div>
              <div className="text-gray-300">Usuarios satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            ¿Listo para jugar?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
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