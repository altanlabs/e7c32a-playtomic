import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Users, UserPlus } from "lucide-react"

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
              <Button variant="outline" className="w-full">
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
        <Button className="w-full">
          <Users className="mr-2 h-4 w-4" />
          Registrar equipo completo
        </Button>
        <Button variant="secondary" className="w-full">
          <UserPlus className="mr-2 h-4 w-4" />
          Unirse como jugador individual
        </Button>
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