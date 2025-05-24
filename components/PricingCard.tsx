"use client"

import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  followers: string
  price: number
  paymentType: "one-time" | "monthly" | "yearly"
  features: string[]
  isPopular?: boolean
}

export default function PricingCard({
  title,
  followers,
  price,
  paymentType,
  features,
  isPopular = false,
}: PricingCardProps) {
  const getBillingText = () => {
    switch (paymentType) {
      case "one-time":
        return "one-time"
      case "monthly":
        return "per month"
      case "yearly":
        return "per year"
      default:
        return "per month"
    }
  }

  const handleBuyNow = () => {
    try {
      const packageValue = followers.split("–")[0]
      const url = `/checkout?package=${packageValue}&price=${price}&type=${paymentType}`
      console.log("Navigating to:", url) // Debug log

      // Use window.location for guaranteed navigation
      window.location.href = url
    } catch (error) {
      console.error("Navigation error:", error)
      // Fallback navigation
      window.location.href = "/checkout"
    }
  }

  return (
    <div
      className={`
      relative rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl
      ${isPopular ? "border-2 border-[#160C29] transform scale-105" : "border border-gray-200"}
    `}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#160C29] text-white px-4 py-1 text-sm font-medium rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="bg-white p-6">
        <h3 className="text-xl font-bold text-[#160C29] mb-2">{title}</h3>
        <p className="text-[#59CCB1] mb-4">{followers} followers</p>

        <div className="mb-6">
          <div className="text-3xl font-bold text-[#160C29]">${price}</div>
          <div className="text-sm text-gray-500">{getBillingText()}</div>
        </div>

        <ul className="mb-6 space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <Check className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={handleBuyNow}
          className={`
            block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors cursor-pointer
            ${
              isPopular
                ? "bg-[#160C29] hover:bg-[#2A1845] text-white"
                : "bg-white text-[#160C29] border border-[#160C29] hover:bg-[#160C29] hover:text-white"
            }
          `}
          style={{ cursor: "pointer" }}
        >
          Buy Now
        </button>
      </div>
    </div>
  )
}
