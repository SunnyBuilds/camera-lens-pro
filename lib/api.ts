import fs from "fs"
import path from "path"
import matter from "gray-matter"

const reviewsDirectory = path.join(process.cwd(), "content/reviews")
const guidesDirectory = path.join(process.cwd(), "content/guides")

// Reviews API
export interface ReviewFrontmatter {
  title: string
  date: string
  description: string
  updatedDate?: string
  asin?: string
  brand?: string
  category?: string
  rating?: number
  image?: string
  amazonUrl?: string
  pros?: string[]
  cons?: string[]
  [key: string]: any
}

export interface Review {
  slug: string
  frontmatter: ReviewFrontmatter
  content: string
}

export function getReviewSlugs(): string[] {
  if (!fs.existsSync(reviewsDirectory)) {
    return []
  }
  return fs
    .readdirSync(reviewsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getReviewBySlug(slug: string): Review | null {
  const fullPath = path.join(reviewsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as ReviewFrontmatter,
    content,
  }
}

export function getAllReviews(): Review[] {
  const slugs = getReviewSlugs()
  const reviews = slugs
    .map((slug) => getReviewBySlug(slug))
    .filter((review): review is Review => review !== null)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()
      return dateB - dateA
    })

  return reviews
}

// Guides API (formerly Tips)
export interface GuideFrontmatter {
  title: string
  date: string
  description: string
  category: string
  tags?: string[]
  image?: string
  readTime?: string
  updatedDate?: string
  [key: string]: any
}

export interface Guide {
  slug: string
  frontmatter: GuideFrontmatter
  content: string
}

export function getGuideSlugs(): string[] {
  if (!fs.existsSync(guidesDirectory)) {
    return []
  }
  return fs
    .readdirSync(guidesDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getGuideBySlug(slug: string): Guide | null {
  const fullPath = path.join(guidesDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    frontmatter: data as GuideFrontmatter,
    content,
  }
}

export function getAllGuides(): Guide[] {
  const slugs = getGuideSlugs()
  const guides = slugs
    .map((slug) => getGuideBySlug(slug))
    .filter((guide): guide is Guide => guide !== null)
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime()
      const dateB = new Date(b.frontmatter.date).getTime()
      return dateB - dateA
    })

  return guides
}

export function getGuidesByCategory(category: string): Guide[] {
  const allGuides = getAllGuides()
  if (category === "all") {
    return allGuides
  }
  return allGuides.filter((guide) => guide.frontmatter.category === category)
}

export function getGuideCategories(): string[] {
  const guides = getAllGuides()
  const categories = new Set<string>()
  guides.forEach((guide) => {
    if (guide.frontmatter.category) {
      categories.add(guide.frontmatter.category)
    }
  })
  return Array.from(categories).sort()
}

