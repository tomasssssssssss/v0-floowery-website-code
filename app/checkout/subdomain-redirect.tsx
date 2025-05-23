"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function SubdomainRedirect() {
  const searchParams = useSearchParams()

  useEffect(() => {
    // Get all URL parameters
    const params = new URLSearchParams(searchParams.toString())

    // Redirect to checkout subdomain with all parameters
    const checkoutUrl = `https://checkout.floowery.com?${params.toString()}`

    // Redirect to subdomain
    window.location.href = checkoutUrl
  }, [searchParams])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#160C29] mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to secure checkout...</p>
      </div>
    </div>
  )
}
