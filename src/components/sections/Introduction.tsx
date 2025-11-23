import { Mail, Shield, MapPin, Clock } from "lucide-react"
import type React from "react"
import { useState } from "react"
import bikeRider from "../../assets/bike_rider.jpg"
import { BrevoAPI } from "../../services/brevoAPI"

export function Introduction() {

  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const brevoAPI = new BrevoAPI()

  // Handle newsletter subscription
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubscribed(true)

    let name = "";

    if (email) {
      const match = email.match(/^([^@]*)@/)
      if (match) {
        name = match[1];
      }
    }

    const response = await brevoAPI.sendSubscriberToBrevo({ email, name })

    if (response) {
      console.log("Subscription successful:", response)
      await brevoAPI.putAllSubscribersInList()
    }

    setEmail("")
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center">
      <div className="absolute inset-0 z-0">
        <img src={bikeRider} alt="Cyclist riding on scenic road" className="h-full w-full object-cover" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/60 to-[#1A3B5C]/40"></div>
      </div>

      <div className="absolute top-20 right-20 h-72 w-72 rounded-full bg-[#E74C3C]/20 blur-3xl z-1"></div>
      <div className="absolute bottom-20 left-20 h-96 w-96 rounded-full bg-[#1A3B5C]/20 blur-3xl z-1"></div>

      {/* Content overlay */}
      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <div className="mb-6 inline-block">
            <span className="rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white border border-white/20">
              Peace of Mind for E-Bike Owners
            </span>
          </div>

          <h1 className="mb-8 text-balance">
            <span className="block text-5xl font-bold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
              We Do The
            </span>
            <span className="relative inline-block">
              <span className="relative z-10 block text-5xl font-bold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
                Recovery
              </span>
              <span className="absolute bottom-2 left-0 h-4 w-full bg-chart-1 md:h-5"></span>
            </span>
            <span className="mt-2 block text-3xl font-bold uppercase tracking-tight text-white/80 md:text-4xl lg:text-5xl">
              You Do The Riding
            </span>
          </h1>

          <div className="mb-8 grid gap-4 sm:grid-cols-3">
            <div className="flex items-center gap-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-lg">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d63624]">
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-white">Track & Locate</div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-lg">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A3B5C]">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-white">Full Protection</div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-lg">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d63624]">
                <Clock className="h-5 w-5 text-white" />
              </div>
              <div className="text-sm font-semibold text-white">24/7 Support</div>
            </div>
          </div>

          <p className="mb-8 text-pretty text-lg leading-relaxed text-white/90 md:text-xl max-w-3xl">
            We take the stress out of bike theft by handling the recovery process so e-bike owners can get back on the
            road faster. Our team handles everything from bike location tracking to police coordination.
          </p>

          <div className="max-w-2xl rounded-2xl bg-white/10 backdrop-blur-md p-6 border border-white/20 shadow-2xl">
            <p className="mb-4 text-lg font-bold text-white">Join Our Community</p>
            <p className="mb-6 text-base text-white/80">Be first to experience worry-free e-bike ownership</p>
            <form onSubmit={handleSubmit} className="flex col gap-3 sm:row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="1 rounded-xl border-2 border-white/30 bg-white/20 backdrop-blur-sm px-5 py-4 text-base text-white placeholder:text-white/60 transition-colors focus:border-primary focus:outline-none focus:bg-white/30 disabled:opacity-50"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-white/30 bg-black backdrop-blur-sm px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Mail className="h-5 w-5" />
                Subscribe now 
              </button>
            </form>
            {isSubscribed && (
              <p className="mt-4 flex items-center gap-2 text-sm font-medium text-chart-1">
                <Shield className="h-4 w-4" />
                Thank you for subscribing! We'll keep you updated.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
