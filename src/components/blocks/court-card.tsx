import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Star, Clock } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const COURT_IMAGES = [
  "https://www.fiba3x3.com/img/grounds/grounds-01.jpg",
  "https://www.fiba3x3.com/img/grounds/grounds-02.jpg",
  "https://www.fiba3x3.com/img/grounds/grounds-03.jpg",
  "https://www.fiba3x3.com/img/grounds/grounds-04.jpg",
  "https://www.fiba3x3.com/img/grounds/grounds-05.jpg",
  "https://img.freepik.com/premium-photo/basketball-court-3x3-with-special-orange-covering-surface_124507-13509.jpg",
  "https://www.fiba3x3.com/img/grounds/grounds-06.jpg",
  "https://www.fiba3x3.com/img/grounds/grounds-07.jpg",
  "https://www.fiba3x3.com/img/grounds/grounds-08.jpg",
]

interface CourtCardProps {
  id: string | number
  name: string
  location: string
  rating: number
  reviews: number
  price: string
  type: string
  currentPlayers: number
  maxPlayers: number
  openUntil: string
  features: string[]
  index?: number
}

export function CourtCard({
  id,
  name,
  location,
  rating,
  reviews,
  price,
  type,
  currentPlayers,
  maxPlayers,
  openUntil,
  features,
  index = 0
}: CourtCardProps) {
  const imageIndex = index % COURT_IMAGES.length
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden bg-white/5 hover:bg-white/10 transition-colors group">
        <div className="aspect-[4/3] relative overflow-hidden">
          <img
            src={COURT_IMAGES[imageIndex]}
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
              <Badge variant="secondary" className="bg-[#FFA726] text-white border-none">
                {type}
              </Badge>
            </div>

            <h3 className="text-xl font-semibold group-hover:text-[#FFA726] transition-colors">
              {name}
            </h3>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-[#FFA726]" />
                  <span className="text-sm">
                    {rating} ({reviews} reseñas)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">
                    {currentPlayers}/{maxPlayers}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-400">{openUntil}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-[#FFA726]">{price}</span>
            <Link to={`/aros/book/${id}`}>
              <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                Reservar ahora
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}