"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Home, DollarSign, Users, HelpCircle, Mail, User, Zap, Shield, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "./Logo"

export default function EnhancedMobileMenu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [mobileMenuOpen])

  const navigationLinks = [
    { href: "/", label: "Home", icon: <Home className="h-4 w-4" /> },
    { href: "/pricing", label: "Pricing", icon: <DollarSign className="h-4 w-4" /> },
    { href: "/about", label: "About Us", icon: <Users className="h-4 w-4" /> },
    { href: "/faq", label: "FAQ", icon: <HelpCircle className="h-4 w-4" /> },
    { href: "/contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <div className="md:hidden">
      {/* Mobile Header */}
      <div className="flex items-center justify-between p-4 bg-white/95 backdrop-blur-lg border-b sticky top-0 z-50">
        <Logo variant="light" size="sm" />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg text-[#59CCB1] hover:bg-[#59CCB1]/10 focus:outline-none focus:ring-2 focus:ring-[#59CCB1]/20 transition-all duration-200 active:scale-95"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <motion.div animate={{ rotate: mobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b shadow-xl z-50"
          >
            <div className="container py-6 flex flex-col gap-6 max-h-[calc(100vh-4rem)] overflow-y-auto">
              {/* Primary Navigation Links */}
              <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
                {navigationLinks.map((link, index) => (
                  <motion.div key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      className={`
                        py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200
                        hover:bg-[#59CCB1]/10 active:bg-[#59CCB1]/20 hover:scale-[1.02]
                        focus:outline-none focus:ring-2 focus:ring-[#59CCB1]/20
                        ${
                          pathname === link.href
                            ? "bg-[#59CCB1]/10 text-[#160C29] border border-[#59CCB1]/20"
                            : "text-[#160C29] hover:text-[#160C29]"
                        }
                      `}
                      onClick={handleLinkClick}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#59CCB1]">{link.icon}</span>
                        {link.label}
                        {pathname === link.href && (
                          <motion.div
                            layoutId="activeIndicator"
                            className="ml-auto w-2 h-2 bg-[#59CCB1] rounded-full"
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Visual Separator */}
              <motion.div variants={itemVariants} className="border-t border-gray-200" />

              {/* Secondary Actions Section */}
              <motion.div variants={itemVariants} className="flex flex-col gap-3 pt-2">
                {/* Dashboard/Account Link */}
                <Link
                  href="/dashboard"
                  className="py-3 px-4 text-sm font-medium rounded-lg hover:bg-[#59CCB1]/10 transition-all duration-200 text-[#160C29] focus:outline-none focus:ring-2 focus:ring-[#59CCB1]/20 hover:scale-[1.02]"
                  onClick={handleLinkClick}
                >
                  <div className="flex items-center gap-3">
                    <User className="h-4 w-4 text-[#59CCB1]" />
                    Dashboard
                    <span className="ml-auto text-xs bg-[#59CCB1]/10 text-[#59CCB1] px-2 py-1 rounded-full">Free</span>
                  </div>
                </Link>

                {/* Primary CTA Button */}
                <Button
                  asChild
                  className="rounded-full bg-[#160C29] hover:bg-[#160C29]/90 text-white font-medium py-3 px-6 transition-all duration-200 hover:scale-105 focus:ring-2 focus:ring-[#160C29]/20 shadow-lg hover:shadow-xl"
                >
                  <Link href="/pricing" onClick={handleLinkClick}>
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Start Growing Now
                    </div>
                  </Link>
                </Button>

                {/* Secondary CTA */}
                <Button
                  variant="outline"
                  asChild
                  className="rounded-full border-[#59CCB1] text-[#59CCB1] hover:bg-[#59CCB1]/10 font-medium py-3 px-6 transition-all duration-200 hover:scale-[1.02]"
                >
                  <Link href="/contact" onClick={handleLinkClick}>
                    Get Support
                  </Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div variants={itemVariants} className="text-center pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-3 font-medium">Trusted by 10,000+ users worldwide</p>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-green-50">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-green-700 font-medium">100% Safe</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-blue-50">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">Real Growth</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-purple-50">
                    <Award className="h-4 w-4 text-purple-600" />
                    <span className="text-purple-700 font-medium">Guaranteed</span>
                  </div>
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
