import { LandingSections } from "@/components/blocks/landing-sections"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-background/60" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Dribla, reserva y juega
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Encuentra canchas, jugadores y torneos. Todo en un solo lugar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800]">
                Empezar ahora
              </Button>
              <Button size="lg" variant="outline">
                Ver canchas disponibles
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="relative container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Todo lo que necesitas para jugar 3x3
            </h2>
            <p className="text-muted-foreground">
              Gestiona tus partidos y encuentra jugadores de forma fácil y rápida
            </p>
          </div>
          
          <LandingSections />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
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
            Únete a la comunidad de baloncesto 3x3 más grande de España y empieza a disfrutar del mejor baloncesto urbano.
          </p>
          <Button size="lg" className="bg-[#FFA726] hover:bg-[#FF9800]">
            Crear cuenta gratis
          </Button>
        </div>
      </section>
    </div>
  )
}