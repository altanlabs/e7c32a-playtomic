import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star, MapPin, Clock, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface CourtCardProps {
  name: string
  address: string
  rating: number
  distance: string
  availability: string
  image: string
  price: string
  sport: string
  amenities?: string[]
  onBook?: () => void
}

export function CourtCard({
  name,
  address,
  rating,
  distance,
  availability,
  image,
  price,
  sport,
  amenities = [],
  onBook
}: CourtCardProps) {
  return (
    <Card className="group overflow-hidden rounded-xl bg-background hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4 z-20">
          <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
            {sport}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-1">{name}</h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {address}
            </div>
          </div>
          <div className="flex items-center gap-1 bg-primary/10 text-primary rounded-full px-2 py-1">
            <Star className="h-4 w-4 fill-primary" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {availability}
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {distance}
          </div>
        </div>

        {amenities.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {amenities.map((amenity) => (
              <Badge key={amenity} variant="outline">
                {amenity}
              </Badge>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">{price}</span>
            <span className="text-muted-foreground">/hora</span>
          </div>
          <Button onClick={onBook}>
            Reservar
            <Calendar className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  )
}