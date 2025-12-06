"use client";

import { Menu, X, ShieldAlert } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Box } from "@mui/material"


export function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const router = useRouter()
  
  const links = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/#how-it-works" },
    { name: "Subscriptions", path: "/#subscriptions" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" }
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", height: 60 }}>
          <img
            src="/assets/recoverideLogo.png"
            alt="Recoveride Logo"
            style={{ objectFit: "contain", cursor: "pointer", height: 110 }}
            onClick={() => router.push("/")}
          />
        </Box>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              onClick={() => router.push(link.path)}
              className="text-base font-medium text-foreground transition-colors hover:bg-gray-300 cursor-pointer px-3 py-2 rounded-md"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Report Button */}
        <div className="hidden md:block">
          <button
            onClick={() => router.push("/report")}
            className="rounded-full border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-all font-semibold px-6 py-2 flex items-center gap-2"
          >
            <ShieldAlert className="h-4 w-4" />
            Report Theft
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {links.map((link) => (
              <a
                key={link.name}
                onClick={() => router.push(link.path)}
                className="text-base font-medium text-foreground transition-colors hover:bg-gray-300 px-4 py-3 rounded-md text-left"
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Report Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                router.push("/report");
              }}
              className="rounded-full border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-all font-semibold flex items-center justify-center gap-2 py-3 mt-4"
            >
              <ShieldAlert className="h-4 w-4" />
              Report Theft
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}