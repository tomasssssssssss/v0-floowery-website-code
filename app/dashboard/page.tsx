"use client"

import { useState, useEffect } from "react"

export default function DashboardPage() {
  const [username, setUsername] = useState("")
  const [currentView, setCurrentView] = useState("input")
  const [isClient, setIsClient] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleAnalyze = () => {
    const trimmed = username.trim()
    if (!trimmed) return
    setCurrentView("loading")
    setTimeout(() => {
      setCurrentView("results")
    }, 2000)
  }

  const handleBack = () => {
    setCurrentView("input")
    setUsername("")
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      const trimmed = username.trim()
      if (trimmed) {
        handleAnalyze()
      }
    }
  }

  const LogoFallback = ({ size = "w-16 h-16", animate = false }) => (
    <div
      className={`${size} bg-[#59CCB1] rounded-full flex items-center justify-center ${animate ? "animate-spin" : ""}`}
      style={animate ? { animationDuration: "2s" } : {}}
    >
      <div className="w-1/2 h-1/2 bg-white rounded-full"></div>
    </div>
  )

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl animate-pulse">
            <div className="w-12 h-12 bg-[#59CCB1]/20 rounded-full"></div>
          </div>
          <p className="text-[#59CCB1] font-medium">Loading Dashboard...</p>
        </div>
      </div>
    )
  }

  if (currentView === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
            <LogoFallback size="w-12 h-12" animate={true} />
          </div>
          <h2 className="text-2xl font-semibold text-[#160C29] mb-3">Analyzing @{username}</h2>
          <p className="text-[#59CCB1] mb-6">Fetching your Instagram data...</p>
          <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
            <div
              className="bg-gradient-to-r from-[#59CCB1] to-[#4AB89E] h-2 rounded-full transition-all duration-1000"
              style={{ width: "75%" }}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-4">This may take a few moments...</p>
        </div>
      </div>
    )
  }

  if (currentView === "results") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white">
        <div className="max-w-2xl mx-auto px-4 py-8 md:py-12">
          <div className="flex justify-start mb-8">
            <button
              onClick={handleBack}
              type="button"
              className="flex items-center text-[#59CCB1] hover:text-[#4AB89E] transition-all duration-200 hover:scale-105 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Search
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-12 text-center">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-[#59CCB1]/10 to-[#59CCB1]/20 rounded-full flex items-center justify-center p-4 shadow-lg">
                <LogoFallback size="w-16 h-16" animate={true} />
              </div>
            </div>

            <div className="mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-[#160C29] mb-4">Dashboard Coming Soon! 🚀</h1>
              <p className="text-xl text-[#59CCB1] mb-2">Thanks for your interest, @{username}!</p>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                We're working hard to bring you the most comprehensive Instagram analytics dashboard.
              </p>
            </div>

            <div className="mb-12">
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

            <div className="pt-8 border-t border-gray-100">
              <p className="text-gray-600 mb-6">Questions? We'd love to hear from you!</p>
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
      <div className="max-w-md mx-auto pt-16 md:pt-20 px-4">
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 rounded-full flex items-center justify-center p-4 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 bg-white">
            <div className="relative w-full h-full">
              <div className="w-16 h-16 bg-[#59CCB1] rounded-full mx-auto"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#59CCB1]/10 to-transparent rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#160C29] mb-4">Instagram Analytics Dashboard</h1>
          <p className="text-[#59CCB1] text-lg mb-8">
            Get detailed insights about your Instagram growth and performance
          </p>

          <div className="mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="w-6 h-6 text-[#59CCB1]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Enter your Instagram username"
                className="w-full pl-14 pr-4 py-4 border-2 border-[#59CCB1]/20 rounded-xl focus:border-[#59CCB1] focus:outline-none transition-colors text-[#160C29] text-lg"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!username.trim()}
              type="button"
              className={`w-full py-4 rounded-xl font-medium transition-all text-lg ${
                username.trim()
                  ? "bg-gradient-to-r from-[#160C29] to-[#59CCB1] hover:from-[#2A1845] hover:to-[#4AB89E] text-white hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Analyze My Account
            </button>
          </div>

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
                  <div className="w-6 h-6 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
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
