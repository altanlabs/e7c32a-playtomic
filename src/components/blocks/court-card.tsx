import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star, Clock, Sun, Moon } from "lucide-react"

interface CourtFeature {
  name: string
  icon: string
}

interface CourtCardProps {
  name: string
  location: string
  image: string
  rating: number
  reviews: number
  pricePerHour: number
  features: string[]
  availability: {
    morning: boolean
    afternoon: boolean
    night: boolean
  }
}

export function CourtCard({
  name,
  location,
  image,
  rating,
  reviews,
  pricePerHour,
  features,
  availability
}: CourtCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white text-black">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            {rating} ({reviews})
          </Badge>
        </div>
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <div className="flex items-center text-muted-foreground mt-1">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <Badge variant="secondary" className="text-lg py-1">
            {pricePerHour}€/h
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Características */}
          <div className="flex flex-wrap gap-2">
            {features.map((feature) => (
              <Badge key={feature} variant="outline">
                {feature}
              </Badge>
            ))}
          </div>

          {/* Disponibilidad */}
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <Badge 
                variant={availability.morning ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                <Sun className="w-4 h-4" />
                Mañana
              </Badge>
              <Badge 
                variant={availability.afternoon ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                <Clock className="w-4 h-4" />
                Tarde
              </Badge>
              <Badge 
                variant={availability.night ? "default" : "secondary"}
                className="flex items-center gap-1"
              >
                <Moon className="w-4 h-4" />
                Noche
              </Badge>
            </div>
          </div>

          <Button className="w-full">Ver disponibilidad</Button>
        </div>
      </CardContent>
    </Card>
  )
}