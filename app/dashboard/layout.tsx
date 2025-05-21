import type React from "react"
import type { Metadata } from "next"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Dashboard | Floowery",
  description: "Track your Instagram growth with Floowery's analytics dashboard",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}
