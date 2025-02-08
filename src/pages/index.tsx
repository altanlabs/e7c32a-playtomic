import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Users, Trophy, Star } from "lucide-react"

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/sports/basketball-3x3.svg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Dribla, reserva y juega
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Encuentra canchas, jugadores y torneos. Todo en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/booking">
                <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800]">
                  Reservar ahora
                </Button>
              </Link>
              <Link to="/courts">
                <Button size="lg" variant="outline">
                  Ver canchas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6">
              <MapPin className="h-12 w-12 text-[#FFA726] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Encuentra canchas</h3>
              <p className="text-muted-foreground">
                Localiza las mejores canchas cerca de ti
              </p>
            </Card>
            <Card className="p-6">
              <Users className="h-12 w-12 text-[#66BB6A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Únete a partidos</h3>
              <p className="text-muted-foreground">
                Encuentra jugadores y equipos
              </p>
            </Card>
            <Card className="p-6">
              <Trophy className="h-12 w-12 text-[#42A5F5] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compite en torneos</h3>
              <p className="text-muted-foreground">
                Participa en torneos oficiales
              </p>
            </Card>
            <Card className="p-6">
              <Star className="h-12 w-12 text-[#EC407A] mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mejora tu nivel</h3>
              <p className="text-muted-foreground">
                Sistema de rankings y estadísticas
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
              <div className="text-4xl font-bold text-[#FFA726] mb-2">150+</div>
              <div className="text-muted-foreground">Canchas disponibles</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#66BB6A] mb-2">2,500+</div>
              <div className="text-muted-foreground">Jugadores activos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#42A5F5] mb-2">50+</div>
              <div className="text-muted-foreground">Torneos organizados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#EC407A] mb-2">98%</div>
              <div className="text-muted-foreground">Usuarios satisfechos</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0A0F1C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para empezar a jugar?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a la comunidad de baloncesto 3x3 más grande de España
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800]">
              Reservar ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}