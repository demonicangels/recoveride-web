"use client";

import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import type { ArticlePageProps } from "../types/articlePageProps"

export function ArticlePage({slug}: ArticlePageProps) {

  console.log("Rendering ArticlePage for slug:", slug);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-[#1A3B5C] text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <img
          alt="blog-image-ebike"
          className="absolute inset-0 z-0 w-full"
          src="/assets/ebike_safety_hero.jpeg"
          
        />
          <div className="absolute inset-0 bg-black/70" />

        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d63624]/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d63624]/10 rounded-full blur-3xl z-0" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </a>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
            <span className="flex items-center gap-1.5 text-white/80">
              <Calendar size={16} />
              December 01, 2025
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock size={16} />5 min read
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <User size={16} />
              Recoveride Team
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            Practical Tips To Help You Protect Your Bike From Theft
          </h1>

          {/* Share Button */}
          {/* <button className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 transition-all">
            <Share2 size={18} />
            <span className="font-medium">Share Article</span>
          </button> */}
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl leading-relaxed text-gray-700 mb-6">
            Bike theft is a growing problem, especially for owners of{" "}
            <strong className="text-[#1A3B5C]">e-bikes</strong>, which are increasingly targeted due to their high
            value. Whether you use your bike for commuting, fitness, or getting around the city, protecting it requires
            more than a basic lock. Modern theft happens fast — and you need multiple layers of protection to stay
            ahead.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 mb-8">
            In this guide, we'll share practical tips to prevent theft and show how a recovery-focused service like{" "}
            <strong className="text-[#d63624]">Recoveride</strong> can help you get your bike back if it's ever stolen.
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
              1
            </span>
            Start with Strong Locks and Smart Bike Service Advice
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            A strong lock is still your first line of defense. Bike experts and many{" "}
            <strong className="text-[#1A3B5C]">bike service</strong> shops recommend using at least two locks — for
            example, a frame lock plus a heavy-duty chain or U-lock. This makes your bike significantly harder to remove
            quickly, which discourages thieves.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            When possible, secure your bike to a fixed object such as a rack, pole, or ground anchor. This applies
            equally to simple city bikes and higher-value <strong className="text-[#1A3B5C]">e-bikes</strong>. If your
            local bike service shop offers installation of security accessories, it's worth asking them for brand and
            setup recommendations.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
              2
            </span>
            Park Smart: Visible, Busy and Well-Lit Locations
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Thieves prefer dark or isolated areas where they can work unnoticed. Parking your bike near shops, stations,
            cameras, or heavy foot traffic dramatically reduces the likelihood of theft. Many Dutch cities also provide
            supervised bike parking — a much safer option for any{" "}
            <strong className="text-[#1A3B5C]">electric bike</strong>.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            If you must leave your bike outside for long periods, choose a well-lit, busy location and lock the frame
            and at least one wheel. The goal is to make your bike less attractive than the others around it.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
              3
            </span>
            Protect Removable Parts on Your E-Bike
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Most <strong className="text-[#1A3B5C]">e-bikes</strong> come with removable batteries, displays, lights and
            sometimes saddles. These components are often stolen even when the bike itself remains locked.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Whenever possible, take high-value parts like the battery and display with you, especially in high-theft
            areas. Alternatively, use additional locks or security screws to make quick removal much harder.
          </p>
        </section>

        {/* Section 4 - GPS Tracking (Highlighted) */}
        <section className="mb-12 bg-linear-to-br from-[#1A3B5C] to-[#0f2942] text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
              4
            </span>
            Use a Bike with GPS for Location Tracking and Recovery
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            While locks deter theft, they can't guarantee prevention. That's why many riders now choose a{" "}
            <strong className="text-[#d63624]">bike with GPS</strong> for added security. A hidden GPS tracker enables{" "}
            <strong>location tracking</strong> if the bike is taken and can give you or a recovery service the last
            known position.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            With Recoveride, your bike is equipped with a discreet tracker that supports a powerful{" "}
            <strong className="text-[#d63624]">bike theft recovery service</strong>. Our device includes a{" "}
            <strong>2-year warranty</strong>, so you have long-term protection and peace of mind. The tracker remains in
            standby mode until you report your bike stolen, then it supports secure, targeted tracking to help our team
            respond quickly.
          </p>
          <p className="text-lg leading-relaxed">
            Some riders are familiar with "<strong>find my device</strong>"-style apps for phones or laptops. A
            GPS-equipped bike works on a similar principle, but with hardware designed specifically for bicycles and
            recovery scenarios.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
              5
            </span>
            Uh oh, my bike got stolen. What now?
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Even with the best precautions, determined thieves sometimes succeed. If you're dealing with{" "}
            <strong className="text-[#1A3B5C]">stolen bikes</strong>, acting quickly is absolutely crucial. Normally, a
            rider must handle several steps alone:
          </p>
          <ul className="space-y-3 mb-6 text-lg text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>
                If you have a bike tracker, check your tracking app or bike GPS for recent{" "}
                <strong className="text-[#1A3B5C]">location tracking</strong> updates.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Visit the police station or online portal to report the theft.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Provide photos, frame number, receipts, and last known location.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Contact your insurer and submit all documentation.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Wait for updates from police or insurance, often without guidance.</span>
            </li>
          </ul>

          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            This process can feel overwhelming—especially right after discovering your bike is gone.
          </p>

          <div className="bg-[#1A3B5C]/5 border-l-4 border-[#1A3B5C] rounded-lg p-6">
            <h3 className="text-xl font-bold text-[#1A3B5C] mb-4">
              With Recoveride, reporting and recovery becomes much simpler with only 2 steps:
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex gap-3">
                <span className="text-gray-700 font-bold">1.</span>
                <span>
                  <strong className="text-[#1A3B5C]">Report the theft</strong> using our platform so we can activate
                  recovery mode and begin searching immediately.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-700 font-bold">2.</span>
                <span>
                  <strong className="text-[#1A3B5C]">Prepare documentation</strong> (police report and insurance
                  details) while our team supports and guides you through each step.
                </span>
              </li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 mt-6">
            Riders who have a <strong className="text-[#1A3B5C]">bike with GPS</strong> and a dedicated recovery service
            like Recoveride have a far higher chance of getting their bike back compared to relying on locks or tracking
            alone.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
              6
            </span>
            Choose a good recovery service for your bike
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            Most security solutions stop at prevention or basic tracking.{" "}
            <strong className="text-[#d63624]">Recoveride</strong> goes further by turning theft into a coordinated
            response.
          </p>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            When you report a theft, our professional recovery team:
          </p>
          <ul className="space-y-3 mb-6 text-lg text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>
                Activates <strong className="text-[#1A3B5C]">location tracking</strong> for your e-bike.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Analyses movements and patterns to identify where the bike is likely being kept.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Helps you coordinate with the police so you don't have to handle complex communication alone.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Supports your insurance process with documentation and evidence.</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-700">
            Our goal is to locate and recover your stolen e-bike in{" "}
            <strong className="text-[#d63624]">72 hours or less</strong>, so you can get back on the road as quickly as
            possible. Instead of facing bike theft alone, you have a dedicated partner focused on recovery—not just
            prevention.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-4 flex items-center gap-3">
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
              7
            </span>
            Document and Register Your Bike!
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            No matter what security measures you use, always document your bike thoroughly:
          </p>
          <ul className="space-y-3 mb-6 text-lg text-gray-700">
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Take clear photos of the frame, components and any unique markings.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Write down the frame number, brand and model.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[#d63624] font-bold">•</span>
              <span>Store receipts, service history and registration details in a safe place.</span>
            </li>
          </ul>
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
            This information is extremely helpful for police reports, insurance claims and recovery efforts after a
            theft.
          </p>
          <div className="bg-[#1A3B5C]/5 border-l-4 border-[#1A3B5C] rounded-lg p-6">
            <p className="text-lg leading-relaxed text-gray-700">
              With a Recoveride subscription, you can securely store all this information directly on your
              account—photos, frame numbers, purchase receipts and more. Everything stays organized in one place and is
              instantly accessible when you need to file a report or activate recovery mode.
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12 bg-linear-to-br from-[#1A3B5C] to-[#0f2942] text-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold mb-6">Conclusion: Layered Protection Is the Best Defense</h2>
          <p className="text-lg leading-relaxed mb-4">
            Protecting your bike from theft is all about layers. Start with strong locks and smart parking, add
            documentation and registration, and seriously consider upgrading to a{" "}
            <strong className="text-[#d63624]">bike with GPS</strong> that supports recovery—not just prevention.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            With theft on the rise, especially for <strong>electric bikes</strong>, combining these practical steps with
            Recoveride's dedicated recovery service gives you the best chance of keeping your bike safe—and getting it
            back fast if it ever disappears.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            If you want to protect your bike and your freedom to ride, learn more about how{" "}
            <strong className="text-[#d63624]">Recoveride</strong> can help you respond quickly and effectively to bike
            theft.
          </p>
          <a
            href="/subscriptions"
            className="inline-block px-8 py-4 bg-[#d63624] text-white font-bold rounded-lg hover:bg-[#b82915] transition-colors shadow-lg"
          >
            Get Started with Recoveride
          </a>
        </section>

        {/* Related Articles */}
        {/* <section className="mt-16 pt-12 border-t-2 border-gray-200">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <a
              href="#"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-[#d63624]/10 text-[#d63624] text-sm font-semibold rounded-full mb-3">
                Recovery
              </span>
              <h3 className="text-lg font-bold text-[#1A3B5C] mb-2 group-hover:text-[#d63624] transition-colors">
                What To Do Immediately After Your Bike Is Stolen
              </h3>
              <p className="text-gray-600 text-sm">A step-by-step guide for the first 24 hours...</p>
            </a>
            <a
              href="#"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-[#d63624]/10 text-[#d63624] text-sm font-semibold rounded-full mb-3">
                Technology
              </span>
              <h3 className="text-lg font-bold text-[#1A3B5C] mb-2 group-hover:text-[#d63624] transition-colors">
                How GPS Tracking Technology Helps Recover Stolen Bikes
              </h3>
              <p className="text-gray-600 text-sm">Discover how modern GPS technology is revolutionizing...</p>
            </a>
            <a
              href="#"
              className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <span className="inline-block px-3 py-1 bg-[#d63624]/10 text-[#d63624] text-sm font-semibold rounded-full mb-3">
                Legal
              </span>
              <h3 className="text-lg font-bold text-[#1A3B5C] mb-2 group-hover:text-[#d63624] transition-colors">
                Insurance Claims: What You Need to Know
              </h3>
              <p className="text-gray-600 text-sm">Navigate the complexities of filing insurance claims...</p>
            </a>
          </div>
        </section>
      </article> */}
        {/* Sources */}
        <section className="mt-16 pt-12 border-t-2 border-gray-200">
          <h2 className="text-3xl font-bold text-[#1A3B5C] mb-8">Sources and further reading</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Curious to dive deeper or check out where this advice comes from? Here are the articles, guides, and expert
            resources we used while putting this blog together. They're worth a look — especially if you want to get
            even smarter about keeping your bike safe.
          </p>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Maastricht Bereikbaar</span> – Tips for safely parking,
                  locking, and insuring your bike.{" "}
                  <a
                    href="https://www.maastrichtbereikbaar.nl/en/fiets-op-slot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://www.maastrichtbereikbaar.nl/en/fiets-op-slot
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">IamExpat</span> – Bike safety tips in the Netherlands.{" "}
                  <a
                    href="https://www.iamexpat.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://www.iamexpat.nl
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">DutchReview</span> – Common mistakes that lead to bike
                  theft.{" "}
                  <a
                    href="https://dutchreview.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://dutchreview.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Holland Cycling</span> – Bicycle theft prevention
                  guide.{" "}
                  <a
                    href="https://www.holland-cycling.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://www.holland-cycling.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Comodule</span> – How to prevent e-bike theft.{" "}
                  <a
                    href="https://www.comodule.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://www.comodule.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">HelloTempo</span> – How to prevent e-bike theft (2025).{" "}
                  <a
                    href="https://www.hellotempo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://www.hellotempo.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Movcan Bike</span> – Electric bike anti-theft guide
                  (2025).{" "}
                  <a
                    href="https://movcan-bike.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://movcan-bike.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">KPN IoT / M2M</span> – Connected bike theft solutions.{" "}
                  <a
                    href="https://m2m.kpn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://m2m.kpn.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Cycling Electric</span> – GPS trackers for e-bike
                  anti-theft.{" "}
                  <a
                    href="https://www.cyclingelectric.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://www.cyclingelectric.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Macfox Bike</span> – GPS tracker pros & cons.{" "}
                  <a
                    href="https://macfoxbike.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://macfoxbike.com
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Stichting ART</span> – Prevent bicycle theft.{" "}
                  <a
                    href="https://stichtingart.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://stichtingart.nl
                  </a>
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#d63624] font-bold mt-1">•</span>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-semibold text-[#1A3B5C]">Wikipedia</span> – List of bicycle registers.{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/List_of_bicycle_registers"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#d63624] hover:underline"
                  >
                    https://en.wikipedia.org/wiki/List_of_bicycle_registers
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </article>
    </div>
  )
}
