"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink, Award } from "lucide-react"
import Link from "next/link"

interface ProductCardProps {
  title: string
  image: string
  rating: number
  reviewCount: number
  price: string
  summary: string
  amazonUrl: string
  asin?: string
  slug?: string
  linkType?: "product" | "review"
}

export function ProductCard({
  title,
  image,
  rating,
  reviewCount,
  price,
  summary,
  amazonUrl,
  asin,
  slug,
  linkType = "product",
}: ProductCardProps) {
  const linkUrl = linkType === "review" ? `/review/${slug || asin}` : `/product/${asin}`

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-muted relative overflow-hidden">
        {rating >= 4.7 && (
          <div className="absolute top-3 left-3 z-10 animate-in fade-in slide-in-from-top-2 duration-500">
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg px-3 py-1.5 text-xs font-bold">
              <Award className="h-3 w-3 mr-1" />
              Editor's Choice
            </Badge>
          </div>
        )}
        <img
          src={image || "/placeholder.svg"}
          alt={`${title} - Expert Review and Rating | Wild Nature Journey`}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            if (target.src !== "/placeholder.svg") {
              target.src = "/placeholder.svg"
            }
          }}
          loading="lazy"
        />
      </div>
      <CardContent className="p-6 flex-1 flex flex-col">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : i < rating
                      ? "fill-accent/50 text-accent"
                      : "fill-none text-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">{rating.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">Editor Rating</span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 leading-snug">{title}</h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed flex-1">{summary}</p>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <div className="flex flex-col gap-3 w-full">
          {linkType === "review" && asin && (
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              size="lg"
            >
              <Link href={linkUrl}>Read Expert Review</Link>
            </Button>
          )}
          <Button
            className="w-full bg-[#FF9900] hover:bg-[#FF9900]/90 text-white font-semibold shadow-md hover:shadow-lg transition-all"
            size="lg"
            onClick={() => window.open(amazonUrl, "_blank", "noopener,noreferrer")}
          >
            View on Amazon
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
