"use client"

import { Button } from "@/components/ui/button"
import { RotateCcw } from "lucide-react"

interface ChecklistResetProps {
  slug: string
}

export function ChecklistReset({ slug }: ChecklistResetProps) {
  const handleReset = () => {
    // Find all localStorage keys for this guide
    const keysToRemove: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(`checklist-${slug}-`)) {
        keysToRemove.push(key)
      }
    }
    
    // Remove all found keys
    keysToRemove.forEach(key => localStorage.removeItem(key))
    
    // Reload the page to reflect changes
    window.location.reload()
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      onClick={handleReset}
      className="gap-2"
    >
      <RotateCcw className="h-4 w-4" />
      Reset All Checkboxes
    </Button>
  )
}

