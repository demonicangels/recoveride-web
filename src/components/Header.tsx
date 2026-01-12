"use client"

import { Menu, X, ShieldAlert, User } from "lucide-react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<{name: string, email: string, phone: string}>(null as any)
  const router = useRouter()

  const links = [
    { name: "Home", path: "/" },
    { name: "How It Works", path: "/#how-it-works" },
    { name: "Subscriptions", path: "/#subscriptions" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Blog", path: "/blog" },
  ]

  useEffect(() => {
    const syncUser = () => {
    const userData = localStorage.getItem("user")
    setUser(userData ? JSON.parse(userData) : null) }

    syncUser()

    window.addEventListener("auth:change", syncUser)
    return () => window.removeEventListener("auth:change", syncUser)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-3 sm:px-4 lg:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/assets/recoverideLogo.png"
            alt="Recoveride Logo"
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain cursor-pointer"
            onClick={() => router.push("/")}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              onClick={() => router.push(link.path)}
              className="text-sm xl:text-base font-medium text-[#1A3B5C] transition-colors hover:bg-gray-200 cursor-pointer px-2 xl:px-3 py-2 rounded-md whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          {user ? (
            <>
              <button
                onClick={() => router.push("/profile")}
                className="rounded-full bg-white text-[#1A3B5C] hover:bg-[#1A3B5C] hover:text-white transition-all p-2"
                aria-label="User profile"
              >
                <User className="h-7 w-7" />
              </button>
              <button
                onClick={() => router.push("/report")}
                className="rounded-full border-2 border-[#d63624] bg-white text-[#d63624] hover:bg-[#d63624] hover:text-white transition-all font-semibold px-4 xl:px-6 py-2 flex items-center gap-2 text-sm xl:text-base whitespace-nowrap"
              >
                <ShieldAlert className="h-4 w-4" />
                <span className="hidden xl:inline">Report Theft</span>
                <span className="xl:hidden">Report</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => router.push("/auth")}
              className="rounded-full bg-white text-[#1A3B5C] hover:bg-[#1A3B5C] hover:text-white transition-all font-semibold px-4 xl:px-6 py-2 flex items-center gap-2 text-sm xl:text-base"
            >
              <User className="h-4 w-4" />
              Sign In
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                onClick={() => {
                  setMobileMenuOpen(false)
                  router.push(link.path)
                }}
                className="text-base font-medium text-[#1A3B5C] transition-colors hover:bg-gray-100 px-4 py-3 rounded-md text-left cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            {user ? (
              <>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    router.push("/profile")
                  }}
                  className="rounded-full bg-white text-[#1A3B5C] hover:bg-[#1A3B5C] hover:text-white transition-all font-semibold flex items-center justify-center gap-2 py-3 mt-2"
                >
                  <User className="h- w-4" />
                  My Profile
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    router.push("/report")
                  }}
                  className="rounded-full border-2 border-[#d63624] bg-white text-[#d63624] hover:bg-[#d63624] hover:text-white transition-all font-semibold flex items-center justify-center gap-2 py-3"
                >
                  <ShieldAlert className="h-4 w-4" />
                  Report Theft
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  router.push("/auth")
                }}
                className="rounded-full bg-white text-[#1A3B5C] hover:bg-[#1A3B5C] hover:text-white transition-all font-semibold flex items-center justify-center gap-2 py-3 mt-2"
              >
                <User className="h-4 w-4" />
                Sign In
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
