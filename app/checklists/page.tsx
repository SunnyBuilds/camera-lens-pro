import type { Metadata } from "next"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tent, UtensilsCrossed, Zap, Shield } from "lucide-react"
import Link from "next/link"
import { getAllChecklists } from "@/lib/api"
import { BookOpen } from "lucide-react"

export const metadata: Metadata = {
  title: "Camping & Outdoor Gear Checklists - Wild Nature Journey",
  description: "Interactive checklists to help you choose the right camping and outdoor gear for your adventures.",
}

const iconMap: Record<string, typeof Tent> = {
  "beginners-camping-guide": Tent,
  "camp-essentials-guide": Tent,
  "cooking-dining-guide": UtensilsCrossed,
  "gear-electronics-guide": Zap,
  "safety-navigation-guide": Shield,
}

export default function ChecklistsPage() {
  const checklists = getAllChecklists()

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Camping & Outdoor Gear Checklists
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Interactive checklists to help you make informed decisions about your outdoor gear purchases.
            </p>
          </div>

          <div className="grid gap-6 mb-12">
            {checklists.map((checklist) => {
              const Icon = iconMap[checklist.slug] || BookOpen
              return (
                <Card key={checklist.slug} className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="rounded-full bg-primary/10 p-4">
                          <Icon className="h-8 w-8 text-primary" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-2">{checklist.frontmatter.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{checklist.frontmatter.description}</p>
                        <Button asChild variant="outline">
                          <Link href={`/checklists/${checklist.slug}`}>View Checklist</Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Need Help Choosing?</h2>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Contact our team for personalized gear recommendations
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}



