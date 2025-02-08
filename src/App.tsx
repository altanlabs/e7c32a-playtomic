import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from "@/theme/theme-provider"
import Layout from './components/layout/Layout'
import IndexPage from './pages'
import PlayersPage from './pages/players'
import CourtsPage from './pages/courts'
import ClubsPage from './pages/clubs'
import PublishCourtPage from './pages/clubs/publish'
import TournamentsPage from './pages/tournaments'
import CreateTournamentPage from './pages/tournaments/create'
import RankingsPage from './pages/rankings'
import BookingPage from './pages/booking'
import InviteToPlayPage from './pages/invite-to-play'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/courts" element={<CourtsPage />} />
            <Route path="/clubs" element={<ClubsPage />} />
            <Route path="/clubs/publish" element={<PublishCourtPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/tournaments/create" element={<CreateTournamentPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/invite-to-play" element={<InviteToPlayPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App