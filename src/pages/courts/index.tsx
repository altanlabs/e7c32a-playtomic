import { useState } from "react"
import { motion } from "framer-motion"
import { CourtCard } from "@/components/blocks/court-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal, MapPin } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"

// Mock data for courts
const courts = [
  {
    id: 1,
    name: "Polideportivo Central",
    address: "Av. Principal 123, Barcelona",
    rating: 4.8,
    distance: "1.2 km",
    availability: "Disponible ahora",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    price: "30€",
    sport: "Baloncesto",
    amenities: ["Vestuarios", "Parking", "Iluminación"]
  },
  {
    id: 2,
    name: "Club Deportivo Elite",
    address: "Calle Deportiva 456, Barcelona",
    rating: 4.9,
    distance: "2.5 km",
    availability: "Disponible en 1h",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    price: "25€",
    sport: "Baloncesto",
    amenities: ["Vestuarios", "Cafetería"]
  },
  {
    id: 3,
    name: "Centro Deportivo Municipal",
    address: "Plaza del Deporte 789, Barcelona",
    rating: 4.7,
    distance: "3.1 km",
    availability: "Disponible mañana",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    price: "20€",
    sport: "Baloncesto",
    amenities: ["Parking", "Iluminación"]
  },
  {
    id: 4,
    name: "Complejo Deportivo Urban",
    address: "Calle Nueva 321, Barcelona",
    rating: 4.6,
    distance: "4.0 km",
    availability: "Disponible ahora",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    price: "28€",
    sport: "Baloncesto",
    amenities: ["Vestuarios", "Cafetería", "Parking"]
  }
]

export default function CourtsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([0, 50])
  const [selectedSport, setSelectedSport] = useState("all")
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])

  const handleBook = (courtId: number) => {
    console.log("Booking court:", courtId)
    // Implement booking logic
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Canchas disponibles</h1>
          <p className="text-muted-foreground">
            Encuentra y reserva las mejores canchas cerca de ti
          </p>
        </div>
        
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Buscar por ubicación..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <SlidersHorizontal className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtros</SheetTitle>
                <SheetDescription>
                  Ajusta los filtros para encontrar la cancha perfecta
                </SheetDescription>
              </SheetHeader>
              
              <div className="space-y-6 py-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Deporte</label>
                  <Select
                    value={selectedSport}
                    onValueChange={setSelectedSport}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un deporte" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos</SelectItem>
                      <SelectItem value="basketball">Baloncesto</SelectItem>
                      <SelectItem value="football">Fútbol</SelectItem>
                      <SelectItem value="tennis">Tenis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Rango de precio</label>
                  <div className="pt-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={50}
                      step={1}
                    />
                    <div className="flex justify-between mt-2">
                      <span className="text-sm text-muted-foreground">{priceRange[0]}€</span>
                      <span className="text-sm text-muted-foreground">{priceRange[1]}€</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Servicios</label>
                  <div className="flex flex-wrap gap-2">
                    {["Vestuarios", "Parking", "Iluminación", "Cafetería"].map((amenity) => (
                      <Badge
                        key={amenity}
                        variant={selectedAmenities.includes(amenity) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => {
                          setSelectedAmenities(
                            selectedAmenities.includes(amenity)
                              ? selectedAmenities.filter(a => a !== amenity)
                              : [...selectedAmenities, amenity]
                          )
                        }}
                      >
                        {amenity}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Active Filters */}
      {(selectedSport !== "all" || selectedAmenities.length > 0 || searchQuery) && (
        <div className="flex flex-wrap gap-2 mb-6">
          {selectedSport !== "all" && (
            <Badge variant="secondary" className="gap-2">
              {selectedSport}
              <button
                onClick={() => setSelectedSport("all")}
                className="ml-1 hover:text-destructive"
              >
                ×
              </button>
            </Badge>
          )}
          {selectedAmenities.map(amenity => (
            <Badge key={amenity} variant="secondary" className="gap-2">
              {amenity}
              <button
                onClick={() => setSelectedAmenities(selectedAmenities.filter(a => a !== amenity))}
                className="ml-1 hover:text-destructive"
              >
                ×
              </button>
            </Badge>
          ))}
          {searchQuery && (
            <Badge variant="secondary" className="gap-2">
              <MapPin className="h-3 w-3" />
              {searchQuery}
              <button
                onClick={() => setSearchQuery("")}
                className="ml-1 hover:text-destructive"
              >
                ×
              </button>
            </Badge>
          )}
        </div>
      )}

      {/* Courts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courts.map((court, index) => (
          <motion.div
            key={court.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CourtCard
              {...court}
              onBook={() => handleBook(court.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}