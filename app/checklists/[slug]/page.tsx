import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { getChecklistBySlug, getAllChecklists } from "@/lib/api"
import { Checklist, ChecklistItem } from "@/components/checklist"
import { ChecklistReset } from "@/components/checklist-reset"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { TableOfContents } from "@/components/table-of-contents"

export async function generateStaticParams() {
  const checklists = getAllChecklists()
  return checklists.map((checklist) => ({
    slug: checklist.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const checklist = getChecklistBySlug(slug)

  if (!checklist) {
    return {
      title: "Checklist Not Found",
    }
  }

  const { frontmatter } = checklist
  const publishedDate = new Date(frontmatter.date).toISOString()
  const modifiedDate = frontmatter.updatedDate 
    ? new Date(frontmatter.updatedDate).toISOString()
    : publishedDate

  return {
    title: `${frontmatter.title} - Interactive Checklist 2025 | Wild Nature Journey`,
    description: `${frontmatter.description} Expert checklist with tips, recommendations, and interactive features. Updated ${new Date(modifiedDate).getFullYear()}.`,
    keywords: [
      frontmatter.title,
      'camping checklist',
      'gear checklist',
      'outdoor gear',
      'camping tips',
      'gear recommendations',
    ],
    authors: [{ name: 'Wild Nature Journey' }],
    creator: 'Wild Nature Journey',
    publisher: 'Wild Nature Journey',
    openGraph: {
      title: `${frontmatter.title} - Interactive Checklist`,
      description: frontmatter.description,
      url: `http://localhost:3000/checklists/${slug}`,
      siteName: 'Wild Nature Journey',
      images: frontmatter.image ? [
        {
          url: frontmatter.image,
          width: 1200,
          height: 630,
          alt: frontmatter.title,
        },
      ] : [],
      locale: 'en_US',
      type: 'article',
      publishedTime: publishedDate,
      modifiedTime: modifiedDate,
      authors: ['Wild Nature Journey'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${frontmatter.title} - Interactive Checklist`,
      description: frontmatter.description,
      images: frontmatter.image ? [frontmatter.image] : [],
      creator: '@wildnaturejourney',
    },
    alternates: {
      canonical: `http://localhost:3000/checklists/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function ChecklistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const checklist = getChecklistBySlug(slug)

  if (!checklist) {
    notFound()
  }

  const image = checklist.frontmatter.image || "/placeholder.svg"

  // Generate unique storage keys for checklist items
  let itemCounter = 0
  const getStorageKey = () => `checklist-${slug}-${itemCounter++}`

  // Schema.org structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: checklist.frontmatter.title,
    description: checklist.frontmatter.description,
    image: checklist.frontmatter.image,
    datePublished: checklist.frontmatter.date,
    ...(checklist.frontmatter.updatedDate && { dateModified: checklist.frontmatter.updatedDate }),
    author: {
      '@type': 'Organization',
      name: 'Wild Nature Journey',
      url: 'http://localhost:3000',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Wild Nature Journey',
      url: 'http://localhost:3000',
      logo: {
        '@type': 'ImageObject',
        url: 'http://localhost:3000/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `http://localhost:3000/checklists/${slug}`,
    },
    articleSection: 'Gear Checklists',
    keywords: [
      checklist.frontmatter.title,
      'camping checklist',
      'outdoor gear',
      'gear selection',
    ].join(', '),
  }

  return (
    <>
      {/* JSON-LD structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex-1">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Left Sidebar - TOC */}
          <aside className="lg:col-span-3 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <TableOfContents source={checklist.content} />
            </div>
          </aside>
          
          {/* Main Content */}
          <div className="lg:col-span-9 order-1 lg:order-2">
          {/* Breadcrumbs */}
          <BreadcrumbNav
            items={[
              { label: "Checklists", href: "/checklists" },
              { label: checklist.frontmatter.title },
            ]}
          />
          
          <div className="mb-6">
            <Button asChild variant="ghost" size="sm">
              <Link href="/checklists">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Checklists
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-start justify-between gap-4 mb-4">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                {checklist.frontmatter.title}
              </h1>
              <ChecklistReset slug={slug} />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">{checklist.frontmatter.description}</p>
          </div>

          {/* Featured Image */}
          {image && (
            <div className="mb-12 rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={checklist.frontmatter.title}
                width={800}
                height={400}
                className="w-full h-[400px] object-cover"
              />
            </div>
          )}

          {/* MDX Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <MDXRemote
              source={checklist.content}
              components={{
                Checklist,
                ChecklistItem,
                h1: (props: any) => (
                  <h1 className="text-3xl font-bold text-foreground mb-4" {...props} />
                ),
                h2: (props: any) => (
                  <h2 className="text-2xl font-bold text-foreground mt-8 mb-6 border-t-2 border-border pt-8 first:border-t-0 first:pt-0 first:mt-0" {...props} />
                ),
                h3: (props: any) => (
                  <h3 className="text-xl font-bold text-foreground mt-6 mb-4" {...props} />
                ),
                p: (props: any) => (
                  <p className="text-foreground leading-relaxed mb-6" {...props} />
                ),
                ul: (props: any) => (
                  <div className="border-2 border-border rounded-xl p-6 mb-8">
                    <ul className="space-y-3 list-none" {...props} />
                  </div>
                ),
                li: (props: any) => (
                  <ChecklistItem storageKey={getStorageKey()} {...props} />
                ),
              }}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-primary rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-primary-foreground/90 mb-6">
              Browse our curated selection of camping and outdoor gear
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href={checklist.frontmatter.category ? `/reviews?category=${checklist.frontmatter.category}` : "/reviews"}>
                Shop Gear
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
    </main>
    </>
  )
}



