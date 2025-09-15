"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-primary-foreground font-bold text-xl">O</span>
              </div> */}
              <span className="text-xl font-bold text-foreground">Octave Insurance</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/verticals"
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="w-4 h-4 mr-1" />
              <span>(555) 123-4567</span>
            </div>
            <Button size="sm">Get Quote</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-muted-foreground hover:text-primary p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-border">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary">
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/verticals"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
            <div className="px-3 py-2 border-t border-border mt-2">
              <div className="flex items-center text-sm text-muted-foreground mb-2">
                <Phone className="w-4 h-4 mr-2" />
                <span>(555) 123-4567</span>
              </div>
              <Button size="sm" className="w-full">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
