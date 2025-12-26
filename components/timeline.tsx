import { Card } from "@/components/ui/card"

export interface TimelineItem {
  year: string
  title: string
  company?: string
  description: string
  points?: string[]
}

export interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div className="flex gap-8">
            {/* Timeline dot and line */}
            <div className="flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-primary mt-2" />
              {index !== items.length - 1 && <div className="w-1 h-24 bg-border/40 my-2" />}
            </div>

            {/* Content */}
            <Card className="flex-1 p-6 border-border/40 bg-card/40 hover:bg-card/60 transition-colors">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                <span className="text-sm font-semibold text-primary">{item.year}</span>
              </div>

              {item.company && <p className="text-sm text-muted-foreground mb-3">{item.company}</p>}

              <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

              {item.points && (
                <ul className="space-y-2">
                  {item.points.map((point, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </div>
        </div>
      ))}
    </div>
  )
}
