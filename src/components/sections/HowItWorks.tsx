import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Package, AlertCircle, Radio, CheckCircle } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: Package,
      title: "We Install Your Tracker",
      description:
        "Receive your compact GPS tracker and relax while we install it discreetly in a hidden location on your e-bike. The tracker stays in standby mode to preserve battery life.",
    },
    {
      icon: AlertCircle,
      title: "Simply Report the Theft",
      description:
        "If your e-bike is stolen, don't worry. Just visit our Report Theft page, share the location, and activate your tracker with one click. We take it from there.",
    },
    {
      icon: Radio,
      title: "We Track in Real-Time",
      description:
        "Once activated, your tracker transmits real-time location data directly to our dedicated recovery team. You can relax knowing we're on the case.",
    },
    {
      icon: CheckCircle,
      title: "We Handle Everything",
      description:
        "Our caring team works tirelessly to locate and recover your e-bike. We coordinate with police and insurers on your behalf, keeping you informed every step of the way.",
    },
  ]

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-4 text-center">
          <span className="text-lg font-semibold text-primary">How It Works</span>
        </div>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Stress-Free Protection in Four Steps
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            We've made it simple so you can focus on what matters - enjoying your ride
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="border-none bg-secondary/50 shadow-md">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid gap-8 rounded-3xl bg-primary p-12 text-white md:grid-cols-3">
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold md:text-6xl">95%</div>
            <div className="text-base opacity-90">Recovery Success Rate</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold md:text-6xl">&lt;2h</div>
            <div className="text-base opacity-90">Average Response Time</div>
          </div>
          <div className="text-center">
            <div className="mb-2 text-5xl font-bold md:text-6xl">10k+</div>
            <div className="text-base opacity-90">Protected E-Bikes</div>
          </div>
        </div>
      </div>
    </section>
  )
}
