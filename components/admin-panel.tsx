"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, Clock, Eye, Flag, Users, Package, DollarSign, Search, Filter } from "lucide-react"

interface AdminPanelProps {
  onNavigate: (page: string) => void
}

export function AdminPanel({ onNavigate }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState("pending")
  const [searchQuery, setSearchQuery] = useState("")

  const adminStats = [
    {
      title: "Pending Reviews",
      value: "12",
      icon: Clock,
      color: "text-yellow-600",
    },
    {
      title: "Total Products",
      value: "1,247",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Active Creators",
      value: "2,500",
      icon: Users,
      color: "text-green-600",
    },
    {
      title: "Monthly Revenue",
      value: "$45.2K",
      icon: DollarSign,
      color: "text-purple-600",
    },
  ]

  const pendingProducts = [
    {
      id: 1,
      title: "Advanced Trading System",
      creator: "TradeMaster",
      category: "Scripts",
      price: 34.99,
      submittedDate: "2024-01-20",
      description: "Complete trading system with GUI and database integration",
      files: ["TradingSystem.lua", "TradingGUI.rbxm", "Documentation.pdf"],
      status: "pending",
    },
    {
      id: 2,
      title: "Neon UI Kit",
      creator: "NeonDesigner",
      category: "UI",
      price: 19.99,
      submittedDate: "2024-01-19",
      description: "Modern neon-themed UI components with animations",
      files: ["NeonUI.rbxm", "ColorSchemes.lua", "Examples.rbxl"],
      status: "pending",
    },
    {
      id: 3,
      title: "Battle Royale Template",
      creator: "GameStudio",
      category: "Games",
      price: 89.99,
      submittedDate: "2024-01-18",
      description: "Complete battle royale game template with lobby system",
      files: ["BattleRoyale.rbxl", "ServerScripts.zip", "Assets.zip"],
      status: "pending",
    },
  ]

  const recentActions = [
    {
      id: 1,
      action: "Approved",
      product: "Modern Admin Panel UI",
      creator: "DevMaster",
      admin: "AdminUser",
      date: "2024-01-21",
    },
    {
      id: 2,
      action: "Rejected",
      product: "Basic Chat Filter",
      creator: "NewDev",
      admin: "AdminUser",
      date: "2024-01-21",
    },
    {
      id: 3,
      action: "Approved",
      product: "RPG Combat System",
      creator: "ScriptWizard",
      admin: "AdminUser2",
      date: "2024-01-20",
    },
  ]

  const handleApprove = (productId: number) => {
    console.log(`Approved product ${productId}`)
    // In a real app, this would make an API call
  }

  const handleReject = (productId: number) => {
    console.log(`Rejected product ${productId}`)
    // In a real app, this would make an API call
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300"
      case "pending":
        return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/50 dark:text-yellow-300"
      case "rejected":
        return "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen py-8 bg-stone-100 dark:bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">Admin Panel</h1>
          <p className="text-slate-600 dark:text-slate-300">Manage product submissions and platform oversight</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, index) => (
            <Card key={index} className="glass-morphism border-stone-200/50 dark:border-stone-800/30 rounded-2xl">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-300">{stat.title}</p>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-stone-100 dark:bg-stone-900/50">
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="pending">Pending Reviews</TabsTrigger>
            <TabsTrigger value="approved">Approved</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="mt-6">
            <Card className="glass-morphism rounded-2xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Pending Product Reviews
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                      <Input
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-10 w-64 rounded-2xl"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="shadow-md rounded-2xl">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pendingProducts.map((product) => (
                    <div
                      key={product.id}
                      className="glass-morphism border-stone-200/50 dark:border-stone-800/30 rounded-2xl p-6"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{product.title}</h3>
                            <Badge className={getStatusColor(product.status)}>
                              <Clock className="w-3 h-3 mr-1" />
                              Pending
                            </Badge>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <span className="font-medium text-slate-600 dark:text-slate-300">Creator:</span>
                              <span className="ml-2 text-slate-900 dark:text-white">{product.creator}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-600 dark:text-slate-300">Category:</span>
                              <span className="ml-2 text-slate-900 dark:text-white">{product.category}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-600 dark:text-slate-300">Price:</span>
                              <span className="ml-2 text-slate-900 dark:text-white">${product.price}</span>
                            </div>
                            <div>
                              <span className="font-medium text-slate-600 dark:text-slate-300">Submitted:</span>
                              <span className="ml-2 text-slate-900 dark:text-white">{product.submittedDate}</span>
                            </div>
                          </div>

                          <p className="text-slate-700 dark:text-slate-300 mb-4">{product.description}</p>

                          <div className="mb-4">
                            <h4 className="font-medium text-slate-900 dark:text-white mb-2">Files Included:</h4>
                            <div className="flex flex-wrap gap-2">
                              {product.files.map((file, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {file}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-3 lg:w-48">
                          <Button size="sm" variant="outline" className="w-full shadow-md rounded-2xl">
                            <Eye className="w-4 h-4 mr-2" />
                            Preview Files
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleApprove(product.id)}
                            className="w-full bg-green-600 hover:bg-green-700 text-white shadow-md rounded-2xl"
                          >
                            <CheckCircle className="w-4 h-4 mr-2" />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => handleReject(product.id)}
                            className="w-full shadow-md rounded-2xl"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Reject
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="w-full text-blue-600 border-blue-200 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950 shadow-md rounded-2xl"
                          >
                            <Flag className="w-4 h-4 mr-2" />
                            Flag Issues
                          </Button>
                        </div>
                      </div>

                      {/* Admin Notes Section */}
                      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="font-medium text-slate-900 dark:text-white mb-2">Admin Notes:</h4>
                        <Textarea
                          placeholder="Add notes about this submission..."
                          className="mb-3 rounded-2xl"
                          rows={3}
                        />
                        <Button size="sm" variant="outline" className="shadow-md rounded-2xl">
                          Save Notes
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="approved" className="mt-6">
            <Card className="glass-morphism rounded-2xl">
              <CardHeader>
                <CardTitle>Recently Approved Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActions
                    .filter((action) => action.action === "Approved")
                    .map((action) => (
                      <div
                        key={action.id}
                        className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-900/20 rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white">{action.product}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            by {action.creator} • Approved by {action.admin}
                          </p>
                          <p className="text-xs text-slate-500">{action.date}</p>
                        </div>
                        <Badge className="bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Approved
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rejected" className="mt-6">
            <Card className="glass-morphism rounded-2xl">
              <CardHeader>
                <CardTitle>Recently Rejected Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActions
                    .filter((action) => action.action === "Rejected")
                    .map((action) => (
                      <div
                        key={action.id}
                        className="flex items-center justify-between p-4 bg-red-50 dark:bg-red-900/20 rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold text-slate-900 dark:text-white">{action.product}</h3>
                          <p className="text-sm text-slate-600 dark:text-slate-300">
                            by {action.creator} • Rejected by {action.admin}
                          </p>
                          <p className="text-xs text-slate-500">{action.date}</p>
                        </div>
                        <Badge className="bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300">
                          <XCircle className="w-3 h-3 mr-1" />
                          Rejected
                        </Badge>
                      </div>
                    ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="glass-morphism rounded-2xl">
                <CardHeader>
                  <CardTitle>Review Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Average Review Time</span>
                      <span className="font-semibold">2.3 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Approval Rate</span>
                      <span className="font-semibold text-green-600">78%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Products This Month</span>
                      <span className="font-semibold">156</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Active Reviewers</span>
                      <span className="font-semibold">5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-morphism rounded-2xl">
                <CardHeader>
                  <CardTitle>Category Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>UI Kits</span>
                      <span className="font-semibold">34%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Scripts</span>
                      <span className="font-semibold">28%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Templates</span>
                      <span className="font-semibold">22%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Full Games</span>
                      <span className="font-semibold">16%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
