"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"

const Dashboard = () => {
  const [username, setUsername] = useState("")
  const [analysisResults, setAnalysisResults] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [view, setView] = useState<"input" | "results">("input")

  const handleAnalyze = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to analyze user")
      }

      const data = await response.json()
      setAnalysisResults(data)
      setView("results")
    } catch (err: any) {
      setError(err.message || "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && username.trim()) {
      e.preventDefault()
      handleAnalyze()
    }
  }

  const handleBack = () => {
    setView("input")
    setAnalysisResults(null)
    setUsername("")
  }

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-gray-100 py-10">
      <div className="mb-8">
        <Image
          src="/images/floowery-spiral-icon.png"
          alt="Floowery"
          width={48}
          height={48}
          className="object-contain animate-spin"
          style={{ animationDuration: "2s" }}
        />
      </div>

      {view === "input" ? (
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center w-full max-w-md">
          <Image
            src="/images/floowery-spiral-icon.png"
            alt="Floowery"
            width={112}
            height={112}
            className="object-contain drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
          />
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">Enter a Twitter Username</h1>
          <input
            type="text"
            placeholder="e.g., @elonmusk"
            className="border border-gray-300 rounded-md p-3 w-full text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            onClick={handleAnalyze}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md mt-4 transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
            disabled={isLoading || !username.trim()}
          >
            {isLoading ? "Analyzing..." : "Analyze"}
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis Results for @{username}</h2>
          {analysisResults ? (
            <>
              <Image
                src="/images/floowery-spiral-icon.png"
                alt="Floowery"
                width={48}
                height={48}
                className="object-contain"
              />
              <p className="text-gray-700 mt-2">Follower Count: {analysisResults.follower_count}</p>
              <p className="text-gray-700 mt-2">Average Engagement: {analysisResults.average_engagement}</p>
              {/* Display other analysis results here */}
            </>
          ) : (
            <p className="text-gray-700">No results to display.</p>
          )}
          <button
            onClick={handleBack}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-md mt-6 transition-all duration-300"
          >
            Back to Input
          </button>
        </div>
      )}
    </div>
  )
}

export default Dashboard
