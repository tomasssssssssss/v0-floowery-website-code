"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function DirectCheckoutButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
        href="/checkout?package=500&price=120&type=monthly"
        className="bg-[#160C29] hover:bg-[#2A1845] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
      >
        Start Basic Plan
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
      <Link
        href="/checkout?package=1000&price=220&type=monthly"
        className="bg-[#59CCB1] hover:bg-[#4AB89E] text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
      >
        Start Growth Plan
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}
