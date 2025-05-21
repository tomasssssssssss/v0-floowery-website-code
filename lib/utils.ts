import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Color utility functions
export const brandColors = {
  primary: "#160C29",
  secondary: "#59CCB1",
  primaryHover: "#2A1845",
  secondaryHover: "#40B89D",
  light: "#F0F0F0",
  dark: "#0D1F25",
}

export function getContrastColor(hexColor: string): string {
  // Convert hex to RGB
  const r = Number.parseInt(hexColor.slice(1, 3), 16)
  const g = Number.parseInt(hexColor.slice(3, 5), 16)
  const b = Number.parseInt(hexColor.slice(5, 7), 16)

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  // Return black or white based on luminance
  return luminance > 0.5 ? "#000000" : "#FFFFFF"
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M"
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K"
  } else {
    return num.toString()
  }
}
