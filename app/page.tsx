"use client"

import { useState } from "react"
import { Check, ChevronDown, ChevronUp, Shield, Zap, Lock, Instagram, CreditCard, BadgeCheck } from "lucide-react"
import TopBanner from "@/components/TopBanner"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import Hero from "@/components/Hero"
import BeforeAfterComparison from "@/components/BeforeAfterComparison"
import BenefitsList from "@/components/BenefitsList"
import SimpleTestimonials from "@/components/simple-testimonials"
import { SimpleButton } from "@/components/SimpleButton"

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // Pricing data with monthly and yearly options
  const pricingData = {
    monthly: [
      {
        title: "Starter",
        followers: "500–1000",
        price: 120,
        features: ["100% real followers", "Delivery within 30 days", "No password required", "24/7 support"],
        isPopular: false,
      },
      {
        title: "Growth",
        followers: "1000–2000",
        price: 220,
        features: [
          "100% real followers",
          "Delivery within 30 days",
          "No password required",
          "24/7 priority support",
          "Growth analytics",
        ],
        isPopular: true,
      },
      {
        title: "Professional",
        followers: "2000–3000",
        price: 320,
        features: [
          "100% real followers",
          "Delivery within 30 days",
          "No password required",
          "24/7 VIP support",
          "Advanced analytics",
          "Content recommendations",
        ],
        isPopular: false,
      },
    ],
    yearly: [
      {
        title: "Starter",
        followers: "500–1000",
        price: 1080, // 10% discount on monthly price x 12
        features: [
          "100% real followers",
          "Delivery within 30 days",
          "No password required",
          "24/7 support",
          "2 months free",
        ],
        isPopular: false,
      },
      {
        title: "Growth",
        followers: "1000–2000",
        price: 1980, // 10% discount on monthly price x 12
        features: [
          "100% real followers",
          "Delivery within 30 days",
          "No password required",
          "24/7 priority support",
          "Growth analytics",
          "2 months free",
        ],
        isPopular: true,
      },
      {
        title: "Professional",
        followers: "2000–3000",
        price: 2880, // 10% discount on monthly price x 12
        features: [
          "100% real followers",
          "Delivery within 30 days",
          "No password required",
          "24/7 VIP support",
          "Advanced analytics",
          "Content recommendations",
          "2 months free",
        ],
        isPopular: false,
      },
    ],
  }

  return (
    <div className="min-h-screen bg-floowery-light w-full">
      {/* Top Banner */}
      <TopBanner />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-12 pb-16 px-2 sm:px-6 gradient-bg w-full">
        <div className="w-full mx-auto sm:container sm:max-w-6xl">
          <Hero />
        </div>
      </section>

      {/* Before/After Comparison */}
      <section className="py-10 px-2 sm:px-6 bg-white w-full">
        <div className="w-full mx-auto sm:container sm:max-w-6xl">
          <BeforeAfterComparison />
        </div>
      </section>

      {/* Client Testimonials Section - Using the enhanced SimpleTestimonials component */}
      <div className="py-10 w-full px-2 sm:px-6">
        <div className="w-full mx-auto">
          <SimpleTestimonials />
        </div>
      </div>

      {/* NEW Starter Growth Plan Section */}
      <section className="py-10 px-2 sm:px-6 bg-gradient-to-r from-[#F0FBF8] to-[#E6F7F3] w-full">
        <div className="w-full mx-auto sm:container sm:max-w-6xl">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title mb-4 sm:mb-6">Starter Growth Plan</h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#59CCB1] mb-2 sm:mb-3">
              Consistent Instagram Growth for Just €15/Month
            </p>
            <p className="text-gray-600 w-full mx-auto sm:max-w-2xl">
              Get 50–100 real followers every month. Trusted, safe, and affordable.
            </p>
          </div>

          <div className="w-full mx-auto sm:max-w-md bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden border border-[#160C29]/10 sm:border-2 hover:border-[#160C29]/30 transition-all duration-300">
            <div className="p-4 sm:p-8">
              <div className="flex justify-between items-center mb-4 sm:mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#160C29]">Monthly Growth</h3>
                  <p className="text-[#59CCB1]">50–100 real followers</p>
                </div>
                <div className="bg-[#F0FBF8] p-2 sm:p-3 rounded-full">
                  <Instagram className="h-6 w-6 sm:h-8 sm:w-8 text-[#160C29]" />
                </div>
              </div>

              <div className="mb-4 sm:mb-6">
                <div className="flex items-end">
                  <span className="text-3xl sm:text-4xl font-bold text-[#160C29]">€15</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">50–100 real followers delivered monthly</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real people, not bots</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Steady drip delivery for safety</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cancel anytime</span>
                </li>
              </ul>

              <SimpleButton href="/checkout?plan=starter-monthly&price=15" className="w-full">
                Start Growing Now
              </SimpleButton>

              <div className="mt-4 bg-[#FFF8E6] p-3 rounded-lg border border-yellow-200">
                <p className="text-center text-sm font-medium text-[#160C29]">
                  New users: Get your first month for just €15 — limited-time offer!
                </p>
              </div>
            </div>

            <div className="bg-gray-50 px-4 sm:px-8 py-3 sm:py-4 border-t border-gray-100">
              <div className="flex justify-center space-x-4 sm:space-x-6">
                <div className="flex items-center">
                  <Shield className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">Secure</span>
                </div>
                <div className="flex items-center">
                  <CreditCard className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">Easy Payments</span>
                </div>
                <div className="flex items-center">
                  <BadgeCheck className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-xs text-gray-500">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-10 px-2 sm:px-6 gradient-bg w-full">
        <div className="w-full mx-auto sm:container sm:max-w-6xl">
          <h2 className="section-title mb-4 sm:mb-6">
            Why <span>Floowery</span>?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
            {/* Benefit 1 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 card-shadow w-full">
              <div className="bg-secondary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Instagram className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-primary">Real Followers</h3>
              <p className="text-sm sm:text-base text-gray-600">
                100% real Instagram users who are genuinely interested in your content.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 card-shadow w-full">
              <div className="bg-secondary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Zap className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-primary">Fast Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Start seeing new followers within 24-48 hours of signing up.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 card-shadow w-full">
              <div className="bg-secondary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Shield className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-primary">Safe & Secure</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Complies with Instagram's terms of service. No risk to your account.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md p-4 sm:p-6 card-shadow w-full">
              <div className="bg-secondary/10 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                <Lock className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-primary">No Password Required</h3>
              <p className="text-sm sm:text-base text-gray-600">
                We never ask for your Instagram password. Your account stays secure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-10 px-2 sm:px-6 bg-white w-full">
        <div className="w-full mx-auto sm:container sm:max-w-6xl">
          {/* Trial Offer */}
          <div className="mb-12 p-6 bg-gradient-to-r from-[#F0FBF8] to-[#E6F7F3] rounded-xl shadow-md">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <div className="inline-block bg-[#59CCB1] text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                  Special Offer
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#160C29] mb-2">Try Floowery for Just €15</h3>
                <p className="text-gray-600 max-w-xl">
                  Start growing your Instagram today with our introductory offer. Get 50-100 real followers in your
                  first month.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-end">
                <div className="flex items-center mb-2">
                  <CreditCard className="h-5 w-5 text-[#59CCB1] mr-2" />
                  <span className="text-sm font-medium text-gray-700">One-time payment</span>
                </div>
                <SimpleButton href="/checkout?plan=trial&price=15" className="min-w-[180px]">
                  Get Started for €15
                </SimpleButton>
              </div>
            </div>
          </div>

          <h2 id="growth-package" className="section-title mb-4 sm:mb-6">
            Choose Your <span>Growth Package</span>
          </h2>

          <p className="section-description mb-4 sm:mb-6 w-full">
            Select the perfect plan for your Instagram growth needs. Save up to 25% with annual billing.
          </p>

          {/* Billing Toggle */}
          <div className="flex justify-center items-center mb-8 sm:mb-12">
            <span className={`mr-3 ${billingPeriod === "monthly" ? "font-semibold text-primary" : "text-gray-600"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingPeriod(billingPeriod === "monthly" ? "yearly" : "monthly")}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200"
              aria-pressed={billingPeriod === "yearly"}
            >
              <span className="sr-only">Toggle billing period</span>
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition ${
                  billingPeriod === "yearly" ? "translate-x-6 bg-primary" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`ml-3 ${billingPeriod === "yearly" ? "font-semibold text-primary" : "text-gray-600"}`}>
              Yearly <span className="text-green-600 text-sm font-medium">Save 25%</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {pricingData[billingPeriod].map((plan, index) => (
              <div
                key={index}
                className={`
                  w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg transition-all duration-300 hover:shadow-xl
                  ${plan.isPopular ? "border-2 border-primary relative md:transform md:scale-105" : "border border-secondary/20"}
                `}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-3 sm:px-4 py-1 text-xs sm:text-sm font-medium rounded-bl-lg">
                    Most Popular
                  </div>
                )}

                <div className="bg-white p-4 sm:p-6 w-full">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 sm:mb-2">{plan.title}</h3>
                  <p className="text-secondary mb-3 sm:mb-4">{plan.followers} followers</p>
                  <div className="mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">${plan.price}</div>
                    <div className="text-xs sm:text-sm text-gray-500">
                      {billingPeriod === "monthly" ? "per month" : "per year"}
                    </div>
                  </div>

                  <ul className="mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-1 sm:mr-2" />
                        <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <SimpleButton
                    href={`/checkout?package=${plan.followers.split("–")[0]}&price=${plan.price}&billing=${billingPeriod}`}
                    className={`
                      w-full text-sm sm:text-base
                      ${
                        plan.isPopular
                          ? "bg-primary hover:bg-secondary text-white"
                          : "bg-white text-primary border border-primary hover:bg-secondary hover:text-white"
                      }
                    `}
                  >
                    Buy Now
                  </SimpleButton>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-10 md:mt-16 w-full mx-auto bg-white rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-3 sm:p-6 md:p-8 hover:shadow-xl transition-shadow border border-gray-100 overflow-hidden">
            <div className="w-full overflow-x-auto px-0 sm:px-2">
              <BenefitsList centered={true} />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-10 px-2 sm:px-6 gradient-bg w-full">
        <div className="w-full mx-auto sm:container sm:max-w-4xl">
          <h2 className="section-title mb-4 sm:mb-6">
            Frequently Asked <span>Questions</span>
          </h2>

          <div className="space-y-3 sm:space-y-4 w-full">
            {/* FAQ Item 1 */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden bg-white card-shadow w-full">
              <button
                className="w-full flex justify-between items-center p-3 sm:p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(0)}
              >
                <span className="font-medium text-primary text-sm sm:text-base">How does Floowery work?</span>
                {expandedFaq === 0 ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                )}
              </button>

              {expandedFaq === 0 && (
                <div className="p-3 sm:p-4 bg-secondary/5 border-t border-secondary/20">
                  <p className="text-sm sm:text-base text-gray-600">
                    Floowery uses advanced targeting algorithms to connect your Instagram account with real users who
                    are interested in your content and niche. We identify potential followers based on their interests,
                    engagement patterns, and activity, then promote your account to them. This results in genuine,
                    interested followers who are more likely to engage with your content.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden bg-white card-shadow w-full">
              <button
                className="w-full flex justify-between items-center p-3 sm:p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(1)}
              >
                <span className="font-medium text-primary text-sm sm:text-base">Are the followers real?</span>
                {expandedFaq === 1 ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                )}
              </button>

              {expandedFaq === 1 && (
                <div className="p-3 sm:p-4 bg-secondary/5 border-t border-secondary/20">
                  <p className="text-sm sm:text-base text-gray-600">
                    Yes, 100%. We never use bots, fake accounts, or engagement pods. All followers gained through our
                    service are real Instagram users with active accounts. We focus on quality over quantity, ensuring
                    that your new followers are genuinely interested in your content.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden bg-white card-shadow w-full">
              <button
                className="w-full flex justify-between items-center p-3 sm:p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(2)}
              >
                <span className="font-medium text-primary text-sm sm:text-base">
                  Do you need my Instagram password?
                </span>
                {expandedFaq === 2 ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                )}
              </button>

              {expandedFaq === 2 && (
                <div className="p-3 sm:p-4 bg-secondary/5 border-t border-secondary/20">
                  <p className="text-sm sm:text-base text-gray-600">
                    Absolutely not. We never ask for or require your Instagram password. Our system works externally by
                    promoting your account to potential followers. Your account security is paramount, and we've
                    designed our service to work without requiring sensitive information.
                  </p>
                </div>
              )}
            </div>

            {/* FAQ Item 4 */}
            <div className="border border-secondary/20 rounded-lg overflow-hidden bg-white card-shadow w-full">
              <button
                className="w-full flex justify-between items-center p-3 sm:p-4 text-left focus:outline-none"
                onClick={() => toggleFaq(3)}
              >
                <span className="font-medium text-primary text-sm:text-base">How quickly will I see results?</span>
                {expandedFaq === 3 ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-secondary" />
                )}
              </button>

              {expandedFaq === 3 && (
                <div className="p-3 sm:p-4 bg-secondary/5 border-t border-secondary/20">
                  <p className="text-sm sm:text-base text-gray-600">
                    Most clients begin seeing new followers within 24-48 hours of starting their campaign. Growth
                    continues steadily throughout the month, with some natural fluctuation day-to-day. Our dashboard
                    allows you to track your progress in real-time.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
