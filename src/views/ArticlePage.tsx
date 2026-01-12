"use client";

import { Calendar, User, Clock, ArrowLeft } from "lucide-react"
import type { ArticlePageProps } from "../types/articlePageProps"
import { articles } from "../lib/articles-data";

export function ArticlePage({slug}: ArticlePageProps) {

  console.log("Rendering ArticlePage for slug:", slug);

  const article = articles.find((a) => a.slug === slug);

  if(!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-[#1A3B5C] text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <img
          alt="blog-image"
          className="absolute inset-0 z-0 w-full h-full object-cover"
          src={article.heroImage || "/placeholder.svg"}
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
              {article.date}
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Clock size={16} />
              {article.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-white/80">
              <User size={16} />
              {article.author}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl leading-relaxed text-gray-700 mb-6">{article.introduction.lead}</p>
          {article.introduction.body}
        </div>

        {article.disclaimer && (
          <p className="text-sm text-gray-500 italic mb-6">
            The following stories are excerpts from public discussions shared by cyclists on Reddit, used to illustrate common experiences with bike theft in the Netherlands.
          </p>
        )}

        {article.sections.map((s, idx) => (
          <section
            key={idx}
            className={`mb-12 rounded-2xl p-8 shadow-sm ${s.highlight ? "bg-linear-to-br from-[#1A3B5C] to-[#0f2942] text-white" : "bg-white border border-gray-100"}`}
          >
            <h2
              className={`text-3xl font-bold mb-4 flex items-center gap-3 ${s.highlight ? "text-white" : "text-[#1A3B5C]"}`}
            >
              {"number" in s && s.number && (
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#d63624] text-white text-xl font-bold">
                  {s.number}
                </span>
              )}
              {s.title}
            </h2>

            {/* Quote */}
            {"quote" in s && s.quote && (
              <blockquote
                className={`border-l-4 border-[#d63624] pl-4 italic mb-6 ${s.highlight ? "text-white/90" : "text-gray-600"}`}
              >
                {s.quote}
              </blockquote>
            )}

            {/* Content paragraphs */}
            {Array.isArray(s.content) ? (
              s.content.map((para, pidx) => (
                <p
                  key={pidx}
                  className={`text-lg leading-relaxed mb-4 ${s.highlight ? "text-white/95" : "text-gray-700"}`}
                >
                  {para}
                </p>
              ))
            ) : (
              <p className={`text-lg leading-relaxed mb-4 ${s.highlight ? "text-white/95" : "text-gray-700"}`}>
                {s.content}
              </p>
            )}

            {/* Bullet Points */}
            {"bulletPoints" in s && s.bulletPoints && (
              <ul className="space-y-3 my-6">
                {s.bulletPoints.map((point, bpidx) => (
                  <li key={bpidx} className="flex items-start gap-3">
                    <span className="text-[#d63624] font-bold mt-1">•</span>
                    <span className={`text-lg leading-relaxed ${s.highlight ? "text-white/95" : "text-gray-700"}`}>
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Intersection text */}
            {"intersection" in s && s.intersection && (
              <p className={`text-lg leading-relaxed mb-6 ${s.highlight ? "text-white/95" : "text-gray-700"}`}>
                {s.intersection}
              </p>
            )}

            {/* Recoveride Steps Callout */}
            {"recoverideSteps" in s && s.recoverideSteps && (
              <div className="bg-[#d63624]/10 border-l-4 border-[#d63624] rounded-lg p-6 my-6">
                <h3 className="text-xl font-bold text-[#1A3B5C] mb-4">
                  With Recoveride, reporting and recovery becomes much simpler with only 2 steps:
                </h3>
                <ol className="space-y-3">
                  {s.recoverideSteps.map((step, rsidx) => (
                    <li key={rsidx} className="flex items-start gap-3">
                      <span className="text-[#d63624] font-bold">{rsidx + 1}.</span>
                      <span className="text-lg leading-relaxed text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* End text */}
            {"end" in s && s.end && (
              <p className={`text-lg leading-relaxed ${s.highlight ? "text-white/95" : "text-gray-700"}`}>{s.end}</p>
            )}

            {/* Recoveride Note */}
            {"recoverideNote" in s && s.recoverideNote && (
              <div className="bg-[#1A3B5C]/5 border-l-4 border-[#1A3B5C] rounded-lg p-6 mt-6">
                <p className="text-lg leading-relaxed text-gray-700">{s.recoverideNote}</p>
              </div>
            )}
          </section>
        ))}

        {/* Conclusion */}
        {article.conclusion && (
          <section className="mb-12 bg-linear-to-br from-[#1A3B5C] to-[#0f2942] text-white rounded-2xl p-8 shadow-lg">
            {/* <h2 className="text-3xl font-bold mb-6">Conclusion: Layered Protection Is the Best Defense</h2> */}
            <p className="text-lg leading-relaxed mb-4">{article.conclusion.lead}</p>
            <p className="text-lg leading-relaxed mb-4">{article.conclusion.body}</p>
            <a
              href={article.cta.link}
              className="inline-block px-8 py-4 bg-[#d63624] text-white font-bold rounded-lg hover:bg-[#b82915] transition-colors shadow-lg"
            >
              {article.cta.text}
            </a>
          </section>
        )}

        {/* CTA for articles without conclusion */}
        {!article.conclusion && article.cta && (
          <section className="mb-12 bg-linear-to-br text-white rounded-2xl p-8 shadow-lg text-center">
            <a
              href={article.cta.link}
              className="inline-block px-8 py-4 bg-[#d63624] text-white font-bold rounded-lg hover:bg-[#b82915] transition-colors shadow-lg"
            >
              {article.cta.text}
            </a>
          </section>
        )}

        {/* Sources */}
        {article.sources && (
          <section className="mt-16 pt-12 border-t-2 border-gray-200">
            <h2 className="text-3xl font-bold text-[#1A3B5C] mb-8">{article.sources.title}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{article.sources.description}</p>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <ul className="space-y-3">
                {article.sources.list.map((source, sidx) => (
                  <li key={sidx} className="flex items-start gap-3">
                    <span className="text-[#d63624] font-bold mt-1">•</span>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold text-[#1A3B5C]">{source.label}</span>{" "}
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#d63624] hover:underline"
                      >
                        {source.url}
                      </a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </article>
    </div>
  )
}
