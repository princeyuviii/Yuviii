import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Download } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 max-w-6xl mx-auto border-b border-border/40">
        <SectionHeader
          subtitle="Get in Touch"
          title="Let's Talk"
          description="I'm interested in discussing projects, sharing ideas, and exploring opportunities to collaborate. Whether you have a specific project in mind or just want to chat about technology, I'd love to hear from you."
        />
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <Card className="p-8 border-border/40 bg-card/40 hover:bg-card/60 transition-colors flex flex-col items-center text-center">
            <div className="p-4 rounded-lg bg-primary/10 mb-6">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">I typically respond within 24 hours.</p>
            <a
              href="mailto:contact@yuviii.in"
              className="text-primary hover:text-primary/80 transition-colors font-medium break-all"
            >
              contact@yuviii.in
            </a>
          </Card>

          {/* GitHub */}
          <Card className="p-8 border-border/40 bg-card/40 hover:bg-card/60 transition-colors flex flex-col items-center text-center">
            <div className="p-4 rounded-lg bg-primary/10 mb-6">
              <Github className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">GitHub</h3>
            <p className="text-muted-foreground mb-4">Check out my code and contributions.</p>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              github.com/profile
            </Link>
          </Card>

          {/* LinkedIn */}
          <Card className="p-8 border-border/40 bg-card/40 hover:bg-card/60 transition-colors flex flex-col items-center text-center">
            <div className="p-4 rounded-lg bg-primary/10 mb-6">
              <Linkedin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">LinkedIn</h3>
            <p className="text-muted-foreground mb-4">Connect with me professionally.</p>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              linkedin.com/in/profile
            </Link>
          </Card>
        </div>

        {/* Resume Section */}
        <Card className="p-8 md:p-12 border-border/40 bg-card/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Download My Resume</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Get a detailed overview of my professional experience, education, technical skills, and key
                achievements. The resume includes project highlights and quantifiable impacts from my work across
                various domains.
              </p>
              <Link href="#">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full md:w-auto"
                >
                  <Download size={16} /> Download Resume (PDF)
                </Button>
              </Link>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Format</h3>
                <p className="text-sm text-muted-foreground">PDF - Optimized for both digital and print</p>
              </div>
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Last Updated</h3>
                <p className="text-sm text-muted-foreground">December 2024</p>
              </div>
              <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">File Size</h3>
                <p className="text-sm text-muted-foreground">~500 KB - Fast download</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto border-t border-border/40">
        <h2 className="text-3xl font-bold text-foreground mb-12">Frequently Asked Questions</h2>

        <div className="space-y-6">
          <Card className="p-6 border-border/40 bg-card/40">
            <h3 className="font-semibold text-foreground mb-2">What kind of projects are you interested in?</h3>
            <p className="text-muted-foreground text-sm">
              I'm particularly interested in projects involving AI integration, backend systems at scale, and full-stack
              development. I enjoy working on problems that have real impact and allow me to learn new technologies.
            </p>
          </Card>

          <Card className="p-6 border-border/40 bg-card/40">
            <h3 className="font-semibold text-foreground mb-2">What's your typical response time?</h3>
            <p className="text-muted-foreground text-sm">
              I aim to respond to all inquiries within 24 hours. If it's urgent, feel free to reach out through multiple
              channels.
            </p>
          </Card>

          <Card className="p-6 border-border/40 bg-card/40">
            <h3 className="font-semibold text-foreground mb-2">Do you work on short-term projects?</h3>
            <p className="text-muted-foreground text-sm">
              Yes, I'm open to short-term contracts, freelance projects, and consulting work. I prefer projects where I
              can make a meaningful contribution.
            </p>
          </Card>

          <Card className="p-6 border-border/40 bg-card/40">
            <h3 className="font-semibold text-foreground mb-2">What's your rate for freelance work?</h3>
            <p className="text-muted-foreground text-sm">
              Rates vary depending on project scope, complexity, and timeline. I'm happy to discuss and provide a custom
              quote based on your specific needs.
            </p>
          </Card>

          <Card className="p-6 border-border/40 bg-card/40">
            <h3 className="font-semibold text-foreground mb-2">Can you help with existing projects?</h3>
            <p className="text-muted-foreground text-sm">
              Absolutely. I can assist with debugging, optimization, architectural improvements, or taking projects to
              the next level. Let's discuss what you need.
            </p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto border-t border-border/40">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Ready to Work Together?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and see if we're a good fit. I'm excited to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="mailto:contact@yuviii.in">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
              >
                <Mail size={16} /> Send Email
              </Button>
            </a>
            <Link href="/projects">
              <Button
                size="lg"
                variant="outline"
                className="border-border/40 hover:bg-card/60 bg-transparent gap-2 w-full sm:w-auto"
              >
                View My Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
