import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Star } from "lucide-react"

interface ClubCardProps {
  name: string
  image: string
  address: string
  rating: number
  distance: string
  sports: string[]
}

export function ClubCard({ name, image, address, rating, distance, sports }: ClubCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div className="relative h-48">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white text-black">
            <Star className="w-4 h-4 mr-1 text-yellow-400" />
            {rating}
          </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{address} · {distance}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {sports.map((sport) => (
            <Badge key={sport} variant="outline">{sport}</Badge>
          ))}
        </div>
        <Button className="w-full">Ver pistas disponibles</Button>
      </CardContent>
    </Card>
  )
}