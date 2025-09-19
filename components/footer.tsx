"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Youtube, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const nameRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Animation for the name
    const interval = setInterval(() => {
      if (nameRef.current) {
        const colors = ["from-blue-500 to-purple-500", "from-purple-500 to-pink-500", "from-indigo-500 to-cyan-500"]
        const randomColor = colors[Math.floor(Math.random() * colors.length)]
        nameRef.current.className = `text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${randomColor} mb-4 md:mb-0 transition-colors duration-1000`
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Link href="/" className="mb-4 md:mb-0">
            <span
              ref={nameRef}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-red-600 transition-colors duration-1000"
            >
              SATYANARAYANA NIKADI
            </span>
          </Link>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.github.com/in/satyaidk" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.linkedin.com/in/nikadisatyanarayana" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full" asChild>
              <a href="https://www.x.com/in/@satya_idk" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            ©{currentYear} SatyaNarayana Nikadi, All copy rights reserved.
          </p>

          <div className="flex items-center">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }}
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
