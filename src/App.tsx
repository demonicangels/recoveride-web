import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ReportTheftPage } from './pages/ReportTheftPage'
import { AboutusPage } from './pages/AboutusPage'

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report-theft" element={<ReportTheftPage />} />
        <Route path="/about" element={<AboutusPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
