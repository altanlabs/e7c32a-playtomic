import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@/theme/theme-provider";
import RootBoundary from "./components/errors/RootBoundary";
import { Toaster } from "@/components/ui/sonner";

import Layout from "./layout";
import Index from "./pages/index";
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
            title: "Basketball 3x3",
            navigation: [
              { label: "Inicio", href: "/" },
              { label: "Canchas", href: "/courts" },
              { label: "Torneos", href: "/tournaments" },
              { label: "Rankings", href: "/rankings" },
            ],
            showUserMenu: true,
            showThemeToggle: true,
          }}
          footer={{
            text: "© 2024 Basketball 3x3. Todos los derechos reservados.",
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