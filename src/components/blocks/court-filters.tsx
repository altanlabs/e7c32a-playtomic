import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MapPin, Search } from "lucide-react"
import { useState } from "react"

interface CourtFiltersProps {
  onFilterChange: (filters: any) => void
}

export function CourtFilters({ onFilterChange }: CourtFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 50])

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-6">
      {/* Búsqueda y ubicación */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Buscar cancha..." 
            className="pl-10"
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input 
            placeholder="Ubicación" 
            className="pl-10"
            onChange={(e) => onFilterChange({ location: e.target.value })}
          />
        </div>
      </div>

      {/* Filtros principales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select onValueChange={(value) => onFilterChange({ availability: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Disponibilidad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="morning">Mañana</SelectItem>
            <SelectItem value="afternoon">Tarde</SelectItem>
            <SelectItem value="night">Noche</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ surface: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Tipo de superficie" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="concrete">Cemento</SelectItem>
            <SelectItem value="synthetic">Sintético</SelectItem>
            <SelectItem value="wood">Madera</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={(value) => onFilterChange({ sort: value })}>
          <SelectTrigger>
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="price_asc">Precio: Menor a mayor</SelectItem>
            <SelectItem value="price_desc">Precio: Mayor a menor</SelectItem>
            <SelectItem value="rating">Mejor valoradas</SelectItem>
            <SelectItem value="distance">Más cercanas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Rango de precios */}
      <div className="space-y-2">
        <Label>Precio por hora</Label>
        <div className="px-2">
          <Slider
            defaultValue={[0, 50]}
            max={100}
            step={1}
            value={priceRange}
            onValueChange={(value) => {
              setPriceRange(value)
              onFilterChange({ priceRange: value })
            }}
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>{priceRange[0]}€</span>
          <span>{priceRange[1]}€</span>
        </div>
      </div>

      {/* Características adicionales */}
      <div className="space-y-4">
        <Label>Características</Label>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center space-x-2">
            <Switch id="lights" onCheckedChange={(checked) => 
              onFilterChange({ lights: checked })
            }/>
            <Label htmlFor="lights">Iluminación</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="covered" onCheckedChange={(checked) => 
              onFilterChange({ covered: checked })
            }/>
            <Label htmlFor="covered">Cubierta</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="locker_room" onCheckedChange={(checked) => 
              onFilterChange({ lockerRoom: checked })
            }/>
            <Label htmlFor="locker_room">Vestuarios</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Switch id="parking" onCheckedChange={(checked) => 
              onFilterChange({ parking: checked })
            }/>
            <Label htmlFor="parking">Parking</Label>
          </div>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          onClick={() => {
            setPriceRange([0, 50])
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