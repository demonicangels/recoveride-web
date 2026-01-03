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
    <section id="how-it-works" className="bg-white py-8 sm:py-12 md:py-16 lg:py-24 scroll-mt-20 md:scroll-mt-32">
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className="mx-auto mb-2 sm:mb-3 md:mb-4 text-center">
          <span className="text-sm sm:text-base md:text-lg font-semibold text-[#1A3B5C]">How It Works</span>
        </div>

        <div className="mx-auto mb-6 sm:mb-8 md:mb-12 lg:mb-16 max-w-3xl text-center px-2 sm:px-4">
          <h2 className="mb-2 sm:mb-3 md:mb-4 text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-[#1A3B5C]">
            Full E-Bike Protection in Four Steps
          </h2>
          <p className="text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-gray-600">
            We've made it simple so you can focus on what matters - enjoying your ride
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Carousel */}
          <div className="flex-1 w-full relative">
            <button
              onClick={goToPrevious}
              disabled={activeSlide === 0}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white disabled:opacity-20 disabled:cursor-not-allowed rounded-full p-2 sm:p-2.5 shadow-lg transition-all md:hidden touch-manipulation"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-[#1A3B5C]" />
            </button>

            <button
              onClick={goToNext}
              disabled={activeSlide === steps.length - 1}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white disabled:opacity-20 disabled:cursor-not-allowed rounded-full p-2 sm:p-2.5 shadow-lg transition-all md:hidden touch-manipulation"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-[#1A3B5C]" />
            </button>

            <div
              className="overflow-hidden rounded-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {steps.map((step, index) => (
                  <div key={index} className="min-w-full px-0.5 sm:px-1 md:px-2">
                    <Card className="border-none bg-gray-50 shadow-lg">
                      <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
                        {/* Icon */}
                        <div className="mb-3 sm:mb-4 md:mb-6 flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-white shadow-md">
                          <step.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-[#1A3B5C]" />
                        </div>

                        <h3 className="mb-2 sm:mb-2.5 md:mb-3 text-lg sm:text-xl md:text-2xl font-bold text-[#1A3B5C] leading-tight">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 mb-3 sm:mb-4 md:mb-6">
                          {step.description}
                        </p>

                        {/* Image + annotations */}
                        <div className="relative mt-3 sm:mt-4 md:mt-6">
                          {step.hasAnnotations ? (
                            <div className="relative">
                              <img
                                src={step.image || "/placeholder.svg"}
                                alt={step.title}
                                className="w-full h-auto rounded-lg shadow-sm"
                              />

                              {/* Battery */}
                              <div className="absolute top-[38%] left-[20%] sm:left-[23%] md:left-[20%] flex items-center gap-0.5 sm:gap-1">
                                <span className="bg-white px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-0.5 md:py-1 rounded text-[8px] sm:text-[10px] md:text-xs font-semibold text-black shadow-md">
                                  here
                                </span>
                                <svg width="25" height="2" className="sm:w-10 md:w-[60px]">
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
                                    x2="100%"
                                    y2="1"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead1)"
                                  />
                                </svg>
                              </div>

                              {/* Saddle */}
                              <div className="absolute top-[25%] sm:top-[26%] right-[36%] sm:right-[36%] md:right-[36%] flex flex-col items-center gap-0.5 sm:gap-0.5 md:gap-1">
                                <span className="bg-white px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-0.5 md:py-1 rounded text-[8px] sm:text-[10px] md:text-xs font-semibold text-black shadow-md">
                                  here
                                </span>
                                <svg width="2" height="20" className="sm:h-[30px] md:h-10">
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
                                    y2="100%"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead2)"
                                  />
                                </svg>
                              </div>

                              {/* Wheel */}
                              <div className="absolute top-[63%] sm:top-[63%] left-[23%] sm:left-[25%] md:left-[28%] flex flex-col items-center gap-0.5 sm:gap-0.5 md:gap-1">
                                <svg width="2" height="35" className="sm:h-[50px] md:h-20">
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
                                    y1="100%"
                                    x2="1"
                                    y2="0"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    markerEnd="url(#arrowhead-up)"
                                  />
                                </svg>

                                <span className="bg-white px-1 sm:px-1.5 md:px-2 py-0.5 sm:py-0.5 md:py-1 rounded text-[8px] sm:text-[10px] md:text-xs font-semibold text-black shadow-md">
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

          <div className="flex md:flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center mt-2 md:mt-0">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 rounded-full transition-all duration-300 touch-manipulation ${
                  activeSlide === index
                    ? "bg-[#1A3B5C] scale-125 ring-2 ring-[#1A3B5C] ring-offset-2"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}