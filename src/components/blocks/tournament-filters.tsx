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
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { useState } from "react"

interface TournamentFiltersProps {
  onFilterChange: (filters: any) => void
}

export function TournamentFilters({ onFilterChange }: TournamentFiltersProps) {
  const [date, setDate] = useState<Date>()

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Buscar torneo..." 
            className="pl-10"
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>

        <Select onValueChange={(value) => onFilterChange({ type: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo de inscripción" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="team">Equipos</SelectItem>
            <SelectItem value="individual">Individual</SelectItem>
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
            <SelectItem value="pro">Profesional</SelectItem>
          </SelectContent>
        </Select>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left font-normal">
              {date ? format(date, "PPP", { locale: es }) : "Fecha del torneo"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={(date) => {
                setDate(date)
                onFilterChange({ date })
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          onClick={() => {
            setDate(undefined)
            onFilterChange({})
          }}
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