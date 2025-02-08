import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, Basketball } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface BasketballCourtCardProps {
  id: string | number
  name: string
  location: string
  price: {
    halfCourt: number
    fullCourt: number
  }
  availability: {
    halfCourt: boolean
    fullCourt: boolean
  }
  openUntil: string
  features: string[]
  imageUrl: string
  index?: number
}

export function BasketballCourtCard({
  id,
  name,
  location,
  price,
  availability,
  openUntil,
  features,
  imageUrl,
  index = 0
}: BasketballCourtCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden bg-white/5 hover:bg-white/10 transition-colors group">
        <div className="aspect-[16/9] relative overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          <div className="absolute top-4 right-4 flex gap-2">
            {features.map((feature) => (
              <Badge
                key={feature}
                variant="secondary"
                className="bg-black/50 text-white border-none"
              >
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#FFA726]" />
                <span className="text-sm text-gray-300">{location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Basketball className="h-4 w-4 text-[#FFA726]" />
                <span className="text-sm font-medium">Baloncesto</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold group-hover:text-[#FFA726] transition-colors">
              {name}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">Abierto hasta {openUntil}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Medio campo (1 aro)</span>
                <span className="text-lg font-bold text-[#FFA726]">{price.halfCourt}€</span>
              </div>
              <Link to={`/courts/book/${id}?type=half`}>
                <Button 
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  disabled={!availability.halfCourt}
                >
                  {availability.halfCourt ? "Reservar medio campo" : "No disponible"}
                </Button>
              </Link>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm">Campo completo (2 aros)</span>
                <span className="text-lg font-bold text-[#FFA726]">{price.fullCourt}€</span>
              </div>
              <Link to={`/courts/book/${id}?type=full`}>
                <Button 
                  className="w-full bg-[#FFA726] hover:bg-[#FF9800]"
                  disabled={!availability.fullCourt}
                >
                  {availability.fullCourt ? "Reservar campo completo" : "No disponible"}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}