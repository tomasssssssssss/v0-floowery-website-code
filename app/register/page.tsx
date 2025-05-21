"use client"
import { redirect } from "next/navigation"

export default function Register() {
  // Redirect to homepage
  redirect("/")

  // The rest of the component won't be executed due to the redirect
  return null
}
