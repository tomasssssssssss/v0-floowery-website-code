"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface DashboardMetrics {
  username: string
  start: number
  current: number
  growth24h: number
  growth30d: number
}

interface ChartData {
  date: string
  followers: number
}

export default function FlooweryDashboard() {
  const [data, setData] = useState<ChartData[]>([])
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch("/api/dashboard-data")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch dashboard data")
        }
        return res.json()
      })
      .then((d) => {
        if (d.logs) {
          setData(
            d.logs.map((log: any) => ({
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
      .catch((error) => {
        console.error("Error fetching dashboard data:", error)
        setError("Failed to load dashboard data")
      })
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Floowery Dashboard</h1>

      {error && <div className="text-red-500 mb-4">{error}</div>}

      {metrics && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold">Username</h2>
            <p>{metrics.username}</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold">Start Followers</h2>
            <p>{metrics.start}</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold">Current Followers</h2>
            <p>{metrics.current}</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold">Growth (24h)</h2>
            <p>{metrics.growth24h}</p>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-lg font-semibold">Growth (30d)</h2>
            <p>{metrics.growth30d}</p>
          </div>
        </div>
      )}

      {data.length > 0 ? (
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg font-semibold mb-2">Follower Growth</h2>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="followers" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <div>Loading data...</div>
      )}
    </div>
  )
}
