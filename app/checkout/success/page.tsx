import Link from "next/link"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function CheckoutSuccess() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-2xl mx-auto px-4 py-12 text-center">
        <div className="bg-green-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold mb-2">Thank You For Your Order!</h1>
        <p className="text-gray-600 mb-8">We've received your order and will begin processing it right away.</p>

        <div className="bg-white rounded-lg shadow p-6 mb-8 text-left">
          <h2 className="font-bold mb-4">What happens next?</h2>
          <ol className="space-y-3">
            <li className="flex">
              <span className="bg-[#F0E6FF] text-[#160C29] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              <span className="text-gray-700">Our system will begin targeting real followers for your account</span>
            </li>
            <li className="flex">
              <span className="bg-[#F0E6FF] text-[#160C29] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                2
              </span>
              <span className="text-gray-700">You'll start seeing new followers within 24-48 hours</span>
            </li>
            <li className="flex">
              <span className="bg-[#F0E6FF] text-[#160C29] rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                3
              </span>
              <span className="text-gray-700">Delivery will be completed within the next few days</span>
            </li>
          </ol>
        </div>

        <div className="space-y-4">
          <Link href="/dashboard">
            <Button className="bg-[#160C29] hover:bg-[#2A1845] text-white px-6">Track Your Growth</Button>
          </Link>

          <p className="text-sm text-gray-600 mt-2">We've sent a confirmation email with your order details.</p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
