import { Menu, X, ShieldAlert } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box } from "@mui/material"
import logo from "../assets/recoverideLogo.png"


export function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Box sx={{ display: "flex", alignItems: "center", height: 60 }}>
              <img
                src={logo}
                alt="Recoveride Logo"
                width={100}
                height={45}
                style={{ objectFit: "contain", cursor: "pointer", marginTop: 10 }}
                onClick={() => navigate("/")}
              />
            </Box>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-base font-medium text-foreground transition-colors hover:bg-gray-300 cursor-pointer" onClick={() => navigate("/")}>
            Home
          </a>
          <a
            href="#how-it-works"
            className="text-base font-medium text-foreground transition-colors hover:bg-gray-300 cursor-pointer"
          >
            How It Works
          </a>
          <a
            href="#subscriptions"
            className="text-base font-medium text-foreground transition-colors hover:bg-gray-300 cursor-pointer"
          >
            Subscriptions
          </a>
          <a className="text-base font-medium text-foreground transition-colors hover:bg-gray-300 cursor-pointer" onClick={() => navigate("/about")}>
            About Us
          </a>
          <a href="#contact" className="text-base font-medium text-foreground transition-colors hover:bg-gray-300 cursor-pointer" onClick={() => navigate("/contact")} >
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            className="rounded-full border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors font-semibold w-full px-4"
          >
            <a href="/report-theft" className="flex items-center gap-2" onClick={() => navigate("/report-theft")}>
              <ShieldAlert className="h-4 w-4" />
              Report Theft
            </a>
          </button>
        </div>

        {/* Mobile Menu button */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            <a
              href="/"
              className="text-base font-medium text-foreground transition-colors hover:bg-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-base font-medium text-foreground transition-colors hover:bg-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#subscriptions"
              className="text-base font-medium text-foreground transition-colors hover:bg-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscriptions
            </a>
            <a
              href="#about"
              className="text-base font-medium text-foreground transition-colors hover:bg-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-foreground transition-colors hover:bg-gray-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <button className="rounded-full border-2 border-red-600 bg-white text-red-600 font-semibold">
              <a
                href="/report-theft"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2"
              >
                <ShieldAlert className="h-4 w-4" />
                Report Theft
              </a>
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}