"use client"

import type React from "react"

import { useState } from "react"
import { Instagram, ArrowLeft } from "lucide-react"
import Image from "next/image"

export default function DashboardContent() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.trim()) {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
        setShowResults(true)
      }, 1500)
    }
  }

  const handleBack = () => {
    setShowResults(false)
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
                alt="Floowery"
                fill
                className="object-contain animate-spin"
              />
            </div>
          </div>
          <h2 className="text-xl font-semibold text-[#160C29] mb-2">Analyzing @{username}</h2>
          <p className="text-gray-600">Please wait...</p>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-md mx-auto pt-20 px-4">
          <div className="flex justify-start mb-8">
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-[#59CCB1] transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back
            </button>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
              <div className="relative w-full h-full">
                <Image src="/images/floowery-spiral-icon.png" alt="Floowery" fill className="object-contain" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
            <h1 className="text-2xl font-bold text-[#160C29] mb-4">Dashboard Coming Soon!</h1>
            <p className="text-[#59CCB1] text-sm mb-6">Thank you @{username}! Our dashboard is under development.</p>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-[#160C29] font-medium mb-3">Contact Us</h3>
              <a
                href="mailto:support@floowery.com"
                className="inline-flex items-center justify-center w-full bg-[#59CCB1] hover:bg-[#4AB89E] text-white py-3 px-4 rounded-xl font-medium transition-colors"
              >
                📧 support@floowery.com
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto pt-20 px-4">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-3 shadow-sm">
            <div className="relative w-full h-full">
              <Image src="/images/floowery-spiral-icon.png" alt="Floowery" fill className="object-contain" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 text-center">
          <h1 className="text-2xl font-bold text-[#160C29] mb-4">Track Your Instagram Growth</h1>
          <p className="text-[#59CCB1] text-sm mb-8">Enter your Instagram username</p>

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
                required
              />
            </div>

            <button
              type="submit"
              disabled={!username.trim()}
              className="w-full bg-[#160C29] hover:bg-[#2A1845] disabled:bg-gray-400 text-white py-4 rounded-xl font-medium transition-colors"
            >
              View Dashboard
            </button>
          </form>

          <div className="bg-gray-50 rounded-xl p-6 text-left">
            <h3 className="text-[#59CCB1] font-medium mb-4">Why track your growth?</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 text-sm">Monitor follower growth</span>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 text-sm">Analyze engagement</span>
              </div>
              <div className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#59CCB1] flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-gray-600 text-sm">Track performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
