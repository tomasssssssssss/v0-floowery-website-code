"use client"

import { useEffect } from "react"
import Image from "next/image"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F0FBF8] to-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center p-4 shadow-lg">
            <Image
              src="/images/floowery-spiral-icon.png"
              alt="Floowery"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-[#160C29] mb-4">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">We're having trouble loading your dashboard. Please try again.</p>

          <div className="space-y-3">
            <button
              onClick={reset}
              className="w-full bg-[#59CCB1] hover:bg-[#4AB89E] text-white py-3 px-4 rounded-xl font-medium transition-colors"
            >
              Try Again
            </button>

            <a
              href="/"
              className="block w-full bg-gray-100 hover:bg-gray-200 text-[#160C29] py-3 px-4 rounded-xl font-medium transition-colors"
            >
              Go Home
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-sm text-gray-500 mb-2">Need help?</p>
            <a href="mailto:support@floowery.com" className="text-[#59CCB1] hover:text-[#4AB89E] font-medium">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
