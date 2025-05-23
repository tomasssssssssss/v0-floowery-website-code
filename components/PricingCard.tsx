"use client"

import type React from "react"

interface PricingCardProps {
  title: string
  price: string
  features: string[]
  isPopular?: boolean
  handleBuyNow: () => void
  isLoading: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  isPopular = false,
  handleBuyNow,
  isLoading,
}) => {
  return (
    <div
      className={`
        relative rounded-2xl shadow-lg overflow-hidden
        ${isPopular ? "bg-[#59CCB1] text-[#FFFFFF]" : "bg-white text-[#160C29]"}
      `}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 w-full h-8 bg-[#160C29] text-white text-center text-sm font-medium">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 text-center">{title}</h3>
        <p className="text-5xl font-bold text-center">{price}</p>
        <ul className="mt-6 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <button
            onClick={handleBuyNow}
            disabled={isLoading}
            className={`
              w-full py-3 px-4 rounded-lg text-center font-medium transition-colors cursor-pointer
              disabled:opacity-50 disabled:cursor-not-allowed
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
          </button>
        </div>
      </div>
    </div>
  )
}

export default PricingCard
