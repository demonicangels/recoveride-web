import { Star } from "lucide-react"
import { useState } from "react"

const reviews = [
  {
    id: 1,
    name: "Lars van der Berg",
    location: "Amsterdam",
    rating: 5,
    text: "My €3,500 e-bike was stolen from outside my office. I reported it through Recoveride and within 6 hours, their team had located and recovered it. Absolutely incredible service!",
  },
  {
    id: 2,
    name: "Sophie Janssen",
    location: "Rotterdam",
    rating: 5,
    text: "The peace of mind knowing my expensive e-bike is protected is worth every euro. The tracker is completely hidden and the recovery team is professional and fast.",
  },
  {
    id: 3,
    name: "Pieter de Vries",
    location: "Utrecht",
    rating: 5,
    text: "I was skeptical at first, but when my bike was stolen, Recoveride proved their worth. They coordinated with the police and I had my bike back within 24 hours. Highly recommend!",
  },
  {
    id: 4,
    name: "Emma Bakker",
    location: "Den Haag",
    rating: 5,
    text: "Professional installation, discreet tracker, and when I needed them, they delivered. My €4,200 e-bike was recovered in less than 12 hours. Best investment I made!",
  },
  {
    id: 5,
    name: "Thomas Mulder",
    location: "Eindhoven",
    rating: 5,
    text: "The team at Recoveride is amazing. They not only recovered my stolen e-bike but also handled all communication with my insurance company. Stress-free experience!",
  },
]

export function ReviewsSection() {

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold text-lg mb-2">Reviews</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from e-bike owners across the Netherlands who have experienced our
            recovery service firsthand.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Review Card */}
            <div className="bg-card-light rounded-3xl p-8 md:p-12 min-h-[300px] flex flex-col justify-between">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-center mb-8">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">"{reviews[currentIndex].text}"</p>
              </blockquote>

              {/* Customer Info */}
              <div className="text-center">
                <p className="font-bold text-xl text-gray-900">{reviews[currentIndex].name}</p>
                <p className="text-gray-600">{reviews[currentIndex].location}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextReview}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors flex items-center justify-center"
              aria-label="Next review"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}