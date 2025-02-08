import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"
import { Link } from "react-router-dom"

export default function ClubsPage() {
  const clubs = [
    {
      id: 1,
      name: "Club Baloncesto Central",
      address: "Calle Principal 123",
      phone: "934 567 890",
      email: "info@cbcentral.com",
      courts: 3,
      image: "/sports/basketball.svg"
    },
    {
      id: 2,
      name: "Urban Basketball Club",
      address: "Avenida Deportiva 45",
      phone: "935 678 901",
      email: "contact@urbanbc.com",
      courts: 2,
      image: "/sports/basketball-3x3.svg"
    },
    // Añade más clubs aquí
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Clubs</h1>
        <Link to="/clubs/publish">
          <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
            Publicar pista
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => (
          <Card key={club.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={club.image}
                alt={club.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{club.name}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{club.address}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{club.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>{club.email}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span>{club.courts} pistas disponibles</span>
                  <Button variant="outline">Ver detalles</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}