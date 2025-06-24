"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

type AmbientColor = "blue" | "orange" | "purple" | "green" | "red"

interface AmbientThemeContextType {
  ambientColor: AmbientColor
  setAmbientColor: (color: AmbientColor) => void
}

const AmbientThemeContext = createContext<AmbientThemeContextType | undefined>(undefined)

export function useAmbientTheme() {
  const context = useContext(AmbientThemeContext)
  if (!context) {
    throw new Error("useAmbientTheme must be used within an AmbientThemeProvider")
  }
  return context
}

export function AmbientThemeProvider({ children }: { children: React.ReactNode }) {
  const [ambientColor, setAmbientColor] = useState<AmbientColor>("blue")

  useEffect(() => {
    const saved = localStorage.getItem("ambient-color") as AmbientColor
    if (saved) {
      setAmbientColor(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("ambient-color", ambientColor)
    document.documentElement.setAttribute("data-ambient", ambientColor)
  }, [ambientColor])

  return (
    <AmbientThemeContext.Provider value={{ ambientColor, setAmbientColor }}>{children}</AmbientThemeContext.Provider>
  )
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <AmbientThemeProvider>{children}</AmbientThemeProvider>
    </NextThemesProvider>
  )
}
