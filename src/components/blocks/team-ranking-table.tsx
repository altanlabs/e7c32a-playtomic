import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, ArrowUp, ArrowDown, Minus } from "lucide-react"

interface TeamRankingTableProps {
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
    trend: "up" | "down" | "same"
  }[]
  onTeamClick?: (teamId: string) => void
}

export function TeamRankingTable({ teams, onTeamClick }: TeamRankingTableProps) {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="h-3 w-3 text-green-500" />
      case "down":
        return <ArrowDown className="h-3 w-3 text-red-500" />
      default:
        return <Minus className="h-3 w-3 text-gray-500" />
    }
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12 text-center text-xs">Pos</TableHead>
            <TableHead className="text-xs">Equipo</TableHead>
            <TableHead className="text-center text-xs">PTS</TableHead>
            <TableHead className="text-center text-xs hidden sm:table-cell">V-D</TableHead>
            <TableHead className="text-center text-xs hidden sm:table-cell">Racha</TableHead>
            <TableHead className="w-12 text-center text-xs">Tend.</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow 
              key={team.id}
              className={onTeamClick ? "cursor-pointer hover:bg-accent/50" : ""}
              onClick={() => onTeamClick?.(team.id)}
            >
              <TableCell className="text-center text-xs font-medium">
                {team.position}
                {team.position === 1 && (
                  <Trophy className="h-3 w-3 text-yellow-500 inline ml-1" />
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={team.avatar} />
                    <AvatarFallback>{team.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-medium">{team.name}</p>
                    <Badge variant="secondary" className="text-[10px] mt-0.5">
                      {team.level}
                    </Badge>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-center text-xs font-medium">
                {team.points}
              </TableCell>
              <TableCell className="text-center text-xs hidden sm:table-cell">
                {team.wins}-{team.losses}
              </TableCell>
              <TableCell className="text-center text-xs hidden sm:table-cell">
                {team.streak}
              </TableCell>
              <TableCell className="text-center">
                {getTrendIcon(team.trend)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}