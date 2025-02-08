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
    <Card className="w-full max-w-[400px] mx-auto overflow-hidden hover:shadow-lg transition-all">
      <div 
        className="relative h-40 sm:h-48 cursor-pointer" 
        onClick={handleViewTournament}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 flex gap-2">
          <Badge variant="secondary" className="whitespace-nowrap text-xs sm:text-sm">
            {registrationType === "team" ? "Equipos" : "Individual"}
          </Badge>
          <Badge className="text-xs sm:text-sm">{level}</Badge>
        </div>
      </div>
      
      <CardHeader className="text-center p-3 sm:p-4">
        <div className="flex flex-col items-center gap-2">
          <CardTitle 
            className="text-lg sm:text-xl cursor-pointer hover:text-primary text-center"
            onClick={handleViewTournament}
          >
            {name}
          </CardTitle>
          <p className="text-xs sm:text-sm text-muted-foreground">{clubName}</p>
          <Badge variant="destructive" className="text-sm sm:text-base py-0.5">
            {price}€
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-3 sm:p-4 space-y-4">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-center">{location}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-center">{date}</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="text-xs sm:text-sm text-center">Premio: {prizePool}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs sm:text-sm">
            <span>Equipos registrados</span>
            <span className="font-medium">{registeredTeamsCount}/{maxTeams}</span>
          </div>
          <Progress value={registrationProgress} />
          <p className="text-xs sm:text-sm text-muted-foreground flex items-center justify-center gap-1">
            <Users className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            {spotsLeft} {registrationType === "team" ? "equipos" : "plazas"} disponibles
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-2">
          {registrationType === "team" ? (
            <Dialog open={isRegisterTeamOpen} onOpenChange={setIsRegisterTeamOpen}>
              <DialogTrigger asChild>
                <Button 
                  size="sm"
                  className="bg-[#FFA726] hover:bg-[#FF9800] h-7 text-xs sm:text-sm px-3"
                >
                  Inscribir equipo
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] w-[95%] mx-auto">
                <DialogHeader>
                  <DialogTitle className="text-center text-base sm:text-lg">
                    Inscribir equipo en {name}
                  </DialogTitle>
                  <DialogDescription className="text-center text-xs sm:text-sm">
                    Completa la información de tu equipo para participar en el torneo
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleRegisterTeam} className="space-y-3">
                  <div>
                    <Label htmlFor="teamName" className="text-xs sm:text-sm">Nombre del equipo</Label>
                    <Input 
                      id="teamName" 
                      placeholder="Nombre del equipo" 
                      value={teamData.teamName}
                      onChange={handleInputChange}
                      required 
                      className="h-8 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="captainName" className="text-xs sm:text-sm">Nombre del capitán</Label>
                    <Input 
                      id="captainName" 
                      placeholder="Nombre del capitán" 
                      value={teamData.captainName}
                      onChange={handleInputChange}
                      required 
                      className="h-8 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-xs sm:text-sm">Email de contacto</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Email" 
                      value={teamData.email}
                      onChange={handleInputChange}
                      required 
                      className="h-8 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-xs sm:text-sm">Teléfono de contacto</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Teléfono" 
                      value={teamData.phone}
                      onChange={handleInputChange}
                      required 
                      className="h-8 text-xs sm:text-sm"
                    />
                  </div>
                  <div className="flex justify-center gap-2 pt-2">
                    <Button 
                      type="button" 
                      variant="outline"
                      size="sm"
                      onClick={() => setIsRegisterTeamOpen(false)}
                      className="h-7 text-xs sm:text-sm px-3"
                    >
                      Cancelar
                    </Button>
                    <Button 
                      type="submit"
                      size="sm" 
                      className="bg-[#FFA726] hover:bg-[#FF9800] h-7 text-xs sm:text-sm px-3"
                    >
                      Continuar
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
          ) : (
            <>
              <Button 
                size="sm"
                className="bg-[#FFA726] hover:bg-[#FF9800] h-7 text-xs sm:text-sm px-3"
                onClick={handleJoinAsPlayer}
              >
                Unirse como jugador
              </Button>
              <Button 
                variant="outline"
                size="sm"
                className="h-7 text-xs sm:text-sm px-3"
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