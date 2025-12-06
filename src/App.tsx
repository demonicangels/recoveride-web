"use client";

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ReportTheftPage } from './pages/ReportTheftPage'
import { AboutusPage } from './pages/AboutusPage'
import { ContactPage } from './pages/ContactPage'
import { AuthPage } from './pages/AuthPage'
import { ScrollManager } from './components/ScrollManager'
import {LandingPage} from "./pages/LandingPage";
import { BlogPage } from './pages/BlogPage'
import { ArticlePage } from './pages/ArticlePage'


function App() {
  
  return (
    <Router>
      <ScrollManager/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/report" element={<ReportTheftPage />} />
        <Route path="/about" element={<AboutusPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<ArticlePage slug={""} />} />
      </Routes>
    </Router>
  )
}

export default App
