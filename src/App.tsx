import './App.css'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
// import { Header } from './components/Header'
// import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ReportTheftPage } from './pages/ReportTheftPage'
import { AboutusPage } from './pages/AboutusPage'
import { ContactPage } from './pages/ContactPage'
import { AuthPage } from './pages/AuthPage'
import { ScrollManager } from './components/ScrollManager'
import {LandingPage} from "./pages/LandingPage";
import { HeaderProvider } from './providers/HeadeProvider'
import { FooterProvider } from './providers/FooterProvider'

function App() {
  
  return (
    <Router>
      <ScrollManager/>
      <HeaderProvider />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportTheftPage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
      <FooterProvider />
    </Router>
  )
}

export default App
