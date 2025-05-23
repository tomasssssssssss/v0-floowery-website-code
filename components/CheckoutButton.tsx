"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

interface CheckoutButtonProps {
  package: string
  price: number
  paymentType: "monthly" | "yearly"
  name: string
  className?: string
  children?: React.ReactNode
}

export default function CheckoutButton({
  package: packageName,
  price,
  paymentType,
  name,
  className = "",
  children,
}: CheckoutButtonProps) {
  const [isLoading, setIsLoading] = useState(false)

  const handleCheckout = () => {
    setIsLoading(true)

    // Create checkout URL with subdomain
    const checkoutUrl = `https://checkout.floowery.com?package=${encodeURIComponent(packageName)}&price=${price}&type=${paymentType}&name=${encodeURIComponent(name)}`

    // Navigate to checkout subdomain
    window.location.href = checkoutUrl
  }

  const checkoutUrl = `https://checkout.floowery.com?package=${encodeURIComponent(packageName)}&price=${price}&type=${paymentType}&name=${encodeURIComponent(name)}`

  return (
    <a
      href={checkoutUrl}
      onClick={(e) => {
        e.preventDefault()
        handleCheckout()
      }}
      className={`
        inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300
        bg-[#160C29] hover:bg-[#59CCB1] text-white no-underline cursor-pointer
        ${isLoading ? "pointer-events-none opacity-50" : ""}
        ${className}
      `}
    >
      {isLoading ? (
        <div className="flex items-center">
          <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
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
          {children || "Get Started"}
          <ArrowRight size={16} className="ml-2" />
        </>
      )}
    </a>
  )
}
