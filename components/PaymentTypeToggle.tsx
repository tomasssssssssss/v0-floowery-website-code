"use client"

import React from "react"

interface PaymentTypeToggleProps {
  selectedType: "one-time" | "monthly" | "yearly"
  onChange: (type: "one-time" | "monthly" | "yearly") => void
}

export default function PaymentTypeToggle({ selectedType, onChange }: PaymentTypeToggleProps) {
  // If one-time is selected, change to monthly
  React.useEffect(() => {
    if (selectedType === "one-time") {
      onChange("monthly")
    }
  }, [selectedType, onChange])

  return (
    <div className="flex flex-col items-center mb-8">
      <div className="text-center mb-4">
        <h3 className="text-lg font-medium">Choose Payment Type</h3>
        <p className="text-sm text-gray-500">Select the payment option that works best for you</p>
      </div>

      <div className="inline-flex p-1 bg-gray-100 rounded-lg">
        <button
          onClick={() => onChange("monthly")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
            selectedType === "monthly" ? "bg-white text-[#160C29] shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => onChange("yearly")}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative ${
            selectedType === "yearly" ? "bg-white text-[#160C29] shadow-sm" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          Yearly
          <span className="absolute -top-2 -right-2 bg-[#160C29] text-white text-xs px-1.5 py-0.5 rounded-full">
            Save 25%
          </span>
        </button>
      </div>
    </div>
  )
}
