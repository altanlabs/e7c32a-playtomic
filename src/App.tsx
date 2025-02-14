import { RouterProvider } from "react-router-dom"
import { router } from "./routes"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/theme/theme-provider"

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  )
}