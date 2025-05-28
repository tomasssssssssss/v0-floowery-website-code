"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function Settings() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [dailyReportsEnabled, setDailyReportsEnabled] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Account Settings</h1>
          <p className="text-gray-600">Manage your tracking preferences and account settings</p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" defaultValue="Admin User" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" defaultValue="admin@floowery.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Company name" defaultValue="Floowery" />
              </div>
              <Button className="bg-[#59CCB1] hover:bg-[#2A1845] text-white">Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tracking Settings</CardTitle>
              <CardDescription>Configure how Instagram accounts are tracked</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Automatic Daily Tracking</h3>
                  <p className="text-sm text-gray-500">Automatically track follower counts daily</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={dailyReportsEnabled}
                    onChange={() => setDailyReportsEnabled(!dailyReportsEnabled)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F0E6FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#59CCB1]"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Growth Notifications</h3>
                  <p className="text-sm text-gray-500">Receive notifications about significant follower changes</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={notificationsEnabled}
                    onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#F0E6FF] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#59CCB1]"></div>
                </label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="threshold">Growth Notification Threshold (%)</Label>
                <Input id="threshold" type="number" placeholder="5" defaultValue="5" disabled={!notificationsEnabled} />
                <p className="text-xs text-gray-500">
                  You'll be notified when an account's followers change by this percentage
                </p>
              </div>
              <Button className="bg-[#59CCB1] hover:bg-[#2A1845] text-white">Save Settings</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Access</CardTitle>
              <CardDescription>Manage API keys for programmatic access</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex">
                  <Input
                    id="api-key"
                    type="password"
                    value="••••••••••••••••••••••••••••••"
                    readOnly
                    className="rounded-r-none"
                  />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    Show
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-[#59CCB1] text-[#59CCB1] hover:bg-[#F0E6FF]">
                  Regenerate Key
                </Button>
                <Button variant="outline">Copy Key</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
