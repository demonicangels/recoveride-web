// import { Card, CardContent } from "@mui/material"
// import { Users, Award, Heart } from "lucide-react"
import team from "../assets/team.jpg"

export function AboutusPage() {

  return (
    <section id="about" className="bg-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-4 text-center">
          <span className="text-lg font-semibold text-primary">About Us</span>
        </div>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
            Your Trusted Partner in E-Bike Protection
          </h2>
          <p className="text-xl font-bold text-primary">Report, Recover, Ride</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-pretty text-base leading-relaxed">
                Founded in Eindhoven in 2025, Recoveride was born from a simple belief: e-bike owners deserve peace of
                mind and support when the unexpected happens. We understand the stress and frustration of bike theft as we have experienced it firsthand, 
                and we're here to take that burden off your shoulders.
              </p>
              <p className="text-pretty text-base leading-relaxed">
                Our team works in collaboration with local police, handling all coordination and
                communication on your behalf. Our dedicated network of recovery specialists knows the ins and outs of
                e-bike theft in Dutch cities, and we're committed to getting you back on the road as quickly as possible.
              </p>
            </div>

            <div className="mt-12">
              <h3 className="mb-6 text-balance text-2xl font-bold tracking-tight">What We Do for You</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    File police and/or insurance reports instead of you
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    Organize a recovery team of professionals
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                  </div>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    Lawfully recover your bike back to you
                  </p>
                </div>
              </div>
            </div>
          </div>

            {/* <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <Card className="border-none bg-secondary/50 shadow-md">
                <CardContent className="pt-6 text-center">
                  <Users className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">10k+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </CardContent>
              </Card>
              <Card className="border-none bg-secondary/50 shadow-md">
                <CardContent className="pt-6 text-center">
                  <Award className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-sm text-muted-foreground">Recovery Rate</div>
                </CardContent>
              </Card>
              <Card className="border-none bg-secondary/50 shadow-md">
                <CardContent className="pt-6 text-center">
                  <Heart className="mx-auto mb-2 h-8 w-8 text-primary" />
                  <div className="text-2xl font-bold">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </CardContent>
              </Card>
            </div> */}

          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-3xl border-4 border-primary/20 bg-muted shadow-lg">
              <img
                src={team}
                alt="Recoveride Team"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
