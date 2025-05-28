"use client"

import { useState, useEffect } from "react"
import { Instagram, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function DashboardPage() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Ensure page starts at top
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (username.trim()) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setShowResults(true)
      }, 2000)
    }
  }

  const handleBack = () => {
    setShowResults(false)
    setUsername("")
    setIsLoading(false)
  }

  // Prevent hydration issues
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl animate-pulse">
            <div className="w-12 h-12 bg-[#59CCB1]/20 rounded-full"></div>
          </div>
          <p className="text-[#59CCB1]">Loading...</p>
        </div>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl animate-pulse">
            <div className="relative w-12 h-12">
              <Image
                src="/images/floowery-spiral-icon.png"
                alt="Floowery"
                fill
                className="object-contain animate-spin"
                style={{ animationDuration: "2s" }}
                priority
                unoptimized
              />
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-[#160C29] mb-3">Analyzing @{username}</h2>
          <p className="text-[#59CCB1] mb-4">Fetching your Instagram data...</p>
          <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
            <div className="bg-[#59CCB1] h-2 rounded-full animate-pulse" style={{ width: "60%" }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <div className="flex justify-start mb-8">
            <button
              onClick={handleBack}
              className="flex items-center text-[#59CCB1] hover:text-[#4AB89E] transition-all duration-200 hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Search
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[#59CCB1]/10 to-[#59CCB1]/20 rounded-full flex items-center justify-center p-4 shadow-lg">
                <div className="relative w-full h-full">
                  <Image
                    src="/images/floowery-spiral-icon.png"
                    alt="Floowery"
                    fill
                    className="object-contain"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#160C29] mb-4">Dashboard Coming Soon! 🚀</h1>
              <p className="text-xl text-[#59CCB1] mb-2">Thanks for your interest, @{username}!</p>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We're working hard to bring you the most comprehensive Instagram analytics dashboard.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#160C29] mb-6">What's Coming:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                  "📊 Real-time follower analytics",
                  "📈 Growth trend predictions",
                  "🌍 Geographic audience insights",
                  "💡 Personalized growth tips",
                  "📱 Mobile-optimized interface",
                  "🔔 Growth milestone notifications",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-[#160C29]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <p className="text-gray-600 mb-4">Questions? We'd love to hear from you!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:support@floowery.com"
                  className="inline-flex items-center justify-center bg-white border border-[#59CCB1] text-[#59CCB1] px-6 py-3 rounded-xl font-medium hover:bg-[#59CCB1] hover:text-white transition-all duration-200"
                >
                  📧 support@floowery.com
                </a>
                <a
                  href="/pricing"
                  className="inline-flex items-center justify-center bg-[#59CCB1] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#4AB89E] transition-all duration-200"
                >
                  View Growth Plans
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white">
      <div className="max-w-md mx-auto pt-20 px-4">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="relative w-full h-full">
              <Image
                src="/images/floowery-spiral-icon.png"
                alt="Floowery"
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-[#160C29] mb-4">Instagram Analytics Dashboard</h1>
          <p className="text-[#59CCB1] text-lg mb-8">
            Get detailed insights about your Instagram growth and performance
          </p>

          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Instagram className="w-6 h-6 text-[#59CCB1]" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Instagram username"
                className="w-full pl-14 pr-4 py-4 border-2 border-[#59CCB1]/20 rounded-xl focus:border-[#59CCB1] focus:outline-none transition-colors text-[#160C29] text-lg"
                required
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>

            <button
              type="submit"
              disabled={!username.trim()}
              className={`w-full py-4 rounded-xl font-medium transition-all text-lg ${
                username.trim()
                  ? "bg-gradient-to-r from-[#160C29] to-[#59CCB1] hover:from-[#2A1845] hover:to-[#4AB89E] text-white hover:scale-105 hover:shadow-lg active:scale-95"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Analyze My Account
            </button>
          </form>

          <div className="bg-gradient-to-br from-[#59CCB1]/5 to-[#59CCB1]/10 rounded-xl p-6 text-left">
            <h3 className="text-[#160C29] font-bold mb-4 text-lg">What you'll get:</h3>
            <div className="space-y-3">
              {[
                "Detailed follower growth analytics",
                "Engagement rate analysis",
                "Geographic follower breakdown",
                "Growth trend predictions",
                "Personalized growth recommendations",
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-[#160C29] font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
