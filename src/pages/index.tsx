import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import { WaitlistForm } from "@/components/blocks/waitlist-form"

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-[#fff6e7]">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/headers/basketball-hoop.jpg')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl">
            <h1 className="hero-title text-6xl md:text-8xl tracking-tight text-black space-y-2">
              <div>Dribla.</div>
              <div>Reserva.</div>
              <div>Juega.</div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light mt-8">
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
                  className="bg-white/50 backdrop-blur-sm border-gray-200 text-gray-800 px-8 py-6 text-lg rounded-full hover-scale hover:bg-white/80">
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
                className="bg-white/50 backdrop-blur-sm border-gray-200 p-8 hover-scale rounded-2xl">
                <div className="bg-white/80 inline-block p-4 rounded-2xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
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
                className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm p-8 text-center hover-scale border border-gray-200">
                <div className="relative z-10">
                  <div className="text-5xl font-bold text-gray-800 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            ¿Quieres ser de los primeros en probar Dribla?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
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
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
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