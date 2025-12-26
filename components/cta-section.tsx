import { Button } from "@/components/ui/button"
import Link from "next/link"

export interface CTASectionProps {
  title: string
  description: string
  primaryButton: {
    label: string
    href: string
  }
  secondaryButton?: {
    label: string
    href: string
  }
}

export function CTASection({ title, description, primaryButton, secondaryButton }: CTASectionProps) {
  return (
    <section className="py-20 md:py-32 text-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{title}</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{description}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButton.href}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {primaryButton.label}
            </Button>
          </Link>
          {secondaryButton && (
            <Link href={secondaryButton.href}>
              <Button size="lg" variant="outline" className="border-border/40 hover:bg-card/60 bg-transparent">
                {secondaryButton.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
