import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  // Lista de rutas donde no queremos mostrar el buscador
  const noSearchRoutes = [
    '/publicar-pista',
    '/publicar-evento',
    '/validar-resultado',
  ]

  // Comprobar si la ruta actual está en la lista de exclusión
  const hideSearch = noSearchRoutes.some(route => 
    typeof window !== 'undefined' && window.location.pathname.startsWith(route)
  )

  return (
    <Layout hideSearch={hideSearch}>
      <Component {...pageProps} />
    </Layout>
  )
}