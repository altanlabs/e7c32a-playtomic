import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface TournamentRegistrationProps {
  tournamentId: string
  maxTeams: number
  registeredTeams: Array<{
    name: string
    players: Array<{
      name: string
      avatar: string
      position: string
    }>
  }>
}

export function TournamentRegistration({
  tournamentId,
  maxTeams,
  registeredTeams
}: TournamentRegistrationProps) {
  const navigate = useNavigate()
  const spotsLeft = maxTeams - registeredTeams.length
  const registrationProgress = (registeredTeams.length / maxTeams) * 100

  const handleRegisterTeam = () => {
    navigate(`/teams/create?tournament=${tournamentId}`)
  }

  const handleJoinAsPlayer = () => {
    navigate(`/join-as-player?tournament=${tournamentId}`)
  }

  return (
    <div className="space-y-4">
      {/* Progreso de registro */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span>Equipos registrados</span>
          <span className="font-medium">{registeredTeams.length}/{maxTeams}</span>
        </div>
        <Progress value={registrationProgress} className="h-1.5" />
        <p className="text-xs text-muted-foreground flex items-center justify-center gap-1">
          <Users className="h-3 w-3" />
          {spotsLeft} plazas disponibles
        </p>
      </div>

      {/* Lista de equipos */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Equipos participantes</h3>
        <div className="space-y-2">
          {registeredTeams.map((team, index) => (
            <div 
              key={index}
              className="p-2 rounded-lg bg-secondary"
              onClick={() => navigate(`/teams/${index + 1}`)}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-medium">{team.name}</p>
                <span className="text-xs text-muted-foreground">
                  {team.players.length} jugadores
                </span>
              </div>
              <div className="flex -space-x-2">
                {team.players.map((player, playerIndex) => (
                  <Avatar key={playerIndex} className="h-6 w-6 border-2 border-background">
                    <AvatarImage src={player.avatar} />
                    <AvatarFallback className="text-[10px]">{player.name[0]}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="space-y-2">
        <Button 
          onClick={handleRegisterTeam}
          className="w-full h-7 text-xs bg-[#FFA726] hover:bg-[#FF9800]"
        >
          <Users className="mr-2 h-3 w-3" />
          Inscribir equipo
        </Button>
        <Button 
          variant="outline"
          onClick={handleJoinAsPlayer}
          className="w-full h-7 text-xs"
        >
          Unirse como jugador
        </Button>
      </div>
    </div>
  )
}