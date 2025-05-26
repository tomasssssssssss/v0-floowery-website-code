"use client"

import type React from "react"

import { useState } from "react"
import { Instagram, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function InstagramDashboard() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      setIsLoading(true)
      // Simulate loading for 2 seconds
      setTimeout(() => {
        setIsLoading(false)
        setShowDashboard(true)
      }, 2000)
    }
  }

  const handleBack = () => {
    setShowDashboard(false)
    setUsername("")
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-sm">
            <div className="relative w-10 h-10">
              <Image
                src="/images/floowery-spiral-icon.png"
                alt="Floowery Logo"
                fill
                className="object-contain animate-spin"
                priority
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-[#160C29] mb-2">Analyzing @{username}</h2>
          <p className="text-gray-600">Fetching your Instagram analytics...</p>
        </div>
      </div>
    )
  }

  if (showDashboard) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto pt-20 px-4">
          {/* Back Button */}
          <div className="flex justify-start mb-8">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-[#59CCB1] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Search
            </button>
          </div>

          {/* Logo Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
              <div className="relative w-full h-full">
                <Image
                  src="/images/floowery-spiral-icon.png"
                  alt="Floowery Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold text-[#160C29] mb-4">Dashboard Coming Soon!</h1>

            <p className="text-[#59CCB1] text-sm mb-6">
              Thank you for your interest, @{username}! Our Instagram analytics dashboard is currently under development
              and will be available soon.
            </p>

            {/* Contact Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h3 className="text-[#160C29] font-medium mb-3">Get Notified When Ready</h3>
              <p className="text-gray-600 text-sm mb-4">
                Want to be the first to know when the dashboard launches? Contact us for early access!
              </p>

              <a
                href="mailto:support@floowery.com?subject=Dashboard Early Access Request&body=Hi, I'm interested in early access to the Instagram analytics dashboard for @{username}"
                className="inline-flex items-center justify-center w-full bg-[#59CCB1] hover:bg-[#4AB89E] text-white py-3 px-4 rounded-xl font-medium transition-colors"
              >
                📧 Contact support@floowery.com
              </a>
            </div>

            {/* Features Preview */}
            <div className="text-left">
              <h4 className="text-[#160C29] font-medium mb-3 text-center">What's Coming:</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#59CCB1] rounded-full mr-3"></div>
                  <span className="text-gray-600 text-sm">Real-time follower tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#59CCB1] rounded-full mr-3"></div>
                  <span className="text-gray-600 text-sm">Engagement analytics</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-[#59CCB1] rounded-full mr-3"></div>
                  <span className="text-gray-600 text-sm">Growth insights & trends</span>
                </div>
              </div>
            </div>
          </div>

          {/* Status Badge */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#59CCB1] text-white rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
              In Development
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pt-20 px-4">
        {/* Logo Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
            <div className="relative w-full h-full">
              <Image
                src="/images/floowery-spiral-icon.png"
                alt="Floowery Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <h1 className="text-2xl font-bold text-[#160C29] mb-4">Track Your Instagram Growth</h1>

          <p className="text-[#59CCB1] text-sm mb-8">Enter your Instagram username to view your follower analytics</p>

          {/* Username Input Form */}
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Instagram className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your Instagram Username"
                className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:border-[#59CCB1] focus:outline-none transition-colors text-gray-700"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#160C29] hover:bg-[#2A1845] text-white py-4 rounded-xl font-medium transition-colors"
            >
              View Dashboard
            </button>
          </form>

          {/* Why Track Section */}
          <div className="bg-gray-50 rounded-xl p-6 text-left">
            <h3 className="text-[#59CCB1] font-medium mb-4">Why track your Instagram growth?</h3>

            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 text-sm">Monitor your follower growth in real-time</span>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 text-sm">Analyze engagement patterns and trends</span>
              </div>

              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 text-sm">Identify your most effective content</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
