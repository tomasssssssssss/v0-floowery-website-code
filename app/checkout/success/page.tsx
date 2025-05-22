"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CheckCircle, ArrowRight, Instagram } from "lucide-react"

export default function CheckoutSuccess() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "basic"
  const type = searchParams.get("type") || "monthly"

  const [countdown, setCountdown] = useState(5)

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Start countdown for dashboard redirect
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          // Redirect to dashboard after countdown
          window.location.href = "/dashboard"
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Get plan details
  const getPlanDetails = () => {
    switch (plan) {
      case "trial":
        return {
          name: "Trial Growth",
          followers: "50-100",
          price: "€15",
          period: "one-time",
        }
      case "basic":
        return {
          name: "Basic Growth",
          followers: "500-1,000",
          price: type === "yearly" ? "$1,080" : "$48",
          period: type === "yearly" ? "per year" : "per month",
        }
      case "standard":
        return {
          name: "Standard Growth",
          followers: "1,000-2,000",
          price: type === "yearly" ? "$1,980" : "$88",
          period: type === "yearly" ? "per year" : "per month",
        }
      case "premium":
        return {
          name: "Premium Growth",
          followers: "2,500-5,000",
          price: type === "yearly" ? "$2,880" : "$128",
          period: type === "yearly" ? "per year" : "per month",
        }
      default:
        return {
          name: "Basic Growth",
          followers: "500-1,000",
          price: type === "yearly" ? "$1,080" : "$48",
          period: type === "yearly" ? "per year" : "per month",
        }
    }
  }

  const planDetails = getPlanDetails()

  return (
    <div className="min-h-screen bg-[#F0F0F0]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#59CCB1] rounded-full mb-6">
            <CheckCircle className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-[#160C29]">Payment Successful!</h1>
          <p className="text-[#160C29] text-opacity-70 max-w-2xl mx-auto">
            Thank you for your purchase. Your Instagram growth journey begins now!
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#160C29] border-opacity-10 mb-8">
          <div className="p-6 bg-[#160C29] bg-opacity-5 border-b border-[#160C29]/10">
            <h2 className="text-xl font-semibold text-[#160C29]">Order Summary</h2>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-bold text-lg text-[#160C29]">{planDetails.name}</h3>
                <p className="text-[#160C29] text-opacity-70 flex items-center">
                  <Instagram className="h-4 w-4 mr-1" />
                  {planDetails.followers} followers
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-[#160C29]">{planDetails.price}</div>
                <div className="text-sm text-[#160C29] text-opacity-50">{planDetails.period}</div>
              </div>
            </div>

            <div className="border-t border-[#160C29] border-opacity-10 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-[#160C29]">Order ID:</span>
                <span className="text-[#160C29] text-opacity-70">
                  FLW-
                  {Math.floor(Math.random() * 10000)
                    .toString()
                    .padStart(4, "0")}
                </span>
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-medium text-[#160C29]">Date:</span>
                <span className="text-[#160C29] text-opacity-70">{new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#160C29]">Payment Method:</span>
                <span className="text-[#160C29] text-opacity-70">Credit Card</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-[#160C29] border-opacity-10 mb-8">
          <div className="p-6 bg-[#160C29] bg-opacity-5 border-b border-[#160C29]/10">
            <h2 className="text-xl font-semibold text-[#160C29]">What's Next?</h2>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#59CCB1] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#160C29]">1</span>
                </div>
                <h3 className="font-bold text-[#160C29] mb-2">Account Setup</h3>
                <p className="text-sm text-[#160C29] text-opacity-70">
                  Your account has been created and is being set up right now.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#59CCB1] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#160C29]">2</span>
                </div>
                <h3 className="font-bold text-[#160C29] mb-2">Growth Begins</h3>
                <p className="text-sm text-[#160C29] text-opacity-70">
                  We'll start growing your Instagram followers within 24 hours.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#59CCB1] bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#160C29]">3</span>
                </div>
                <h3 className="font-bold text-[#160C29] mb-2">Track Progress</h3>
                <p className="text-sm text-[#160C29] text-opacity-70">
                  Monitor your growth in real-time through your dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-[#160C29] text-white p-6 rounded-xl inline-block mb-6">
            <p className="font-medium mb-2">You will be redirected to your dashboard in {countdown} seconds</p>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-2 mb-2">
              <div
                className="bg-[#59CCB1] h-2 rounded-full transition-all duration-1000"
                style={{ width: `${(countdown / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="bg-[#160C29] hover:bg-[#160C29]/90 text-white py-3 px-6 rounded-lg flex items-center transition-all"
            >
              Go to Dashboard <ArrowRight className="ml-2 h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="border border-[#160C29] text-[#160C29] hover:bg-[#160C29] hover:text-white py-3 px-6 rounded-lg transition-all"
            >
              Return to Homepage
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
