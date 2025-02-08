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
    <Card className="w-full max-w-[350px] mx-auto overflow-hidden hover:shadow-lg transition-all">
      <div 
        className="relative h-32 sm:h-40 cursor-pointer" 
        onClick={handleViewTournament}
      >
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-1">
          <Badge variant="secondary" className="text-[10px] py-0">
            {registrationType === "team" ? "Equipos" : "Individual"}
          </Badge>
          <Badge className="text-[10px] py-0">{level}</Badge>
        </div>
      </div>
      
      <CardHeader className="text-center p-2">
        <div className="flex flex-col items-center gap-1">
          <CardTitle 
            className="text-sm cursor-pointer hover:text-primary text-center line-clamp-1"
            onClick={handleViewTournament}
          >
            {name}
          </CardTitle>
          <p className="text-[10px] text-muted-foreground">{clubName}</p>
          <Badge variant="destructive" className="text-[10px] py-0">
            {price}€
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-2 space-y-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="text-[10px] text-center line-clamp-1">{location}</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <Calendar className="w-3 h-3 flex-shrink-0" />
            <span className="text-[10px] text-center">{date}</span>
          </div>
          <div className="flex items-center justify-center gap-1 text-muted-foreground">
            <Trophy className="w-3 h-3 flex-shrink-0" />
            <span className="text-[10px] text-center line-clamp-1">Premio: {prizePool}</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex justify-between text-[10px]">
            <span>Equipos registrados</span>
            <span className="font-medium">{registeredTeamsCount}/{maxTeams}</span>
          </div>
          <Progress value={registrationProgress} className="h-1" />
          <p className="text-[10px] text-muted-foreground flex items-center justify-center gap-1">
            <Users className="w-3 h-3 flex-shrink-0" />
            {spotsLeft} {registrationType === "team" ? "equipos" : "plazas"} disponibles
          </p>
        </div>

        <div className="flex justify-center items-center gap-2">
          {registrationType === "team" ? (
            <Dialog open={isRegisterTeamOpen} onOpenChange={setIsRegisterTeamOpen}>
              <DialogTrigger asChild>
                <Button 
                  className="h-6 text-[10px] px-2 bg-[#FFA726] hover:bg-[#FF9800]"
                >
                  Inscribir equipo
                </Button>
              </DialogTrigger>
              <DialogContent className="w-[90%] max-w-[350px] p-3">
                <DialogHeader>
                  <DialogTitle className="text-sm text-center">
                    Inscribir equipo en {name}
                  </DialogTitle>
                  <DialogDescription className="text-[10px] text-center">
                    Completa la información de tu equipo
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleRegisterTeam} className="space-y-2">
                  <div>
                    <Label htmlFor="teamName" className="text-[10px]">Nombre del equipo</Label>
                    <Input 
                      id="teamName" 
                      placeholder="Nombre del equipo" 
                      value={teamData.teamName}
                      onChange={handleInputChange}
                      required 
                      className="h-7 text-[10px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="captainName" className="text-[10px]">Nombre del capitán</Label>
                    <Input 
                      id="captainName" 
                      placeholder="Nombre del capitán" 
                      value={teamData.captainName}
                      onChange={handleInputChange}
                      required 
                      className="h-7 text-[10px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-[10px]">Email de contacto</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Email" 
                      value={teamData.email}
                      onChange={handleInputChange}
                      required 
                      className="h-7 text-[10px]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[10px]">Teléfono de contacto</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="Teléfono" 
                      value={teamData.phone}
                      onChange={handleInputChange}
                      required 
                      className="h-7 text-[10px]"
                    />
                  </div>
                  <div className="flex justify-center gap-2 pt-2">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setIsRegisterTeamOpen(false)}
                      className="h-6 text-[10px] px-2"
                    >
                      Cancelar
                    </Button>
                    <Button 
                      type="submit"
                      className="h-6 text-[10px] px-2 bg-[#FFA726] hover:bg-[#FF9800]"
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
                className="h-6 text-[10px] px-2 bg-[#FFA726] hover:bg-[#FF9800]"
                onClick={handleJoinAsPlayer}
              >
                Unirse como jugador
              </Button>
              <Button 
                variant="outline"
                className="h-6 text-[10px] px-2"
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