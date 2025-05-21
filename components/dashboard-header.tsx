import Link from "next/link"
import Image from "next/image"
import { Bell, Settings, User } from "lucide-react"

export default function DashboardHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/floowery-logo-light-bg.png"
                alt="Floowery"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link
                href="/dashboard"
                className="border-[#160C29] text-[#59CCB1] inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Dashboard
              </Link>
              <Link
                href="/dashboard/analytics"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Analytics
              </Link>
              <Link
                href="/dashboard/growth"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Growth
              </Link>
            </nav>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#160C29]"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#160C29]"
            >
              <span className="sr-only">Settings</span>
              <Settings className="h-6 w-6" />
            </button>
            <div className="ml-3 relative">
              <div>
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#160C29]"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-[#160C29] flex items-center justify-center text-white">
                    <User className="h-4 w-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
