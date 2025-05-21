"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PaymentTypeToggle from "./PaymentTypeToggle"

export default function DirectCheckoutButtons() {
  const [paymentType, setPaymentType] = useState<"one-time" | "monthly" | "yearly">("monthly")

  // Base packages
  const basePackages = [
    {
      id: "basic",
      name: "Basic Growth",
      followers: "500–1,000",
      basePrice: 120,
      color: "bg-[#F0E6FF] hover:bg-[#E6D0FF]",
      textColor: "text-[#160C29]",
      borderColor: "border-[#160C29]",
    },
    {
      id: "standard",
      name: "Standard Growth",
      followers: "1,000–2,000",
      basePrice: 220,
      color: "bg-[#160C29] hover:bg-[#2A1845]",
      textColor: "text-white",
      borderColor: "border-[#2A1845]",
      isPopular: true,
    },
    {
      id: "premium",
      name: "Premium Growth",
      followers: "2,500–5,000",
      basePrice: 320,
      color: "bg-[#F0E6FF] hover:bg-[#E6D0FF]",
      textColor: "text-[#160C29]",
      borderColor: "border-[#160C29]",
    },
  ]

  // Calculate price based on payment type
  const calculatePrice = (basePrice: number, type: string) => {
    switch (type) {
      case "one-time":
        return basePrice
      case "monthly":
        // Monthly price should be about 40% of one-time price
        return Math.round(basePrice * 0.4)
      case "yearly":
        // Yearly price should be monthly price * 10 (2 months free)
        return Math.round(basePrice * 0.4 * 10)
      default:
        return basePrice
    }
  }

  // Get the billing period text
  const getBillingText = () => {
    switch (paymentType) {
      case "monthly":
        return "per month"
      case "yearly":
        return "per year"
      default:
        return "per month"
    }
  }

  // Calculate packages with adjusted prices
  const packages = basePackages.map((pkg) => ({
    ...pkg,
    price: calculatePrice(pkg.basePrice, paymentType),
  }))

  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Choose Your Growth Package</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Select the package that best fits your Instagram growth needs</p>
      </div>

      <PaymentTypeToggle selectedType={paymentType} onChange={setPaymentType} />

      <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {packages.map((pkg) => (
          <Link
            key={pkg.id}
            href={`/checkout?package=${pkg.followers.split("–")[0]}&price=${pkg.price}&type=${paymentType}`}
            className={`
              relative rounded-xl border ${pkg.borderColor} p-6 transition-all duration-300
              ${pkg.color} ${pkg.textColor} hover:shadow-lg
              flex flex-col items-center text-center
            `}
          >
            {pkg.isPopular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#160C29] text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}

            <h3 className="text-xl font-bold mt-4">{pkg.name}</h3>
            <p className={`${pkg.id === "standard" ? "text-white/90" : "text-gray-600"} mb-2`}>
              {pkg.followers} followers
            </p>

            <div className="text-3xl font-bold my-3">${pkg.price}</div>
            <div className={`text-sm ${pkg.id === "standard" ? "text-white/80" : "text-gray-500"}`}>
              {getBillingText()}
            </div>
            {paymentType === "yearly" && (
              <div className={`text-xs mt-1 ${pkg.id === "standard" ? "text-white/90" : "text-green-600"} font-medium`}>
                {pkg.followers} followers monthly
              </div>
            )}

            <div className="flex items-center mt-4">
              <span className="mr-2">Get Started</span>
              <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
