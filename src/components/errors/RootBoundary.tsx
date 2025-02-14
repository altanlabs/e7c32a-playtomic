import { useRouteError } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function RootBoundary() {
  const error = useRouteError()
  
  return (
    <div className="min-h-screen bg-[#fff6e7] flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tighter">
            Oops! Algo salió mal
          </h1>
          <p className="text-muted-foreground">
            No te preocupes, estamos trabajando en ello
          </p>
        </div>
        
        <div className="flex justify-center">
          <Button 
            onClick={() => window.location.reload()}
            className="bg-[#029455] hover:bg-[#029455]/90"
          >
            Intentar de nuevo
          </Button>
        </div>
      </div>
    </div>
  )
}