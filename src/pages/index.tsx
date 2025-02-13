import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import { WaitlistForm } from "@/components/blocks/waitlist-form"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/headers/basketball-hoop.jpg')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text tracking-tight">
              DRIBLA
              <span className="block text-white">RESERVA JUEGA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
              Encuentra tu aro, jugadores y torneos. Todo en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" 
                  className="button-gradient text-white font-medium px-8 py-6 text-lg rounded-full hover-scale">
                  Reserva tu aro
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/aros">
                <Button size="lg" variant="outline" 
                  className="glass-effect text-white px-8 py-6 text-lg rounded-full hover-scale">
                  Ver aros disponibles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MapPin className="h-8 w-8 text-blue-500" />,
                title: "Encuentra tu aro",
                description: "Localiza los mejores aros de baloncesto cerca de ti"
              },
              {
                icon: <Trophy className="h-8 w-8 text-blue-500" />,
                title: "Reserva fácilmente",
                description: "Proceso de reserva simple y rápido, sin complicaciones"
              },
              {
                icon: <Users className="h-8 w-8 text-blue-500" />,
                title: "Juega y disfruta",
                description: "Únete a partidos o crea los tuyos propios"
              }
            ].map((feature, index) => (
              <Card key={index} 
                className="glass-card p-8 hover-scale">
                <div className="glass-effect inline-block p-4 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "150+", label: "Aros disponibles" },
              { number: "2,500+", label: "Jugadores activos" },
              { number: "10K+", label: "Reservas realizadas" },
              { number: "98%", label: "Usuarios satisfechos" }
            ].map((stat, index) => (
              <div key={index} 
                className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 to-indigo-600/20 p-8 text-center hover-scale border border-white/10">
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-300 font-medium">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-sm" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-4 text-white">
            ¿Quieres ser de los primeros en probar Dribla?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Únete a nuestra lista de espera y sé el primero en enterarte cuando lancemos en tu ciudad.
          </p>
          <div className="max-w-md mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            ¿Listo para jugar?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-light">
            Únete a la comunidad de baloncesto más grande de España
          </p>
          <Link to="/booking">
            <Button size="lg" 
              className="button-gradient text-white font-medium px-8 py-6 text-lg rounded-full hover-scale">
              Reserva tu aro ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}