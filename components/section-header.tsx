export interface SectionHeaderProps {
  title: string
  subtitle?: string
  description?: string
}

export function SectionHeader({ title, subtitle, description }: SectionHeaderProps) {
  return (
    <div className="space-y-3 mb-12">
      {subtitle && <p className="text-xs font-semibold text-primary uppercase tracking-widest">{subtitle}</p>}
      <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{title}</h2>
      {description && <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">{description}</p>}
    </div>
  )
}
