"use client"

import { useState, useEffect } from "react"

export default function DashboardPage() {
  const [username, setUsername] = useState("")
  const [currentView, setCurrentView] = useState("input")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4"></div>
          <p className="text-green-600">Loading...</p>
        </div>
      </div>
    )
  }

  const handleAnalyze = () => {
    if (username && username.length > 0) {
      setCurrentView("loading")
      setTimeout(() => {
        setCurrentView("results")
      }, 2000)
    }
  }

  const handleBack = () => {
    setCurrentView("input")
    setUsername("")
  }

  if (currentView === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
            <div className="w-12 h-12 bg-green-500 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-3">Analyzing @{username}</h2>
          <p className="text-green-600 mb-4">Fetching your Instagram data...</p>
          <div className="w-64 bg-gray-200 rounded-full h-2 mx-auto">
            <div className="bg-green-500 h-2 rounded-full w-3/4"></div>
          </div>
        </div>
      </div>
    )
  }

  if (currentView === "results") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-2xl mx-auto px-4 py-12">
          <button
            onClick={handleBack}
            className="flex items-center text-green-600 hover:text-green-700 mb-8 font-medium"
          >
            ← Back to Search
          </button>

          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-full"></div>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">Dashboard Coming Soon! 🚀</h1>
            <p className="text-xl text-green-600 mb-2">Thanks for your interest, @{username}!</p>
            <p className="text-gray-600 mb-8">We're building the most comprehensive Instagram analytics dashboard.</p>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6">What's Coming:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="p-3 bg-gray-50 rounded-lg">📊 Real-time follower analytics</div>
                <div className="p-3 bg-gray-50 rounded-lg">📈 Growth trend predictions</div>
                <div className="p-3 bg-gray-50 rounded-lg">🌍 Geographic audience insights</div>
                <div className="p-3 bg-gray-50 rounded-lg">💡 Personalized growth tips</div>
                <div className="p-3 bg-gray-50 rounded-lg">📱 Mobile-optimized interface</div>
                <div className="p-3 bg-gray-50 rounded-lg">🔔 Growth milestone notifications</div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-gray-600 mb-6">Questions? We'd love to hear from you!</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:support@floowery.com"
                  className="bg-white border border-green-500 text-green-600 px-6 py-3 rounded-xl font-medium hover:bg-green-50"
                >
                  📧 support@floowery.com
                </a>
                <a
                  href="/pricing"
                  className="bg-green-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-green-600"
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-md mx-auto pt-20 px-4">
        <div className="flex justify-center mb-8">
          <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-2xl">
            <div className="w-20 h-20 bg-green-500 rounded-full"></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Instagram Analytics Dashboard</h1>
          <p className="text-green-600 text-lg mb-8">
            Get detailed insights about your Instagram growth and performance
          </p>

          <div className="mb-8">
            <div className="relative mb-6">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Instagram username"
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none text-gray-800 text-lg"
              />
            </div>

            <button
              onClick={handleAnalyze}
              disabled={!username}
              className={`w-full py-4 rounded-xl font-medium text-lg ${
                username
                  ? "bg-green-500 hover:bg-green-600 text-white cursor-pointer"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Analyze My Account
            </button>
          </div>

          <div className="bg-green-50 rounded-xl p-6 text-left">
            <h3 className="text-gray-800 font-bold mb-4 text-lg">What you'll get:</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3 mt-0.5"></div>
                <span className="text-gray-800 font-medium">Detailed follower growth analytics</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3 mt-0.5"></div>
                <span className="text-gray-800 font-medium">Engagement rate analysis</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3 mt-0.5"></div>
                <span className="text-gray-800 font-medium">Geographic follower breakdown</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3 mt-0.5"></div>
                <span className="text-gray-800 font-medium">Growth trend predictions</span>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3 mt-0.5"></div>
                <span className="text-gray-800 font-medium">Personalized growth recommendations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
