"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Code, Palette, Sparkles, Zap, Globe, Shield, Rocket } from "lucide-react"

interface LandingPageProps {
  onNavigate: (page: string) => void
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business needs and requirements.",
    },
    {
      icon: Globe,
      title: "Web Applications",
      description: "Modern, responsive web applications using cutting-edge technologies and frameworks.",
    },
    {
      icon: Palette,
      title: "Digital Marketplace",
      description: "Our flagship marketplace connecting creators with customers for digital products and services.",
    },
  ]

  const features = [
    {
      icon: Rocket,
      title: "Innovation First",
      description:
        "We leverage the latest technologies to create innovative solutions that drive your business forward.",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Built with security in mind, our solutions meet enterprise-grade security standards.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for performance, our applications deliver exceptional speed and reliability.",
    },
  ]

  const stats = [
    { label: "Happy Clients", value: "500+" },
    { label: "Projects Delivered", value: "1,200+" },
    { label: "Years of Experience", value: "8+" },
    { label: "Team Members", value: "25+" },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-ambient-50/50 via-transparent to-ambient-100/30 dark:from-ambient-950/30 dark:via-transparent dark:to-ambient-900/20" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ambient-400/10 dark:bg-ambient-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ambient-500/10 dark:bg-ambient-500/10 rounded-full blur-3xl" />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-ambient-100/80 dark:bg-ambient-900/50 text-ambient-700 dark:text-ambient-300 border-ambient-200/50 dark:border-ambient-800/50 backdrop-blur-sm rounded-full px-4 py-2">
              <Sparkles className="w-3 h-3 mr-2" />
              Innovative Software Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                SparkWorke
              </span>
              <br />
              <span className="bg-gradient-to-r from-ambient-600 via-ambient-500 to-ambient-600 bg-clip-text text-transparent">
                Software
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              We create powerful software solutions that transform businesses. From custom applications to our
              innovative marketplace platform, we deliver technology that sparks growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate("marketplace")}
                className="bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 text-white text-lg px-8 py-6 rounded-2xl shadow-lg shadow-ambient-500/25 hover:shadow-ambient-500/40 transition-all duration-300 hover:scale-105"
              >
                Explore Marketplace
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("contact")}
                className="border-ambient-200/60 dark:border-ambient-800/60 text-ambient-700 dark:text-ambient-300 hover:bg-ambient-50/80 dark:hover:bg-ambient-950/50 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl md:text-4xl font-bold text-ambient-600 dark:text-ambient-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We offer comprehensive software development services to help your business thrive in the digital age.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-ambient-200/50 dark:border-ambient-800/30 hover:shadow-xl hover:shadow-ambient-500/10 dark:hover:shadow-ambient-500/5 transition-all duration-500 hover:scale-105 bg-card/50 backdrop-blur-sm rounded-2xl group"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-ambient-500 to-ambient-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-ambient-500/25 group-hover:shadow-ambient-500/40 transition-all duration-300 group-hover:scale-110">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-ambient-400 to-ambient-500 rounded-2xl blur-sm opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-ambient-600 dark:group-hover:text-ambient-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Why Choose SparkWorke?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-ambient-500 to-ambient-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-ambient-500/25 group-hover:shadow-ambient-500/40 transition-all duration-300 group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-ambient-600 dark:group-hover:text-ambient-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-ambient-500/10 via-ambient-600/10 to-ambient-500/10 dark:from-ambient-600/20 dark:via-ambient-500/20 dark:to-ambient-600/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card/80 backdrop-blur-xl rounded-3xl p-12 border border-ambient-200/50 dark:border-ambient-800/30 shadow-2xl shadow-ambient-500/10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-ambient-600 via-ambient-500 to-ambient-600 bg-clip-text text-transparent">
                Ready to Start Your Project?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how SparkWorke can help transform your ideas into powerful software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => onNavigate("contact")}
                className="bg-gradient-to-r from-ambient-500 to-ambient-600 hover:from-ambient-600 hover:to-ambient-700 text-white text-lg px-8 py-6 rounded-2xl shadow-lg shadow-ambient-500/25 hover:shadow-ambient-500/40 transition-all duration-300 hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate("marketplace")}
                className="border-ambient-200/60 dark:border-ambient-800/60 text-ambient-700 dark:text-ambient-300 hover:bg-ambient-50/80 dark:hover:bg-ambient-950/50 text-lg px-8 py-6 rounded-2xl backdrop-blur-sm"
              >
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
