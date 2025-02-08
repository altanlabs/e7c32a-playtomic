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
}

function Team({ name, players, maxPlayers }: TeamProps) {
  const handleJoinTeam = () => {
    // Aquí iría la lógica para unirse al equipo
    toast.success("Solicitud enviada correctamente")
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
          {/* Jugadores actuales */}
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

          {/* Espacios vacíos */}
          {players.length < maxPlayers && (
            <div className="mt-4">
              <Button variant="outline" className="w-full" onClick={handleJoinTeam}>
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
  const [isRegisterTeamOpen, setIsRegisterTeamOpen] = useState(false)
  const [isJoinAsPlayerOpen, setIsJoinAsPlayerOpen] = useState(false)

  const handleRegisterTeam = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para registrar el equipo
    toast.success("Equipo registrado correctamente")
    setIsRegisterTeamOpen(false)
  }

  const handleJoinAsPlayer = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para unirse como jugador individual
    toast.success("Solicitud enviada correctamente")
    setIsJoinAsPlayerOpen(false)
  }

  return (
    <div className="space-y-6">
      {/* Estado del registro */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Equipos registrados</span>
          <span className="font-medium">{registeredTeams.length}/{maxTeams}</span>
        </div>
        <Progress value={(registeredTeams.length / maxTeams) * 100} />
      </div>

      {/* Opciones de registro */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Dialog open={isRegisterTeamOpen} onOpenChange={setIsRegisterTeamOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">
              <Users className="mr-2 h-4 w-4" />
              Registrar equipo completo
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Registrar equipo</DialogTitle>
              <DialogDescription>
                Completa la información de tu equipo para participar en el torneo
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRegisterTeam} className="space-y-4">
              <div>
                <Label htmlFor="team-name">Nombre del equipo</Label>
                <Input id="team-name" placeholder="Nombre del equipo" required />
              </div>
              <div>
                <Label htmlFor="captain-name">Nombre del capitán</Label>
                <Input id="captain-name" placeholder="Nombre del capitán" required />
              </div>
              <div>
                <Label htmlFor="email">Email de contacto</Label>
                <Input id="email" type="email" placeholder="Email" required />
              </div>
              <div>
                <Label htmlFor="phone">Teléfono de contacto</Label>
                <Input id="phone" type="tel" placeholder="Teléfono" required />
              </div>
              <Button type="submit" className="w-full">Registrar equipo</Button>
            </form>
          </DialogContent>
        </Dialog>

        <Dialog open={isJoinAsPlayerOpen} onOpenChange={setIsJoinAsPlayerOpen}>
          <DialogTrigger asChild>
            <Button variant="secondary" className="w-full">
              <UserPlus className="mr-2 h-4 w-4" />
              Unirse como jugador individual
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Unirse como jugador</DialogTitle>
              <DialogDescription>
                Completa tus datos para unirte al torneo como jugador individual
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleJoinAsPlayer} className="space-y-4">
              <div>
                <Label htmlFor="player-name">Nombre completo</Label>
                <Input id="player-name" placeholder="Tu nombre" required />
              </div>
              <div>
                <Label htmlFor="player-email">Email</Label>
                <Input id="player-email" type="email" placeholder="Email" required />
              </div>
              <div>
                <Label htmlFor="player-phone">Teléfono</Label>
                <Input id="player-phone" type="tel" placeholder="Teléfono" required />
              </div>
              <div>
                <Label htmlFor="player-position">Posición preferida</Label>
                <Input id="player-position" placeholder="Ej: Base, Alero, Pívot" required />
              </div>
              <Button type="submit" className="w-full">Enviar solicitud</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Lista de equipos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Equipos registrados</h3>
        {registeredTeams.map((team, index) => (
          <Team 
            key={index} 
            name={team.name} 
            players={team.players} 
            maxPlayers={3} 
          />
        ))}
      </div>
    </div>
  )
}