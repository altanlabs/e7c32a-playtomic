import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Trophy, TrendingUp, TrendingDown, Minus } from "lucide-react"

interface RankingPlayer {
  id: string
  position: number
  previousPosition: number
  name: string
  avatar: string
  level: string
  points: number
  gamesPlayed: number
  winRate: number
  streak: number
}

interface RankingTableProps {
  players: RankingPlayer[]
  onPlayerClick: (playerId: string) => void
}

export function RankingTable({ players, onPlayerClick }: RankingTableProps) {
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
        variant={streak > 0 ? "success" : "destructive"}
        className="ml-2"
      >
        {streak > 0 ? `+${streak}` : streak}
      </Badge>
    )
  }

  const getLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      
      case 'avanzado': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
      case 'avanzado': return 'bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100'
      case 'intermedio': return 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Posición</TableHead>
            <TableHead>Jugador</TableHead>
            <TableHead>Nivel</TableHead>
            <TableHead className="text-right">Puntos</TableHead>
            <TableHead className="text-right">Partidos</TableHead>
            <TableHead className="text-right">% Victoria</TableHead>
            <TableHead className="text-right">Racha</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player) => {
            const positionChange = getPositionChange(player.position, player.previousPosition)
            
            return (
              <TableRow key={player.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {player.position <= 3 && (
                      <Trophy className={
                        player.position === 1 ? "text-yellow-500" :
                        player.position === 2 ? "text-gray-400" :
                        "text-amber-600"
                      } />
                    )}
                    #{player.position}
                    {positionChange && (
                      <div className="flex items-center text-xs">
                        {positionChange.icon}
                        {positionChange.value > 0 && positionChange.value}
                      </div>
                    )}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src={player.avatar} />
                      <AvatarFallback>{player.name[0]}</AvatarFallback>
                    </Avatar>
                    <span>{player.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={getLevelColor(player.level)}>
                    {player.level}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-bold">
                  {player.points}
                </TableCell>
                <TableCell className="text-right">
                  {player.gamesPlayed}
                </TableCell>
                <TableCell className="text-right">
                  {player.winRate}%
                </TableCell>
                <TableCell className="text-right">
                  {getStreakBadge(player.streak)}
                </TableCell>
                <TableCell>
                  <Button 
                    variant="ghost" 
                    onClick={() => onPlayerClick(player.id)}
                  >
                    Ver perfil
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