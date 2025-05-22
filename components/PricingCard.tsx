"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PricingCardProps {
  title: string
  followers: string
  price: number | string
  paymentType: "one-time" | "monthly" | "yearly"
  isPopular?: boolean
  features?: string[]
}

export default function PricingCard({
  title,
  followers,
  price,
  paymentType = "one-time",
  isPopular = false,
  features = [],
}: PricingCardProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Get the base price based on followers range
  const getBasePrice = (followers: string) => {
    const firstNumber = followers.split("–")[0].trim()

    switch (firstNumber) {
      case "500":
        return 120
      case "1000":
        return 220
      case "2500":
        return 320
      default:
        return 120
    }
  }

  // Calculate price based on payment type
  const calculatePrice = (basePrice: number, type: string) => {
    switch (type) {
      case "monthly":
        // Monthly price should be about 40% of base price
        return Math.round(basePrice * 0.4)
      case "yearly":
        // Yearly price should be monthly price * 10 (2 months free)
        return Math.round(basePrice * 0.4 * 10)
      default:
        // Default to monthly price
        return Math.round(basePrice * 0.4)
    }
  }

  const basePrice = getBasePrice(followers)
  const finalPrice = calculatePrice(basePrice, paymentType)

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

  // Get the savings text for yearly
  const getSavingsText = () => {
    if (paymentType === "yearly") {
      const monthlyPrice = calculatePrice(basePrice, "monthly")
      const yearlyMonthlyPrice = Math.round(finalPrice / 12)
      const savings = monthlyPrice - yearlyMonthlyPrice
      return `Save $${savings}/mo`
    }
    return null
  }

  const savingsText = getSavingsText()

  const handleBuyNow = () => {
    setIsLoading(true)

    // Navigate to checkout page with package details
    setTimeout(() => {
      router.push(`/checkout?package=${followers.split("–")[0]}&price=${finalPrice}&type=${paymentType}`)
    }, 300)
  }

  return (
    <div
      className={`
      rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl
      ${isPopular ? "border-2 border-[#160C29] relative transform scale-105" : "border border-[#160C29]/20"}
    `}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-[#160C29] text-[#FFFFFF] px-4 py-1 text-sm font-medium rounded-bl-lg">
          Most Popular
        </div>
      )}

      <div className="bg-[#FFFFFF] p-6">
        <h3 className="text-xl font-bold text-[#59CCB1] mb-2">{title}</h3>
        <p className="text-[#59CCB1] mb-4">{followers} followers</p>
        <div className="mb-4">
          <div className="text-3xl font-bold text-[#160C29]">${finalPrice}</div>
          <div className="text-sm text-gray-500 flex items-center">
            <span>{getBillingText()}</span>
            {savingsText && (
              <span className="ml-2 bg-[#E6F7F3] text-[#160C29] px-2 py-0.5 rounded-full text-xs font-medium">
                {savingsText}
              </span>
            )}
          </div>
          {paymentType === "yearly" && (
            <div className="mt-1 text-sm text-green-600 font-medium">
              {followers.split("–")[0]}-{followers.split("–")[1]} followers monthly
            </div>
          )}
        </div>

        <ul className="mb-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check className="h-5 w-5 text-[#160C29] mr-2 flex-shrink-0" />
              <span className="text-[#59CCB1]">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          onClick={handleBuyNow}
          disabled={isLoading}
          className={`
            w-full py-3 px-4 rounded-lg text-center font-medium transition-colors
            ${
              isPopular
                ? "bg-[#160C29] hover:bg-[#59CCB1] text-[#FFFFFF]"
                : "bg-[#FFFFFF] text-[#160C29] border border-[#160C29] hover:bg-[#160C29] hover:text-[#FFFFFF]"
            }
          `}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-4 w-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </div>
          ) : (
            "Buy Now"
          )}
        </Button>
      </div>
    </div>
  )
}
