import { DatabaseProvider } from "@altanlabs/database"
import { BrowserRouter as Router } from "react-router-dom"
import { ThemeProvider } from "./theme/theme-provider"
import { Toaster } from "sonner"
import { Routes } from "./routes"

const config = {
  API_BASE_URL: "https://api.altan.ai/galaxia/hook/mo6VsG",
  SAMPLE_TABLES: {
    waitlist: "d627090e-a358-4b0b-ad60-22af8b0485a1"  // Correct table ID
  }
}

function App() {
  return (
    <DatabaseProvider config={config}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes />
          <Toaster />
        </Router>
      </ThemeProvider>
    </DatabaseProvider>
  )
}

export default App