import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PublicarEventoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <div className="relative bg-[#0A0F1C] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/headers/basketball-event.jpg"
            alt="Basketball Event"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 to-[#0A0F1C]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              Publicar evento
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              Crea y organiza eventos de baloncesto
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-[340px] mx-auto md:max-w-2xl">
            <Card className="bg-[#0A0F1C] border-border">
              <div className="p-4">
                {/* Event creation form will go here */}
                <div className="text-center text-muted-foreground">
                  Formulario de creación de evento
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}