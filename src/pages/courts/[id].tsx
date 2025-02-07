import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CourtCalendar } from "@/components/blocks/court-calendar"
import { MapPin, Star, Clock, Info } from "lucide-react"
import { useParams } from "react-router-dom"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_COURT = {
  id: "1",
  name: "Cancha Street Basketball",
  description: "Cancha profesional de baloncesto 3x3 con las mejores instalaciones para tu partido. Superficie profesional y equipamiento de alta calidad.",
  location: "Parque Deportivo Central, Madrid",
  image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop",
  rating: 4.8,
  reviews: 124,
  pricePerHour: 20,
  features: [
    {
      name: "Iluminación LED",
      description: "Iluminación profesional para partidos nocturnos"
    },
    {
      name: "Suelo profesional",
      description: "Superficie sintética de alta calidad"
    },
    {
      name: "Vestuarios",
      description: "Vestuarios con duchas y taquillas"
    },
    {
      name: "Parking gratuito",
      description: "Amplio parking para usuarios"
    }
  ],
  rules: [
    "Máximo 6 jugadores por reserva",
    "Cancelación gratuita hasta 24h antes",
    "Obligatorio calzado deportivo",
    "Respetar el horario de reserva"
  ],
  availability: {
    "2024-02-10": [
      { time: "09:00", available: true, price: 20 },
      { time: "10:00", available: false, price: 20 },
      { time: "11:00", available: true, price: 20 },
      { time: "16:00", available: true, price: 25 },
      { time: "17:00", available: true, price: 25 },
      { time: "18:00", available: false, price: 25 },
      { time: "19:00", available: true, price: 30 },
      { time: "20:00", available: true, price: 30 },
      { time: "21:00", available: true, price: 30 }
    ]
  }
}

export default function CourtDetailPage() {
  const { id } = useParams()
  // En una implementación real, aquí se haría una llamada a la API
  const court = MOCK_COURT

  const handleSlotSelect = (date: Date, slot: any) => {
    console.log("Reserva seleccionada:", { date, slot })
  }

  if (!court) return <div>Cancha no encontrada</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Información de la cancha */}
        <div className="lg:col-span-2 space-y-6">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img 
              src={court.image} 
              alt={court.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <Badge variant="secondary" className="text-lg py-1">
                {court.pricePerHour}€/h
              </Badge>
              <Badge className="bg-white text-black">
                <Star className="w-4 h-4 mr-1 text-yellow-400" />
                {court.rating} ({court.reviews})
              </Badge>
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{court.name}</h1>
            <p className="text-muted-foreground mb-4">{court.description}</p>
            
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5" />
              <span>{court.location}</span>
            </div>
          </div>

          {/* Características */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Características</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {court.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-lg border"
                >
                  <Info className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <h3 className="font-semibold">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Normas */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Normas de la cancha</h2>
            <div className="space-y-2">
              {court.rules.map((rule, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Clock className="w-4 h-4" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Panel de reservas */}
        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <div className="bg-card p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-4">Reservar cancha</h2>
              <CourtCalendar
                slots={court.availability}
                onSlotSelect={handleSlotSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}