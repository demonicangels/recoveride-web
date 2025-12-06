"use client";

import { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Package, AlertCircle, Radio, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"

export function HowItWorksSection() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const steps = [
    {
      icon: Package,
      title: "We Install Your Tracker (discreetly)",
      description:
        "Receive your compact tracker and relax while we install it in a hidden location on your e-bike. It stays inactive until you report theft—ready for rapid e-bike recovery when needed.",
      image: "/assets/tenways.png",
      hasAnnotations: true,
    },
    {
      icon: AlertCircle,
      title: "Simply Report the Theft",
      description:
        "If your e-bike is stolen, activate recovery mode through the Report Theft page. This securely starts the stolen e-bike recovery process and sends the last known location to our recovery team.",
      image: "/assets/reporttheft_button.jpeg",
    },
    {
      icon: Radio,
      title: "We Track in Real-Time",
      description:
        "Once activated, the tracker provides real-time location updates directly to our professional bike recovery team. This allows us to begin searching immediately and work to recover your stolen e-bike within 72 hours.",
      image: "/assets/tracking_app.jpeg",
    },
    {
      icon: CheckCircle,
      title: "We Handle Everything",
      description:
        "Our team coordinates the full bike theft recovery process—locating your e-bike, working with police, assisting with documentation, and supporting any insurance needs. You stay informed while we do the heavy lifting on your behalf.",
      image: "/assets/recovery_team.jpeg",
    },
  ]

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && activeSlide < steps.length - 1) {
      setActiveSlide(activeSlide + 1)
    }
    if (isRightSwipe && activeSlide > 0) {
      setActiveSlide(activeSlide - 1)
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  const goToPrevious = () => {
    setActiveSlide((prev) => Math.max(0, prev - 1))
  }

  const goToNext = () => {
    setActiveSlide((prev) => Math.min(steps.length - 1, prev + 1))
  }

  return (
    <section id="how-it-works" className="bg-white py-12 sm:py-16 md:py-20 lg:py-32 scroll-mt-24 md:scroll-mt-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mx-auto mb-3 sm:mb-4 text-center">
          <span className="text-base sm:text-lg font-semibold text-primary">How It Works</span>
        </div>

        <div className="mx-auto mb-10 sm:mb-12 md:mb-16 max-w-3xl text-center px-4">
          <h2 className="mb-3 sm:mb-4 text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Full E-Bike Protection in Four Steps
          </h2>
          <p className="text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
            We've made it simple so you can focus on what matters - enjoying your ride
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-6 md:gap-8 items-center">
          {/* Carousel */}
          <div className="flex-1 w-full relative">
            {/* Navigation arrows - visible on mobile */}
            <button
              onClick={goToPrevious}
              disabled={activeSlide === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all md:hidden"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>

            <button
              onClick={goToNext}
              disabled={activeSlide === steps.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 shadow-lg transition-all md:hidden"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>

            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="min-w-full px-1 sm:px-2">
                    <Card className="border-none bg-secondary/50 shadow-lg">
                      <CardContent className="p-4 sm:p-6 md:p-8">
                        {/* Icon */}
                        <div className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white shadow-md">
                          <step.icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-primary" />
                        </div>

                        <h3 className="mb-2 sm:mb-3 text-xl sm:text-2xl font-bold text-foreground">{step.title}</h3>
                        <p className="text-sm sm:text-base leading-relaxed text-muted-foreground mb-4 sm:mb-6">
                          {step.description}
                        </p>

                        {/* Image + annotations */}
                        <div className="relative mt-4 sm:mt-6">
                          {step.hasAnnotations ? (
                            <div className="relative">
                              <img
                                src={step.image || "/placeholder.svg"}
                                alt={step.title}
                                className="w-full h-auto rounded-lg"
                                
                              />

                              {/* Battery - adjusted for mobile */}
                              <div className="absolute top-[38%] left-[20%] sm:left-[27%] flex items-center gap-1">
                                <span className="bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-semibold text-black shadow-md">
                                  here
                                </span>
                                <svg width="40" height="2" className="sm:w-[60px]">
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
                                    x2="40"
                                    y2="1"
                                    className="sm:x2-[60]"
                                    stroke="black"
                                    strokeWidth="2"
                                    markerEnd="url(#arrowhead1)"
                                  />
                                </svg>
                              </div>

                              {/* Saddle - adjusted for mobile */}
                              <div className="absolute top-[27%] right-[30%] sm:right-[35%] flex flex-col items-center gap-0.5 sm:gap-1">
                                <span className="bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-semibold text-black shadow-md">
                                  here
                                </span>
                                <svg width="2" height="30" className="sm:h-10">
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
                                    y2="30"
                                    stroke="black"
                                    strokeWidth="2"
                                    markerEnd="url(#arrowhead2)"
                                  />
                                </svg>
                              </div>

                              {/* Wheel - adjusted for mobile */}
                              <div className="absolute top-[63%] left-[25%] sm:left-[28%] flex flex-col items-center gap-0.5 sm:gap-1">
                                <svg width="2" height="50" className="sm:h-20">
                                  <defs>
                                    <marker
                                      id="arrowhead-up"
                                      markerWidth="10"
                                      markerHeight="10"
                                      refX="5"
                                      refY="5"
                                      orient="auto"
                                    >
                                      <polygon points="0 10, 10 10, 5 0" fill="black" />
                                    </marker>
                                  </defs>
                                  <line
                                    x1="1"
                                    y1="50"
                                    x2="1"
                                    y2="0"
                                    stroke="black"
                                    strokeWidth="2"
                                    markerEnd="url(#arrowhead-up)"
                                  />
                                </svg>

                                <span className="bg-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs font-semibold text-black shadow-md">
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
          </div>

          {/* Pagination - responsive layout */}
          <div className="flex md:flex-col gap-3 sm:gap-4 justify-center">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full transition-all duration-300 ${
                  activeSlide === index ? "bg-black scale-125" : "bg-gray-300 hover:bg-gray-400"
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