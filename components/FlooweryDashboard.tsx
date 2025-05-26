"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Image from "next/image"

export default function FlooweryDashboard() {
  const [data, setData] = useState([])
  const [metrics, setMetrics] = useState(null)

  useEffect(() => {
    fetch("/api/dashboard-data")
      .then((res) => res.json())
      .then((d) => {
        if (d.logs) {
          setData(
            d.logs.map((log) => ({
              date: new Date(log.date).toLocaleDateString(),
              followers: log.followers,
            })),
          )
          setMetrics({
            username: d.instagram,
            start: d.startFollowers,
            current: d.currentFollowers,
            growth24h: d.growth24h,
            growth30d: d.growth30d,
          })
        }
      })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!metrics) return <p className="text-center py-20 text-gray-400">Loading dashboard...</p>

  return (
    <div className="min-h-screen bg-[#F0FBF8] py-10 px-4 md:px-10 font-sans">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 border-b border-[#F0FBF8] pb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative h-12 w-36 mr-4">
              <Image src="/images/floowery-main-logo.png" alt="Floowery" fill className="object-contain" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#59CCB1]">Dashboard</h1>
              <p className="text-[#59CCB1] text-sm md:text-base">@{metrics.username}</p>
            </div>
          </div>
          <div className="bg-[#F0FBF8] px-4 py-2 rounded-full text-[#59CCB1] text-sm flex items-center">
            <span className="mr-2">Last updated:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white border border-[#160C29]/20 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">Starting Followers</p>
            <p className="text-xl font-bold text-[#59CCB1]">{metrics.start}</p>
          </div>
          <div className="bg-white border border-[#160C29]/20 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">Current Followers</p>
            <p className="text-xl font-bold text-[#59CCB1]">{metrics.current}</p>
          </div>
          <div className="bg-white border border-[#160C29]/20 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">24h Growth</p>
            <p className="text-xl font-bold text-green-500">+{metrics.growth24h}</p>
          </div>
          <div className="bg-white border border-[#160C29]/20 rounded-xl p-4 text-center shadow">
            <p className="text-sm text-gray-500">30-Day Growth</p>
            <p className="text-xl font-bold text-green-500">+{metrics.growth30d}</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📈 Follower Growth Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line type="monotone" dataKey="followers" stroke="#160C29" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-10 text-center text-sm text-[#59CCB1]/50">
          Data is updated daily. Real followers. Safe. Organic.
        </div>
      </div>
    </div>
  )
}
