import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Zap, MessageCircle, Globe, Shield } from "lucide-react"

export function Footer() {
  const sparkWorkeProjects = [
    { name: "NetCapture", description: "Network monitoring tool" },
    { name: "ProPath", description: "Career development platform" },
    { name: "Wizor", description: "AI-powered assistant" },
  ]

  const footerLinks = [
    {
      title: "Platform",
      links: [
        { name: "Browse Marketplace", href: "#" },
        { name: "List Your Product", href: "#" },
        { name: "Creator Guidelines", href: "#" },
        { name: "Quality Standards", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "Report Issues", href: "#" },
        { name: "Feature Requests", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "License Agreement", href: "#" },
      ],
    },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-ambient-400 to-ambient-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold">SparkWorke</span>
                <span className="text-xs text-ambient-400 -mt-1">Shop</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              The ultimate marketplace for Roblox developers, creators, and digital product sellers. Built by creators,
              for creators.
            </p>
            <div className="flex space-x-4">
              <Button variant="link"
                size="sm"
                className="bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Discord
              </Button>
              <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                <Globe className="w-4 h-4 mr-2" />
                Community
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href={link.href} className="text-slate-300 hover:text-ambient-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* SparkWorke Projects */}
        <div className="mb-8">
          <h3 className="font-semibold text-white mb-4 flex items-center">
            <Zap className="w-4 h-4 mr-2 text-blue-400" />
            Other SparkWorke Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {sparkWorkeProjects.map((project, index) => (
              <div
                key={index}
                className="p-4 bg-slate-800 rounded-lg border border-slate-700 hover:border-blue-500/50 transition-colors cursor-pointer"
              >
                <h4 className="font-medium text-white mb-1">{project.name}</h4>
                <p className="text-sm text-slate-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-8 bg-slate-700" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 text-sm text-slate-400 mb-4 md:mb-0">
            <span>© 2024 SparkWorke. All rights reserved.</span>
            <div className="flex items-center space-x-1">
              <Shield className="w-4 h-4" />
              <span>Secure Platform</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm text-slate-400">
            <span>Made with ❤️ for the Roblox community</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
