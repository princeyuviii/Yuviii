import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

export interface ProjectCardProps {
  title: string
  description: string
  problem?: string
  solution?: string
  outcome?: string
  technologies: string[]
  links?: {
    github?: string
    live?: string
  }
  featured?: boolean
}

export function ProjectCard({
  title,
  description,
  problem,
  solution,
  outcome,
  technologies,
  links,
  featured = false,
}: ProjectCardProps) {
  return (
    <Card
      className={`p-6 md:p-8 border-border/40 hover:border-border/80 transition-colors ${
        featured ? "bg-gradient-to-br from-card to-card/50 border-primary/30" : "bg-card/40"
      }`}
    >
      <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 leading-relaxed">{description}</p>

      {problem && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Problem</h4>
          <p className="text-sm text-muted-foreground">{problem}</p>
        </div>
      )}

      {solution && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Solution</h4>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
      )}

      {outcome && (
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">Outcome</h4>
          <p className="text-sm text-muted-foreground">{outcome}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {links && (
        <div className="flex gap-4">
          {links.github && (
            <Link
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={16} /> Code
            </Link>
          )}
          {links.live && (
            <Link
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink size={16} /> Live
            </Link>
          )}
        </div>
      )}
    </Card>
  )
}
