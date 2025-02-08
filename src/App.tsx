import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/theme/theme-provider"
import Layout from '@/components/layout/Layout'
import IndexPage from './pages'
import BookingPage from './pages/booking'
import BookingPaymentPage from './pages/booking/payment'
import BookingConfirmationPage from './pages/booking/confirmation'
import PlayersPage from './pages/players'
import CourtsPage from './pages/courts'
import ClubsPage from './pages/clubs'
import PublishCourtPage from './pages/clubs/publish'
import TournamentsPage from './pages/tournaments'
import RankingsPage from './pages/rankings'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/booking/payment" element={<BookingPaymentPage />} />
            <Route path="/booking/confirmation" element={<BookingConfirmationPage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/courts" element={<CourtsPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/clubs/publish" element={<PublishCourtPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
        <Toaster />
      </Router>
    </ThemeProvider>
  )
}

export default App