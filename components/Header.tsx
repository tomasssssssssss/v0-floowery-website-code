"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "./Logo"
import { X, Menu } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header className="bg-[#160C29] text-[#F0F0F0] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-1 py-0.5 flex items-center justify-between">
        <div className="flex-shrink-0 mr-6">
          <Link href="/" className="flex items-center">
            <Logo variant="dark" size="sm" linkWrapper={false} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 flex-grow justify-center">
          <Link
            href="/"
            className={`text-[#F0F0F0] hover:text-[#59CCB1] transition-colors duration-200 font-semibold ${
              isActive("/") ? "border-b-2 border-[#59CCB1]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/pricing"
            className={`text-[#F0F0F0] hover:text-[#59CCB1] transition-colors duration-200 font-semibold ${
              isActive("/pricing") ? "border-b-2 border-[#59CCB1]" : ""
            }`}
          >
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className={`text-[#F0F0F0] hover:text-[#59CCB1] transition-colors duration-200 font-semibold ${
              isActive("/dashboard") ? "border-b-2 border-[#59CCB1]" : ""
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/contact"
            className={`text-[#F0F0F0] hover:text-[#59CCB1] transition-colors duration-200 font-semibold ${
              isActive("/contact") ? "border-b-2 border-[#59CCB1]" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F0F0F0] p-1.5 rounded-md hover:bg-[#F0F0F0]/10"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden bg-[#160C29] fixed inset-0 z-50 pt-16 px-4"
        >
          <div className="absolute top-4 left-6">
            <Logo variant="dark" size="lg" />
          </div>
          <div className="absolute top-4 right-6">
            <button className="text-[#F0F0F0] p-2" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-6 pt-16">
            <Link
              href="/"
              className={`text-[#F0F0F0] text-xl font-semibold ${isActive("/") ? "text-[#59CCB1]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/checkout"
              className={`text-[#F0F0F0] text-xl font-semibold ${isActive("/checkout") ? "text-[#59CCB1]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Checkout
            </Link>
            <Link
              href="/dashboard"
              className={`text-[#F0F0F0] text-xl font-semibold ${isActive("/dashboard") ? "text-[#59CCB1]" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  )
}
