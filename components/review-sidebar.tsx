import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, ArrowRight, Package } from "lucide-react"
import { getAllChecklists, getAllReviews, Checklist, Review } from "@/lib/api"
import { TableOfContents } from "@/components/table-of-contents"
import { RelatedProductImage } from "@/components/related-product-image"

interface ReviewSidebarProps {
  category?: string
  currentSlug: string
}

export function ReviewSidebar({ category, currentSlug }: ReviewSidebarProps) {
  const allChecklists = getAllChecklists()
  const allReviews = getAllReviews()

  // Get related checklist based on category
  let relatedChecklist: Checklist | null = null
  if (category) {
    const categoryToChecklistMap: Record<string, string> = {
      "Camp Essentials": "camp-essentials-guide",
      "Cooking & Dining": "cooking-dining-guide",
      "Gear & Electronics": "gear-electronics-guide",
      "Safety & Navigation": "safety-navigation-guide",
    }
    
    const checklistSlug = categoryToChecklistMap[category]
    relatedChecklist = allChecklists.find(checklist => checklist.slug === checklistSlug) || null
  }

  // Get related products from same category (high rated, excluding current)
  const relatedProducts = category
    ? allReviews
        .filter(review => 
          review.frontmatter.category === category && 
          review.slug !== currentSlug &&
          (review.frontmatter.rating || 0) >= 4.5
        )
        .sort((a, b) => (b.frontmatter.rating || 0) - (a.frontmatter.rating || 0))
        .slice(0, 3)
    : []

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
                <RelatedProductImage
                  src={relatedChecklist.frontmatter.image}
                  alt={`${relatedChecklist.frontmatter.title} - Gear Checklist Preview`}
                  className="w-full h-32 object-cover rounded-lg"
                />
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Package className="h-5 w-5 text-primary" />
              Related Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {relatedProducts.map((product) => (
                <div
                  key={product.slug}
                  className="border border-border rounded-lg p-3 hover:border-primary/50 transition-all"
                >
                  <Link
                    href={`/review/${product.slug}`}
                    className="block group"
                  >
                    <div className="flex gap-3 mb-3">
                      <RelatedProductImage
                        src={product.frontmatter.image || "/placeholder.svg"}
                        alt={`${product.frontmatter.title} - Related Product | ${product.frontmatter.brand || 'Camping Gear'}`}
                        className="w-16 h-16 object-cover rounded flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                          {product.frontmatter.title}
                        </h5>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs font-semibold text-foreground">
                            {product.frontmatter.rating?.toFixed(1)}
                          </span>
                          <span className="text-xs text-muted-foreground">★</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  {product.frontmatter.amazonUrl && (
                    <Button 
                      asChild 
                      size="sm" 
                      className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white"
                    >
                      <a 
                        href={product.frontmatter.amazonUrl} 
                        target="_blank" 
                        rel="nofollow noopener noreferrer"
                      >
                        Check Price on Amazon
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </a>
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <Button asChild variant="ghost" size="sm" className="w-full mt-4">
              <Link href={`/reviews?category=${category?.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                View All in {category}
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
              <Link href="/reviews">All Reviews</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-full justify-start">
              <Link href="/checklists">Gear Checklists</Link>
            </Button>
            <Button asChild variant="ghost" size="sm" className="w-full justify-start">
              <Link href="/guides">Camping Guides</Link>
            </Button>
            {category && (
              <Button asChild variant="ghost" size="sm" className="w-full justify-start">
                <Link href={`/reviews?category=${category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                  {category} Reviews
                </Link>
              </Button>
            )}
            <Button asChild variant="ghost" size="sm" className="w-full justify-start">
              <Link href="/about">About Us</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

