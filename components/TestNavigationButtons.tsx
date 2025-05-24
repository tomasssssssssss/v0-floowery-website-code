"use client"
import { useRouter } from "next/navigation" // Import useRouter at the top

// Test component to debug navigation issues
export default function TestNavigationButtons() {
  const router = useRouter() // Initialize useRouter here

  const testNavigation = () => {
    console.log("Test button clicked!")
    alert("Button works! Navigating to checkout...")
    window.location.href = "/checkout?package=500&price=120&type=monthly"
  }

  const testWithRouter = () => {
    try {
      router.push("/checkout?package=500&price=120&type=monthly")
    } catch (error) {
      console.error("Router failed, using window.location:", error)
      window.location.href = "/checkout?package=500&price=120&type=monthly"
    }
  }

  return (
    <div className="flex flex-col gap-4 p-4 border border-red-500 rounded-lg bg-red-50">
      <h3 className="text-red-700 font-bold">DEBUG: Test Navigation</h3>
      <button onClick={testNavigation} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        Test Window.location Navigation
      </button>
      <button onClick={testWithRouter} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Test Router Navigation
      </button>
      <a
        href="/checkout?package=500&price=120&type=monthly"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-center"
      >
        Test Regular Link
      </a>
    </div>
  )
}
