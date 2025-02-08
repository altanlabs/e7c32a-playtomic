import { Link } from "react-router-dom"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="text-2xl font-bold text-orange-500">
              3x3 League
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/courts" className="hover:text-orange-500 transition-colors">
                Canchas
              </Link>
              <Link to="/players" className="hover:text-orange-500 transition-colors">
                Jugadores
              </Link>
              <Link to="/tournaments" className="hover:text-orange-500 transition-colors">
                Torneos
              </Link>
              <Link to="/rankings" className="hover:text-orange-500 transition-colors">
                Rankings
              </Link>
              <Link 
                to="/booking"
                className="bg-[#FFA726] hover:bg-[#FF9800] text-white px-4 py-2 rounded-md transition-colors"
              >
                Reservar
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">3x3 League</h3>
              <p className="text-gray-600 dark:text-gray-400">
                La mejor plataforma para jugar baloncesto 3x3
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2">
                <li><Link to="/courts" className="hover:text-orange-500">Canchas</Link></li>
                <li><Link to="/players" className="hover:text-orange-500">Jugadores</Link></li>
                <li><Link to="/tournaments" className="hover:text-orange-500">Torneos</Link></li>
                <li><Link to="/rankings" className="hover:text-orange-500">Rankings</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/privacy" className="hover:text-orange-500">Privacidad</Link></li>
                <li><Link to="/terms" className="hover:text-orange-500">Términos</Link></li>
                <li><Link to="/cookies" className="hover:text-orange-500">Cookies</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>Email: info@3x3league.com</li>
                <li>Tel: +34 900 123 456</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600 dark:text-gray-400">
            © 2024 3x3 League. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}