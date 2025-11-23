// import { Card, CardContent } from "@mui/material"
import { CheckCircle } from "lucide-react"
import bikeCommunity from "../assets/bike_community.jpg"

export function AboutusPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img src={bikeCommunity} alt="Bike Community" className="h-full w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white px-4">
            <h1 className="mb-4 text-balance text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
              We are Recoveride
            </h1>
            <p className="text-lg font-medium md:text-xl lg:text-2xl">Your Trusted Partner in E-Bike Protection</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Recoveride is not just a service.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">E-bikes are a way of transportation</span>
                  <span className="absolute bottom-0 left-0 h-3 w-full bg-primary/30"></span>
                </span>{" "}
                and a part of your daily life.
              </h2>

              <div className="mt-12">
                <h3 className="mb-8 text-2xl font-bold tracking-tight md:text-3xl">What We Do for You</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="text-pretty text-base leading-relaxed md:text-lg text-foreground">
                      File police and/or insurance reports instead of you
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="text-pretty text-base leading-relaxed md:text-lg text-foreground">
                      Organize a recovery team of professionals
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckCircle className="h-5 w-5" />
                      </div>
                    </div>
                    <p className="text-pretty text-base leading-relaxed md:text-lg text-foreground">
                      Lawfully recover your bike back to you
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p className="text-pretty text-base leading-relaxed md:text-lg">
                Founded in Eindhoven in 2025, Recoveride was born from a simple belief: e-bike owners deserve peace of
                mind and support when the unexpected happens. We understand the stress and frustration of bike theft as
                we have experienced it firsthand, and we're here to take that burden off your shoulders.
              </p>
              <p className="text-pretty text-base leading-relaxed md:text-lg">
                Our team works in collaboration with local police, handling all coordination and communication on your
                behalf. Our dedicated network of recovery specialists knows the ins and outs of e-bike theft in Dutch
                cities, and we're committed to getting you back on the road as quickly as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-secondary/50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mb-4 text-center">
            <span className="text-lg font-semibold text-primary">Our Success Stories</span>
          </div>
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Our Recovered Bikes
          </h2>
          <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/images/bike-i.jpeg"
                  alt="Recovered Orange Cruiser Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <h3 className="text-xl font-bold mb-1">Orange Cruiser</h3>
                <p className="text-sm text-muted-foreground">Recovered in Eindhoven</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/images/bike-j2.jpeg"
                  alt="Recovered Slingerland Racer Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <h3 className="text-xl font-bold mb-1">Slingerland Racer</h3>
                <p className="text-sm text-muted-foreground">Recovered in Eindhoven</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/images/bike-n.jpg"
                  alt="Recovered Metro Commuter Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <h3 className="text-xl font-bold mb-1">Metro Commuter</h3>
                <p className="text-sm text-muted-foreground">Recovered in Eindhoven</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/images/bike-j.jpeg"
                  alt="Recovered Speed Demon Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <h3 className="text-xl font-bold mb-1">Speed Demon</h3>
                <p className="text-sm text-muted-foreground">Recovered in Eindhoven</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
    </div>
  )
}
