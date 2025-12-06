"use client";

import { Card, CardContent } from "@mui/material"

export function AboutusPage() {
  return (
    <div className="bg-white">
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <img 
          src="/assets/bike_community.jpg" 
          alt="Bike Community" 
          className="h-full w-full object-cover" 
          />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
          <div className="text-center text-white px-4">
            <h1 className="mb-4 text-balance text-4xl font-bold uppercase tracking-tight md:text-6xl lg:text-7xl">
              We are Recoveride 
            </h1>
            <p className="text-lg font-medium md:text-xl lg:text-2xl">Your Trusted Partner in E-Bike Protection</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              style={{ color: "#1A3B5C" }}
            >
              Recoveride  is not just a service.{" "}
              <span className="relative inline-block">
                <span className="relative z-10">E-bikes are a way of transportation</span>
                <span
                  className="absolute bottom-0 left-0 h-3 w-full"
                  style={{ backgroundColor: "#d63624", opacity: 0.3 }}
                ></span>
              </span>{" "}
              and a part of your daily life.
            </h2>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <p className="text-pretty text-base leading-relaxed md:text-lg text-gray-700 text-center">
              Founded in September 2025 in Eindhoven, Recoveride  was created out of a shared frustration with the
              growing bike theft problem and a clear vision to improve the recovery rate of stolen e-bikes in the
              Netherlands. As students relying on our bikes every day—and losing them more than once—we experienced
              firsthand how disruptive and stressful bike theft can be.
              With theft numbers rising and extremely low recovery rates, we wanted to make a real impact for Dutch cyclists 
              by creating a dedicated service that not only focuses on getting bikes back, but also supports theft victims through every step of the recovery process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <h2
            className="mb-12 text-center text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            style={{ color: "#1A3B5C" }}
          >
            Our Losses to Bike Theft
          </h2>
          <div className="mx-auto max-w-6xl grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/assets/bike_I.jpeg"
                  alt="Stolen Orange Cruiser Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <p className="text-sm text-muted-foreground">Stolen in center of Eindhoven</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/assets/bike_J2.jpeg"
                  alt="Stolen Slingerland Racer Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <p className="text-sm text-muted-foreground">Stolen in center of Eindhoven</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/assets/bike_N.jpg"
                  alt="Stolen Metro Commuter Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                  
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <p className="text-sm text-muted-foreground">Stolen from home backyard in Eindhoven</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src="/assets/bike_J.jpeg"
                  alt="Stolen Speed Demon Bike"
                  className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="pt-4 pb-4">
                <p className="text-sm text-muted-foreground">Stolen in front of home in Eindhoven</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold tracking-tight md:text-4xl" style={{ color: "#1A3B5C" }}>
                  Recoveride  today
                </h3>
                <p className="text-pretty text-base leading-relaxed md:text-lg text-gray-700">
                  Today, our team collaborates closely with local police and handles all communication and coordination
                  on your behalf. With a trained network of recovery specialists, we are committed to locating stolen
                  bikes quickly and getting you back on the road.
                </p>
                <p className="text-pretty text-base leading-relaxed md:text-lg text-gray-700">
                  We bring together expertise in bike recovery, legal processes, and customer support to provide a
                  comprehensive solution that gives you peace of mind and gets results.
                </p>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="/assets/team.jpg"
                  alt="Recoveride  Team Working Together"
                  className="h-full w-full object-cover"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
