"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toggle"
import { Menu, X, VerifiedIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const nameRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Animation for the name
    const interval = setInterval(() => {
      if (nameRef.current) {
        const colors = ["from-blue-500 to-purple-500", "from-purple-500 to-pink-500", "from-indigo-500 to-cyan-500"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        nameRef.current.className = `text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${randomColor} transition-colors duration-1000`
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 rounded-b-2xl mx-2 mt-2",
        isScrolled
          ? "bg-background/20 backdrop-blur-md border border-white/10 shadow-lg rounded-2xl max-w-7xl left-1/2 transform -translate-x-1/2"
          : "bg-transparent max-w-full left-0 transform-none",
      )}
    >
      <div
        className={cn("container mx-auto px-6 py-4 flex items-center justify-between", isScrolled ? "max-w-none" : "")}
      >
        <div className="flex items-center gap-2 relative">
          <Link
            href="/"
            ref={nameRef}
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500 font-sans"
          >
            {"SATYA"}
          </Link>
          <VerifiedIcon className="animate-pulse absolute -right-6 top-1 px-0 w-5 h-5 text-green-300" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden mr-2 md:flex items-center gap-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium hover:text-primary transition-colors px-2"
            >
              {item.name}
            </a>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-md">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
