"use client"

import { useEffect } from "react"
import InstagramDashboard from "@/components/InstagramDashboard"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function DashboardPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <InstagramDashboard />
      </main>
      <Footer />
    </div>
  )
}
