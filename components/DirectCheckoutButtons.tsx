"use client"

import { useRouter } from "next/navigation"
import { ArrowRight } from "lucide-react"

export default function DirectCheckoutButtons() {
  const router = useRouter()

  const handleBasicPlan = () => {
    router.push("/checkout?package=500&price=120&type=monthly")
  }

  const handleGrowthPlan = () => {
    router.push("/checkout?package=1000&price=220&type=monthly")
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={handleBasicPlan}
        className="bg-[#160C29] hover:bg-[#2A1845] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
      >
        Start Basic Plan
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
      <button
        onClick={handleGrowthPlan}
        className="bg-[#59CCB1] hover:bg-[#4AB89E] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
      >
        Start Growth Plan
        <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </div>
  )
}
