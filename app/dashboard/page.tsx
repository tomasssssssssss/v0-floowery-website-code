import InstagramDashboard from "@/components/InstagramDashboard"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <InstagramDashboard />
      </main>
      <Footer />
    </div>
  )
}
