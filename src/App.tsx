import { DatabaseProvider } from "@altanlabs/database"
import { AuthProvider } from "@altanlabs/auth"
import { BrowserRouter as Router } from "react-router-dom"
import Layout from "./layout"
import "./App.css"

const config = {
  API_BASE_URL: "https://api.altan.ai/galaxia/hook/mo6Vs",
  SAMPLE_TABLES: {
    users: "4403ee69-e61c-4676-9a69-b5ec4bdd4695",
    courts: "57444af1-2c23-40b1-9cc6-4159f2446933",
    games: "dfb5dbf9-ab97-41e4-a8c0-d198caa2fad5",
    bookings: "79f0e23d-8e7c-4bbb-ba3a-e10841e3b1bd",
    rankings: "bc61f364-2d74-4771-9aca-4bb6b0abe751",
    teams: "bb202367-77a7-4e0c-9bab-f40ee4c37b50"
  }
}

function App() {
  return (
    <DatabaseProvider config={config}>
      <AuthProvider>
        <Router>
          <Layout />
        </Router>
      </AuthProvider>
    </DatabaseProvider>
  )
}

export default App