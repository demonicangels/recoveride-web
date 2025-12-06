"use client";

import { useState } from "react"
import { Mail, CheckCircle2, Shield } from "lucide-react"
import { BrevoAPI } from "../../api/brevoAPI"


export function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" |"success" | "error">("idle")
  const [message, setMessage] = useState("")
  const brevoAPI = new BrevoAPI()

  // Handle newsletter subscription
  async function handleSubmit(e: React.FormEvent) {
      e.preventDefault()
      
      let name = "";
  
      if (email) {
        const match = email.match(/^([^@]*)@/)
        if (match) {
          name = match[1];
        }
      }

      try{

        setStatus("loading")

        const response = await brevoAPI.sendSubscriberToBrevo({ email, name })

        if (response) {
          console.log("Subscription successful:", response)
          setStatus("success")
          await brevoAPI.putAllSubscribersInList()
        }
        setMessage("Thank you for subscribing! We will keep you updated.")
        setEmail("")

      }catch(error){
        setStatus("error")
        setMessage("Something went wrong. Please try again.")
      }
      
    }

  return (
    <section id="signup" className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-linear-to-br from-[#1A3B5C] via-[#234567] to-[#1A3B5C]">
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#d63624] opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#d63624] opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-white opacity-5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full mb-4 sm:mb-6 border border-white/20">
            <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 text-balance">
            Stay Updated on E-Bike Security
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 text-pretty px-2">
            Get the latest tips on protecting your e-bike, recovery success stories, and exclusive offers delivered to
            your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 sm:px-6 py-3 sm:py-3.5 text-sm sm:text-base rounded-full bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#d63624] disabled:opacity-50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base bg-[#d63624] hover:bg-[#c42d1a] text-white font-semibold rounded-full transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer"
            >
              Subscribe now
            </button>
          </form>

          {status === "success" && (
            <div className="flex items-center justify-center gap-2 text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 mb-4 max-w-xl mx-auto text-sm sm:text-base">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" />
              <p className="font-medium">{message}</p>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center justify-center gap-2 text-white bg-[#d63624]/20 backdrop-blur-sm border border-[#d63624]/30 rounded-lg px-4 py-3 mb-4 max-w-xl mx-auto text-sm sm:text-base">
              <p className="font-medium">{message}</p>
            </div>
          )}
          <div className="flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm">
            <Shield className="w-3 h-3 sm:w-4 sm:h-4 shrink-0" />
            <p>We respect your privacy. Unsubscribe at any time.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-2xl mx-auto">
            {[
              { icon: "🔒", title: "Security Tips", desc: "Weekly protection advice" },
              { icon: "✨", title: "Success Stories", desc: "Real recovery cases" },
              { icon: "🎁", title: "Exclusive Offers", desc: "Member-only deals" },
            ].map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-1 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
