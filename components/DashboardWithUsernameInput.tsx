"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import FlooweryDashboard from "@/components/FlooweryDashboard"

export default function DashboardWithUsernameInput() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [showDashboard, setShowDashboard] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!username.trim()) return

    setIsLoading(true)
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false)
      setShowDashboard(true)
    }, 1500)
  }

  if (showDashboard) {
    return <FlooweryDashboard username={username} />
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-2xl">
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="text-center">
          <div className="mx-auto mb-6">
            <div className="relative h-24 w-24 mx-auto">
              <Image src="/images/floowery-logo-icon-light-bg.png" alt="Floowery" fill className="object-contain" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-[#59CCB1]">Track Your Instagram Growth</CardTitle>
          <CardDescription className="text-gray-600">
            Enter your Instagram username to view your follower analytics
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Instagram className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Your Instagram Username"
                className="pl-10 pr-4 py-3 w-full rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#160C29] focus:border-transparent"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#160C29] hover:bg-[#2A1845] text-white py-3 rounded-lg transition-colors"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Loading...
                </>
              ) : (
                "View Dashboard"
              )}
            </Button>
          </form>

          <div className="mt-8 bg-[#F0FBF8] p-4 rounded-lg">
            <h3 className="font-medium text-[#59CCB1] mb-2">Why track your Instagram growth?</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#160C29] mr-2 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Monitor your follower growth in real-time</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#160C29] mr-2 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Analyze engagement patterns and trends</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#160C29] mr-2 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Identify your most effective content strategies</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
