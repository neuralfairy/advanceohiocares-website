"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { AnimatedButton } from "@/components/animated-button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-teal-100 sticky top-0 z-50 animate-slide-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AOC</span>
              </div>
              <span className="font-bold text-xl text-gray-900">Advance Ohio Cares</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Pricing
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-teal-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <AnimatedButton variant="outline" asChild>
              <Link href="https://salescentri.com/get-started/book-demo" className="text-black">
                Book Demo
              </Link>
            </AnimatedButton>
            <AnimatedButton asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                Start Free Trial
              </Link>
            </AnimatedButton>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 focus:outline-none focus:text-teal-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-teal-100">
              <Link href="/" className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium"
              >
                Features
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium">
                Pricing
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium">
                Blog
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-teal-100">
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" asChild>
                    <Link href="https://salescentri.com/get-started/book-demo" className="text-black">
                      Book Demo
                    </Link>
                  </Button>
                  <Button asChild className="bg-teal-600 hover:bg-teal-700">
                    <Link href="https://salescentri.com/get-started/free-trial" className="text-black">
                      Start Free Trial
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
