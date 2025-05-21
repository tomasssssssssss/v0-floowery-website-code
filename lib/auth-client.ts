"use client"

// This is a simplified auth client for demonstration purposes
// In a real application, you would use a proper auth library like NextAuth.js

import { useState, useEffect } from "react"

interface User {
  id: string
  username: string
  email: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // In a real app, this would be an API call to validate the session
        const token = localStorage.getItem("auth_token")

        if (token) {
          // Mock user data
          setUser({
            id: "1",
            username: "demo_user",
            email: "demo@floowery.com",
          })
        }
      } catch (error) {
        console.error("Auth error:", error)
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      // In a real app, this would be an API call to authenticate
      // Mock successful login
      const mockUser = {
        id: "1",
        username: email.split("@")[0],
        email,
      }

      // Store token
      localStorage.setItem("auth_token", "mock_token")

      setUser(mockUser)
      return { success: true }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: "Invalid credentials" }
    }
  }

  const logout = () => {
    localStorage.removeItem("auth_token")
    setUser(null)
  }

  const register = async (username: string, email: string, password: string) => {
    try {
      // In a real app, this would be an API call to register
      // Mock successful registration
      const mockUser = {
        id: "1",
        username,
        email,
      }

      // Store token
      localStorage.setItem("auth_token", "mock_token")

      setUser(mockUser)
      return { success: true }
    } catch (error) {
      console.error("Registration error:", error)
      return { success: false, error: "Registration failed" }
    }
  }

  return {
    user,
    loading,
    login,
    logout,
    register,
    isAuthenticated: !!user,
  }
}
