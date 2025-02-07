import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

interface CourtFiltersProps {
  onFilterChange: (filters: any) => void
  className?: string
}

export function CourtFilters({ onFilterChange, className }: CourtFiltersProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Date Selection */}
      <div className="space-y-2">
        <Label>Fecha</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !Date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {Date ? format(Date, "PPP") : "Seleccionar fecha"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Range */}
      <div className="space-y-2">
        <Label>Horario</Label>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Desde" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 24 }, (_, i) => (
                <SelectItem key={i} value={`${i}:00`}>
                  {`${i}:00`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Hasta" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: 24 }, (_, i) => (
                <SelectItem key={i} value={`${i}:00`}>
                  {`${i}:00`}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Sport Type */}
      <div className="space-y-2">
        <Label>Deporte</Label>
        <RadioGroup defaultValue="basketball" className="flex gap-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="basketball" id="basketball" />
            <Label htmlFor="basketball">Baloncesto</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="football" id="football" />
            <Label htmlFor="football">Fútbol</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="tennis" id="tennis" />
            <Label htmlFor="tennis">Tenis</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Price Range */}
      <div className="space-y-2">
        <Label>Precio por hora</Label>
        <Slider
          defaultValue={[0, 50]}
          max={50}
          step={1}
          className="py-4"
        />
        <div className="flex justify-between">
          <span className="text-sm text-muted-foreground">0€</span>
          <span className="text-sm text-muted-foreground">50€</span>
        </div>
      </div>

      {/* Location */}
      <div className="space-y-2">
        <Label>Ubicación</Label>
        <Input placeholder="Introduce una dirección..." />
      </div>

      {/* Amenities */}
      <div className="space-y-2">
        <Label>Servicios</Label>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="parking" className="flex-1">Parking</Label>
            <Switch id="parking" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="lockers" className="flex-1">Vestuarios</Label>
            <Switch id="lockers" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="lighting" className="flex-1">Iluminación</Label>
            <Switch id="lighting" />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="cafe" className="flex-1">Cafetería</Label>
            <Switch id="cafe" />
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-2">
        <Label>Valoración mínima</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Seleccionar valoración" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="3">3+ estrellas</SelectItem>
            <SelectItem value="4">4+ estrellas</SelectItem>
            <SelectItem value="4.5">4.5+ estrellas</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apply Filters Button */}
      <Button className="w-full">Aplicar filtros</Button>
    </div>
  )
}