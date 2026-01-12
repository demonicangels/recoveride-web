"use client"

import { User, Mail, Bike, CreditCard, LogOut, Edit2, Plus } from "lucide-react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@mui/material"
import type { BikeData } from "../types/bikeData";

export function ProfilePage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  let currentUser = JSON.parse(localStorage.getItem("user") || "null");

  if (!currentUser) {
    router.push("/");
    return null;
  }

  const userData = {
    fullName: currentUser.name as string,
    email: currentUser.email as string,
    phone: currentUser.phoneNumber as string,
    plan: "",
    planPrice: "",
    bikesRegistered: 0,
    bikes: [] as BikeData[],
}

  const handleSignOut = async () => {
    setIsLoading(true)

    localStorage.removeItem("user");

    console.log("[v0] Signing out user...")

    
  }


  return (
    <section className="min-h-screen bg-gray-50 py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white text-2xl sm:text-3xl font-bold"
              style={{ backgroundColor: "#1A3B5C" }}
            >
              {userData.fullName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold" style={{ color: "#1A3B5C" }}>
                {userData.fullName}
              </h1>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - User Info & Plan */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2" style={{ color: "#1A3B5C" }}>
                    <User className="w-5 h-5 sm:w-6 sm:h-6" />
                    Personal Information
                  </h2>
                  <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Edit profile">
                    <Edit2 className="w-5 h-5" style={{ color: "#d63624" }} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Full Name</label>
                    <p className="mt-1 text-base sm:text-lg font-medium" style={{ color: "#1A3B5C" }}>
                      {userData.fullName}
                    </p>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Email Address</label>
                    <div className="mt-1 flex items-center gap-2">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <p className="text-base sm:text-lg font-medium break-all" style={{ color: "#1A3B5C" }}>
                        {userData.email}
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Phone Number</label>
                    <div className="mt-1 flex items-center gap-2">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                      <p className="text-base sm:text-lg font-medium break-all" style={{ color: "#1A3B5C" }}>
                        {userData.phone || "Not provided"}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Registered Bikes Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl sm:text-2xl font-bold" style={{ color: "#1A3B5C" }}>
                    Registered Bikes
                  </h2>
                  <button
                    className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg cursor-pointer"
                    style={{ backgroundColor: "#d63624" }}
                  >
                    <Plus className="w-4 h-4" />
                    <span className="hidden sm:inline">Add New Bike</span>
                    <span className="sm:hidden">Add</span>
                  </button>
                </div>

                {userData.bikes.length > 0 ? (
                  <div className="space-y-4">
                    {userData.bikes.map((bike) => (
                      <div
                        key={bike.id}
                        className="flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 hover:border-[#1A3B5C] transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className="w-12 h-12 rounded-full flex items-center justify-center"
                            style={{ backgroundColor: "#1A3B5C" }}
                          >
                            <Bike className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-base sm:text-lg" style={{ color: "#1A3B5C" }}>
                              {bike.name}
                            </h3>
                            <p className="text-sm text-gray-600">{bike.model}</p>
                          </div>
                        </div>
                        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Edit bike">
                          <Edit2 className="w-4 h-4" style={{ color: "#d63624" }} />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Bike className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                    <p className="text-gray-500 text-lg">No bikes registered</p>
                    <p className="text-gray-400 text-sm mt-2">Click "Add New Bike" to register your first bike</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Subscription & Actions */}
          <div className="space-y-6">
            {/* Current Plan Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2 mb-6" style={{ color: "#1A3B5C" }}>
                  <CreditCard className="w-5 h-5 sm:w-6 sm:h-6" />
                  Current Plan
                </h2>

                { userData.plan ?  (<div className="p-6 rounded-2xl mb-6" style={{ backgroundColor: "#1A3B5C" }}>
                  <div className="text-center text-white">
                    <p className="text-sm uppercase tracking-wide mb-2">Subscribed to</p>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">{userData.plan}</h3>
                    <p className="text-lg font-semibold">{userData.planPrice}</p>
                  </div>
                </div>) : (<p className="text-center text-gray-500 text-lg mb-5">No active subscriptions.</p>)}

                {/* <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#d63624" }}></div>
                    <span>24/7 Priority Support</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#d63624" }}></div>
                    <span>Bike Recovery Services</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#d63624" }}></div>
                    <span>GPS Tracker Included</span>
                  </div>
                </div> */}

                <button
                  className="w-full py-3 rounded-full border-2 font-semibold text-sm text-blue-950 transition-all hover:shadow-lg cursor-pointer hover:bg-blue-950 hover:text-white"
                  style={{ borderColor: "#1A3B5C"}}
                  onClick={() => router.push("/#subscriptions")}
                >
                  Manage Subscription
                </button>
              </CardContent>
            </Card>

            {/* Sign Out Card */}
            <Card className="shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <button
                  onClick={handleSignOut}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-white font-semibold text-sm transition-all hover:shadow-lg disabled:opacity-50 cursor-pointer"
                  style={{ backgroundColor: "#d63624" }}
                >
                  <LogOut className="w-5 h-5" />
                  {isLoading ? "Signing Out..." : "Sign Out"}
                </button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-lg">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg font-bold mb-4" style={{ color: "#1A3B5C" }}>
                  Quick Actions
                </h3>
                <div className="space-y-3">
                  <button
                    onClick={() => router.push("/report")}
                    className="w-full py-2.5 rounded-lg border-2 border-gray-200 hover:border-[#d63624] hover:bg-gray-100 text-sm font-medium transition-all text-left px-4 cursor-pointer"
                  >
                    Report Theft
                  </button>
                  <button
                    onClick={() => router.push("/contact")}
                    className="w-full py-2.5 rounded-lg border-2 border-gray-200 hover:border-[#d63624] hover:bg-gray-100 text-sm font-medium transition-all text-left px-4 cursor-pointer"
                  >
                    Contact Support
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
