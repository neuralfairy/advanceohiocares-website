"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type React from "react"

interface AnimatedButtonProps {
  children: React.ReactNode
  className?: string
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  disabled?: boolean
}

export function AnimatedButton({
  children,
  className,
  variant = "default",
  size = "default",
  asChild,
  onClick,
  type = "button",
  disabled = false,
}: AnimatedButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      asChild={asChild}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={cn(
        "btn-animate hover-lift transition-all duration-300 transform hover:scale-105",
        "hover:shadow-lg active:scale-95",
        className,
      )}
    >
      {children}
    </Button>
  )
}
