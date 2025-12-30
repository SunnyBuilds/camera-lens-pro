import type { Metadata } from "next"
import Link from "next/link"
import { getAllGuides, getGuideCategories } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { GuidesFilter } from "@/components/guides-filter"

export const metadata: Metadata = {
  title: "Camping Guides | Expert Outdoor Advice & Tips",
  description:
    "Discover expert camping guides, how-to articles, and seasonal advice for outdoor adventures. Learn from experienced campers and improve your wilderness skills.",
  keywords: [
    "camping guides",
    "outdoor advice",
    "camping how-to",
    "wilderness skills",
    "camping tips",
    "beginner camping",
    "seasonal camping",
  ],
  openGraph: {
    title: "Camping Guides | Expert Outdoor Advice & Tips",
    description:
      "Discover expert camping guides, how-to articles, and seasonal advice for outdoor adventures. Learn from experienced campers and improve your wilderness skills.",
    type: "website",
    url: "http://localhost:3000/guides",
  },
}

export default function GuidesPage() {
  const guides = getAllGuides()
  const categories = getGuideCategories()

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Camping Guides & Expert Advice
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Learn from experienced outdoor enthusiasts. Discover practical guides, essential skills, and expert advice
              to enhance your camping adventures.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <GuidesFilter guides={guides} categories={categories} />
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {categories.map((category) => {
              const categoryGuides = guides.filter((guide) => guide.frontmatter.category === category)
              return (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <CardDescription>{categoryGuides.length} articles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/guides?category=${encodeURIComponent(category)}`}>
                        View Articles
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Gear Up?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Check out our expert reviews and gear checklists to find the perfect equipment for your outdoor adventures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/reviews">Browse Gear Reviews</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/checklists">View Gear Checklists</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
