"use client"

import { useState } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/hooks/use-auth"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LandingPage } from "@/components/landing-page"
import { Marketplace } from "@/components/marketplace"
import { ProductPage } from "@/components/product-page"
import { CreatorDashboard } from "@/components/creator-dashboard"
import { AdminPanel } from "@/components/admin-panel"
import { ContactPage } from "@/components/contact-page"
import { ProfilePage } from "@/components/profile/profile-page"

export default function App() {
  const [currentPage, setCurrentPage] = useState("landing")
  const [selectedProduct, setSelectedProduct] = useState(null)

  const renderPage = () => {
    switch (currentPage) {
      case "landing":
        return <LandingPage onNavigate={setCurrentPage} />
      case "marketplace":
        return <Marketplace onNavigate={setCurrentPage} onSelectProduct={setSelectedProduct} />
      case "product":
        return <ProductPage product={selectedProduct} onNavigate={setCurrentPage} />
      case "dashboard":
        return <CreatorDashboard onNavigate={setCurrentPage} />
      case "admin":
        return <AdminPanel onNavigate={setCurrentPage} />
      case "contact":
        return <ContactPage onNavigate={setCurrentPage} />
      case "profile":
        return <ProfilePage onNavigate={setCurrentPage} />
      default:
        return <LandingPage onNavigate={setCurrentPage} />
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <AuthProvider>
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-ambient-50/30 dark:to-ambient-950/20">
          <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="min-h-screen">{renderPage()}</main>
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  )
}
