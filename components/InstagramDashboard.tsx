"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import UsernameInputSection from "./UsernameInputSection"
import Link from "next/link"
import { BarChart3, Users, TrendingUp, Bell } from "lucide-react"

export default function InstagramDashboard() {
  const [dashboardData, setDashboardData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState("")
  const [showDashboard, setShowDashboard] = useState(false)
  const [email, setEmail] = useState("")
  const [notificationSent, setNotificationSent] = useState(false)

  const handleUsernameSubmit = (inputUsername: string) => {
    setUsername(inputUsername)
    setShowDashboard(true)
  }

  const handleNotifyMe = (e) => {
    e.preventDefault()
    // In a real app, this would send the email to a backend service
    setNotificationSent(true)
  }

  useEffect(() => {
    if (!showDashboard) return

    // Fetch dashboard data
    const fetchData = async () => {
      try {
        const response = await fetch("/api/instagram-dashboard")
        const data = await response.json()
        setDashboardData(data)
      } catch (error) {
        console.error("Error fetching dashboard data:", error)
      } finally {
        // Simulate loading for better UX
        setTimeout(() => {
          setLoading(false)
        }, 1500)
      }
    }

    fetchData()

    // For demo purposes, we'll use mock data
    const mockData = {
      profile: {
        username: username || "floowery_demo",
        followers: 108000,
        following: 864,
        profilePic: "/abstract-profile.png",
      },
      growthData: [
        { month: "Jan", followers: 80000 },
        { month: "Feb", followers: 85000 },
        { month: "Mar", followers: 89000 },
        { month: "Apr", followers: 95000 },
        { month: "May", followers: 102000 },
        { month: "Jun", followers: 108000 },
        { month: "Jul", followers: 115000, projected: true },
        { month: "Aug", followers: 123000, projected: true },
        { month: "Sep", followers: 132000, projected: true },
      ],
      activity: {
        totalActions: 4130,
        reach: 2007,
        postViews: 1027,
        profileVisits: 1096,
      },
      newFollowers: [
        { username: "sheena", followers: 83 },
        { username: "masaharu.me", followers: 73 },
        { username: "millynycldn", followers: 75 },
        { username: "tortus", followers: 100 },
      ],
      countryData: [
        { country: "United States", followers: 42000 },
        { country: "United Kingdom", followers: 18000 },
        { country: "Canada", followers: 12000 },
        { country: "Australia", followers: 9000 },
        { country: "Germany", followers: 7000 },
        { country: "Other", followers: 20000 },
      ],
      trafficSources: [
        { source: "Hashtags", value: 35 },
        { source: "Explore Page", value: 25 },
        { source: "Direct Search", value: 20 },
        { source: "Profile Links", value: 15 },
        { source: "Other", value: 5 },
      ],
      activityFeed: [
        { message: "Reached 4 users based on #travel", time: "32 minutes ago" },
        { message: "3 users visited your profile based on @mysamsontie", time: "37 minutes ago" },
        { message: "New follower: @design_lover", time: "45 minutes ago" },
        { message: "Your post received 28 likes", time: "1 hour ago" },
      ],
    }

    setDashboardData(mockData)
  }, [showDashboard, username])

  // If not showing dashboard yet, show username input
  if (!showDashboard) {
    return <UsernameInputSection onSubmit={handleUsernameSubmit} />
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0] py-12 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#160C29]"></div>
            <p className="mt-6 text-gray-600 font-medium">Loading your dashboard...</p>
            <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
          </div>
        </div>
      </div>
    )
  }

  // Show "Coming Soon" message after username submission
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0] py-12 px-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {/* Updated to Floowery brand colors */}
        <div className="mb-6 bg-gradient-to-r from-[#2A1845] to-[#160C29] rounded-full p-4 w-36 h-24 flex items-center justify-center mx-auto">
          <div className="relative h-16 w-32">
            <Image src="/images/floowery-logo-light-bg.png" alt="Floowery" fill className="object-contain" />
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-2xl font-bold text-[#160C29]">Dashboard Coming Soon!</h2>
          <div className="relative w-8 h-8">
            <Image src="/instagram-logo.png" alt="Instagram" fill className="object-contain" />
          </div>
        </div>
        <p className="text-[#59CCB1] mb-6">
          Thank you for your interest, <span className="font-medium">@{username}</span>! Our Instagram analytics
          dashboard is currently under development and will be available soon.
        </p>

        {/* Dashboard Preview */}
        <div className="mt-8 border border-gray-200 rounded-lg overflow-hidden mb-8">
          <div className="text-sm font-medium text-gray-500 p-2 bg-gray-50 border-b">Dashboard Preview</div>
          <div className="relative h-64 w-full">
            <Image src="/placeholder.svg?key=j607t" alt="Dashboard Preview" fill className="object-cover" />
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center">
              <p className="text-[#160C29] font-medium px-4 py-2 bg-white rounded-full shadow-sm">Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Email Notification Option */}
        <div className="mt-6 p-4 border border-[#160C29]/20 rounded-lg bg-[#F0FBF8]">
          <h3 className="font-medium text-[#59CCB1] mb-2 flex items-center justify-center">
            <Bell className="h-5 w-5 text-[#160C29] mr-2" />
            Get notified when it's ready
          </h3>
          {!notificationSent ? (
            <form onSubmit={handleNotifyMe} className="flex mt-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#160C29]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-[#160C29] text-white px-4 py-2 rounded-r-lg hover:bg-[#2A1845] transition-colors"
              >
                Notify Me
              </button>
            </form>
          ) : (
            <div className="bg-green-50 text-green-700 p-3 rounded-lg mt-3 flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              We'll notify you when the dashboard is ready!
            </div>
          )}
        </div>

        {/* Enhanced Feature Highlights */}
        <div className="mt-8">
          <h3 className="font-medium text-[#59CCB1] mb-4 flex items-center justify-center">
            <svg className="h-5 w-5 text-[#160C29] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            What to expect
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#160C29]/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <TrendingUp className="h-6 w-6 text-[#160C29]" />
              </div>
              <h4 className="font-medium text-center mb-1">Growth Tracking</h4>
              <p className="text-xs text-gray-500 text-center">Monitor your follower growth in real-time</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#160C29]/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <BarChart3 className="h-6 w-6 text-[#160C29]" />
              </div>
              <h4 className="font-medium text-center mb-1">Engagement Analytics</h4>
              <p className="text-xs text-gray-500 text-center">Analyze likes, comments, and saves</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="bg-[#160C29]/10 w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto">
                <Users className="h-6 w-6 text-[#160C29]" />
              </div>
              <h4 className="font-medium text-center mb-1">Audience Insights</h4>
              <p className="text-xs text-gray-500 text-center">Understand your follower demographics</p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/">
            <button className="bg-[#160C29] hover:bg-[#2A1845] text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
