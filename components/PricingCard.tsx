import type React from "react"
import Link from "next/link"

interface PricingCardProps {
  followers: string
  price: number
  paymentType: string
  isPopular?: boolean
}

const PricingCard: React.FC<PricingCardProps> = ({ followers, price, paymentType, isPopular = false }) => {
  return (
    <div
      className={`
      relative rounded-2xl p-6
      ${isPopular ? "bg-[#F4EFF7]" : "bg-white border border-gray-200"}
    `}
    >
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#160C29] text-white py-1 px-3 rounded-full text-sm font-medium">
          Popular
        </div>
      )}

      <h3 className="text-2xl font-semibold text-center text-[#160C29]">{followers}</h3>
      <p className="text-center text-gray-500 mt-2">Followers</p>

      <div className="text-center mt-6">
        <span className="text-4xl font-bold text-[#160C29]">${price}</span>
        <span className="text-gray-500">/{paymentType}</span>
      </div>

      <ul className="mt-6 space-y-2">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          <span>Dedicated Account Manager</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          <span>24/7 Customer Support</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          <span>Advanced Analytics Dashboard</span>
        </li>
      </ul>

      <div className="mt-8">
        <Link
          href={`/checkout?package=${encodeURIComponent(followers.split("–")[0])}&price=${encodeURIComponent(price.toString())}&type=${encodeURIComponent(paymentType)}`}
          className={`
            block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors
            ${
              isPopular
                ? "bg-[#160C29] hover:bg-[#2A1845] text-white"
                : "bg-white text-[#160C29] border border-[#160C29] hover:bg-[#160C29] hover:text-white"
            }
          `}
        >
          Buy Now
        </Link>
      </div>
    </div>
  )
}

export default PricingCard
