"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Logo } from "./Logo"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <div className="flex items-center justify-between p-4">
        <Logo variant="light" size="sm" />
        <button
          onClick={toggleMenu}
          className="p-1.5 rounded-md text-[#59CCB1] hover:bg-[#160C29]/5 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              className="p-2 rounded-md text-[#59CCB1] hover:bg-[#160C29]/5 focus:outline-none"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col items-center space-y-6 p-8">
            <Link href="/" className="text-xl font-medium text-[#59CCB1] hover:text-[#160C29]" onClick={closeMenu}>
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-xl font-medium text-[#59CCB1] hover:text-[#160C29]"
              onClick={closeMenu}
            >
              Pricing
            </Link>
            <Link
              href="/dashboard"
              className="text-xl font-medium text-[#59CCB1] hover:text-[#160C29]"
              onClick={closeMenu}
            >
              Dashboard
            </Link>
            <Link href="/about" className="text-xl font-medium text-[#59CCB1] hover:text-[#160C29]" onClick={closeMenu}>
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-xl font-medium text-[#59CCB1] hover:text-[#160C29]"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}
