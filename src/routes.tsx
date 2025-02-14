import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import RootBoundary from "./components/errors/RootBoundary";

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
    errorElement: <RootBoundary />,
  },
  {
    path: "/players",
    element: <PlayersPage />,
    errorElement: <RootBoundary />,
  },
  {
    path: "/courts",
    element: <CourtsPage />,
    errorElement: <RootBoundary />,
  },
  {
    path: "/tournaments",
    element: <TournamentsPage />,
    errorElement: <RootBoundary />,
  },
  {
    path: "/rankings",
    element: <RankingsPage />,
    errorElement: <RootBoundary />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
    errorElement: <RootBoundary />,
  },
]);