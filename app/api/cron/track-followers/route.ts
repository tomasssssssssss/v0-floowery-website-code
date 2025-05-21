import { NextResponse } from "next/server"

// Simple CRON job endpoint that doesn't rely on any database
export async function GET(request: Request) {
  // Check for authorization
  const authHeader = request.headers.get("authorization")

  if (!authHeader || authHeader !== `Bearer ${process.env.CRON_API_KEY}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  try {
    // Simple placeholder response
    return NextResponse.json({
      message: "CRON job executed successfully",
      timestamp: new Date().toISOString(),
      status: "success",
    })
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error executing CRON job",
        status: "error",
      },
      { status: 500 },
    )
  }
}
