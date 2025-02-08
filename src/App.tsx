import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import IndexPage from './pages'
import PlayersPage from './pages/players'
import CourtsPage from './pages/courts'
import ClubsPage from './pages/clubs'
import PublishCourtPage from './pages/clubs/publish'
import TournamentsPage from './pages/tournaments'
import RankingsPage from './pages/rankings'
import BookingPage from './pages/booking'
import NotFoundPage from './pages/NotFound'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/courts" element={<CourtsPage />} />
          <Route path="/clubs" element={<ClubsPage />} />
          <Route path="/clubs/publish" element={<PublishCourtPage />} />
          <Route path="/tournaments" element={<TournamentsPage />} />
          <Route path="/rankings" element={<RankingsPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App