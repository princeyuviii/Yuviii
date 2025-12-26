import { Card } from "@/components/ui/card"

export interface TechGridItem {
  name: string
  icon?: string
}

export interface TechGridProps {
  items: TechGridItem[]
}

export function TechGrid({ items }: TechGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Card
          key={item.name}
          className="p-6 flex items-center justify-center text-center border-border/40 hover:border-primary/50 hover:bg-card/60 transition-all cursor-pointer"
        >
          <div>
            {item.icon && <div className="text-2xl mb-2">{item.icon}</div>}
            <p className="text-sm font-medium text-foreground">{item.name}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
