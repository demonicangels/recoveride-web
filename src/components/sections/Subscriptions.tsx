"use client"

import { Check } from "lucide-react"
import { useRouter } from "next/navigation"
import { SmtpAPI } from "../../api/smtpAPI";
import { ToastContainer, toast } from "react-toastify"

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
  const api = new SmtpAPI();

  const notify = () => toast.success("Request sent successfully! Our Team will contact you shortly.");

  let user = localStorage.getItem("user");

  const handleBuyRequest = async (planName: string) => {

    if (user) {

      const userData = JSON.parse(user);

      const emailData = {
        name: userData.name,
        email: userData.email,
        phone: userData.phoneNumber
        ,
        message: `User ${userData.name} with email ${userData.email} and phone ${userData.phoneNumber} has requested to buy the ${planName} subscription plan. Please contact them to proceed with the purchase.`,
      };

      const result = await api.sendEmail(emailData)

      if(!result) {
        alert("There was an issue processing your request. Please try again later.");
        return;
      }

      notify();

      const reply = await api.sendAutoReply({ name: userData.name, email: userData.email });

      if(!reply) {
        alert("There was an issue sending the confirmation email. Please contact support.");
        return;
      }
    }
  }

  return (
    <section id="subscriptions" className="bg-gray-50 py-12 md:py-16 lg:py-24">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="light"
       />
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-4">
          <h3 className="text-base sm:text-lg font-semibold mb-2" style={{ color: "#1A3B5C" }}>
            Subscriptions
          </h3>
        </header>

        <div className="max-w-3xl mx-auto mb-8 md:mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 px-2" style={{ color: "#1A3B5C" }}>
            Choose Your Protection Plan
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed px-2">
            All plans include a GPS tracker and 30-day money-back guarantee
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="relative bg-white rounded-2xl shadow-lg overflow-visible transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="p-6 sm:p-8 pt-8 sm:pt-10 flex flex-col h-full">
                <header className="text-center mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "#1A3B5C" }}>
                    {plan.name}
                  </h3>

                  <div className="mb-3">
                    <span className="text-4xl sm:text-5xl font-bold" style={{ color: "#1A3B5C" }}>
                      {plan.price}
                    </span>
                    <span className="text-gray-600 ml-2 text-sm sm:text-base">{plan.period}</span>
                  </div>

                  <p className="text-sm sm:text-base text-gray-600">{plan.description}</p>
                </header>

                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className="shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center mt-0.5"
                        style={{ backgroundColor: "#d63624" }}
                      >
                        <Check size={14} className="text-white sm:w-4 sm:h-4" strokeWidth={3} />
                      </div>
                      <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <footer className="mt-auto">
                  {user ? (<a
                    href="#contact"
                    className="block w-full py-3 sm:py-3.5 px-6 rounded-full text-white font-semibold text-center text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{
                      backgroundColor: plan.popular ? "#1A3B5C" : "#d63624",
                    }}
                    onClick={() => handleBuyRequest(plan.name)}
                  >
                    Buy
                  </a>) : (<a
                            href="#contact"
                            className="block w-full py-3 sm:py-3.5 px-6 rounded-full text-white font-semibold text-center text-sm sm:text-base transition-all duration-300 hover:shadow-lg hover:scale-105"
                            style={{
                              backgroundColor: plan.popular ? "#1A3B5C" : "#d63624",
                            }}
                            onClick={() => router.push("/auth")}
                          >
                    Get started
                  </a>)}
                </footer>
              </div>
            </article>
          ))}
        </div>

        <footer className="mt-6 md:mt-8 px-4">
          <p className="text-center text-gray-600 text-sm sm:text-base">
            All prices include VAT. Cancel anytime, no questions asked.
          </p>
        </footer>
      </div>
    </section>
  )
}


