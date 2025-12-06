"use client";

import type React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  Button,
  Input,
  InputLabel
} from "@mui/material"
import { AlertTriangle, MapPin, Phone, Clock } from "lucide-react"
import { useState } from "react"

export function ReportTheftPage() {

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  
  }

  if (submitted) {
    return (
      <section id="report-theft" className="py-20 md:py-32 bg-destructive/5">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-2xl border-2 border-primary">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <AlertTriangle className="h-8 w-8" />
              </div>
              <h1 className="text-2xl">Tracker Activated!</h1>
              <div className="text-base">
                Our recovery team has been notified and is now tracking your bike in real-time.
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <h3 className="mb-2 font-semibold">What happens next:</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Our team is tracking your bike's location in real-time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>We'll contact you within 15 minutes with an update</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>We're coordinating with local police and your insurer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>You'll receive SMS updates on the recovery progress</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>Emergency hotline: +31 20 123 4567</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="report-theft" className="py-20 md:py-32 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-destructive/20 bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive">
            <AlertTriangle className="h-4 w-4" />
            Emergency Theft Report
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">Report Stolen Bike</h2>
          <p className="text-pretty text-muted-foreground">
            Fill out the form below to activate your GPS tracker and alert our recovery team immediately.
          </p>
        </div>

        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <h1>Theft Report Form</h1>
            <div>Our team will be notified immediately and begin tracking your bike</div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <InputLabel htmlFor="tracker-id">Tracker ID</InputLabel>
                <Input id="tracker-id" placeholder="e.g., RCV-12345" required />
                <p className="text-xs text-muted-foreground">Find this on your tracker or in your account</p>
              </div>

              <div className="space-y-2">
                <InputLabel htmlFor="location">Location Where Bike Was Stolen</InputLabel>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="location" className="pl-9" placeholder="e.g., Amsterdam Centraal Station" required />
                </div>
              </div>

              <div className="space-y-2">
                <InputLabel htmlFor="time">Approximate Time of Theft</InputLabel>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="time" type="datetime-local" className="pl-9" required />
                </div>
              </div>

              <div className="space-y-2">
                <InputLabel htmlFor="details">Additional Details</InputLabel>
                <Input
                  id="details"
                  placeholder="Any additional information that might help us recover your bike..."
                  rows={4}
                />
              </div>

              <div className="space-y-2">
                <InputLabel htmlFor="contact">Your Phone Number</InputLabel>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="contact" type="tel" className="pl-9" placeholder="+31 6 1234 5678" required />
                </div>
              </div>

              <Button type="submit" size="large" className="w-full" variant="contained" color="error">
                <AlertTriangle className="mr-2 h-5 w-5" />
                Activate Tracker & Alert Recovery Team
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                By submitting this form, you authorize us to track your bike and coordinate with authorities
              </p>
            </form>
          </CardContent>
        </Card>

        <div className="mx-auto mt-8 max-w-2xl">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">Need immediate assistance?</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Call our 24/7 emergency hotline:{" "}
                    <span className="font-semibold text-foreground">+31 20 123 4567</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
