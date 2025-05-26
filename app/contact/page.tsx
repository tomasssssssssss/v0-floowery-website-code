import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      {/* Header */}
      <header className="py-4 px-6 border-b border-[#f0f0f0]">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative h-10 w-40">
              <Image src="/images/floowery-logo.png" alt="Floowery" fill className="object-contain" priority />
            </div>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-[#444444] hover:text-[#160C29]">
              Home
            </Link>
            <Link href="/#how-it-works" className="text-[#444444] hover:text-[#160C29]">
              How It Works
            </Link>
            <Link href="/#pricing" className="text-[#444444] hover:text-[#160C29]">
              Pricing
            </Link>
            <Link href="/faq" className="text-[#444444] hover:text-[#160C29]">
              FAQ
            </Link>
          </nav>
          <div className="hidden md:flex space-x-4">
            <Link href="/login">
              <Button
                variant="outline"
                className="rounded-full h-auto py-2 px-4 border-[#160C29] text-[#160C29] hover:bg-[#F0E6FF]"
              >
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-[#160C29] hover:bg-[#59CCB1] text-white rounded-full h-auto py-2 px-4">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Footer */}
      <footer className="bg-[#f0f0f0] py-6 px-6 border-t border-[#d9d5e9] mt-12">
        <div className="max-w-6xl mx-auto text-center text-[#444444] text-sm">
          <p>© {new Date().getFullYear()} Floowery. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/terms" className="hover:text-[#59CCB1] mx-2">
              Terms
            </Link>
            <Link href="/privacy" className="hover:text-[#59CCB1] mx-2">
              Privacy
            </Link>
            <Link href="/refund" className="hover:text-[#59CCB1] mx-2">
              Refunds
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
