import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/theme/theme-provider";
import RootBoundary from "./components/errors/RootBoundary";
import { Toaster } from "@/components/ui/sonner";

import Layout from "./layout";
import Index from "./pages/index";
import Players from "./pages/players";
import Tournaments from "./pages/tournaments";
import CreateTournament from "./pages/tournaments/create";
import TournamentDetail from "./pages/tournaments/[id]";
import Courts from "./pages/courts";
import CourtDetail from "./pages/courts/[id]";
import Notifications from "./pages/notifications";
import NotFound from "./pages/NotFound";
import { useTheme } from "./theme/use-theme";

const App = () => {
  const { theme } = useTheme();

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout 
          showSidebar={false} 
          showHeader={true} 
          showFooter={true}
          header={{
            title: "Dribla",
            navigation: [
              { label: "Inicio", href: "/" },
              { label: "Jugadores", href: "/players" },
              { label: "Canchas", href: "/courts" },
              { label: "Torneos", href: "/tournaments" },
              { label: "Rankings", href: "/rankings" },
            ],
            showUserMenu: true,
            showThemeToggle: true,
            showNotifications: true,
          }}
          footer={{
            text: "© 2024 Dribla. Todos los derechos reservados.",
            links: [
              { label: "Reglas 3x3", href: "/rules" },
              { label: "Términos", href: "/terms" },
              { label: "Contacto", href: "/contact" },
            ],
          }}
        />
      ),
      errorElement: <RootBoundary />,
      children: [
        {
          index: true,
          element: <Index />,
        },
        {
          path: "/players",
          element: <Players />,
        },
        {
          path: "/courts",
          element: <Courts />,
        },
        {
          path: "/courts/:id",
          element: <CourtDetail />,
        },
        {
          path: "/tournaments",
          element: <Tournaments />,
        },
        {
          path: "/tournaments/create",
          element: <CreateTournament />,
        },
        {
          path: "/tournaments/:id",
          element: <TournamentDetail />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Theme appearance={theme === "system" ? "light" : theme}>
        <div className={theme}>
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </Theme>
    </ThemeProvider>
  );
};

export default App;