import { useState } from "react"
import { Button, Card, CardContent } from "@mui/material"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="text-center mb-12 lg:mb-16">
          <p className="text-[#4FD1C5] font-semibold text-sm sm:text-base uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-balance">We're Here to Help</h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto text-pretty">
            Have questions about our e-bike recovery service? We'd love to hear from you. Our team is ready to assist
            you.
          </p>
        </header>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-12 lg:mb-16">
          <Card className="bg-[#4FD1C5]/8 border-none shadow-none">
            <CardContent className="p-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-[#4FD1C5]" />
              </div>
              <h2 className="text-lg font-semibold mb-2">Email Us</h2>
              <p className="text-sm text-muted-foreground mb-3">Send us an email anytime</p>
              <a href="mailto:recoveridenl@gmail.nl" className="text-[#4FD1C5] font-medium hover:underline">
                recoveridenl@gmail.nl
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#4FD1C5]/8 border-none shadow-none">
            <CardContent className="p-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-[#4FD1C5]" />
              </div>
              <h2 className="text-lg font-semibold mb-2">Call Us</h2>
              <p className="text-sm text-muted-foreground mb-3">Mon-Fri from 8am to 6pm</p>
              <a href="tel:+31201234567" className="text-[#4FD1C5] font-medium hover:underline">
                +31 20 123 4567
              </a>
            </CardContent>
          </Card>

          <Card className="bg-[#4FD1C5]/8 border-none shadow-none">
            <CardContent className="p-6">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#4FD1C5]" />
              </div>
              <h2 className="text-lg font-semibold mb-2">Visit Us</h2>
              <p className="text-sm text-muted-foreground mb-3">Come say hello</p>
              <address className="text-[#4FD1C5] font-medium not-italic">
                Rachelsmolen 1, Eindhoven, Netherlands
              </address>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            {submitted && (
              <div
                className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6"
                role="alert"
              >
                <p className="text-sm font-medium">
                  Thank you for reaching out! We'll get back to you as soon as possible.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full border rounded-md px-3 py-1.5"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full border rounded-md px-3 py-1.5"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">
                  Phone Number 
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+31 20 123 4567"
                  className="w-full border rounded-md px-3 py-1.5"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full border rounded-md px-3 py-1.5"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-black hover:bg-black/90 text-white rounded-full py-6 text-base font-semibold"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
