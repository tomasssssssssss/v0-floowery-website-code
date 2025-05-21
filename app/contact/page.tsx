import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle } from "lucide-react"
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

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/faq" className="inline-flex items-center text-[#744aec] hover:text-[#59CCB1] mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to FAQ
          </Link>

          <h1 className="text-3xl font-bold text-[#59CCB1] mb-2">Contact Support</h1>
          <p className="text-[#444444] mb-8">
            Have a question or need help? Fill out the form below and our team will get back to you as soon as possible.
          </p>

          <div className="bg-green-50 rounded-lg p-8 text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-xl font-semibold text-[#59CCB1] mb-2">Message Sent!</h2>
            <p className="text-[#444444] mb-6">
              Thank you for contacting us. We've received your message and will respond within 24 hours.
            </p>
            <Link href="/">
              <Button className="bg-[#160C29] hover:bg-[#59CCB1] text-white">Return to Home</Button>
            </Link>
          </div>
        </div>
      </main>

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
