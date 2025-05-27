"use client"

import type React from "react"

import { useState, Suspense } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import LazyImage from "./LazyImage"

// Lazy load heavy components
const HeroBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-full blur-3xl"></div>
    <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
  </div>
)

export default function OptimizedHero() {
  const router = useRouter()
  const [username, setUsername] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/checkout?username=${encodeURIComponent(username)}`)
  }

  return (
    <section className="py-16 md:py-24 flex items-center justify-center px-6 gradient-bg">
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
            <Suspense fallback={<div className="w-full h-96 bg-gray-200 animate-pulse rounded-xl" />}>
              <div className="relative z-10 rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02] duration-300">
                <LazyImage
                  src="/images/floowery-instagram-growth.png"
                  alt="Grow Your Instagram Account with Floowery"
                  width={800}
                  height={800}
                  className="w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-black/10"></div>
              </div>
              <HeroBackground />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  )
}
