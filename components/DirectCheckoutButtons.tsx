"use client"

import type React from "react"

import { ArrowRight } from "lucide-react"
import { useState } from "react"

interface Package {
  id: string
  name: string
  followers: number
  price: number
  color: string
  textColor: string
  borderColor: string
  isPopular?: boolean
}

interface DirectCheckoutButtonsProps {
  paymentType: "monthly" | "yearly"
  packages: Package[]
  handleCheckout: (pkg: Package) => Promise<void>
  getBillingText: () => string
}

const DirectCheckoutButtons: React.FC<DirectCheckoutButtonsProps> = ({
  paymentType,
  packages,
  handleCheckout,
  getBillingText,
}) => {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {packages.map((pkg) => (
        <button
          key={pkg.id}
          onClick={() => handleCheckout(pkg)}
          disabled={isLoading === pkg.id}
          className={`
            relative rounded-xl border ${pkg.borderColor} p-6 transition-all duration-300
            ${pkg.color} ${pkg.textColor} hover:shadow-lg
            flex flex-col items-center text-center h-auto cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
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
            {isLoading === pkg.id ? (
              <div className="flex items-center">
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
              <>
                <span className="mr-2">Get Started</span>
                <ArrowRight size={16} />
              </>
            )}
          </div>
        </button>
      ))}
    </div>
  )
}

export default DirectCheckoutButtons
