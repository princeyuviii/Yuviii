"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { ProjectCard } from "@/components/project-card"
import { Button } from "@/components/ui/button"

type ProjectCategory = "all" | "ai" | "fullstack" | "backend"

interface Project {
  id: string
  title: string
  description: string
  problem: string
  solution: string
  outcome: string
  technologies: string[]
  category: "ai" | "fullstack" | "backend"
  featured?: boolean
  links?: {
    github?: string
    live?: string
  }
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Content Platform",
    description: "A sophisticated platform for generating, managing, and publishing AI-assisted content at scale.",
    problem: "Creating quality content at scale is time-consuming and resource-intensive for most organizations.",
    solution:
      "Built a RAG-powered system that ingests brand guidelines and generates contextually relevant content. Integrated with popular publishing platforms for seamless workflow.",
    outcome:
      "Reduced content creation time by 70% while maintaining quality. Powered by Claude AI and vector databases for semantic search.",
    technologies: ["Python", "FastAPI", "LangChain", "PostgreSQL", "React"],
    category: "ai",
    featured: true,
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    id: 2,
    title: "Real-time Analytics Dashboard",
    description:
      "Enterprise-grade dashboard for monitoring and analyzing system metrics across distributed infrastructure.",
    problem: "Teams lacked real-time visibility into system performance metrics and needed complex custom dashboards.",
    solution:
      "Created a modular dashboard system with WebSocket support for live data updates. Built custom visualization components for different data types.",
    outcome: "Enabled teams to respond to issues 5x faster. Processed 1M+ events per second with <100ms latency.",
    technologies: ["Next.js", "TypeScript", "WebSocket", "PostgreSQL", "TailwindCSS"],
    category: "fullstack",
    featured: true,
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    id: 3,
    title: "LLM Fine-tuning Pipeline",
    description: "Automated pipeline for fine-tuning large language models on domain-specific data.",
    problem: "Generic LLMs perform poorly on specialized domains without extensive prompt engineering.",
    solution:
      "Created an end-to-end pipeline using LoRA for efficient fine-tuning, with automatic data preprocessing and quality validation.",
    outcome:
      "Achieved 40% improvement in domain-specific accuracy. Reduced fine-tuning costs by 60% compared to traditional approaches.",
    technologies: ["Python", "PyTorch", "Hugging Face", "AWS", "FastAPI"],
    category: "ai",
    links: {
      github: "https://github.com",
    },
  },
  {
    id: 4,
    title: "Distributed Task Queue",
    description: "High-performance task queue system for managing async jobs across multiple workers.",
    problem: "Existing solutions couldn't handle variable load with strict latency requirements.",
    solution: "Built a custom task queue using Redis and Python with intelligent load balancing and priority queues.",
    outcome: "Processed 100k+ tasks daily with <5ms p99 latency. Reduced infrastructure costs by 40%.",
    technologies: ["Python", "Redis", "Celery", "Docker", "PostgreSQL"],
    category: "backend",
    links: {
      github: "https://github.com",
    },
  },
  {
    id: 5,
    title: "E-commerce Platform Rebuild",
    description: "Complete redesign and rebuild of legacy e-commerce platform for 10x growth.",
    problem:
      "Monolithic architecture couldn't scale. Checkout failures during peak traffic caused significant revenue loss.",
    solution:
      "Migrated to microservices architecture using Next.js frontend and Node.js/Python backends with proper caching strategies.",
    outcome: "99.99% uptime, 10x faster checkout process. Handled 500k concurrent users during peak sales.",
    technologies: ["Next.js", "Node.js", "React", "PostgreSQL", "Redis", "Docker"],
    category: "fullstack",
    links: {
      github: "https://github.com",
      live: "https://example.com",
    },
  },
  {
    id: 6,
    title: "ML-Powered Recommendation Engine",
    description: "Personalized recommendation system using collaborative filtering and neural networks.",
    problem: "Generic recommendations had low CTR. Users needed truly personalized experiences.",
    solution:
      "Implemented hybrid approach combining collaborative filtering with deep learning for cold-start problems.",
    outcome: "Increased CTR by 35%. Reduced computation time from hours to milliseconds using model optimization.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "PostgreSQL", "FastAPI"],
    category: "ai",
    links: {
      github: "https://github.com",
    },
  },
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all")

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "all" || project.category === selectedCategory,
  )

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-20 md:pb-32 px-6 max-w-6xl mx-auto border-b border-border/40">
        <SectionHeader
          subtitle="Portfolio"
          title="My Projects"
          description="A collection of projects showcasing my expertise in full-stack development, AI integration, and backend engineering. Each project represents real-world problems solved with modern technologies."
        />
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 max-w-6xl mx-auto border-b border-border/40">
        <div className="flex flex-wrap gap-3">
          {[
            { value: "all" as ProjectCategory, label: "All Projects" },
            { value: "ai" as ProjectCategory, label: "AI & ML" },
            { value: "fullstack" as ProjectCategory, label: "Full-Stack" },
            { value: "backend" as ProjectCategory, label: "Backend" },
          ].map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setSelectedCategory(filter.value)}
              variant={selectedCategory === filter.value ? "default" : "outline"}
              className={selectedCategory === filter.value ? "bg-primary text-primary-foreground" : "border-border/40"}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} featured={project.featured} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found in this category.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  )
}
