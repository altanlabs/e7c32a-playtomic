import { CourtCard } from "@/components/blocks/court-card"
import { CourtFilters } from "@/components/blocks/court-filters"
import { useState } from "react"

// Datos de ejemplo - En una implementación real, esto vendría de una API
const MOCK_COURTS = [
  {
    id: "1",
    name: "Cancha Street Basketball",
    location: "Parque Deportivo Central, Madrid",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop",
    rating: 4.8,
    reviews: 124,
    pricePerHour: 20,
    features: [
      "Iluminación",
      "Suelo profesional",
      "Vestuarios",
      "Parking"
    ],
    availability: {
      morning: true,
      afternoon: true,
      night: true
    }
  },
  {
    id: "2",
    name: "The Cage Downtown",
    location: "Plaza del Deporte, Madrid",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop",
    rating: 4.5,
    reviews: 89,
    pricePerHour: 15,
    features: [
      "Iluminación",
      "Cubierta",
      "Gradas"
    ],
    availability: {
      morning: false,
      afternoon: true,
      night: true
    }
  },
  {
    id: "3",
    name: "Urban Court",
    location: "Complejo Deportivo Sur, Madrid",
    image: "https://images.unsplash.com/photo-1544919982-b61976f0ba43?q=80&w=1476&auto=format&fit=crop",
    rating: 4.7,
    reviews: 156,
    pricePerHour: 25,
    features: [
      "Suelo profesional",
      "Vestuarios",
      "Cafetería",
      "Parking"
    ],
    availability: {
      morning: true,
      afternoon: true,
      night: false
    }
  }
]

export default function CourtsPage() {
  const [filters, setFilters] = useState({})
  const [courts] = useState(MOCK_COURTS)

  const handleFilterChange = (newFilters: any) => {
    setFilters(newFilters)
    // Aquí iría la lógica de filtrado real
    console.log("Aplicando filtros:", newFilters)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-8">
        {/* Encabezado */}
        <div>
          <h1 className="text-3xl font-bold mb-2">Canchas de baloncesto 3x3</h1>
          <p className="text-muted-foreground">
            Encuentra y reserva las mejores canchas para tus partidos
          </p>
        </div>

        {/* Filtros */}
        <CourtFilters onFilterChange={handleFilterChange} />

        {/* Lista de canchas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courts.map((court) => (
            <CourtCard key={court.id} {...court} />
          ))}
        </div>

        {/* Estado de búsqueda */}
        <div className="text-center text-muted-foreground">
          Mostrando {courts.length} canchas disponibles
        </div>
      </div>
    </div>
  )
}