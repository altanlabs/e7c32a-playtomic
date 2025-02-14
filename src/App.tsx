import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/theme/theme-provider"
import { Provider } from "react-redux"
import { store } from "@altanlabs/database"

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </Provider>
  )
}