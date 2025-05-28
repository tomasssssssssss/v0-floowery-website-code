import { NextResponse } from "next/server"

export async function GET() {
  try {
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
        followers: Math.max(0, baseFollowers + randomVariation), // Ensure no negative followers
      })
    }

    // Create the response data structure
    const responseData = {
      instagram: "floowery_demo",
      startFollowers: startFollowers,
      currentFollowers: currentFollowers,
      growth24h: 25,
      growth30d: currentFollowers - startFollowers,
      logs: logs,
      countries: [
        { country: "United States", followers: 1850 },
        { country: "United Kingdom", followers: 950 },
        { country: "Canada", followers: 720 },
        { country: "Australia", followers: 580 },
        { country: "Germany", followers: 450 },
        { country: "Other", followers: 450 },
      ],
    }

    return NextResponse.json(responseData, {
      headers: {
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      },
    })
  } catch (error) {
    console.error("Error generating dashboard data:", error)
    return NextResponse.json({ error: "Failed to generate dashboard data" }, { status: 500 })
  }
}
