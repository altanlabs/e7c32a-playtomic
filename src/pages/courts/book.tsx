import { useState } from "react"
import { motion } from "framer-motion"
import { BookingCalendar } from "@/components/blocks/booking-calendar"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin, Users, Clock, Star } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useParams } from "react-router-dom"

interface TimeSlot {
  time: string
  available: boolean
  price: number
  maxPlayers: number
  currentPlayers: number
}

export default function BookCourtPage() {
  const { id } = useParams()
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null)
  const [showConfirmation, setShowConfirmation] = useState(false)

  // Example court data - in a real app, this would come from an API
  const court = {
    name: "Pista Municipal Les Corts",
    location: "Barcelona",
    rating: 4.8,
    reviews: 124,
    type: "Outdoor",
    surface: "Sintético",
    dimensions: "28x15m",
    features: ["Iluminación", "Vestuarios", "Parking", "Material deportivo"],
    description: "Pista de baloncesto profesional con las mejores instalaciones para disfrutar del juego.",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf"
  }

  const handleSlotSelect = (date: Date, slot: TimeSlot) => {
    setSelectedSlot(slot)
    setShowConfirmation(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        {/* Court Details */}
        <Card className="p-6 bg-white/5 border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img
                src={court.image}
                alt={court.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-bold">{court.name}</h1>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-[#FFA726]" />
                  <span className="text-gray-300">{court.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-[#FFA726]" />
                  <span className="text-gray-300">{court.rating} ({court.reviews} reseñas)</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <Label className="text-gray-400">Tipo</Label>
                  <p>{court.type}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-400">Superficie</Label>
                  <p>{court.surface}</p>
                </div>
                <div className="space-y-1">
                  <Label className="text-gray-400">Dimensiones</Label>
                  <p>{court.dimensions}</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-400">Servicios</Label>
                <div className="flex flex-wrap gap-2">
                  {court.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-white/5 rounded-full text-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-gray-300">{court.description}</p>
            </div>
          </div>
        </Card>

        {/* Booking Calendar */}
        <Card className="p-6 bg-white/5 border-white/10">
          <h2 className="text-2xl font-semibold mb-6">Reservar pista</h2>
          <BookingCalendar mode="player" onSlotSelect={handleSlotSelect} />
        </Card>

        {/* Booking Confirmation Dialog */}
        <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <DialogContent className="bg-black/95 border-white/10">
            <DialogHeader>
              <DialogTitle>Confirmar reserva</DialogTitle>
            </DialogHeader>
            
            {selectedSlot && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">Pista</p>
                      <p className="font-medium">{court.name}</p>
                    </div>
                    <div className="space-y-1 text-right">
                      <p className="text-sm text-gray-400">Precio</p>
                      <p className="font-medium text-[#FFA726]">{selectedSlot.price}€</p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">Hora</p>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-[#FFA726]" />
                        <p className="font-medium">{selectedSlot.time}</p>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">Jugadores</p>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-[#FFA726]" />
                        <p className="font-medium">
                          {selectedSlot.currentPlayers}/{selectedSlot.maxPlayers}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Número de jugadores a añadir</Label>
                    <Input
                      type="number"
                      min="1"
                      max={selectedSlot.maxPlayers - selectedSlot.currentPlayers}
                      defaultValue="1"
                      className="bg-white/5"
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]"
                    onClick={() => setShowConfirmation(false)}
                  >
                    Confirmar reserva
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1 bg-white/5 hover:bg-white/10"
                    onClick={() => setShowConfirmation(false)}
                  >
                    Cancelar
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </motion.div>
    </div>
  )
}