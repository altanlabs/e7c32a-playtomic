import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface PlayerFiltersProps {
  onFilterChange: (filters: any) => void
}

export function PlayerFilters({ onFilterChange }: PlayerFiltersProps) {
  const handleLevelChange = (value: string) => {
    onFilterChange({ level: value })
  }

  return (
    <Select onValueChange={handleLevelChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Nivel" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Todos los niveles</SelectItem>
        <SelectItem value="Principiante">Principiante</SelectItem>
        <SelectItem value="Intermedio">Intermedio</SelectItem>
        <SelectItem value="Avanzado">Avanzado</SelectItem>
        <SelectItem value="Pro">Pro</SelectItem>
      </SelectContent>
    </Select>
  )
}