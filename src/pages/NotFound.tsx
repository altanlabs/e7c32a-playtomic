import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function NotFoundPage() {
  return (
    <div className="container mx-auto px-4 py-32 text-center">
      <h1 className="text-7xl font-bold mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        La página que buscas no existe
      </p>
      <Link to="/">
        <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
          Volver al inicio
        </Button>
      </Link>
    </div>
  )
}