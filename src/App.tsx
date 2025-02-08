import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/theme/theme-provider"
import Layout from '@/components/layout/Layout'
import IndexPage from './pages'
import TournamentsPage from './pages/tournaments'
import TournamentDetailPage from './pages/tournaments/[id]'
import CreateTournamentPage from './pages/tournaments/create'
import TeamsPage from './pages/teams'
import TeamDetailPage from './pages/teams/[id]'
import CreateTeamPage from './pages/teams/create'
import JoinAsPlayerPage from './pages/join-as-player'
import RankingsPage from './pages/rankings'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            
            {/* Torneos */}
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/tournaments/:id" element={<TournamentDetailPage />} />
            <Route path="/tournaments/create" element={<CreateTournamentPage />} />
            <Route path="/publicar-evento" element={<CreateTournamentPage />} />
            
            {/* Equipos */}
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/teams/:id" element={<TeamDetailPage />} />
            <Route path="/teams/create" element={<CreateTeamPage />} />
            
            {/* Jugadores */}
            <Route path="/join-as-player" element={<JoinAsPlayerPage />} />
            
            {/* Rankings */}
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/rankings/teams" element={<RankingsPage />} />
            
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