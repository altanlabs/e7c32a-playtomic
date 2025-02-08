import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-xl">
              3x3 League
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/courts">
                <Button variant="ghost">Canchas</Button>
              </Link>
              <Link to="/players">
                <Button variant="ghost">Jugadores</Button>
              </Link>
              <Link to="/tournaments">
                <Button variant="ghost">Torneos</Button>
              </Link>
              <Link to="/rankings">
                <Button variant="ghost">Rankings</Button>
              </Link>
              <Link to="/booking">
                <Button className="bg-[#FFA726] hover:bg-[#FF9800]">
                  Reservar
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">3x3 League</h3>
              <p className="text-sm text-muted-foreground">
                La mejor plataforma para jugar baloncesto 3x3
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/courts">Canchas</Link></li>
                <li><Link to="/players">Jugadores</Link></li>
                <li><Link to="/tournaments">Torneos</Link></li>
                <li><Link to="/rankings">Rankings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/privacy">Privacidad</Link></li>
                <li><Link to="/terms">Términos</Link></li>
                <li><Link to="/cookies">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@3x3league.com</li>
                <li>Tel: +34 900 123 456</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 3x3 League. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}