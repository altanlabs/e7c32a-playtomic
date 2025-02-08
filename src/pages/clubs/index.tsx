import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"

export default function ClubsPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Clubs</h1>
          <p className="text-muted-foreground">
            Encuentra los mejores clubs y pistas de baloncesto 3x3
          </p>
        </div>
        <Link to="/clubs/publish">
          <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
            <Plus className="mr-2 h-4 w-4" />
            Publicar pista
          </Button>
        </Link>
      </div>

      {/* Lista de clubs - Por implementar */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder para la lista de clubs */}
        <div className="bg-card rounded-lg border p-6">
          <h3 className="text-lg font-semibold mb-2">Próximamente</h3>
          <p className="text-muted-foreground">
            Estamos trabajando para traerte los mejores clubs de baloncesto 3x3
          </p>
        </div>
      </div>
    </div>
  )
}