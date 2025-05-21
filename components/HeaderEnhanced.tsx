"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function HeaderEnhanced() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#F0F0F0] shadow-md" : "bg-[#F0F0F0]"}`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center group">
              <Image
                src="/images/floowery-logo-light-bg.png"
                alt="Floowery"
                width={180}
                height={45}
                className="h-auto w-[120px] sm:w-[150px] md:w-[180px] transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <nav className="flex space-x-1">
              <Link
                href="/"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive("/")
                    ? "text-[#FFFFFF] bg-[#160C29] shadow-sm"
                    : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
                }`}
              >
                Home
              </Link>
              <Link
                href="/dashboard"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive("/dashboard")
                    ? "text-[#FFFFFF] bg-[#160C29] shadow-sm"
                    : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
                }`}
              >
                Dashboard
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive("/about")
                    ? "text-[#FFFFFF] bg-[#160C29] shadow-sm"
                    : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
                }`}
              >
                About Us
              </Link>
              <Link
                href="/terms"
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                  isActive("/terms")
                    ? "text-[#FFFFFF] bg-[#160C29] shadow-sm"
                    : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
                }`}
              >
                Terms
              </Link>
            </nav>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0] focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            href="/"
            className={`block px-3 py-2 text-base font-medium rounded-lg ${
              isActive("/") ? "text-[#FFFFFF] bg-[#160C29]" : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className={`block px-3 py-2 text-base font-medium rounded-lg ${
              isActive("/dashboard")
                ? "text-[#FFFFFF] bg-[#160C29]"
                : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className={`block px-3 py-2 text-base font-medium rounded-lg ${
              isActive("/about")
                ? "text-[#FFFFFF] bg-[#160C29]"
                : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/terms"
            className={`block px-3 py-2 text-base font-medium rounded-lg ${
              isActive("/terms")
                ? "text-[#FFFFFF] bg-[#160C29]"
                : "text-[#59CCB1] hover:text-[#160C29] hover:bg-[#F0F0F0]"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Terms
          </Link>
        </div>
      </div>
    </header>
  )
}
