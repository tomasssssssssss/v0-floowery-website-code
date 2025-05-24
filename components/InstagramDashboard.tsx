"use client"

import type React from "react"
import { useEffect } from "react"

const InstagramDashboard: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <h1>Instagram Dashboard</h1>
      {/* Add your Instagram dashboard content here */}
    </div>
  )
}

export default InstagramDashboard
