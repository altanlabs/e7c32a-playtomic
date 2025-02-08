import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, Filter } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

interface TournamentFiltersProps {
  onFilterChange: (filters: any) => void
}

export function TournamentFilters({ onFilterChange }: TournamentFiltersProps) {
  const [filters, setFilters] = useState({
    search: "",
    location: "",
    level: "",
    type: "",
    priceRange: ""
  })

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onFilterChange(newFilters)
  }

  const handleReset = () => {
    const resetFilters = {
      search: "",
      location: "",
      level: "",
      type: "",
      priceRange: ""
    }
    setFilters(resetFilters)
    onFilterChange(resetFilters)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Buscar torneos..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="pl-10"
          />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filtros
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Filtros</SheetTitle>
              <SheetDescription>
                Ajusta los filtros para encontrar el torneo perfecto
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Ubicación</Label>
                <Select
                  value={filters.location}
                  onValueChange={(value) => handleFilterChange("location", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona ubicación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="madrid">Madrid</SelectItem>
                    <SelectItem value="barcelona">Barcelona</SelectItem>
                    <SelectItem value="valencia">Valencia</SelectItem>
                    <SelectItem value="sevilla">Sevilla</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Nivel</Label>
                <Select
                  value={filters.level}
                  onValueChange={(value) => handleFilterChange("level", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona nivel" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="principiante">Principiante</SelectItem>
                    <SelectItem value="intermedio">Intermedio</SelectItem>
                    <SelectItem value="avanzado">Avanzado</SelectItem>
                    <SelectItem value="profesional">Profesional</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Tipo de torneo</Label>
                <Select
                  value={filters.type}
                  onValueChange={(value) => handleFilterChange("type", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3x3">3x3</SelectItem>
                    <SelectItem value="5x5">5x5</SelectItem>
                    <SelectItem value="liga">Liga</SelectItem>
                    <SelectItem value="copa">Copa</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Rango de precio</Label>
                <Select
                  value={filters.priceRange}
                  onValueChange={(value) => handleFilterChange("priceRange", value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">0€ - 50€</SelectItem>
                    <SelectItem value="50-100">50€ - 100€</SelectItem>
                    <SelectItem value="100-200">100€ - 200€</SelectItem>
                    <SelectItem value="200+">200€+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex gap-4 pt-4">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={handleReset}
                >
                  Resetear
                </Button>
                <Button className="flex-1">
                  Aplicar filtros
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}