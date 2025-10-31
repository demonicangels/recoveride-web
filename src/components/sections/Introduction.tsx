import { Mail } from "lucide-react"
import { useState } from "react"

export function Introduction() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    setIsSubscribed(true)
    setEmail("")
    setTimeout(() => setIsSubscribed(false), 3000)
  }

  return (
    <section className="relative overflow-hidden bg-linear-to-br from-gray-100 to-gray-200 wavy-border">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="text-lg font-medium text-foreground">
                Peace of Mind for{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">E-Bike Owners</span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-primary/30"></span>
                </span>
              </span>
            </div>

            <h1 className="mb-6 text-balance">
              <span className="block text-4xl font-bold uppercase tracking-tight text-foreground md:text-5xl lg:text-6xl">
                WE HANDLE RECOVERY
              </span>
              <span className="block text-4xl font-bold uppercase tracking-tight text-primary md:text-5xl lg:text-5xl">
                YOU CONTINUE ON THE BIKE TRACK 
              </span>
            </h1>

            <p className="mb-4 text-xl font-bold uppercase tracking-wide text-foreground">Report, Recover, Ride</p>

            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              We take the stress out of bike theft by handling the recovery process so e-bike owners can get back on the
              road faster. Our caring team manages everything from tracking to police coordination.
            </p>

            <div className="mb-4">
              <p className="text-lg font-semibold text-foreground mb-4">
                Join our community and be first to experience worry-free e-bike ownership
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 rounded-full border-2 border-gray-300 px-6 py-6 text-base focus:border-primary"
                />
                <button
                  type="submit"
                  className="rounded-full bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg whitespace-nowrap cursor-pointer flex items-center justify-center"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Subscribe Now
                </button>
              </form>
              {isSubscribed && (
                <p className="mt-3 text-sm text-primary font-medium">
                  ✓ Thank you for subscribing! We'll keep you updated.
                </p>
              )}
            </div>
          </div>

          {/* Right Content - Circular Image */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-full border-8 border-primary shadow-2xl">
              <img
                src="/intro-ebookike.jpg"
                alt="Protected E-Bike with Recoveride GPS Tracking"
                className="h-full w-full object-cover"
              />
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full border-8 border-primary/20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
