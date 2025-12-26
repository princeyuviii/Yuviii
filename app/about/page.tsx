import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SectionHeader } from "@/components/section-header"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const frontendSkills = [
    "React",
    "TypeScript",
    "Next.js",
    "TailwindCSS",
    "Vue.js",
    "HTML/CSS",
    "Responsive Design",
    "Web Performance",
  ]

  const backendSkills = [
    "Python",
    "Node.js",
    "FastAPI",
    "Express.js",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "REST APIs",
    "Microservices",
    "Docker",
  ]

  const aimlSkills = [
    "LLMs",
    "RAG Systems",
    "Fine-tuning",
    "LangChain",
    "PyTorch",
    "Scikit-learn",
    "Vector Databases",
    "Prompt Engineering",
    "ML Pipelines",
  ]

  const toolsSkills = ["Git", "Docker", "AWS", "GitHub Actions", "Linux", "PostgreSQL", "Redis", "CI/CD", "Vercel"]

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 px-6 max-w-6xl mx-auto border-b border-border/40">
        <SectionHeader
          subtitle="About Me"
          title="Who I Am"
          description="A software engineer with a passion for building intelligent systems and solving complex problems through elegant code and thoughtful design."
        />
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 px-6 max-w-6xl mx-auto space-y-20">
        {/* About Me */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Engineering-Focused Problem Solver</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a software engineer with 3+ years of experience building production systems that scale. My journey
                started with a fascination for how things work, which evolved into a career focused on building robust,
                efficient, and intelligent software.
              </p>
              <p>
                My approach to engineering is methodical and user-centric. I believe great software solves real problems
                elegantly. Whether it's architecting a backend system to handle millions of requests or integrating AI
                into production applications, I focus on clean code, maintainability, and measurable impact.
              </p>
              <p>
                When I'm not coding, I enjoy exploring new AI advancements, contributing to open-source projects, and
                mentoring junior developers. I'm particularly interested in the intersection of AI and software
                engineering.
              </p>
            </div>
          </div>

          <Card className="p-8 border-border/40 bg-card/40">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Current Focus</p>
                <p className="text-foreground font-medium">AI & Backend Systems</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Building production AI systems and scalable backend infrastructure.
                </p>
              </div>
              <div className="border-t border-border/40 pt-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Location</p>
                <p className="text-foreground font-medium">India</p>
              </div>
              <div className="border-t border-border/40 pt-6">
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Availability</p>
                <p className="text-foreground font-medium">Open to collaboration</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Problem-Solving Mindset */}
        <div className="border-t border-border/40 pt-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Problem-Solving Mindset</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-6 border-border/40 bg-card/40">
              <h3 className="text-lg font-bold text-foreground mb-3">Research & Analysis</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Before writing a single line of code, I thoroughly understand the problem domain, constraints, and
                existing solutions. This prevents over-engineering and ensures solutions are grounded in reality.
              </p>
            </Card>
            <Card className="p-6 border-border/40 bg-card/40">
              <h3 className="text-lg font-bold text-foreground mb-3">Iterative Development</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I believe in building incrementally, getting feedback early, and refining based on real-world usage
                patterns. This approach reduces risk and ensures solutions evolve to meet actual needs.
              </p>
            </Card>
            <Card className="p-6 border-border/40 bg-card/40">
              <h3 className="text-lg font-bold text-foreground mb-3">Code Quality</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Clean, readable code is not optional. I write code that other engineers can understand and maintain.
                This includes proper testing, documentation, and following established patterns.
              </p>
            </Card>
            <Card className="p-6 border-border/40 bg-card/40">
              <h3 className="text-lg font-bold text-foreground mb-3">Performance & Scale</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                I optimize for real bottlenecks, not hypothetical ones. Whether it's database queries, API response
                times, or infrastructure costs, I measure, analyze, and improve systematically.
              </p>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="border-t border-border/40 pt-12">
          <h2 className="text-3xl font-bold text-foreground mb-12">Skills & Expertise</h2>

          <div className="space-y-8">
            {/* Frontend */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Backend & Infrastructure</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* AI/ML */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {aimlSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Tools & Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Learning & Growth */}
        <div className="border-t border-border/40 pt-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Current Learning Focus</h2>
          <Card className="p-8 border-border/40 bg-card/40">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Advanced AI Systems</h3>
                <p className="text-muted-foreground">
                  Diving deep into multi-agent systems, advanced RAG architectures, and production-grade AI
                  infrastructure.
                </p>
              </div>
              <div className="pt-4 border-t border-border/40">
                <h3 className="text-lg font-semibold text-foreground mb-2">Distributed Systems</h3>
                <p className="text-muted-foreground">
                  Exploring consensus algorithms, distributed databases, and system design patterns for planetary-scale
                  applications.
                </p>
              </div>
              <div className="pt-4 border-t border-border/40">
                <h3 className="text-lg font-semibold text-foreground mb-2">Open Source</h3>
                <p className="text-muted-foreground">
                  Contributing to projects that push the boundaries of web development and AI integration.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Career Direction */}
        <div className="border-t border-border/40 pt-12">
          <h2 className="text-3xl font-bold text-foreground mb-8">Career Direction</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              My goal is to work on high-impact problems that matter. I'm passionate about companies building products
              that improve people's lives, whether through better technology, scientific advancement, or solving
              real-world challenges.
            </p>
            <p>
              I'm particularly interested in roles where I can contribute to the AI revolution – building the
              infrastructure, tools, and applications that will define the next era of computing. Whether that's
              improving LLM systems, creating better developer tools, or building autonomous agents, I want to be at the
              forefront of innovation.
            </p>
            <p>
              Beyond individual contributions, I'm also interested in mentoring other engineers and fostering a culture
              of excellence, learning, and innovation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
