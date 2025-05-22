"use client"

import type React from "react"
import Link from "next/link"

interface SimpleButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function SimpleButton({
  children,
  onClick,
  href,
  className = "",
  type = "button",
  disabled = false,
}: SimpleButtonProps) {
  // Default styles
  const baseStyles =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  const primaryStyles = "bg-[#160C29] text-white hover:bg-[#2A1845] h-10 py-2 px-4"
  const allStyles = `${baseStyles} ${primaryStyles} ${className}`

  // If href is provided, render a Link
  if (href) {
    return (
      <Link href={href} className={allStyles}>
        {children}
      </Link>
    )
  }

  // Otherwise render a button
  return (
    <button type={type} className={allStyles} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
