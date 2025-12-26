"use client"

import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm mt-32">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "Projects", "About", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:contact@yuviii.in"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  contact@yuviii.in
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">Resume</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Download my resume for detailed work history and achievements.
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm font-medium"
            >
              Download Resume
            </Link>
          </div>
        </div>

        <div className="border-t border-border/40 pt-8">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} Yuvraj Singh Rathore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
