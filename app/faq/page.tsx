"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function FAQ() {
  const faqs = [
    {
      question: "How does Floowery work?",
      answer:
        "Floowery uses advanced targeting algorithms to connect your Instagram account with real users who are interested in your content and niche. We identify potential followers based on their interests, engagement patterns, and activity, then promote your account to them. This results in genuine, interested followers who are more likely to engage with your content.",
    },
    {
      question: "Are the followers real?",
      answer:
        "Yes, 100%. We never use bots, fake accounts, or engagement pods. All followers gained through our service are real Instagram users with active accounts. We focus on quality over quantity, ensuring that your new followers are genuinely interested in your content.",
    },
    {
      question: "Do you need my Instagram password?",
      answer:
        "Absolutely not. We never ask for or require your Instagram password. Our system works externally by promoting your account to potential followers. Your account security is paramount, and we've designed our service to work without requiring sensitive information.",
    },
    {
      question: "How many followers can I expect?",
      answer:
        "Results vary based on your niche, content quality, and the package you choose. Our packages typically deliver the stated range of followers within 30 days. These are conservative estimates, and many clients see even better results.",
    },
    {
      question: "How quickly will I see results?",
      answer:
        "Most clients begin seeing new followers within 24-48 hours of starting their campaign. Growth continues steadily throughout the month, with some natural fluctuation day-to-day. Our dashboard allows you to track your progress in real-time.",
    },
    {
      question: "Is this against Instagram's terms of service?",
      answer:
        "No. Our methods comply with Instagram's terms of service. We don't use automation to interact with accounts on your behalf, purchase followers, or engage in any prohibited activities. We simply promote your account to relevant users who might be interested in following you.",
    },
  ]

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-3xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-2">Find answers to common questions about our Instagram growth service.</p>
        </div>

        <div className="bg-white rounded-lg shadow overflow-hidden">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button className="w-full text-left py-4 px-6 focus:outline-none" onClick={() => toggleFAQ(index)}>
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${openIndex === index ? "transform rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <Link href="/contact">
            <Button className="bg-[#59CCB1] hover:bg-[#2A1845] text-white px-6">Contact Support</Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
