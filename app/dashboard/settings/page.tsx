"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
              <Button className="bg-green-600 hover:bg-green-700 text-white">Save Changes</Button>
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
                <input
                  type="checkbox"
                  checked={dailyReportsEnabled}
                  onChange={(e) => setDailyReportsEnabled(e.target.checked)}
                  className="h-4 w-4"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium">Growth Notifications</h3>
                  <p className="text-sm text-gray-500">Receive notifications about significant follower changes</p>
                </div>
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={(e) => setNotificationsEnabled(e.target.checked)}
                  className="h-4 w-4"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="threshold">Growth Notification Threshold (%)</Label>
                <Input id="threshold" type="number" placeholder="5" defaultValue="5" disabled={!notificationsEnabled} />
                <p className="text-xs text-gray-500">
                  You will be notified when an account followers change by this percentage
                </p>
              </div>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Save Settings</Button>
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
                  <Input id="api-key" type="password" value="sk-1234567890abcdef" readOnly className="rounded-r-none" />
                  <Button variant="outline" className="rounded-l-none border-l-0">
                    Show
                  </Button>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
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
