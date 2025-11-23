import { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Package, AlertCircle, Radio, CheckCircle } from "lucide-react"
import recovery_team from "../../assets/recovery_team.jpeg"
import trackingApp from "../../assets/tracking_app.jpeg"
import teenwaysBike from "../../assets/tenways.png"
import reportButton from "../../assets/report_button.png"

export function HowItWorksSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  const steps = [
    {
      icon: Package,
      title: "We Install Your Tracker (discreetly)",
      description:
        "Receive your compact GPS tracker and relax while we install it discreetly in a hidden location on your e-bike. The tracker stays in standby mode to preserve battery life.",
      image: teenwaysBike,
      hasAnnotations: true,
    },
    {
      icon: AlertCircle,
      title: "Simply Report the Theft",
      description:
        "If your e-bike is stolen, don't worry. Just use the button on the top right of the page to visit our Report Theft page, confirm the last known location, and activate recovery mode with a single click. We take it from there.",
      image: reportButton,
    },
    {
      icon: Radio,
      title: "We Track in Real-Time",
      description:
        "Once activated, your tracker transmits real-time location data directly to our dedicated recovery team. You can relax knowing we're on the case.",
      image: trackingApp,
    },
    {
      icon: CheckCircle,
      title: "We Handle Everything",
      description:
        "Our team works to locate and recover your e-bike. We coordinate with police and insurers on your behalf, keeping you informed every step of the way.",
      image: recovery_team,
    },
  ]

  return (
  <section
    id="how-it-works"
    className="bg-white py-20 md:py-32 scroll-mt-24 md:scroll-mt-32"
  >
    <div className="container mx-auto px-4">
      <div className="mx-auto mb-4 text-center">
        <span className="text-lg font-semibold text-primary">
          How It Works
        </span>
      </div>

      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
          Stress-Free Protection in Four Steps
        </h2>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          We've made it simple so you can focus on what matters - enjoying your
          ride
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
        {/* Carousel */}
        <div className="flex-1 w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div key={index} className="min-w-full px-2">
                <Card className="border-none bg-secondary/50 shadow-lg">
                  <CardContent className="p-8">
                    {/* Icon */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>

                    {/* Title + description */}
                    <h3 className="mb-3 text-2xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {step.description}
                    </p>

                    {/* Image + annotations */}
                    <div className="relative mt-6">
                      {step.hasAnnotations ? (
                        <div className="relative">
                          <img
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            className="w-full h-auto rounded-lg"
                          />

                          {/* Battery */}
                          <div className="absolute top-[38%] left-[27%] flex items-center gap-1">
                            <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-black shadow-md">
                              here
                            </span>
                            <svg width="60" height="2">
                              <defs>
                                <marker
                                  id="arrowhead1"
                                  markerWidth="10"
                                  markerHeight="10"
                                  refX="9"
                                  refY="3"
                                  orient="auto"
                                >
                                  <polygon
                                    points="0 0, 10 3, 0 6"
                                    fill="black"
                                  />
                                </marker>
                              </defs>
                              <line
                                x1="0"
                                y1="1"
                                x2="60"
                                y2="1"
                                stroke="black"
                                strokeWidth="2"
                                markerEnd="url(#arrowhead1)"
                              />
                            </svg>
                          </div>

                          {/* Saddle */}
                          <div className="absolute top-[20%] right-[35%] flex flex-col items-center gap-1">
                            <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-black shadow-md">
                              here
                            </span>
                            <svg width="2" height="40">
                              <defs>
                                <marker
                                  id="arrowhead2"
                                  markerWidth="10"
                                  markerHeight="10"
                                  refX="3"
                                  refY="9"
                                  orient="auto"
                                >
                                  <polygon
                                    points="0 0, 6 10, 3 0"
                                    fill="black"
                                  />
                                </marker>
                              </defs>
                              <line
                                x1="1"
                                y1="0"
                                x2="1"
                                y2="40"
                                stroke="black"
                                strokeWidth="2"
                                markerEnd="url(#arrowhead2)"
                              />
                            </svg>
                          </div>

                          {/* Wheel */}
                          <div className="absolute top-[63%] left-[28%] flex flex-col items-center gap-1">
                            <svg width="2" height="80">
                              <defs>
                                <marker
                                  id="arrowhead-up"
                                  markerWidth="10"
                                  markerHeight="10"
                                  refX="5"
                                  refY="5"
                                  orient="auto"
                                >
                                  <polygon
                                    points="0 10, 10 10, 5 0"
                                    fill="black"
                                  />
                                </marker>
                              </defs>
                              <line
                                x1="1"
                                y1="80"
                                x2="1"
                                y2="0"
                                stroke="black"
                                strokeWidth="2"
                                markerEnd="url(#arrowhead-up)"
                              />
                            </svg>

                            <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-black shadow-md">
                              here
                            </span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex md:flex-col gap-4 justify-center">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                activeSlide === index
                  ? "bg-black scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </section>
);
}