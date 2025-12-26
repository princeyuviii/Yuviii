import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { TechGrid } from "@/components/tech-grid"
import { ProjectCard } from "@/components/project-card"
import { CTASection } from "@/components/cta-section"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 max-w-6xl mx-auto">
        <div className="space-y-8 mb-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
              Yuvraj Singh Rathore
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">Software Engineer | AI & Full-Stack</p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I build intelligent systems and scalable web applications. Passionate about AI, backend architecture, and
            creating elegant solutions to complex problems. Currently working on cutting-edge projects that bridge
            software engineering and artificial intelligence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/projects">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 w-full sm:w-auto"
              >
                View Projects <ArrowRight size={16} />
              </Button>
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-border/40 hover:bg-card/60 bg-transparent gap-2 w-full sm:w-auto"
              >
                <Github size={16} /> GitHub
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-border/40 hover:bg-card/60 bg-transparent gap-2 w-full sm:w-auto"
              >
                <Linkedin size={16} /> LinkedIn
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto border-t border-border/40">
        <SectionHeader
          subtitle="Services"
          title="What I Do"
          description="Specialized expertise in building scalable systems, AI-driven applications, and modern web platforms."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/40 hover:bg-card/60 transition-colors">
            <h3 className="text-xl font-bold text-foreground">Backend Engineering</h3>
            <p className="text-muted-foreground leading-relaxed">
              Design and implement robust APIs, microservices, and database architectures. Expertise in Python, Node.js,
              and cloud-native solutions.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/40 hover:bg-card/60 transition-colors">
            <h3 className="text-xl font-bold text-foreground">AI & Machine Learning</h3>
            <p className="text-muted-foreground leading-relaxed">
              Build intelligent systems using LLMs, RAG pipelines, and ML models. Integration of AI into production
              applications.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/40 hover:bg-card/60 transition-colors">
            <h3 className="text-xl font-bold text-foreground">Full-Stack Development</h3>
            <p className="text-muted-foreground leading-relaxed">
              Create end-to-end web applications with modern frameworks. Focus on performance, scalability, and user
              experience.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto border-t border-border/40">
        <SectionHeader
          subtitle="Tech Stack"
          title="Technologies I Use"
          description="A curated set of tools and frameworks for building modern applications."
        />

        <TechGrid
          items={[
            { name: "Python" },
            { name: "TypeScript" },
            { name: "React" },
            { name: "Next.js" },
            { name: "Node.js" },
            { name: "PostgreSQL" },
            { name: "FastAPI" },
            { name: "TailwindCSS" },
            { name: "AWS" },
            { name: "Docker" },
            { name: "LangChain" },
            { name: "GraphQL" },
          ]}
        />
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto border-t border-border/40">
        <SectionHeader
          subtitle="Portfolio"
          title="Featured Projects"
          description="Recent projects showcasing my expertise in full-stack development, AI integration, and system design."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <ProjectCard
            featured
            title="AI Content Platform"
            description="A sophisticated platform for generating, managing, and publishing AI-assisted content at scale."
            problem="Creating quality content at scale is time-consuming and resource-intensive for most organizations."
            solution="Built a RAG-powered system that ingests brand guidelines and generates contextually relevant content. Integrated with popular publishing platforms for seamless workflow."
            outcome="Reduced content creation time by 70% while maintaining quality. Powered by Claude AI and vector databases for semantic search."
            technologies={["Python", "FastAPI", "LangChain", "PostgreSQL", "React"]}
            links={{
              github: "https://github.com",
              live: "https://example.com",
            }}
          />

          <ProjectCard
            featured
            title="Real-time Analytics Dashboard"
            description="Enterprise-grade dashboard for monitoring and analyzing system metrics across distributed infrastructure."
            problem="Teams lacked real-time visibility into system performance metrics and needed complex custom dashboards."
            solution="Created a modular dashboard system with WebSocket support for live data updates. Built custom visualization components for different data types."
            outcome="Enabled teams to respond to issues 5x faster. Processed 1M+ events per second with <100ms latency."
            technologies={["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "TailwindCSS"]}
            links={{
              github: "https://github.com",
              live: "https://example.com",
            }}
          />
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline" className="border-border/40 hover:bg-card/60 bg-transparent gap-2">
              View All Projects <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Experience Summary Section */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto border-t border-border/40">
        <SectionHeader
          subtitle="Background"
          title="Experience"
          description="Building products and solving problems across various domains."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/40">
            <div className="text-2xl font-bold text-primary">3+</div>
            <p className="font-semibold text-foreground">Years of Experience</p>
            <p className="text-sm text-muted-foreground">
              Working on full-stack and backend systems at various scales.
            </p>
          </div>

          <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/40">
            <div className="text-2xl font-bold text-primary">15+</div>
            <p className="font-semibold text-foreground">Projects Shipped</p>
            <p className="text-sm text-muted-foreground">From MVPs to production systems serving thousands of users.</p>
          </div>

          <div className="space-y-4 p-6 rounded-lg border border-border/40 bg-card/40">
            <div className="text-2xl font-bold text-primary">5+</div>
            <p className="font-semibold text-foreground">AI/ML Integrations</p>
            <p className="text-sm text-muted-foreground">
              LLM applications, RAG systems, and machine learning pipelines.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link href="/experience">
            <Button size="lg" variant="outline" className="border-border/40 hover:bg-card/60 bg-transparent gap-2">
              View Full Timeline <ArrowRight size={16} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA Section */}
      <CTASection
        title="Let's Build Something Great"
        description="Interested in discussing a project, sharing ideas, or exploring opportunities? I'm always open to connecting with talented people and interesting problems."
        primaryButton={{
          label: "Get in Touch",
          href: "/contact",
        }}
        secondaryButton={{
          label: "View My Work",
          href: "/projects",
        }}
      />

      <Footer />
    </main>
  )
}
