"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Check, X, Star, Zap, Shield, Clock, Users, Award, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function PricingPage() {
  const [paymentType, setPaymentType] = useState<"monthly" | "yearly">("monthly")

  const plans = [
    {
      id: "trial",
      name: "Trial Growth",
      subtitle: "Perfect for testing our service",
      followers: "50-100",
      monthlyPrice: 15,
      yearlyPrice: 150,
      originalPrice: 25,
      popular: false,
      trial: true,
      features: [
        "50-100 real followers",
        "Basic analytics dashboard",
        "Email support",
        "No commitment",
        "Cancel anytime",
      ],
      notIncluded: ["Priority support", "Advanced targeting", "Content strategy", "Engagement boost"],
    },
    {
      id: "basic",
      name: "Basic Growth",
      subtitle: "Great for personal accounts",
      followers: "500-1,000",
      monthlyPrice: 120,
      yearlyPrice: 1080,
      originalPrice: 150,
      popular: false,
      trial: false,
      features: [
        "500-1,000 real followers",
        "Gradual delivery (safe)",
        "30-day money-back guarantee",
        "24/7 customer support",
        "Analytics dashboard",
        "Account safety guaranteed",
      ],
      notIncluded: ["Priority delivery", "Advanced targeting", "Content strategy", "Engagement boost"],
    },
    {
      id: "standard",
      name: "Standard Growth",
      subtitle: "Most popular choice",
      followers: "1,000-2,000",
      monthlyPrice: 220,
      yearlyPrice: 1980,
      originalPrice: 280,
      popular: true,
      trial: false,
      features: [
        "1,000-2,000 real followers",
        "Gradual delivery (safe)",
        "30-day money-back guarantee",
        "Priority 24/7 support",
        "Advanced analytics dashboard",
        "Priority delivery",
        "Basic engagement boost",
        "Account safety guaranteed",
      ],
      notIncluded: ["Advanced content strategy", "Premium targeting"],
    },
    {
      id: "premium",
      name: "Premium Growth",
      subtitle: "For serious influencers",
      followers: "2,500-5,000",
      monthlyPrice: 320,
      yearlyPrice: 2880,
      originalPrice: 400,
      popular: false,
      trial: false,
      features: [
        "2,500-5,000 real followers",
        "Gradual delivery (safe)",
        "30-day money-back guarantee",
        "VIP priority support",
        "Advanced analytics dashboard",
        "Priority delivery",
        "Advanced engagement boost",
        "Content strategy consultation",
        "Advanced targeting options",
        "Account safety guaranteed",
        "Dedicated account manager",
      ],
      notIncluded: [],
    },
  ]

  const getPrice = (plan: (typeof plans)[0]) => {
    return paymentType === "monthly" ? plan.monthlyPrice : plan.yearlyPrice
  }

  const getOriginalPrice = (plan: (typeof plans)[0]) => {
    return paymentType === "monthly" ? plan.originalPrice : plan.originalPrice * 12
  }

  const getSavings = (plan: (typeof plans)[0]) => {
    if (paymentType === "yearly") {
      const monthlyCost = plan.monthlyPrice * 12
      const yearlyCost = plan.yearlyPrice
      return monthlyCost - yearlyCost
    }
    return plan.originalPrice - plan.monthlyPrice
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0F0F0] to-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#59CCB1] bg-opacity-10 text-[#160C29] px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <Star className="h-4 w-4 mr-2 text-[#59CCB1]" />
            Trusted by 10,000+ Instagram users
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#160C29] leading-tight animate-fade-in">
            Simple, Transparent
            <span className="text-[#59CCB1] block bg-gradient-to-r from-[#59CCB1] to-[#160C29] bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-[#160C29] text-opacity-70 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            Choose the perfect plan to grow your Instagram following with real, engaged users. No bots, no fake
            accounts, just authentic growth.
          </p>
        </div>

        {/* Payment Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-[#160C29] border-opacity-10 animate-scale-in">
            <div className="flex">
              <button
                onClick={() => setPaymentType("monthly")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
                  paymentType === "monthly"
                    ? "bg-[#160C29] text-white shadow-md transform scale-105"
                    : "text-[#160C29] hover:bg-[#160C29] hover:bg-opacity-5"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setPaymentType("yearly")}
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 relative ${
                  paymentType === "yearly"
                    ? "bg-[#160C29] text-white shadow-md transform scale-105"
                    : "text-[#160C29] hover:bg-[#160C29] hover:bg-opacity-5"
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-[#59CCB1] text-white text-xs px-2 py-1 rounded-full animate-bounce">
                  Save 25%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 animate-slide-up ${
                plan.popular ? "ring-4 ring-[#59CCB1] ring-opacity-50 transform scale-105" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#59CCB1] to-[#160C29] text-white text-center py-3 font-medium">
                  <Star className="inline h-4 w-4 mr-1 animate-spin" />
                  Most Popular
                </div>
              )}

              {plan.trial && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#160C29] to-[#59CCB1] text-white text-center py-3 font-medium">
                  <Zap className="inline h-4 w-4 mr-1 animate-pulse" />
                  Limited Time Offer
                </div>
              )}

              <div className={`p-8 ${plan.popular || plan.trial ? "pt-16" : ""}`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-[#160C29] mb-2">{plan.name}</h3>
                  <p className="text-[#160C29] text-opacity-60 mb-4">{plan.subtitle}</p>

                  <div className="mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-4xl font-bold text-[#160C29] animate-pulse">${getPrice(plan)}</span>
                      {!plan.trial && (
                        <span className="text-[#160C29] text-opacity-50 ml-2">
                          /{paymentType === "monthly" ? "mo" : "yr"}
                        </span>
                      )}
                    </div>

                    {getSavings(plan) > 0 && (
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-[#160C29] text-opacity-40 line-through text-sm">
                          ${getOriginalPrice(plan)}
                        </span>
                        <span className="bg-[#59CCB1] text-white text-xs px-2 py-1 rounded-full animate-pulse">
                          Save ${getSavings(plan)}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="text-[#59CCB1] font-medium mb-6 bg-[#59CCB1] bg-opacity-10 rounded-lg py-2 px-4">
                    {plan.followers} followers {paymentType === "yearly" ? "monthly" : ""}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start animate-fade-in"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <Check className="h-5 w-5 text-[#59CCB1] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#160C29] text-sm">{feature}</span>
                    </div>
                  ))}

                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start opacity-40">
                      <X className="h-5 w-5 text-[#160C29] text-opacity-40 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-[#160C29] text-opacity-40 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/checkout?package=${plan.followers.split("-")[0]}&price=${getPrice(plan)}&type=${paymentType}${plan.trial ? "&trial=true" : ""}`}
                  className={`block w-full py-4 px-6 rounded-2xl text-center font-medium transition-all duration-300 group ${
                    plan.popular
                      ? "bg-gradient-to-r from-[#59CCB1] to-[#160C29] text-white hover:shadow-lg hover:scale-105 hover:from-[#160C29] hover:to-[#59CCB1]"
                      : plan.trial
                        ? "bg-[#160C29] text-white hover:bg-opacity-90 hover:shadow-lg hover:scale-105"
                        : "bg-[#160C29] bg-opacity-5 text-[#160C29] border-2 border-[#160C29] border-opacity-20 hover:bg-[#160C29] hover:text-white hover:scale-105"
                  }`}
                >
                  {plan.trial ? "Start Trial" : "Get Started"}
                  <ArrowRight className="inline h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            {
              icon: Shield,
              title: "100% Safe",
              description: "We never ask for your password. Your account stays secure.",
            },
            {
              icon: Users,
              title: "Real Followers",
              description: "All followers are real people, not bots or fake accounts.",
            },
            {
              icon: Clock,
              title: "Gradual Delivery",
              description: "Followers are delivered gradually to maintain account safety.",
            },
            {
              icon: Award,
              title: "Money-Back Guarantee",
              description: "30-day money-back guarantee if you're not satisfied.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-16 h-16 bg-[#59CCB1] bg-opacity-10 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:bg-[#59CCB1] hover:bg-opacity-20 transition-colors">
                <item.icon className="h-8 w-8 text-[#59CCB1]" />
              </div>
              <h3 className="font-bold text-[#160C29] mb-2">{item.title}</h3>
              <p className="text-[#160C29] text-opacity-70 text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 animate-slide-up">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#160C29]">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How quickly will I see results?",
                answer:
                  "You'll start seeing new followers within 24-48 hours. Growth is delivered gradually to maintain account safety and authenticity.",
              },
              {
                question: "Are these real followers?",
                answer:
                  "Yes, all followers are real Instagram users. We never use bots or fake accounts, which ensures your account remains safe and engagement rates stay high.",
              },
              {
                question: "Can I cancel my subscription?",
                answer:
                  "Yes, you can cancel your subscription at any time. For monthly and yearly plans, you'll continue to receive service until the end of your current billing period.",
              },
              {
                question: "What's the difference between payment types?",
                answer:
                  "Monthly subscriptions offer continuous growth each month. Yearly subscriptions provide the same monthly follower growth with 3 months free, making it our best value option.",
              },
              {
                question: "Do you need my Instagram password?",
                answer:
                  "No, we never ask for your password. We only need your Instagram username to deliver followers to your account safely.",
              },
              {
                question: "What if I'm not satisfied?",
                answer:
                  "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us for a full refund.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#F0F0F0] rounded-2xl hover:bg-[#59CCB1] hover:bg-opacity-10 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="font-bold text-[#160C29] mb-3">{faq.question}</h3>
                <p className="text-[#160C29] text-opacity-70">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-[#160C29] to-[#59CCB1] rounded-3xl p-12 text-center text-white animate-scale-in">
          <h2 className="text-4xl font-bold mb-4 animate-pulse">Ready to Grow Your Instagram?</h2>
          <p className="text-xl text-white text-opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have boosted their Instagram presence with Floowery
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/checkout?package=50&price=15&type=monthly&trial=true"
              className="bg-white text-[#160C29] px-8 py-4 rounded-2xl font-medium hover:bg-opacity-90 transition-all inline-flex items-center justify-center hover:scale-105 group"
            >
              Start Free Trial
              <Zap className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </Link>
            <Link
              href="/checkout?package=1000&price=220&type=monthly"
              className="bg-[#59CCB1] text-white px-8 py-4 rounded-2xl font-medium hover:bg-opacity-90 transition-all inline-flex items-center justify-center hover:scale-105 group"
            >
              Choose Standard Plan
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
