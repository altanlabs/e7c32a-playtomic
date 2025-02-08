import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bienvenido a 3x3 League
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              La mejor plataforma para jugar baloncesto 3x3
            </p>
            <div className="flex gap-4">
              <Link to="/booking">
                <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                  Reservar ahora
                </Button>
              </Link>
              <Link to="/courts">
                <Button variant="outline">
                  Ver canchas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Reserva fácil</h3>
              <p className="text-muted-foreground">
                Encuentra y reserva canchas en segundos
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Juega más</h3>
              <p className="text-muted-foreground">
                Únete a partidos y conoce nuevos jugadores
              </p>
            </div>
            <div className="p-6 bg-background rounded-lg border">
              <h3 className="text-xl font-semibold mb-4">Compite</h3>
              <p className="text-muted-foreground">
                Participa en torneos y mejora tu ranking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para empezar a jugar?
          </h2>
          <p className="text-muted-foreground mb-8">
            Únete a la comunidad de baloncesto 3x3 más grande de España
          </p>
          <Link to="/booking">
            <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
              Reservar ahora
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}