import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface TeamRankingFiltersProps {
  onFilterChange: (filters: any) => void
  totalTeams: number
}

export function TeamRankingFilters({ onFilterChange, totalTeams }: TeamRankingFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filtros</h2>
        <span className="text-sm text-muted-foreground">
          {totalTeams} equipos en el ranking
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Buscar equipo..." 
            className="pl-10"
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>

        <Select onValueChange={(value) => onFilterChange({ division: value })}>
          <SelectTrigger>
            <SelectValue placeholder="División" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las divisiones</SelectItem>
            <SelectItem value="primera">Primera División</SelectItem>
            <SelectItem value="segunda">Segunda División</SelectItem>
            <SelectItem value="tercera">Tercera División</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ timeFrame: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Periodo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todo el tiempo</SelectItem>
            <SelectItem value="season">Esta temporada</SelectItem>
            <SelectItem value="month">Último mes</SelectItem>
            <SelectItem value="week">Última semana</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ sort: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="points">Puntos</SelectItem>
            <SelectItem value="winRate">% Victoria</SelectItem>
            <SelectItem value="tournaments">Torneos ganados</SelectItem>
            <SelectItem value="streak">Racha actual</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          onClick={() => onFilterChange({})}
        >
          Limpiar filtros
        </Button>
        <Button>
          Aplicar filtros
        </Button>
      </div>
    </div>
  )
}