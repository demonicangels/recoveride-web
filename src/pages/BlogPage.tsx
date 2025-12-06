"use client";

import { ArrowRight, Calendar, Shield, MapPin, Users, FileText } from "lucide-react"
import { useRouter } from "next/navigation"

const blogPosts = [
  {
    id: 1,
    title: "Practical Tips To Help You Protect Your Bike From Theft",
    description: "7 essential actions every e-bike owner should take to minimize the risk of theft and keep their ride secure.",
    image: "/assets/ebike_safety_hero.jpeg",
    date: "December 01, 2025",
    path: "/blog/what-to-do-after-bike-stolen"
  },
  // {
  //   id: 2,
  //   title: "Understanding E-Bike Theft Statistics in the Netherlands",
  //   description: "Explore the latest data on e-bike theft trends across Dutch cities and learn which areas are most affected.",
  //   image: "/data-visualization-of-bike-theft-statistics.jpg",
  //   date: "March 5, 2025",
  //   path: "/blog/e-bike-theft-statistics"
  // },
  // {
  //   id: 3,
  //   title: "How GPS Tracking Technology Helps Recover Stolen Bikes",
  //   description: "Discover how modern GPS technology is revolutionizing bike recovery and increasing the chances of getting your e-bike back.",
  //   image: "/gps-tracker-device-on-bicycle.jpg",
  //   date: "February 28, 2025",
  //   path: "/blog/gps-tracking-technology"
  // },
  // {
  //   id: 4,
  //   title: "Insurance Claims: What You Need to Know",
  //   description: "Navigate the complexities of filing insurance claims for stolen e-bikes with our comprehensive guide to documentation and processes.",
  //   image: "/insurance-documents-and-paperwork.jpg",
  //   date: "February 15, 2025",
  //   path: "/blog/insurance-claims-guide"
  // }
]

export function BlogPage() {
    const router = useRouter();

  return (
    <section className="min-h-screen bg-white">
      <div className="relative text-white py-20 md:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/blog_pic.jpg"  
            alt="Cyclist riding" 
            className="w-full h-full object-cover" 
            />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/80" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d63624]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d63624]/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div>
              <span className="inline-block mb-4 px-4 py-2 bg-[#d63624]/20 text-[#d63624] rounded-full text-sm font-semibold tracking-wide">
                Recoveride Insights
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                Protecting What Matters Most
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed text-pretty">
                Your trusted resource for e-bike security, theft prevention, and recovery strategies. Stay informed with
                expert insights and real success stories from the Recoveride community.
              </p>

              {/* Featured Articles */}
              {/* <div className="space-y-4">
                <h3 className="text-sm font-bold tracking-wider uppercase text-gray-400 mb-4">Featured Articles</h3>
                <a href="#" className="block group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-start gap-3">
                    <ArrowRight
                      className="mt-1 text-[#d63624] shrink-0 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                    <span className="text-white group-hover:text-[#d63624] transition-colors">
                      How GPS tracking technology saves stolen bikes
                    </span>
                  </div>
                </a>
                <a href="#" className="block group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-start gap-3">
                    <ArrowRight
                      className="mt-1 text-[#d63624] shrink-0 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                    <span className="text-white group-hover:text-[#d63624] transition-colors">
                      Step-by-step guide: What to do when your bike is stolen
                    </span>
                  </div>
                </a>
                <a href="#" className="block group hover:translate-x-2 transition-transform duration-300">
                  <div className="flex items-start gap-3">
                    <ArrowRight
                      className="mt-1 text-[#d63624] shrink-0 group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                    <span className="text-white group-hover:text-[#d63624] transition-colors">
                      Success story: Amsterdam recovery in under 24 hours
                    </span>
                  </div>
                </a>
              </div> */}
            </div>

            {/* Right Content - Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Prevention Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-[#d63624] rounded-xl flex items-center justify-center mb-4">
                  <Shield className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Prevention</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Security best practices</li>
                  <li>• Lock recommendations</li>
                  <li>• GPS tracking tips</li>
                  <li>• Safe parking zones</li>
                </ul>
              </div>

              {/* Recovery Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-[#d63624] rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Recovery</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Professional team support</li>
                  <li>• Police coordination</li>
                  <li>• Legal assistance</li>
                  <li>• Success stories</li>
                </ul>
              </div>

              {/* Community Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-[#d63624] rounded-xl flex items-center justify-center mb-4">
                  <Users className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Community</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Member testimonials</li>
                  <li>• Local alerts</li>
                  <li>• Neighborhood watch</li>
                  <li>• Safety events</li>
                </ul>
              </div>

              {/* Legal & Insurance Card */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                <div className="w-12 h-12 bg-[#d63624] rounded-xl flex items-center justify-center mb-4">
                  <FileText className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-bold mb-3">Legal & Insurance</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Filing claims</li>
                  <li>• Documentation guide</li>
                  <li>• Insurance partnerships</li>
                  <li>• Rights & procedures</li>
                </ul>
              </div>

              {/* Bottom CTA Box */}
              <div className="sm:col-span-2 bg-linear-to-t from-[#d63624] to-[#b82915] rounded-2xl p-6">
                <p className="text-sm leading-relaxed mb-4">
                  Join our community and be one step ahead in protecting your ebike.
                </p>
                <button className="bg-white text-[#d63624] px-6 py-2 rounded-lg font-semibold hover:bg-gray-300 transition-colors duration-300 text-sm cursor-pointer hover:" onClick={() => {router.push("/#signup")}}>
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Posts Section */}
      <div className="py-16 md:py-24 bg-linear-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#1A3B5C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#d63624]/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <header className="max-w-3xl mx-auto mb-16 text-center">
            <span className="inline-block mb-3 text-sm font-semibold tracking-widest text-[#d63624] uppercase">
              Our Blog
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A3B5C] mb-4 text-balance">
              Stay Informed, Stay Protected
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-pretty">
              Expert advice, insights, and stories about e-bike security and recovery
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer"
                onClick={() => router.push(post.path)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A3B5C]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  {/* Category and Date */}
                  <div className="flex items-center gap-4 mb-3 text-sm">
                    <span className="flex items-center gap-1.5 text-gray-500">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-[#1A3B5C] mb-3 leading-tight group-hover:text-[#d63624] transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">{post.description}</p>

                  {/* Read More Button */}
                  <button className="inline-flex items-center gap-2 text-[#d63624] font-semibold text-sm group/btn hover:gap-3 transition-all duration-300 cursor-pointer" onClick={() => router.push(post.path)}>
                    Read More
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
