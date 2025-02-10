import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "@radix-ui/react-icons"

export interface TeamRankingTableProps {
  teams: {
    id: string
    position: number
    name: string
    avatar: string
    level: string
    points: number
    wins: number
    losses: number
    streak: string
    trend: 'up' | 'down' | 'same'
  }[]
  onTeamClick?: (teamId: string) => void
}

export function TeamRankingTable({ teams, onTeamClick }: TeamRankingTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Posición</TableHead>
          <TableHead>Equipo</TableHead>
          <TableHead>División</TableHead>
          <TableHead className="text-right">Puntos</TableHead>
          <TableHead className="text-right">Victorias</TableHead>
          <TableHead className="text-right">Derrotas</TableHead>
          <TableHead className="text-right">Racha</TableHead>
          <TableHead className="text-right">Tendencia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teams.map((team) => (
          <TableRow
            key={team.id}
            className="cursor-pointer hover:bg-muted/50"
            onClick={() => onTeamClick?.(team.id)}
          >
            <TableCell className="font-medium">{team.position}</TableCell>
            <TableCell>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={team.avatar} alt={team.name} />
                  <AvatarFallback>{team.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span>{team.name}</span>
              </div>
            </TableCell>
            <TableCell>{team.level}</TableCell>
            <TableCell className="text-right">{team.points}</TableCell>
            <TableCell className="text-right">{team.wins}</TableCell>
            <TableCell className="text-right">{team.losses}</TableCell>
            <TableCell className="text-right">{team.streak}</TableCell>
            <TableCell className="text-right">
              {team.trend === 'up' && <ArrowUpIcon className="inline h-4 w-4 text-green-500" />}
              {team.trend === 'down' && <ArrowDownIcon className="inline h-4 w-4 text-red-500" />}
              {team.trend === 'same' && <MinusIcon className="inline h-4 w-4 text-gray-500" />}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}