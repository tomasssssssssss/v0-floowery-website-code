"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, User, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

interface MobileNavigationProps {
  currentPath?: string
}

export default function MobileNavigation({ currentPath = "/" }: MobileNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigationLinks = [
    { href: "/", label: "Home", icon: null },
    { href: "/pricing", label: "Pricing", icon: null },
    { href: "/about", label: "About Us", icon: null },
    { href: "/faq", label: "FAQ", icon: null },
    { href: "/contact", label: "Contact", icon: null },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 bg-white border-b">
        <Logo variant="light" size="sm" />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-[#59CCB1] hover:bg-[#59CCB1]/10 focus:outline-none focus:ring-2 focus:ring-[#59CCB1]/20 transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b shadow-lg z-50"
          >
            <div className="container py-6 flex flex-col gap-6">
              {/* Primary Navigation Links */}
              <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
                {navigationLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className={`
                        py-3 px-4 text-sm font-medium rounded-lg transition-colors
                        hover:bg-[#59CCB1]/10 active:bg-[#59CCB1]/20
                        focus:outline-none focus:ring-2 focus:ring-[#59CCB1]/20
                        ${
                          currentPath === link.href
                            ? "bg-[#59CCB1]/10 text-[#160C29]"
                            : "text-[#160C29] hover:text-[#160C29]"
                        }
                      `}
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-3">
                        {link.icon && <span className="text-[#59CCB1]">{link.icon}</span>}
                        {link.label}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Visual Separator */}
              <div className="border-t border-gray-200" />

              {/* Secondary Actions Section */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.2 }}
                className="flex flex-col gap-3 pt-2"
              >
                {/* Dashboard/Account Link */}
                <Link
                  href="/dashboard"
                  className="py-3 px-4 text-sm font-medium rounded-lg hover:bg-[#59CCB1]/10 transition-colors text-[#160C29] focus:outline-none focus:ring-2 focus:ring-[#59CCB1]/20"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-[#59CCB1]" />
                    Dashboard
                  </div>
                </Link>

                {/* Primary CTA Button */}
                <Button
                  asChild
                  className="rounded-full bg-[#160C29] hover:bg-[#160C29]/90 text-white font-medium py-3 px-6 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-[#160C29]/20"
                >
                  <Link href="/pricing" onClick={handleLinkClick}>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Start Growing
                    </div>
                  </Link>
                </Button>

                {/* Secondary CTA */}
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full border-[#59CCB1] text-[#59CCB1] hover:bg-[#59CCB1]/10 font-medium py-3 px-6 transition-colors"
                >
                  <Link href="/contact" onClick={handleLinkClick}>
                    Get Support
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.2 }}
                className="text-center pt-4 border-t border-gray-200"
              >
                <p className="text-xs text-gray-500 mb-2">Trusted by 10,000+ users</p>
                <div className="flex justify-center items-center gap-4 text-xs text-gray-400">
                  <span>🔒 100% Safe</span>
                  <span>⚡ Real Followers</span>
                  <span>💰 Money Back</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
