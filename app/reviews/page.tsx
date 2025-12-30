import { getAllReviews } from "@/lib/api"
import { getAllCategories } from "@/lib/products-data"
import { ReviewsFilter } from "@/components/reviews-filter"

export default function ReviewsPage() {
  const allReviews = getAllReviews()
  const allCategories = getAllCategories()

  const categories = [
    { value: "all", label: "All Reviews" },
    ...allCategories.map(cat => ({ value: cat.slug, label: cat.name }))
  ]

  return (
    <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">All Product Reviews</h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Browse our complete collection of {allReviews.length} camping and outdoor gear reviews, all tested by our
            expert team.
          </p>
        </div>

        <ReviewsFilter reviews={allReviews} categories={categories} />
      </div>
    </main>
  )
}
