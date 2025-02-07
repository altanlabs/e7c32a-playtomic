import { SearchBar } from "@/components/ui/SearchBar"

interface LayoutProps {
  children: React.ReactNode
  hideSearch?: boolean
}

export default function Layout({ children, hideSearch = false }: LayoutProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {!hideSearch && <SearchBar />}
      {children}
    </div>
  )
}