import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";

// Pages
import HomePage from "./pages/index";
import PlayersPage from "./pages/players";
import CourtsPage from "./pages/courts";
import TournamentsPage from "./pages/tournaments";
import RankingsPage from "./pages/rankings";
import NotFoundPage from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/players",
    element: <PlayersPage />,
  },
  {
    path: "/courts",
    element: <CourtsPage />,
  },
  {
    path: "/tournaments",
    element: <TournamentsPage />,
  },
  {
    path: "/rankings",
    element: <RankingsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);