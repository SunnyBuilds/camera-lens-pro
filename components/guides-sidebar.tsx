import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, ArrowRight, Lightbulb } from "lucide-react"
import { getAllChecklists, getAllGuides, Checklist, Guide } from "@/lib/api"
import Image from "next/image"

interface GuidesSidebarProps {
  category: string
  currentSlug: string
}

export function GuidesSidebar({ category, currentSlug }: GuidesSidebarProps) {
  const allChecklists = getAllChecklists()
  const allGuides = getAllGuides()

  // Get related guides from same category (excluding current)
  const relatedGuides = allGuides
    .filter((guide) => guide.frontmatter.category === category && guide.slug !== currentSlug)
    .slice(0, 3)

  // Get related checklist based on category
  let relatedChecklist: Checklist | null = null
  const categoryToChecklistMap: Record<string, string> = {
    "Beginner Tips": "camp-essentials-guide",
    "Seasonal Tips": "camp-essentials-guide",
    "Safety & Survival": "safety-navigation-guide",
    "Destination Guides": "camp-essentials-guide",
  }

  const checklistSlug = categoryToChecklistMap[category]
  if (checklistSlug) {
    relatedChecklist = allChecklists.find((checklist) => checklist.slug === checklistSlug) || null
  }

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Related Checklist */}
      {relatedChecklist && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Related Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {relatedChecklist.frontmatter.image && (
                <div className="relative w-full h-32 rounded-lg overflow-hidden">
                  <Image
                    src={relatedChecklist.frontmatter.image}
                    alt={`${relatedChecklist.frontmatter.title} - Gear Checklist Preview`}
                    fill
                    className="object-cover"
                    sizes="300px"
                  />
                </div>
              )}
              <h4 className="font-semibold text-foreground leading-tight">
                {relatedChecklist.frontmatter.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {relatedChecklist.frontmatter.description}
              </p>
              <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={`/checklists/${relatedChecklist.slug}`}>
                  View Checklist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Related Guides */}
      {relatedGuides.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Related Guides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {relatedGuides.map((guide) => (
                <div
                  key={guide.slug}
                  className="border border-border rounded-lg p-3 hover:border-primary/50 transition-all"
                >
                  <Link href={`/guides/${guide.slug}`} className="block group">
                    <div className="flex gap-3 mb-2">
                      {guide.frontmatter.image && (
                        <div className="relative w-16 h-16 flex-shrink-0 rounded overflow-hidden">
                          <Image
                            src={guide.frontmatter.image}
                            alt={guide.frontmatter.title}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {guide.frontmatter.title}
                        </h5>
                        <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                          <span>{guide.frontmatter.readTime || "5 min read"}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" size="sm" className="w-full mt-4">
              <Link href={`/guides?category=${encodeURIComponent(category)}`}>
                View All {category}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick Links */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Button asChild variant="ghost" size="sm" className="w-full justify-start">
              <Link href="/guides">All Guides</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-full justify-start">
              <Link href="/checklists">Gear Checklists</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-full justify-start">
              <Link href="/reviews">Product Reviews</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-full justify-start">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}



