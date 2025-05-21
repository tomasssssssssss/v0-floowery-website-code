"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import PricingCard from "@/components/PricingCard"
import DirectCheckoutButtons from "@/components/DirectCheckoutButtons"
import PaymentTypeToggle from "@/components/PaymentTypeToggle"

export default function PricingPage() {
  const [paymentType, setPaymentType] = useState<"one-time" | "monthly" | "yearly">("one-time")

  const features = {
    basic: ["Real Instagram followers", "Gradual delivery", "30-day guarantee", "24/7 support"],
    standard: [
      "Real Instagram followers",
      "Gradual delivery",
      "30-day guarantee",
      "24/7 support",
      "Priority delivery",
      "Engagement boost",
    ],
    premium: [
      "Real Instagram followers",
      "Gradual delivery",
      "30-day guarantee",
      "24/7 support",
      "Priority delivery",
      "Engagement boost",
      "Content strategy",
      "Analytics dashboard",
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that's right for you and start growing your Instagram following today
          </p>
        </div>

        <PaymentTypeToggle selectedType={paymentType} onChange={setPaymentType} />

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <PricingCard
            title="Basic Growth"
            followers="500–1,000"
            price={paymentType === "one-time" ? 120 : paymentType === "monthly" ? 48 : 480}
            paymentType={paymentType}
            features={features.basic}
          />
          <PricingCard
            title="Standard Growth"
            followers="1,000–2,000"
            price={paymentType === "one-time" ? 220 : paymentType === "monthly" ? 88 : 880}
            paymentType={paymentType}
            isPopular={true}
            features={features.standard}
          />
          <PricingCard
            title="Premium Growth"
            followers="2,500–5,000"
            price={paymentType === "one-time" ? 320 : paymentType === "monthly" ? 128 : 1280}
            paymentType={paymentType}
            features={features.premium}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-lg mb-2">What's the difference between payment types?</h3>
              <p className="text-gray-600">
                One-time payments provide a single boost to your followers. Monthly subscriptions offer continuous
                growth each month. Yearly subscriptions provide the same monthly follower growth with 2 months free,
                making it our best value option.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Can I cancel my subscription?</h3>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time. For monthly and yearly plans, you'll continue to
                receive service until the end of your current billing period.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Are these real followers?</h3>
              <p className="text-gray-600">
                Yes, all followers are real Instagram users. We never use bots or fake accounts, which ensures your
                account remains safe and engagement rates stay high.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">How quickly will I see results?</h3>
              <p className="text-gray-600">
                You'll start seeing new followers within 24-48 hours. Growth is delivered gradually to maintain account
                safety and authenticity.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#F0E6FF] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to grow your Instagram?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have boosted their Instagram presence with Floowery
          </p>
          <DirectCheckoutButtons />
        </div>
      </main>

      <Footer />
    </div>
  )
}
