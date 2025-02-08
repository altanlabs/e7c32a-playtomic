import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { Card } from "@/components/ui/card"

export default function RankingsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Background */}
      <div className="relative bg-[#0A0F1C] py-16">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="/headers/basketball-trophy.jpg"
            alt="Basketball Trophy"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/80 to-[#0A0F1C]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-4xl font-bold mb-3">
              Rankings
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              Descubre los mejores jugadores y equipos
            </p>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-0 z-10 bg-[#0A0F1C] shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Buscar jugadores o equipos..."
              className="w-full pl-12 pr-4 py-3 rounded-full border bg-background/95 text-base"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 overflow-x-auto no-scrollbar">
              <div className="flex gap-2 pb-1">
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Jugadores
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  Equipos
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  3x3
                </Button>
                <Button variant="outline" size="sm" className="flex-none whitespace-nowrap rounded-full bg-background/10 hover:bg-background/20 border-none">
                  5x5
                </Button>
              </div>
            </div>
            <Button variant="outline" size="icon" className="flex-none rounded-full bg-background/10 hover:bg-background/20 border-none">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Rankings Content */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-[340px] mx-auto md:max-w-none md:w-full">
            <Card className="bg-[#0A0F1C] border-border">
              <div className="p-4">
                {/* Rankings table will go here */}
                <div className="text-center text-muted-foreground">
                  Contenido del ranking
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}