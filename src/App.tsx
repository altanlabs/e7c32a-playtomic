import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/theme/theme-provider"
import { DatabaseProvider } from "@altanlabs/database"

const config = {
  API_BASE_URL: "https://api.altan.ai/platform/database",
  SAMPLE_TABLES: {}  // We'll add tables when needed
}

export default function App() {
  return (
    <DatabaseProvider config={config}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </DatabaseProvider>
  )
}