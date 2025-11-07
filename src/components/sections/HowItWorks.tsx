import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Package, AlertCircle, Radio, CheckCircle } from "lucide-react"
import recovery_team from "../../assets/recovery_team.jpeg"
import trackingApp from "../../assets/tracking_app.jpeg"
import teenwaysBike from "../../assets/tenways.png"
import reportButton from "../../assets/report_button.png"


export function HowItWorksSection() {
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
    <section id="how-it-works" className="bg-white py-20 md:py-32 scroll-mt-24 md:scroll-mt-32">
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

        <div className="space-y-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index}>
              {step.image ? (
                // Steps with images: card on left, image on right
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <Card className="border-none bg-secondary/50 shadow-md">
                      <CardContent className="pt-8 pb-8">
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex-1 relative">
                    {step.hasAnnotations ? (
                      <div className="relative">
                        <img
                          src={step.image || "/placeholder.svg"}
                          alt={step.title}
                          width={500}
                          height={350}
                          className="w-full h-auto rounded-lg"
                        />
                        {/* Battery location */}
                        <div className="absolute top-[36%] left-[10%] flex items-center gap-1">
                          <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-black shadow-md">
                            here
                          </span>
                          <svg width="60" height="2" className="relative top-0">
                            <defs>
                              <marker
                                id="arrowhead1"
                                markerWidth="10"
                                markerHeight="10"
                                refX="9"
                                refY="3"
                                orient="auto"
                              >
                                <polygon points="0 0, 10 3, 0 6" fill="black" />
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
                        {/* Saddle location */}
                        <div className="absolute top-[20%] right-[35%] flex flex-col items-center gap-1">
                          <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-black shadow-md">
                            here
                          </span>
                          <svg width="2" height="40" className="relative">
                            <defs>
                              <marker
                                id="arrowhead2"
                                markerWidth="10"
                                markerHeight="10"
                                refX="3"
                                refY="9"
                                orient="auto"
                              >
                                <polygon points="0 0, 6 10, 3 0" fill="black" />
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

                        {/* Wheel location */}
                        <div className="absolute top-[61%] left-[5%] flex items-center gap-1">
                          <span className="bg-white px-2 py-1 rounded text-xs font-semibold text-black shadow-md">
                            here
                          </span>
                          <svg width="80" height="2" className="relative">
                            <defs>
                              <marker
                                id="arrowhead3"
                                markerWidth="10"
                                markerHeight="10"
                                refX="9"
                                refY="3"
                                orient="auto"
                              >
                                <polygon points="0 0, 10 3, 0 6" fill="black" />
                              </marker>
                            </defs>
                            <line
                              x1="0"
                              y1="1"
                              x2="80"
                              y2="1"
                              stroke="black"
                              strokeWidth="2"
                              markerEnd="url(#arrowhead3)"
                            />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        width={500}
                        height={400}
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    )}
                  </div>
                </div>
              ) : (
                // Steps without images: centered card
                <div className="max-w-md mx-auto">
                  <Card className="border-none bg-secondary/50 shadow-md">
                    <CardContent className="pt-8 pb-8">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                        <step.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        {/* <div className="mt-20 grid gap-8 rounded-3xl bg-primary p-12 text-white md:grid-cols-3">
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
        </div> */}
      </div>
    </section>
  )
}
