"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Bike } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bike className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary-foreground">Cycle-Nest</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-secondary-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-secondary-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#about" className="text-secondary-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Shop Now</Button>
          </nav>

          <button className="md:hidden text-secondary-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#features" className="text-secondary-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-secondary-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#about" className="text-secondary-foreground hover:text-primary transition-colors">
              About
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Shop Now</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
