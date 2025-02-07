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

interface PlayerFiltersProps {
  onFilterChange: (filters: any) => void
}

export function PlayerFilters({ onFilterChange }: PlayerFiltersProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Buscar jugador..." 
            className="pl-10"
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>

        <Select onValueChange={(value) => onFilterChange({ position: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Posición" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="base">Base</SelectItem>
            <SelectItem value="escolta">Escolta</SelectItem>
            <SelectItem value="alero">Alero</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ level: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Nivel" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="principiante">Principiante</SelectItem>
            <SelectItem value="intermedio">Intermedio</SelectItem>
            <SelectItem value="avanzado">Avanzado</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ availability: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Disponibilidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="manana">Mañana</SelectItem>
            <SelectItem value="tarde">Tarde</SelectItem>
            <SelectItem value="noche">Noche</SelectItem>
            <SelectItem value="finde">Fin de semana</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={() => onFilterChange({})}>
          Limpiar filtros
        </Button>
        <Button>
          Aplicar filtros
        </Button>
      </div>
    </div>
  )
}