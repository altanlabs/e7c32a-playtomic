import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Search, Filter, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { useState } from "react"

interface TournamentFiltersProps {
  onFilterChange: (filters: any) => void
}

export function TournamentFilters({ onFilterChange }: TournamentFiltersProps) {
  const [isOpen, setIsOpen] = useState(false)
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
    setIsOpen(false)
  }

  const handleApplyFilters = () => {
    onFilterChange(filters)
    setIsOpen(false)
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground h-3 w-3 sm:h-4 sm:w-4" />
          <Input
            placeholder="Buscar torneos..."
            value={filters.search}
            onChange={(e) => handleFilterChange("search", e.target.value)}
            className="pl-8 h-8 text-xs sm:text-sm"
          />
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              size="sm"
              className="w-full sm:w-auto h-8 text-xs sm:text-sm"
            >
              <Filter className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Filtros
              {Object.values(filters).some(Boolean) && (
                <Badge variant="secondary" className="ml-2 text-xs">
                  {Object.values(filters).filter(Boolean).length}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[90%] sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="text-base sm:text-lg">Filtros</SheetTitle>
              <SheetDescription className="text-xs sm:text-sm">
                Ajusta los filtros para encontrar el torneo perfecto
              </SheetDescription>
            </SheetHeader>
            <div className="space-y-3 py-4">
              <div className="space-y-1">
                <Label className="text-xs sm:text-sm">Ubicación</Label>
                <Select
                  value={filters.location}
                  onValueChange={(value) => handleFilterChange("location", value)}
                >
                  <SelectTrigger className="h-8 text-xs sm:text-sm">
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

              <div className="space-y-1">
                <Label className="text-xs sm:text-sm">Nivel</Label>
                <Select
                  value={filters.level}
                  onValueChange={(value) => handleFilterChange("level", value)}
                >
                  <SelectTrigger className="h-8 text-xs sm:text-sm">
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

              <div className="space-y-1">
                <Label className="text-xs sm:text-sm">Tipo de torneo</Label>
                <Select
                  value={filters.type}
                  onValueChange={(value) => handleFilterChange("type", value)}
                >
                  <SelectTrigger className="h-8 text-xs sm:text-sm">
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

              <div className="space-y-1">
                <Label className="text-xs sm:text-sm">Rango de precio</Label>
                <Select
                  value={filters.priceRange}
                  onValueChange={(value) => handleFilterChange("priceRange", value)}
                >
                  <SelectTrigger className="h-8 text-xs sm:text-sm">
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
            </div>
            <SheetFooter className="flex-row gap-2 sm:gap-4">
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1 h-8 text-xs sm:text-sm"
                onClick={handleReset}
              >
                <X className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Resetear
              </Button>
              <Button 
                size="sm"
                className="flex-1 bg-[#FFA726] hover:bg-[#FF9800] h-8 text-xs sm:text-sm"
                onClick={handleApplyFilters}
              >
                Aplicar filtros
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Chips de filtros activos */}
      {Object.entries(filters).some(([_, value]) => value) && (
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {Object.entries(filters).map(([key, value]) => {
            if (!value) return null
            return (
              <Badge 
                key={key}
                variant="secondary"
                className="flex items-center gap-1 px-2 py-0.5 text-xs"
              >
                {value}
                <X 
                  className="h-3 w-3 ml-1 cursor-pointer" 
                  onClick={() => handleFilterChange(key, "")}
                />
              </Badge>
            )
          })}
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleReset}
            className="text-xs h-6 px-2"
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  )
}