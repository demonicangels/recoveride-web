import { Menu, X, ShieldAlert } from "lucide-react"
import { useState } from "react"

export function Header() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-foreground">Recoveride</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-base font-medium text-foreground transition-colors hover:text-primary">
            Home
          </a>
          <a
            href="#how-it-works"
            className="text-base font-medium text-foreground transition-colors hover:text-primary"
          >
            How It Works
          </a>
          <a
            href="#subscriptions"
            className="text-base font-medium text-foreground transition-colors hover:text-primary"
          >
            Subscriptions
          </a>
          <a href="#about" className="text-base font-medium text-foreground transition-colors hover:text-primary">
            About Us
          </a>
          <a href="#contact" className="text-base font-medium text-foreground transition-colors hover:text-primary">
            Contact
          </a>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <button
            className="rounded-full border-2 border-red-600 bg-white text-red-600 hover:bg-red-600 hover:text-white transition-colors font-semibold w-full px-4"
          >
            <a href="/report-theft" className="flex items-center gap-2">
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
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#how-it-works"
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#subscriptions"
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Subscriptions
            </a>
            <a
              href="#about"
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-foreground transition-colors hover:text-primary"
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