import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import IndexPage from './pages'
import BookingPage from './pages/booking'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App