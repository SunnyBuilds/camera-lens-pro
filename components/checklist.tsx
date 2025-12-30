"use client"

import { useState, useEffect } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

interface ChecklistItemProps extends React.ComponentPropsWithoutRef<"li"> {
  children: React.ReactNode
  checked?: boolean
  className?: string
  storageKey?: string
}

export function ChecklistItem({ children, checked = false, className, storageKey, ...props }: ChecklistItemProps) {
  const [isChecked, setIsChecked] = useState(checked)

  // Load saved state from localStorage on mount
  useEffect(() => {
    if (storageKey) {
      const saved = localStorage.getItem(storageKey)
      if (saved !== null) {
        setIsChecked(saved === "true")
      }
    }
  }, [storageKey])

  // Save state to localStorage when it changes
  const handleToggle = () => {
    const newChecked = !isChecked
    setIsChecked(newChecked)
    if (storageKey) {
      localStorage.setItem(storageKey, String(newChecked))
    }
  }

  return (
    <li className={cn("flex items-start gap-3 py-1.5", className)} {...props}>
      <div className="mt-0.5 shrink-0">
        <Checkbox 
          checked={isChecked} 
          onCheckedChange={handleToggle}
        />
      </div>
      <span className="text-foreground leading-relaxed flex-1">{children}</span>
    </li>
  )
}

interface ChecklistProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export function Checklist({ title, children, className }: ChecklistProps) {
  return (
    <div className={cn("my-8", className)}>
      {title && (
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
      )}
      <ul className="space-y-2 list-none">
        {children}
      </ul>
    </div>
  )
}

