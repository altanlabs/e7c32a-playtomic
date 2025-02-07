import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"

interface TournamentCardProps {
  name: string
  clubName: string
  location: string
  date: string
  price: number
  prizePool: string
  maxTeams: number
  registeredTeams: number
  registrationType: "team" | "individual"
  level: string
  image: string
}

export function TournamentCard({
  name,
  clubName,
  location,
  date,
  price,
  prizePool,
  maxTeams,
  registeredTeams,
  registrationType,
  level,
  image
}: TournamentCardProps) {
  const spotsLeft = maxTeams - registeredTeams
  const registrationProgress = (registeredTeams / maxTeams) * 100

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="secondary">
            {registrationType === "team" ? "Equipos" : "Individual"}
          </Badge>
          <Badge>{level}</Badge>
        </div>
      </div>
      
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-1">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{clubName}</p>
          </div>
          <Badge variant="destructive" className="text-lg py-1">
            {price}€
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Trophy className="w-4 h-4" />
            <span className="text-sm">Premio: {prizePool}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Equipos registrados</span>
            <span className="font-medium">{registeredTeams}/{maxTeams}</span>
          </div>
          <Progress value={registrationProgress} />
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Users className="w-4 h-4" />
            {spotsLeft} {registrationType === "team" ? "equipos" : "plazas"} disponibles
          </p>
        </div>

        <div className="flex gap-2">
          {registrationType === "team" ? (
            <Button className="flex-1">Inscribir equipo</Button>
          ) : (
            <>
              <Button className="flex-1">Unirse como jugador</Button>
              <Button variant="outline" className="flex-1">Ver equipos</Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}