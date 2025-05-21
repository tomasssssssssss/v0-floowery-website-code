"use client"
import { redirect } from "next/navigation"

// Our three brand colors
const COLORS = {
  primary: "#160C29", // Deep purple
  secondary: "#59CCB1", // Teal
  light: "#F0F0F0", // Light gray
}

export default function Login() {
  // Redirect to homepage
  redirect("/")

  // The rest of the component won't be executed due to the redirect
  return null
}
