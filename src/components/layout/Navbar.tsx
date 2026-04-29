"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 text-xl font-headline font-bold text-foreground">
              <span className="text-primary italic">L</span>yncia Chiguri
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</Link>
            <Link href="/#services" className="text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link href="/#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="/#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
            <Link href="/portfolio/new">
              <Button size="sm" variant="outline" className="gap-2 border-accent text-accent hover:bg-accent/10">
                <Sparkles className="w-4 h-4" />
                AI Builder
              </Button>
            </Link>
          </div>
          <div className="md:hidden">
            <Link href="/portfolio/new">
              <Button size="sm" variant="ghost" className="p-2">
                <Sparkles className="w-5 h-5 text-accent" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
