import { NextResponse } from "next/server"

export async function GET() {
  // Generate 30 days of mock data
  const logs = []
  const currentDate = new Date()
  const startFollowers = 4500
  const currentFollowers = 5000

  // Generate data for the past 30 days
  for (let i = 30; i >= 0; i--) {
    const date = new Date(currentDate)
    date.setDate(date.getDate() - i)

    // Calculate followers with some randomness for a realistic growth curve
    const progress = (30 - i) / 30
    const baseFollowers = startFollowers + Math.floor((currentFollowers - startFollowers) * progress)
    const randomVariation = Math.floor(Math.random() * 20) - 10 // Random variation between -10 and +10

    logs.push({
      date: date.toISOString().split("T")[0],
      followers: baseFollowers + randomVariation,
    })
  }

  // Create the response data structure
  const mockData = {
    username: "demo_user",
    followers: currentFollowers,
    growth: 25,
    history: logs,
  }

  return NextResponse.json(mockData)
}
