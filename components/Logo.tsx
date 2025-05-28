import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "light" | "dark" | "teal" | "white"
  size?: "sm" | "md" | "lg" | "xl"
  linkWrapper?: boolean
  iconOnly?: boolean
}

export function Logo({ variant = "light", size = "md", linkWrapper = true, iconOnly = false }: LogoProps) {
  const getLogoSrc = () => {
    if (iconOnly) {
      switch (variant) {
        case "dark":
          return "/images/floowery-logo-icon-dark-bg.png"
        case "teal":
          return "/images/floowery-logo-icon-green-bg.png"
        case "white":
          return "/images/floowery-logo-icon.png"
        case "light":
        default:
          return "/images/floowery-logo-icon-light-bg.png"
      }
    } else {
      switch (variant) {
        case "dark":
          return "/images/floowery-logo-dark-bg.png"
        case "teal":
          return "/images/floowery-logo-green-bg.png"
        case "white":
          return "/images/floowery-logo-white.png"
        case "light":
        default:
          return "/images/floowery-logo-light.png"
      }
    }
  }

  const getLogoSize = () => {
    if (iconOnly) {
      switch (size) {
        case "sm":
          return { width: 18, height: 18 }
        case "lg":
          return { width: 30, height: 30 }
        case "xl":
          return { width: 36, height: 36 }
        case "md":
        default:
          return { width: 24, height: 24 }
      }
    } else {
      switch (size) {
        case "sm":
          return { width: 90, height: 27 }
        case "lg":
          return { width: 135, height: 40 }
        case "xl":
          return { width: 165, height: 50 }
        case "md":
        default:
          return { width: 110, height: 33 }
      }
    }
  }

  const { width, height } = getLogoSize()

  const logoContent = (
    <div className="flex items-center">
      <Image
        src={getLogoSrc() || "/placeholder.svg"}
        alt="Floowery"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  )

  return linkWrapper ? (
    <Link
      href="/"
      className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#59CCB1] rounded-md"
    >
      {logoContent}
    </Link>
  ) : (
    logoContent
  )
}
