import { DatabaseProvider } from "@altanlabs/database";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theme/theme-provider";
import { Routes } from "./routes";

const config = {
  API_BASE_URL: "https://api.altan.ai/galaxia/hook/mo6VsG",
  SAMPLE_TABLES: {
    waitlist: "4ff1558e-4247-40d3-b4d5-3ce2d4cc5616"
  }
};

function App() {
  return (
    <DatabaseProvider config={config}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </DatabaseProvider>
  );
}

export default App;