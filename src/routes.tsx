import { Route, Routes as RouterRoutes } from "react-router-dom"
import Layout from "./layout"

// Pages
import HomePage from "./pages/index"
import PlayersPage from "./pages/players"
import CourtsPage from "./pages/courts"
import TournamentsPage from "./pages/tournaments"
import RankingsPage from "./pages/rankings"
import NotFoundPage from "./pages/NotFound"

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<HomePage />} />
      <Route path="/players" element={<PlayersPage />} />
      <Route path="/courts" element={<CourtsPage />} />
      <Route path="/tournaments" element={<TournamentsPage />} />
      <Route path="/rankings" element={<RankingsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  )
}