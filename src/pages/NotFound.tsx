import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl font-semibold">Página no encontrada</p>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">
          Lo sentimos, la página que buscas no existe o ha sido movida.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="mt-4 h-7 text-xs px-3 bg-[#FFA726] hover:bg-[#FF9800]"
        >
          Volver al inicio
        </Button>
      </div>
    </div>
  )
}