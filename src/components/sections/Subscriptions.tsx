"use client"

import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

export function SubscriptionsSection() {

  const plans = [
    {
      name: "Basic",
      price: "€15.99",
      period: "per month",
      description: "Complete protection with recovery service",
      features: [
        "Bike recovery services",
        "Assistance in police/insurer documents",
        "24/7 priority support",
        "Extended GPS battery life",
      ],
      popular: true,
    },
    // {
    //   name: "Family",
    //   price: "€28.99",
    //   period: "per month",
    //   description: "Protect up to 4 e-bikes",
    //   features: [
    //     "Everything in Premium",
    //     "Up to 4 GPS trackers",
    //     "Multi-bike management",
    //     "Maintenance check every 2 years",
    //   ],
    //   popular: false,
    // },
  ]

  const router = useRouter();

  return (
    <section id="subscriptions" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-4">
          <h3 className="text-lg font-semibold mb-2" style={{ color: "#1A3B5C" }}>
            Subscriptions
          </h3>
        </header>

        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "#1A3B5C" }}>
            Choose Your Protection Plan
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            All plans include a GPS tracker and 30-day money-back guarantee
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto ml-106">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              // style={{
              //   ...(plan.popular && {
              //     outline: "4px solid #1A3B5C",
              //   }),
              // }}
            >

              <div className="p-8 pt-10 flex flex-col h-full">
                <header className="text-center mb-6">
                  <h3 className="text-3xl font-bold mb-3" style={{ color: "#1A3B5C" }}>
                    {plan.name}
                  </h3>

                  <div className="mb-3">
                    <span className="text-5xl font-bold" style={{ color: "#1A3B5C" }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>

                  <p className="text-gray-600">{plan.description}</p>
                </header>

                <ul className="space-y-4 mb-8 grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: "#d63624" }}
                      >
                        <Check size={16} className="text-white" strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <footer className="mt-auto">
                  <a
                    href="#contact"
                    className="block w-full py-3.5 px-6 rounded-full text-white font-semibold text-center transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{
                      backgroundColor: plan.popular ? "#1A3B5C" : "#d63624",
                    }}
                    onClick={() => router.push('/#signup')}
                  >
                    Get Started
                  </a>
                </footer>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-8">
          <p className="text-center text-gray-600">All prices include VAT. Cancel anytime, no questions asked.</p>
        </footer>
      </div>
    </section>
  )
}
