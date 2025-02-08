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
import InvitePlayersPage from './pages/invite-players'
import InviteToPlayPage from './pages/invite-to-play'
import JoinGameListPage from './pages/join-game'
import JoinGameDetailPage from './pages/join-game/[id]'
import PlayersPage from './pages/players'
import CourtsPage from './pages/courts'

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            
            {/* Páginas principales del menú */}
            <Route path="/players" element={<PlayersPage />} />
            <Route path="/courts" element={<CourtsPage />} />
            <Route path="/tournaments" element={<TournamentsPage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            
            {/* Torneos */}
            <Route path="/tournaments/:id" element={<TournamentDetailPage />} />
            <Route path="/tournaments/create" element={<CreateTournamentPage />} />
            <Route path="/publicar-evento" element={<CreateTournamentPage />} />
            
            {/* Equipos */}
            <Route path="/teams" element={<TeamsPage />} />
            <Route path="/teams/:id" element={<TeamDetailPage />} />
            <Route path="/teams/create" element={<CreateTeamPage />} />
            
            {/* Jugadores y Partidos */}
            <Route path="/join-as-player" element={<JoinAsPlayerPage />} />
            <Route path="/invite-players" element={<InvitePlayersPage />} />
            <Route path="/invite-to-play" element={<InviteToPlayPage />} />
            <Route path="/join-game" element={<JoinGameListPage />} />
            <Route path="/join-game/:id" element={<JoinGameDetailPage />} />
            
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