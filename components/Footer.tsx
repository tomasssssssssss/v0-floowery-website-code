import Link from "next/link"
import Image from "next/image"
import { Instagram } from "@/components/Icons"

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <div className="w-[200px] h-[60px] relative -ml-4">
                <Image
                  src="/images/floowery-dark-bg-logo.png"
                  alt="Floowery"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </Link>
            <p className="text-[#F0F0F0] mb-4 mt-4">The #1 Instagram growth service for real, engaged followers.</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/flooweryofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F0F0F0] hover:text-[#59CCB1] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <p className="text-gray-300 mb-2">Have questions? We're here to help.</p>
            <a href="mailto:support@floowery.com" className="text-secondary hover:underline">
              support@floowery.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Floowery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
