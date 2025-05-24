"use client"

import { ArrowRight } from "lucide-react"

export default function DirectCheckoutButtons() {
  const handleBasicPlan = () => {
    // Use window.location for guaranteed navigation
    window.location.href = "/checkout?package=500&price=120&type=monthly"
  }

  const handleGrowthPlan = () => {
    // Use window.location for guaranteed navigation
    window.location.href = "/checkout?package=1000&price=220&type=monthly"
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        type="button"
        onClick={handleBasicPlan}
        className="bg-[#160C29] hover:bg-[#2A1845] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        Start Basic Plan
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={handleGrowthPlan}
        className="bg-[#59CCB1] hover:bg-[#4AB89E] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center cursor-pointer"
        style={{ cursor: "pointer" }}
      >
        Start Growth Plan
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  )
}
