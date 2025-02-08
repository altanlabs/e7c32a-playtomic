import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Calendar, MapPin, Users } from "lucide-react"

interface TournamentCardProps {
  id: number
  name: string
  date: string
  location: string
  teams: string
  price: string
  image: string
}

export default function TournamentCard({
  id,
  name,
  date,
  location,
  teams,
  price,
  image
}: TournamentCardProps) {
  return (
    <Card className="overflow-hidden bg-[#0A0F1C] border-0">
      <div className="aspect-video relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover opacity-80"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-2" />
            <span>Equipos: {teams}</span>
          </div>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <div className="text-2xl font-bold">{price}</div>
          <div className="flex gap-2">
            <Link to={`/tournaments/${id}`}>
              <Button variant="outline" size="sm">
                Ver detalles
              </Button>
            </Link>
            <Link to={`/tournaments/join?id=${id}`}>
              <Button 
                size="sm"
                className="bg-[#FFA726] hover:bg-[#FF9800] text-white font-semibold"
              >
                Me apunto
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  )
}