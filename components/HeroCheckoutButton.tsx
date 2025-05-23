"use client"

import CheckoutButton from "./CheckoutButton"

export default function HeroCheckoutButton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <CheckoutButton
        package="1000"
        price={88}
        paymentType="monthly"
        name="Standard Growth"
        className="text-lg px-8 py-4"
      >
        Start Growing Now
      </CheckoutButton>

      <CheckoutButton
        package="500"
        price={48}
        paymentType="monthly"
        name="Basic Growth"
        className="text-lg px-8 py-4 bg-transparent border-2 border-[#160C29] text-[#160C29] hover:bg-[#160C29] hover:text-white"
      >
        Try Basic Plan
      </CheckoutButton>
    </div>
  )
}
