"use client"

import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useAmbientTheme } from "@/components/theme-provider"
import { Palette } from "lucide-react"

const ambientColors = [
  { id: "blue", name: "Blue", color: "bg-blue-500", ring: "ring-blue-500" },
  { id: "orange", name: "Orange", color: "bg-orange-500", ring: "ring-orange-500" },
  { id: "purple", name: "Purple", color: "bg-purple-500", ring: "ring-purple-500" },
  { id: "green", name: "Green", color: "bg-green-500", ring: "ring-green-500" },
  { id: "red", name: "Red", color: "bg-red-500", ring: "ring-red-500" },
] as const

export function AmbientColorPicker() {
  const { ambientColor, setAmbientColor } = useAmbientTheme()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Palette className="w-4 h-4" />
          <span className="sr-only">Change ambient color</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-3" align="end">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Ambient Theme</h4>
          <div className="grid grid-cols-5 gap-2">
            {ambientColors.map((color) => (
              <button
                key={color.id}
                onClick={() => setAmbientColor(color.id as any)}
                className={`w-8 h-8 rounded-full ${color.color} ring-2 ring-offset-2 ring-offset-background transition-all hover:scale-110 ${
                  ambientColor === color.id ? color.ring : "ring-transparent"
                }`}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
