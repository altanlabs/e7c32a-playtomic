import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, UserPlus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

interface TeamProps {
  name: string
  players: {
    name: string
    avatar: string
    position: string
  }[]
  maxPlayers: number
  tournamentId: string
}

function Team({ name, players, maxPlayers, tournamentId }: TeamProps) {
  const navigate = useNavigate()
  
  const handleJoinTeam = () => {
    // Redirigir con los parámetros necesarios
    navigate(`/join-as-player?team=${encodeURIComponent(name)}&tournament=${tournamentId}`)
    toast.success("Completando registro como jugador...")
  }

  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="text-lg flex justify-between items-center">
          {name}
          <Badge variant="outline">
            {players.length}/{maxPlayers} jugadores
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {players.map((player, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-secondary">
                <Avatar>
                  <AvatarImage src={player.avatar} />
                  <AvatarFallback>{player.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{player.name}</p>
                  <p className="text-sm text-muted-foreground">{player.position}</p>
                </div>
              </div>
            ))}
          </div>

          {players.length < maxPlayers && (
            <div className="mt-4">
              <Button 
                variant="outline" 
                className="w-full bg-[#FFA726] hover:bg-[#FF9800] text-white" 
                onClick={handleJoinTeam}
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Unirse al equipo
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

interface TournamentRegistrationProps {
  tournamentId: string
  maxTeams: number
  registeredTeams: {
    name: string
    players: {
      name: string
      avatar: string
      position: string
    }[]
  }[]
}

export function TournamentRegistration({ 
  tournamentId, 
  maxTeams, 
  registeredTeams 
}: TournamentRegistrationProps) {
  const navigate = useNavigate()
  const [isRegisterTeamOpen, setIsRegisterTeamOpen] = useState(false)
  const [teamData, setTeamData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: ""
  })

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
      // Aquí iría la lógica para registrar el equipo
      // Por ahora simulamos el registro
      toast.success("¡Equipo registrado correctamente!")
      setIsRegisterTeamOpen(false)
      navigate(`/teams/create?tournament=${tournamentId}`, {
        state: {
          teamData: teamData
        }
      })
    } catch (error) {
      toast.error("Error al registrar el equipo")
    }
  }

  const handleViewTeams = () => {
    navigate(`/teams?tournament=${tournamentId}`)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Equipos registrados</span>
          <span className="font-medium">{registeredTeams.length}/{maxTeams}</span>
        </div>
        <Progress value={(registeredTeams.length / maxTeams) * 100} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dialog open={isRegisterTeamOpen} onOpenChange={setIsRegisterTeamOpen}>
          <DialogTrigger asChild>
            <Button className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
              <Users className="mr-2 h-4 w-4" />
              Inscribir equipo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Inscribir equipo</DialogTitle>
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
              <Button type="submit" className="w-full bg-[#FFA726] hover:bg-[#FF9800]">
                Inscribir equipo
              </Button>
            </form>
          </DialogContent>
        </Dialog>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleViewTeams}
        >
          <Users className="mr-2 h-4 w-4" />
          Ver equipos
        </Button>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Equipos registrados</h3>
        {registeredTeams.map((team, index) => (
          <Team 
            key={index} 
            name={team.name} 
            players={team.players} 
            maxPlayers={3}
            tournamentId={tournamentId}
          />
        ))}
      </div>
    </div>
  )
}