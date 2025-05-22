"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - redirect to checkout or next step
    window.location.href = `/checkout?username=${encodeURIComponent(username)}`
  }

  return (
    <section className="min-h-[calc(100vh-3rem)] flex items-center justify-center px-6 gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 text-center md:text-left max-w-3xl mx-auto md:mx-0">
              Grow Your <span className="text-secondary">Instagram</span> Following
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Get real, engaged followers who are genuinely interested in your content. No bots, no fake accounts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="#growth-package" className="primary-btn text-center">
                Get Noticed Now
              </Link>
              <Link
                href="/checkout?package=500&price=120&type=monthly&trial=true"
                className="secondary-btn text-center"
              >
                Try Trial
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
              <Image
                src="/images/floowery-instagram-growth.png"
                alt="Grow Your Instagram Account with Floowery"
                width={800}
                height={800}
                className="w-full h-auto"
                priority
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-black/10"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
