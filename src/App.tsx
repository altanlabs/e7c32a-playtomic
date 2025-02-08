import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/theme/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import Layout from './layout'

// Páginas principales
import IndexPage from './pages'
import PlayersPage from './pages/players'
import ArosPage from './pages/courts' // Mantenemos el archivo como courts.tsx por ahora
import ClubsPage from './pages/clubs'
import TournamentsPage from './pages/tournaments'
import RankingsPage from './pages/rankings'

// Páginas de funcionalidad
import BookingPage from './pages/booking'
import BookingPaymentPage from './pages/booking/payment'
import BookingConfirmationPage from './pages/booking/confirmation'

// Páginas de creación y gestión
import PublishAroPage from './pages/clubs/publish'
import CreateTournamentPage from './pages/tournaments/create'
import JoinAsPlayerPage from './pages/join-as-player'
import InviteToPlayPage from './pages/invite-to-play'

// Página 404
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="dribla-theme">
      <Router>
        <Layout>
          <Routes>
            {/* Páginas principales */}
            <Route path="/" element={<IndexPage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/aros" element={<ArosPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            
            {/* Flujo de reserva */}
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/payment" element={<BookingPaymentPage />} />
            <Route path="/booking/confirmation" element={<BookingConfirmationPage />} />
            
            {/* Páginas de creación y gestión */}
            <Route path="/clubs/publish" element={<PublishAroPage />} />
            <Route path="/tournaments/create" element={<CreateTournamentPage />} />
            <Route path="/join-as-player" element={<JoinAsPlayerPage />} />
            <Route path="/invite-to-play" element={<InviteToPlayPage />} />
            
            {/* 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </ThemeProvider>
  )
}

export default App