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
  image?: string
}

export default function TournamentCard({
  id,
  name,
  date,
  location,
  teams,
  price,
}: TournamentCardProps) {
  return (
    <Card className="overflow-hidden bg-[#0A0F1C] border-border">
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{name}</h3>
        <div className="space-y-3 text-base text-gray-400">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-3" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-3" />
            <span>{location}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-3" />
            <span>{teams}</span>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-between">
          <div className="text-3xl font-bold">{price}€</div>
          <div className="flex gap-3">
            <Link to={`/tournaments/${id}`}>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white/20 hover:bg-white/10"
              >
                Ver detalles
              </Button>
            </Link>
            <Link to={`/tournaments/join?id=${id}`}>
              <Button 
                size="lg"
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