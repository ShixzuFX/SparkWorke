"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  Package,
  Eye,
  Star,
  Clock,
  CheckCircle,
  XCircle,
  Plus,
  Edit,
  Trash2,
  ArrowLeft,
} from "lucide-react"

interface CreatorDashboardProps {
  onNavigate: (page: string) => void
}

export function CreatorDashboard({ onNavigate }: CreatorDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")

  const stats = [
    {
      title: "Total Earnings",
      value: "$2,847.50",
      change: "+12.5%",
      icon: DollarSign,
      color: "text-green-600",
    },
    {
      title: "Products Listed",
      value: "23",
      change: "+2",
      icon: Package,
      color: "text-blue-600",
    },
    {
      title: "Total Views",
      value: "45,231",
      change: "+8.2%",
      icon: Eye,
      color: "text-purple-600",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.1",
      icon: Star,
      color: "text-yellow-600",
    },
  ]

  const products = [
    {
      id: 1,
      title: "Modern Admin Panel UI",
      status: "approved",
      price: 15.99,
      sales: 45,
      revenue: 719.55,
      views: 2500,
      rating: 4.8,
      reviews: 124,
      dateSubmitted: "2024-01-15",
    },
    {
      id: 2,
      title: "RPG Combat System",
      status: "pending",
      price: 29.99,
      sales: 0,
      revenue: 0,
      views: 0,
      rating: 0,
      reviews: 0,
      dateSubmitted: "2024-01-20",
    },
    {
      id: 3,
      title: "Inventory System Pro",
      status: "approved",
      price: 19.99,
      sales: 38,
      revenue: 759.62,
      views: 2100,
      rating: 4.6,
      reviews: 203,
      dateSubmitted: "2024-01-10",
    },
    {
      id: 4,
      title: "Chat Filter Script",
      status: "rejected",
      price: 12.99,
      sales: 0,
      revenue: 0,
      views: 0,
      rating: 0,
      reviews: 0,
      dateSubmitted: "2024-01-18",
    },
  ]

  const recentOrders = [
    {
      id: 1,
      product: "Modern Admin Panel UI",
      buyer: "GameDev123",
      amount: 15.99,
      date: "2024-01-21",
      license: "Standard",
    },
    {
      id: 2,
      product: "Inventory System Pro",
      buyer: "ScriptMaster",
      amount: 49.98,
      date: "2024-01-20",
      license: "Extended",
    },
    {
      id: 3,
      product: "Modern Admin Panel UI",
      buyer: "UIDesigner",
      amount: 15.99,
      date: "2024-01-19",
      license: "Standard",
    },
  ]

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4" />
      case "pending":
        return <Clock className="w-4 h-4" />
      case "rejected":
        return <XCircle className="w-4 h-4" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen py-8">
      <div className="absolute inset-0 bg-gradient-to-br from-ambient-50/30 via-transparent to-ambient-100/20 dark:from-ambient-950/20 dark:via-transparent dark:to-ambient-900/10 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate("marketplace")}
          className="mb-6 text-ambient-600 hover:text-ambient-700 dark:text-ambient-400 dark:hover:text-ambient-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Marketplace
        </Button>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Marketplace Dashboard
              </span>
            </h1>
            <p className="text-muted-foreground">Manage your products and track your performance</p>
          </div>
          <Button className="mt-4 md:mt-0 bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 text-white rounded-2xl shadow-lg shadow-ambient-500/25">
            <Plus className="w-4 h-4 mr-2" />
            Submit New Product
          </Button>
        </div>

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
                    <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-ambient-100 dark:bg-ambient-900/50`}>
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
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Orders */}
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    Recent Orders
                    <Button variant="ghost" size="sm">
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                        <div>
                          <p className="font-medium">{order.product}</p>
                          <p className="text-sm text-muted-foreground">
                            by {order.buyer} • {order.license}
                          </p>
                          <p className="text-xs text-muted-foreground">{order.date}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">${order.amount}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Performance Chart */}
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle>Monthly Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Sales</span>
                        <span>83 / 100</span>
                      </div>
                      <Progress value={83} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Views</span>
                        <span>67 / 100</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Rating</span>
                        <span>96 / 100</span>
                      </div>
                      <Progress value={96} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="products" className="mt-6">
            <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle>Your Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center justify-between p-4 border border-ambient-200/50 dark:border-ambient-800/30 rounded-xl"
                    >
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="font-semibold">{product.title}</h3>
                          <Badge className={getStatusColor(product.status)}>
                            {getStatusIcon(product.status)}
                            <span className="ml-1 capitalize">{product.status}</span>
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm text-muted-foreground">
                          <div>
                            <span className="font-medium">Price:</span> ${product.price}
                          </div>
                          <div>
                            <span className="font-medium">Sales:</span> {product.sales}
                          </div>
                          <div>
                            <span className="font-medium">Revenue:</span> ${product.revenue}
                          </div>
                          <div>
                            <span className="font-medium">Views:</span> {product.views}
                          </div>
                          <div>
                            <span className="font-medium">Rating:</span> {product.rating || "N/A"}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="mt-6">
            <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
              <CardHeader>
                <CardTitle>Order History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between p-4 border border-ambient-200/50 dark:border-ambient-800/30 rounded-xl"
                    >
                      <div>
                        <h3 className="font-semibold">{order.product}</h3>
                        <p className="text-sm text-muted-foreground">Purchased by {order.buyer}</p>
                        <p className="text-xs text-muted-foreground">
                          {order.date} • {order.license} License
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-green-600">${order.amount}</p>
                        <p className="text-xs text-muted-foreground">You earned: ${(order.amount * 0.9).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle>Top Performing Products</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {products
                      .filter((p) => p.status === "approved")
                      .map((product, index) => (
                        <div key={product.id} className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{product.title}</p>
                            <p className="text-sm text-muted-foreground">
                              {product.sales} sales • ${product.revenue}
                            </p>
                          </div>
                          <Badge variant="secondary">#{index + 1}</Badge>
                        </div>
                      ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle>Revenue Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Total Revenue</span>
                      <span className="font-semibold">$2,847.50</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Platform Fee (10%)</span>
                      <span className="text-red-600">-$284.75</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Your Earnings (90%)</span>
                      <span className="font-semibold text-green-600">$2,562.75</span>
                    </div>
                    <div className="pt-4 border-t">
                      <div className="flex justify-between items-center">
                        <span className="font-semibold">Next Payout</span>
                        <span className="font-semibold">Jan 31, 2024</span>
                      </div>
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
