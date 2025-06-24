"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/hooks/use-auth"
import {
  Settings,
  Package,
  DollarSign,
  Star,
  Edit3,
  Save,
  X,
  MapPin,
  Globe,
  Github,
  Twitter,
  Linkedin,
  Building,
  Shield,
  Zap,
  TrendingUp,
  Plus,
} from "lucide-react"

interface ProfilePageProps {
  onNavigate: (page: string) => void
}

export function ProfilePage({ onNavigate }: ProfilePageProps) {
  const { profile, updateProfile, user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [loading, setLoading] = useState(false)
  const [editData, setEditData] = useState({
    full_name: profile?.full_name || "",
    username: profile?.username || "",
    bio: profile?.bio || "",
    company: profile?.company || "",
    location: profile?.location || "",
    website: profile?.website || "",
    github_url: profile?.github_url || "",
    twitter_url: profile?.twitter_url || "",
    linkedin_url: profile?.linkedin_url || "",
  })

  const handleSave = async () => {
    setLoading(true)
    const { error } = await updateProfile(editData)

    if (!error) {
      setIsEditing(false)
    }

    setLoading(false)
  }

  const handleCancel = () => {
    setEditData({
      full_name: profile?.full_name || "",
      username: profile?.username || "",
      bio: profile?.bio || "",
      company: profile?.company || "",
      location: profile?.location || "",
      website: profile?.website || "",
      github_url: profile?.github_url || "",
      twitter_url: profile?.twitter_url || "",
      linkedin_url: profile?.linkedin_url || "",
    })
    setIsEditing(false)
  }

  const stats = [
    {
      title: "Total Earnings",
      value: `$${profile?.total_earnings?.toFixed(2) || "0.00"}`,
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/50",
    },
    {
      title: "Products Listed",
      value: profile?.total_products || 0,
      icon: Package,
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/50",
    },
    {
      title: "Total Sales",
      value: profile?.total_sales || 0,
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/50",
    },
    {
      title: "Rating",
      value: profile?.rating?.toFixed(1) || "0.0",
      icon: Star,
      color: "text-yellow-600",
      bgColor: "bg-yellow-100 dark:bg-yellow-900/50",
    },
  ]

  const recentActivity = [
    {
      id: 1,
      type: "sale",
      title: "Modern UI Kit sold",
      description: "Purchased by @developer123",
      amount: "$29.99",
      date: "2 hours ago",
    },
    {
      id: 2,
      type: "product",
      title: "New product submitted",
      description: "Admin Panel Template",
      date: "1 day ago",
    },
    {
      id: 3,
      type: "review",
      title: "New 5-star review",
      description: "Amazing quality work!",
      date: "3 days ago",
    },
  ]

  if (!profile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Profile not found</h2>
          <Button onClick={() => onNavigate("landing")}>Go Home</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-ambient-50/30 via-transparent to-ambient-100/20 dark:from-ambient-950/20 dark:via-transparent dark:to-ambient-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24 border-4 border-ambient-200 dark:border-ambient-800">
                  <AvatarImage src={profile.avatar_url || ""} />
                  <AvatarFallback className="text-2xl bg-gradient-to-br from-ambient-500 to-ambient-600 text-white">
                    {profile.full_name?.[0] || profile.email[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                {profile.is_verified && (
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold">{profile.full_name || "Anonymous User"}</h1>
                  <Badge
                    className={`${
                      profile.role === "admin"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
                        : profile.role === "creator"
                          ? "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
                          : "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
                    }`}
                  >
                    {profile.role === "admin" ? "Admin" : profile.role === "creator" ? "Creator" : "User"}
                  </Badge>
                </div>

                <p className="text-muted-foreground mb-2">@{profile.username || "username"}</p>

                {profile.bio && <p className="text-foreground mb-4">{profile.bio}</p>}

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {profile.company && (
                    <div className="flex items-center gap-1">
                      <Building className="w-4 h-4" />
                      <span>{profile.company}</span>
                    </div>
                  )}
                  {profile.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{profile.location}</span>
                    </div>
                  )}
                  {profile.website && (
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4" />
                      <a
                        href={profile.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-ambient-600"
                      >
                        Website
                      </a>
                    </div>
                  )}
                </div>

                <div className="flex gap-2 mt-4">
                  {profile.github_url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={profile.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {profile.twitter_url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={profile.twitter_url} target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {profile.linkedin_url && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={profile.linkedin_url} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    className="bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 text-white rounded-xl"
                  >
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      disabled={loading}
                      className="bg-green-600 hover:bg-green-700 text-white rounded-xl"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button onClick={handleCancel} variant="outline" className="rounded-xl">
                      <X className="w-4 h-4 mr-2" />
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-ambient-500" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    onClick={() => onNavigate("marketplace")}
                    className="w-full justify-start bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 text-white rounded-xl"
                  >
                    <Package className="w-4 h-4 mr-2" />
                    Browse Marketplace
                  </Button>
                  {profile.role === "creator" && (
                    <Button variant="outline" className="w-full justify-start rounded-xl">
                      <Plus className="w-4 h-4 mr-2" />
                      Submit New Product
                    </Button>
                  )}
                  <Button variant="outline" className="w-full justify-start rounded-xl">
                    <Settings className="w-4 h-4 mr-2" />
                    Account Settings
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start gap-3 p-3 bg-muted/50 rounded-xl">
                        <div className="w-2 h-2 bg-ambient-500 rounded-full mt-2" />
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground">{activity.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
                        </div>
                        {activity.amount && <span className="text-green-600 font-medium">{activity.amount}</span>}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle>Your Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-12">
                  <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No products yet</h3>
                  <p className="text-muted-foreground mb-4">Start creating and selling your digital products</p>
                  <Button className="bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 text-white rounded-xl">
                    Submit Your First Product
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle>Activity History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-center gap-4 p-4 border border-ambient-200/50 dark:border-ambient-800/30 rounded-xl"
                    >
                      <div className="w-10 h-10 bg-ambient-100 dark:bg-ambient-900/50 rounded-full flex items-center justify-center">
                        {activity.type === "sale" && <DollarSign className="w-5 h-5 text-green-600" />}
                        {activity.type === "product" && <Package className="w-5 h-5 text-blue-600" />}
                        {activity.type === "review" && <Star className="w-5 h-5 text-yellow-600" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{activity.title}</h4>
                        <p className="text-sm text-muted-foreground">{activity.description}</p>
                        <p className="text-xs text-muted-foreground">{activity.date}</p>
                      </div>
                      {activity.amount && <span className="text-green-600 font-medium">{activity.amount}</span>}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {isEditing ? (
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle>Edit Profile</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="full_name">Full Name</Label>
                      <Input
                        id="full_name"
                        value={editData.full_name}
                        onChange={(e) => setEditData((prev) => ({ ...prev, full_name: e.target.value }))}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        value={editData.username}
                        onChange={(e) => setEditData((prev) => ({ ...prev, username: e.target.value }))}
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={editData.bio}
                      onChange={(e) => setEditData((prev) => ({ ...prev, bio: e.target.value }))}
                      placeholder="Tell us about yourself..."
                      className="rounded-xl"
                      rows={3}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={editData.company}
                        onChange={(e) => setEditData((prev) => ({ ...prev, company: e.target.value }))}
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={editData.location}
                        onChange={(e) => setEditData((prev) => ({ ...prev, location: e.target.value }))}
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={editData.website}
                      onChange={(e) => setEditData((prev) => ({ ...prev, website: e.target.value }))}
                      placeholder="https://yourwebsite.com"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="github_url">GitHub URL</Label>
                      <Input
                        id="github_url"
                        value={editData.github_url}
                        onChange={(e) => setEditData((prev) => ({ ...prev, github_url: e.target.value }))}
                        placeholder="https://github.com/username"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter_url">Twitter URL</Label>
                      <Input
                        id="twitter_url"
                        value={editData.twitter_url}
                        onChange={(e) => setEditData((prev) => ({ ...prev, twitter_url: e.target.value }))}
                        placeholder="https://twitter.com/username"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                      <Input
                        id="linkedin_url"
                        value={editData.linkedin_url}
                        onChange={(e) => setEditData((prev) => ({ ...prev, linkedin_url: e.target.value }))}
                        placeholder="https://linkedin.com/in/username"
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-ambient-200/50 dark:border-ambient-800/30 rounded-xl">
                    <div>
                      <h4 className="font-medium">Email Address</h4>
                      <p className="text-sm text-muted-foreground">{profile.email}</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Change
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-ambient-200/50 dark:border-ambient-800/30 rounded-xl">
                    <div>
                      <h4 className="font-medium">Password</h4>
                      <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                    </div>
                    <Button variant="outline" size="sm" className="rounded-xl">
                      Change
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 border border-red-200/50 dark:border-red-800/30 rounded-xl">
                    <div>
                      <h4 className="font-medium text-red-600">Delete Account</h4>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and all data</p>
                    </div>
                    <Button variant="destructive" size="sm" className="rounded-xl">
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
