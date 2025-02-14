import { Route, Routes as RouterRoutes } from "react-router-dom";
import IndexPage from "./pages/index";
import NotFoundPage from "./pages/NotFound";
import PlayersPage from "./pages/players";
import TournamentsPage from "./pages/tournaments";
import RankingsPage from "./pages/rankings";

export function Routes() {
  return (
    <RouterRoutes>
      <Route path="/" element={<IndexPage />} />
      <Route path="/players" element={<PlayersPage />} />
      <Route path="/aros" element={<PlayersPage />} />
      <Route path="/tournaments" element={<TournamentsPage />} />
      <Route path="/rankings" element={<RankingsPage />} />
      <Route path="/rules" element={<NotFoundPage />} />
      <Route path="/terms" element={<NotFoundPage />} />
      <Route path="/contact" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </RouterRoutes>
  );
}