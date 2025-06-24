"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Download, Eye, Heart, Share2, MessageCircle, Shield, Zap, ArrowLeft } from "lucide-react"

interface ProductPageProps {
  product: any
  onNavigate: (page: string) => void
}

export function ProductPage({ product, onNavigate }: ProductPageProps) {
  const [selectedLicense, setSelectedLicense] = useState("standard")

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Product not found</h2>
          <Button onClick={() => onNavigate("marketplace")}>Back to Marketplace</Button>
        </div>
      </div>
    )
  }

  const licenses = [
    {
      id: "standard",
      name: "Standard License",
      price: product.price,
      description: "Use in one project, no redistribution",
      features: ["Single project use", "No source code access", "6 months support"],
    },
    {
      id: "extended",
      name: "Extended License",
      price: product.price * 2.5,
      description: "Use in multiple projects, includes source code",
      features: ["Unlimited projects", "Full source code", "12 months support", "Commercial use"],
    },
  ]

  const reviews = [
    {
      id: 1,
      user: "GameDev123",
      rating: 5,
      comment: "Amazing quality! Saved me weeks of development time.",
      date: "2 days ago",
      helpful: 12,
    },
    {
      id: 2,
      user: "ScriptMaster",
      rating: 4,
      comment: "Great product, well documented. Minor issues with setup but support was helpful.",
      date: "1 week ago",
      helpful: 8,
    },
    {
      id: 3,
      user: "UIDesigner",
      rating: 5,
      comment: "Perfect for my project needs. Clean code and excellent design.",
      date: "2 weeks ago",
      helpful: 15,
    },
  ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Verified":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300"
      case "Top Seller":
        return "bg-orange-100 text-orange-700 dark:bg-orange-900/50 dark:text-orange-300"
      case "Exclusive":
        return "bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/50 dark:text-gray-300"
    }
  }

  return (
    <div className="min-h-screen py-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-ambient-50/30 via-transparent to-ambient-100/20 dark:from-ambient-950/20 dark:via-transparent dark:to-ambient-900/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => onNavigate("marketplace")}
          className="mb-6 text-ambient-600 hover:text-ambient-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Marketplace
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Product Header */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {product.badges.map((badge: string, index: number) => (
                  <Badge key={index} className={getBadgeColor(badge)}>
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{product.title}</h1>
              <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-300">
                <div className="flex items-center space-x-2">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>{product.creator[0]}</AvatarFallback>
                  </Avatar>
                  <span>by {product.creator}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span>{product.rating}</span>
                  <span>({product.reviews} reviews)</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="w-4 h-4" />
                  <span>{product.views} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Download className="w-4 h-4" />
                  <span>{product.downloads} downloads</span>
                </div>
              </div>
            </div>

            {/* Product Preview */}
            <div className="mb-8">
              <img
                src={product.thumbnail || "/placeholder.svg"}
                alt={product.title}
                className="w-full h-96 object-cover rounded-2xl border border-ambient-200/50 dark:border-ambient-800/30"
              />
            </div>

            {/* Product Details Tabs */}
            <Tabs defaultValue="description" className="mb-8">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="creator">Creator</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="mt-6">
                <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                  <CardContent className="p-6">
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{product.description}</p>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      This premium digital product has been carefully crafted to meet the highest standards of quality
                      and functionality. Perfect for developers looking to enhance their Roblox projects with
                      professional-grade assets and scripts.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="features" className="mt-6">
                <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                  <CardContent className="p-6">
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-500" />
                        <span>Clean, optimized code</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Zap className="w-5 h-5 text-orange-500" />
                        <span>Easy integration</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5 text-blue-500" />
                        <span>Developer support included</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <Download className="w-5 h-5 text-purple-500" />
                        <span>Instant download</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="reviews" className="mt-6">
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <Card
                      key={review.id}
                      className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-8 h-8">
                              <AvatarFallback>{review.user[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">{review.user}</div>
                              <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${
                                      i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                          <span className="text-sm text-slate-500">{review.date}</span>
                        </div>
                        <p className="text-slate-700 dark:text-slate-300 mb-3">{review.comment}</p>
                        <div className="flex items-center space-x-4 text-sm text-slate-500">
                          <button className="hover:text-blue-600">Helpful ({review.helpful})</button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="creator" className="mt-6">
                <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <Avatar className="w-16 h-16">
                        <AvatarFallback className="text-lg">{product.creator[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{product.creator}</h3>
                        <p className="text-slate-600 dark:text-slate-300">Professional Roblox Developer</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                          <span>156 Products</span>
                          <span>4.8 Rating</span>
                          <span>2.5K Sales</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">
                      Experienced developer with over 5 years in Roblox game development. Specializes in UI design,
                      scripting, and game mechanics.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Purchase Card */}
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardHeader>
                  <CardTitle className="text-slate-900 dark:text-white">Purchase Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {licenses.map((license) => (
                    <div
                      key={license.id}
                      className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                        selectedLicense === license.id
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-950/50"
                          : "border-gray-200 dark:border-gray-700 hover:border-blue-300"
                      }`}
                      onClick={() => setSelectedLicense(license.id)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-slate-900 dark:text-white">{license.name}</h4>
                        <span className="text-xl font-bold text-blue-600 dark:text-blue-400">${license.price}</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">{license.description}</p>
                      <ul className="text-xs text-slate-500 dark:text-slate-400 space-y-1">
                        {license.features.map((feature, index) => (
                          <li key={index}>• {feature}</li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 rounded-2xl shadow-lg shadow-ambient-500/25 text-white"
                  >
                    Buy Now - ${licenses.find((l) => l.id === selectedLicense)?.price}
                  </Button>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-ambient-200 text-ambient-600 hover:bg-ambient-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                  >
                    Request Customization
                  </Button>
                </CardContent>
              </Card>

              {/* Creator Info */}
              <Card className="border-ambient-200/50 dark:border-ambient-800/30 bg-card/50 backdrop-blur-sm rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Avatar>
                      <AvatarFallback>{product.creator[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">{product.creator}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Verified Creator</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
