import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, TrendingDown, Minus, Users } from "lucide-react"

interface TeamMember {
  name: string
  avatar: string
}

interface RankingTeam {
  id: string
  position: number
  previousPosition: number
  name: string
  logo: string
  division: string
  points: number
  gamesPlayed: number
  winRate: number
  streak: number
  members: TeamMember[]
  tournaments: {
    won: number
    played: number
  }
}

interface TeamRankingTableProps {
  teams: RankingTeam[]
  onTeamClick: (teamId: string) => void
}

export function TeamRankingTable({ teams, onTeamClick }: TeamRankingTableProps) {
  const getPositionChange = (current: number, previous: number) => {
    if (previous === 0) return null // Nuevo en el ranking
    const change = previous - current
    if (change > 0) return { icon: <TrendingUp className="w-4 h-4 text-green-500" />, value: change }
    if (change < 0) return { icon: <TrendingDown className="w-4 h-4 text-red-500" />, value: Math.abs(change) }
    return { icon: <Minus className="w-4 h-4 text-gray-500" />, value: 0 }
  }

  const getStreakBadge = (streak: number) => {
    if (streak === 0) return null
    return (
      <Badge 
        variant={streak > 0 ? "secondary" : "destructive"}
        className="ml-2"
      >
        {streak > 0 ? `+${streak}` : streak}
      </Badge>
    )
  }

  const getDivisionColor = (division: string) => {
    switch (division.toLowerCase()) {
      case 'primera': return 'bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100'
      case 'segunda': return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
      case 'tercera': return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Posición</TableHead>
            <TableHead>Equipo</TableHead>
            <TableHead>División</TableHead>
            <TableHead className="text-right">Puntos</TableHead>
            <TableHead className="text-right">Partidos</TableHead>
            <TableHead className="text-right">Torneos</TableHead>
            <TableHead className="text-right">% Victoria</TableHead>
            <TableHead className="text-right">Racha</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => {
            const positionChange = getPositionChange(team.position, team.previousPosition)
            
            return (
              <TableRow key={team.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {team.position <= 3 && (
                      <Trophy className={
                        team.position === 1 ? "text-yellow-500" :
                        team.position === 2 ? "text-gray-400" :
                        "text-amber-600"
                      } />
                    )}
                    #{team.position}
                    {positionChange && (
                      <div className="flex items-center text-xs">
                        {positionChange.icon}
                        {positionChange.value > 0 && positionChange.value}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img 
                      src={team.logo} 
                      alt={team.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{team.name}</div>
                      <div className="flex -space-x-2">
                        {team.members.map((member, index) => (
                          <img
                            key={index}
                            src={member.avatar}
                            alt={member.name}
                            className="w-6 h-6 rounded-full border-2 border-background"
                            title={member.name}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getDivisionColor(team.division)}>
                    {team.division}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {team.points}
                </TableCell>
                <TableCell className="text-right">
                  {team.gamesPlayed}
                </TableCell>
                <TableCell className="text-right">
                  {team.tournaments.won}/{team.tournaments.played}
                </TableCell>
                <TableCell className="text-right">
                  {team.winRate}%
                </TableCell>
                <TableCell className="text-right">
                  {getStreakBadge(team.streak)}
                </TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    onClick={() => onTeamClick(team.id)}
                  >
                    Ver equipo
                  </Button>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}