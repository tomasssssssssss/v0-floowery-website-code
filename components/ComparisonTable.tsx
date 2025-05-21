"use client"

import { Check, X } from "lucide-react"
import Image from "next/image"

export default function ComparisonTable() {
  const features = [
    { name: "Audience Targeting", floowery: true, others: true },
    { name: "Real USA Followers", floowery: true, others: false },
    { name: "Money-Back Guarantee", floowery: true, others: false },
    { name: "Unique Marketing Methods", floowery: true, others: false },
    { name: "No Login Required", floowery: true, others: false },
  ]

  return (
    <section className="py-16 px-6 bg-[#59CCB1] text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-[#2E2A8F] py-2 px-4 inline-block mx-auto">
          Why Choose Floowery?
        </h2>

        <div className="relative overflow-hidden rounded-xl shadow-2xl">
          {/* Header Row */}
          <div className="grid grid-cols-3 text-center border-b border-gray-700">
            <div className="p-6 bg-[#1A1333]"></div>
            <div className="p-6 bg-[#1F1A38] flex flex-col items-center justify-center">
              <div className="mb-2 relative w-14 h-14">
                <Image src="/images/floowery-spiral-logo.png" alt="Floowery" fill className="object-contain" />
              </div>
              <span className="font-bold">Floowery</span>
            </div>
            <div className="p-6 bg-[#1A1333] flex flex-col items-center justify-center">
              <span className="font-bold">Others</span>
            </div>
          </div>

          {/* Feature Rows */}
          {features.map((feature, index) => (
            <div key={index} className="grid grid-cols-3 text-center border-b border-gray-700 last:border-b-0">
              <div className="p-6 bg-[#1A1333] flex items-center justify-start">
                <span className="font-medium text-left">{feature.name}</span>
              </div>
              <div className="p-6 bg-[#1F1A38] flex items-center justify-center">
                {feature.floowery ? (
                  <div className="bg-[#160C29]/20 p-2 rounded-full">
                    <Check className="h-6 w-6 text-[#160C29]" />
                  </div>
                ) : (
                  <div className="bg-red-500/20 p-2 rounded-full">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                )}
              </div>
              <div className="p-6 bg-[#1A1333] flex items-center justify-center">
                {feature.others ? (
                  <div className="bg-[#160C29]/20 p-2 rounded-full">
                    <Check className="h-6 w-6 text-[#160C29]" />
                  </div>
                ) : (
                  <div className="bg-red-500/20 p-2 rounded-full">
                    <X className="h-6 w-6 text-red-500" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
