"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Check, ArrowRight, Calendar, Users, Shield } from "lucide-react"

export default function CheckoutSuccess() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan")
  const type = searchParams.get("type")
  const price = searchParams.get("price")

  const [orderDetails, setOrderDetails] = useState({
    planName: "Growth Package",
    followers: "1,000",
    amount: "$220",
    billingType: "monthly",
  })

  useEffect(() => {
    // Set order details based on URL params
    if (plan && type && price) {
      let planName = "Growth Package"
      let followers = "1,000"

      switch (plan) {
        case "trial":
          planName = "Trial Growth"
          followers = "50-100"
          break
        case "basic":
          planName = "Basic Growth"
          followers = "500-1,000"
          break
        case "standard":
          planName = "Standard Growth"
          followers = "1,000-2,000"
          break
        case "premium":
          planName = "Premium Growth"
          followers = "2,500-5,000"
          break
      }

      setOrderDetails({
        planName,
        followers,
        amount: plan === "trial" ? `€${price}` : `$${price}`,
        billingType: type || "monthly",
      })
    }
  }, [plan, type, price])

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-4xl font-bold text-[#160C29] mb-4">Payment Successful!</h1>

          <p className="text-xl text-[#160C29] text-opacity-70 max-w-2xl mx-auto">
            Thank you for your purchase. Your Instagram growth journey starts now!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#160C29] border-opacity-10 mb-8">
          <div className="p-6 bg-[#160C29] text-white">
            <h2 className="text-xl font-semibold">Order Summary</h2>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-[#160C29] mb-4">Package Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-[#160C29] text-opacity-70">Plan:</span>
                    <span className="font-medium text-[#160C29]">{orderDetails.planName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#160C29] text-opacity-70">Followers:</span>
                    <span className="font-medium text-[#160C29]">{orderDetails.followers}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#160C29] text-opacity-70">Billing:</span>
                    <span className="font-medium text-[#160C29]">
                      {orderDetails.billingType === "yearly" ? "Annual" : "Monthly"}
                    </span>
                  </div>
                  <div className="flex justify-between border-t pt-3">
                    <span className="text-[#160C29] font-medium">Total Paid:</span>
                    <span className="font-bold text-[#160C29] text-xl">{orderDetails.amount}</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-medium text-[#160C29] mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#59CCB1] bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <Calendar className="h-4 w-4 text-[#160C29]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#160C29]">Delivery Starts</p>
                      <p className="text-sm text-[#160C29] text-opacity-70">Within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#59CCB1] bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <Users className="h-4 w-4 text-[#160C29]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#160C29]">Gradual Growth</p>
                      <p className="text-sm text-[#160C29] text-opacity-70">Real followers delivered safely</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#59CCB1] bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                      <Shield className="h-4 w-4 text-[#160C29]" />
                    </div>
                    <div>
                      <p className="font-medium text-[#160C29]">30-Day Guarantee</p>
                      <p className="text-sm text-[#160C29] text-opacity-70">Your satisfaction is guaranteed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <Link
            href="/dashboard"
            className="inline-flex items-center bg-[#160C29] hover:bg-[#2A1845] text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <div>
            <Link href="/" className="text-[#160C29] hover:text-[#59CCB1] transition-colors">
              Return to Homepage
            </Link>
          </div>
        </div>

        <div className="mt-12 bg-[#59CCB1] bg-opacity-10 rounded-xl p-6 border border-[#59CCB1]">
          <h3 className="font-bold text-[#160C29] mb-2">Need Help?</h3>
          <p className="text-[#160C29] text-opacity-70 mb-4">
            If you have any questions about your order or need assistance, our support team is here to help.
          </p>
          <Link href="/contact" className="text-[#160C29] font-medium hover:text-[#59CCB1] transition-colors">
            Contact Support →
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
