import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Timeline } from "@/components/timeline"

export default function ExperiencePage() {
  const timelineItems = [
    {
      year: "2024 - Present",
      title: "Senior Software Engineer",
      company: "TechCorp AI",
      description: "Leading backend architecture and AI integration initiatives for the core platform.",
      points: [
        "Architected new microservices infrastructure using FastAPI and PostgreSQL, reducing API latency by 60%",
        "Led integration of Claude AI into product features, serving 100k+ requests daily",
        "Mentored 3 junior engineers and established coding standards for the team",
        "Reduced deployment time from 2 hours to 15 minutes with CI/CD optimization",
      ],
    },
    {
      year: "2023 - 2024",
      title: "Full-Stack Engineer",
      company: "StartupXYZ",
      description: "Built and scaled the platform from 0 to 1, handling both frontend and backend responsibilities.",
      points: [
        "Developed full-stack e-commerce platform using Next.js and Node.js, processing $1M+ in annual transactions",
        "Implemented real-time analytics dashboard with WebSocket architecture, handling 1M+ events/second",
        "Optimized database queries and added caching layer (Redis), improving response time by 5x",
        "Implemented automated testing and CI/CD pipeline, increasing deployment confidence",
      ],
    },
    {
      year: "2022 - 2023",
      title: "Backend Engineer",
      company: "DataSync Solutions",
      description: "Focused on building robust backend systems and data processing pipelines.",
      points: [
        "Developed distributed task queue system using Python and Redis, processing 100k+ tasks daily",
        "Built ETL pipeline for processing 10GB+ of data daily with 99.9% accuracy",
        "Optimized database performance, reducing query times from 5s to 100ms",
        "Created comprehensive API documentation and internal tools for developers",
      ],
    },
    {
      year: "2021 - 2022",
      title: "Freelance Developer",
      description: "Built multiple projects for clients ranging from startups to established companies.",
      points: [
        "Delivered 8+ projects for clients in e-commerce, SaaS, and fintech domains",
        "Specialized in rapid prototyping and MVP development",
        "Achieved 100% client satisfaction with strong focus on deadline delivery and communication",
      ],
    },
    {
      year: "2020 - 2021",
      title: "Junior Software Engineer",
      company: "WebDev Agency",
      description: "Started my professional career working on various web development projects.",
      points: [
        "Built responsive web applications using React and Vue.js for 15+ clients",
        "Learned full-stack development principles and best practices",
        "Contributed to open-source projects and built personal projects",
      ],
    },
    {
      year: "2020",
      title: "Education",
      description: "Completed formal education and self-learning journey in Computer Science.",
      points: [
        "Completed degree in Computer Science from University",
        "Focused on algorithms, data structures, and system design",
        "Built several projects to strengthen practical skills",
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 max-w-6xl mx-auto border-b border-border/40">
        <SectionHeader
          subtitle="Career Journey"
          title="Experience"
          description="A timeline of my professional growth, projects, and milestones. From my first role to my current position, I've worked on diverse challenges that shaped my engineering philosophy."
        />
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-32 px-6 max-w-4xl mx-auto">
        <Timeline items={timelineItems} />
      </section>

      <Footer />
    </main>
  )
}
