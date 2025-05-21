import { NextResponse } from "next/server"

export async function GET() {
  // Mock data for the Instagram dashboard
  const mockData = {
    profile: {
      username: "floowery_demo",
      followers: 108000,
      following: 864,
      profilePic: "/abstract-profile.png",
    },
    growthData: [
      { month: "Jan", followers: 80000 },
      { month: "Feb", followers: 85000 },
      { month: "Mar", followers: 89000 },
      { month: "Apr", followers: 95000 },
      { month: "May", followers: 102000 },
      { month: "Jun", followers: 108000 },
      { month: "Jul", followers: 115000, projected: true },
      { month: "Aug", followers: 123000, projected: true },
      { month: "Sep", followers: 132000, projected: true },
    ],
    activity: {
      totalActions: 4130,
      reach: 2007,
      postViews: 1027,
      profileVisits: 1096,
    },
    newFollowers: [
      { username: "sheena", followers: 83 },
      { username: "masaharu.me", followers: 73 },
      { username: "millynycldn", followers: 75 },
      { username: "tortus", followers: 100 },
    ],
    countryData: [
      { country: "United States", followers: 42000 },
      { country: "United Kingdom", followers: 18000 },
      { country: "Canada", followers: 12000 },
      { country: "Australia", followers: 9000 },
      { country: "Germany", followers: 7000 },
      { country: "Other", followers: 20000 },
    ],
    trafficSources: [
      { source: "Hashtags", value: 35 },
      { source: "Explore Page", value: 25 },
      { source: "Direct Search", value: 20 },
      { source: "Profile Links", value: 15 },
      { source: "Other", value: 5 },
    ],
    activityFeed: [
      { message: "Reached 4 users based on #travel", time: "32 minutes ago" },
      { message: "3 users visited your profile based on @mysamsontie", time: "37 minutes ago" },
      { message: "New follower: @design_lover", time: "45 minutes ago" },
      { message: "Your post received 28 likes", time: "1 hour ago" },
    ],
  }

  return NextResponse.json(mockData)
}
