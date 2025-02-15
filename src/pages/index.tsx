import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy, ArrowRight } from "lucide-react"
import { WaitlistForm } from "@/components/blocks/waitlist-form"
import Layout from "@/layout"

export default function IndexPage() {
  return (
    <Layout showHeader={true} showFooter={true}>
      <div className="min-h-screen bg-[#fff6e7]">
        {/* Hero Section with Background Image */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("https://api.altan.ai/platform/media/39266f5d-9785-498b-b5bc-5fc0daa0172c?account_id=00e70dcf-ba54-4e8c-9d06-dc8372251dae")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-black/75" />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-[80px] sm:text-[120px] md:text-[150px] leading-[0.9] tracking-tight text-white font-bold uppercase italic mb-8">
              DRIBLA
              <br />
              RESERVA
              <br />
              JUEGA
            </h1>
            <div className="text-2xl md:text-3xl text-white font-medium space-y-6">
              <p>📍 Busca y reserva tu aro más cercano</p>
              <p>🤝 Conecta con jugadores y crea partidos</p>
              <p>🔜 Únete tan solo con tu email y sé el primero en jugar</p>
              <p>👉 Regístrate ahora</p>
            </div>
            <div className="mt-12 max-w-md mx-auto">
              <WaitlistForm />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-[#fff6e7]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <MapPin className="h-8 w-8 text-[#029455]" />,
                  title: "Encuentra tu aro",
                  description: "Localiza los mejores aros de baloncesto cerca de ti"
                },
                {
                  icon: <Trophy className="h-8 w-8 text-[#029455]" />,
                  title: "Reserva fácilmente",
                  description: "Proceso de reserva simple y rápido, sin complicaciones"
                },
                {
                  icon: <Users className="h-8 w-8 text-[#029455]" />,
                  title: "Juega y disfruta",
                  description: "Únete a partidos o crea los tuyos propios"
                }
              ].map((feature, index) => (
                <Card key={index} 
                  className="bg-white shadow-sm p-8 hover-scale rounded-2xl">
                  <div className="bg-[#fff6e7] inline-block p-4 rounded-2xl mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="subtitle-font text-gray-600">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-32 bg-[#fff6e7]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "150+", label: "Aros disponibles" },
                { number: "2,500+", label: "Jugadores activos" },
                { number: "10K+", label: "Reservas realizadas" },
                { number: "98%", label: "Usuarios satisfechos" }
              ].map((stat, index) => (
                <div key={index} 
                  className="bg-white shadow-sm rounded-2xl p-8 text-center hover-scale">
                  <div className="relative z-10">
                    <div className="text-5xl font-bold mb-2 text-[#029455]">
                      {stat.number}
                    </div>
                    <div className="subtitle-font text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-[#fff6e7]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-[#029455]">
              ¿Listo para jugar?
            </h2>
            <p className="subtitle-font text-xl text-gray-600 mb-8 max-w-2xl mx-auto font-light">
              Únete a la comunidad de baloncesto más grande de España
            </p>
            <Link to="/booking">
              <Button size="lg" 
                className="bg-[#029455] hover:bg-[#029455]/90 text-white font-medium px-8 py-6 text-lg rounded-full hover-scale">
                Reserva tu aro ahora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  )
}