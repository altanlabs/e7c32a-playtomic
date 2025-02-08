import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface TournamentCardProps {
  id?: string
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
  id = "1",
  name,
  clubName,
  location,
  date,
  price,
  prizePool,
  maxTeams,
  registeredTeams: registeredTeamsCount,
  registrationType,
  level,
  image
}: TournamentCardProps) {
  const navigate = useNavigate()
  const [isRegisterTeamOpen, setIsRegisterTeamOpen] = useState(false)
  const [teamData, setTeamData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: ""
  })

  const spotsLeft = maxTeams - registeredTeamsCount
  const registrationProgress = (registeredTeamsCount / maxTeams) * 100

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setTeamData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleRegisterTeam = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setIsRegisterTeamOpen(false)
      navigate(`/teams/create?tournament=${id}`, {
        state: { teamData }
      })
    } catch (error) {
      toast.error("Error al procesar el registro")
    }
  }

  const handleJoinAsPlayer = () => {
    navigate(`/join-as-player?tournament=${id}`)
  }

  const handleViewTeams = () => {
    navigate(`/teams?tournament=${id}`)
  }

  const handleViewTournament = () => {
    navigate(`/tournaments/${id}`)
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all">
      <div 
        className="relative h-48 cursor-pointer" 
        onClick={handleViewTournament}
      >
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
            <CardTitle 
              className="text-xl mb-1 cursor-pointer hover:text-primary"
              onClick={handleViewTournament}
            >
              {name}
            </CardTitle>
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
            <span className="font-medium">{registeredTeamsCount}/{maxTeams}</span>
          </div>
          <Progress value={registrationProgress} />
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <Users className="w-4 h-4" />
            {spotsLeft} {registrationType === "team" ? "equipos" : "plazas"} disponibles
          </p>
        </div>

        <div className="flex gap-2">
          {registrationType === "team" ? (
            <Dialog open={isRegisterTeamOpen} onOpenChange={setIsRegisterTeamOpen}>
              <DialogTrigger asChild>
                <Button className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]">
                  Inscribir equipo
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Inscribir equipo en {name}</DialogTitle>
                  <DialogDescription>
                    Completa la información de tu equipo para participar en el torneo
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleRegisterTeam} className="space-y-4">
                  <div>
                    <Label htmlFor="teamName">Nombre del equipo</Label>
                    <Input 
                      id="teamName" 
                      placeholder="Nombre del equipo" 
                      value={teamData.teamName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="captainName">Nombre del capitán</Label>
                    <Input 
                      id="captainName" 
                      placeholder="Nombre del capitán" 
                      value={teamData.captainName}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email de contacto</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Email" 
                      value={teamData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono de contacto</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Teléfono" 
                      value={teamData.phone}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  <div className="flex gap-4">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => setIsRegisterTeamOpen(false)}
                      className="flex-1"
                    >
                      Cancelar
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]"
                    >
                      Continuar registro
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          ) : (
            <>
              <Button 
                className="flex-1 bg-[#FFA726] hover:bg-[#FF9800]"
                onClick={handleJoinAsPlayer}
              >
                Unirse como jugador
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={handleViewTeams}
              >
                Ver equipos
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}