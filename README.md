# Affiliate Marketing Website Template

A modern, configuration-driven affiliate marketing website built with Next.js 16, featuring product reviews, buying guides, and Amazon affiliate integration. **Fully customizable through a single configuration file.**

## 🎯 Project Overview

This is a production-ready affiliate marketing website template with a **configuration-driven architecture**. Customize your entire site (branding, colors, content, navigation) by editing one file: `lib/site.config.ts`.

### Key Features

- **🎨 Configuration-Driven Design** - Customize everything from one central config file
- **30+ Product Reviews** - Pre-built product catalog with MDX content
- **📱 Fully Responsive** - Mobile-first design with Tailwind CSS 4
- **🚀 Static Export** - Deploy to any static hosting (Cloudflare, Netlify, Vercel)
- **🔍 SEO Optimized** - Structured data, sitemaps, and meta tags
- **💰 Amazon Associates Ready** - Built-in affiliate link management

## 🛠️ Technology Stack

### Core Framework
- **Next.js 16.0.10** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type-safe development (strict mode)

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework (CSS-first configuration)
- **shadcn/ui** - Component library built on Radix UI primitives
- **Lucide React** - Icon library

### Content & SEO
- **MDX** - Markdown with JSX for rich content
- **next-mdx-remote** - Server-side MDX rendering
- **JSON-LD** - Structured data for search engines

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## 📁 Project Structure

```
camping-website-template/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── product/[asin]/          # Dynamic product pages
│   ├── review/[slug]/           # MDX review articles
│   ├── category/[category]/     # Category listing pages
│   ├── guides/                  # Buying guides
│   └── layout.tsx               # Root layout
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── amazon-button.tsx        # Affiliate CTA button
│   ├── affiliate-disclosure.tsx # FTC compliance disclosure
│   ├── pros-cons.tsx            # Product pros/cons display
│   ├── site-header.tsx          # Site header
│   └── site-footer.tsx          # Site footer
├── lib/                         # Utilities and data
│   ├── site.config.ts           # ⭐ CENTRAL CONFIGURATION FILE
│   ├── products-data.ts         # Product catalog (30 products)
│   ├── theme-generator.ts       # Dynamic theme generation
│   └── utils.ts                 # Helper functions
├── content/                     # MDX content files
│   ├── reviews/                 # Review articles (30+ files)
│   └── guides/                  # Buying guides (15+ files)
├── public/                      # Static assets
│   └── images/                  # Product images
└── next.config.mjs              # Next.js configuration
```

## ⚙️ Configuration System

### Central Configuration File: `lib/site.config.ts`

**This is the most important file in the project.** All site customization happens here - no need to edit individual components.

#### What You Can Configure:

1. **Brand Settings**
   - Site name, tagline, description
   - Logo (Lucide icon, SVG, or image)

2. **Color Theme**
   - Light and dark mode colors
   - Uses OKLCH color space for better color accuracy
   - Automatically generates CSS variables

3. **Typography**
   - Font families for sans and mono

4. **SEO Settings**
   - Meta titles, descriptions, keywords
   - Site URL, author, social media handles

5. **Navigation Menu**
   - Header navigation items
   - Labels and links

6. **Homepage Content**
   - Hero section (title, subtitle, search placeholder)
   - Category cards (name, description, icon)
   - Featured products section
   - CTA/Newsletter section

7. **Page Content**
   - Reviews page title and description
   - Guides page title and description
   - Supports dynamic placeholders like `{count}`

8. **Footer Content**
   - About section
   - Link groups (categories, guides, resources, legal)
   - Copyright and affiliate notice

### Example Configuration:

```typescript
// lib/site.config.ts
export const siteConfig = {
  brand: {
    name: "Camera Lens Pro",
    tagline: "Find Your Perfect Camera & Lens",
    description: "Expert reviews and honest recommendations...",
    logo: {
      type: "lucide",
      icon: "Camera",
    }
  },

  theme: {
    colors: {
      light: {
        primary: "oklch(0.30 0.02 240)",
        accent: "oklch(0.60 0.20 25)",
        // ... more colors
      }
    }
  },

  pages: {
    reviews: {
      title: "All Product Reviews",
      description: "Browse our complete collection of {count} camera and lens reviews...",
    }
  },

  // ... more configuration
}
```

### How It Works:

1. **Edit `lib/site.config.ts`** - Change any configuration value
2. **Theme Generator** - `lib/theme-generator.ts` converts config to CSS variables
3. **Components Read Config** - All components import and use `siteConfig`
4. **Automatic Updates** - Changes apply across the entire site

### Quick Customization Guide:

```bash
# 1. Change site branding
# Edit: siteConfig.brand.name, tagline, description

# 2. Change colors
# Edit: siteConfig.theme.colors.light and .dark

# 3. Update navigation
# Edit: siteConfig.navigation.main

# 4. Customize homepage
# Edit: siteConfig.homepage.hero, categories, featuredProducts

# 5. Update page descriptions
# Edit: siteConfig.pages.reviews, guides
```

## 🎨 Key Features

### Product Catalog
- **30 Products** across 4 categories:
  - Tents (8 products)
  - Sleeping Bags (8 products)
  - Backpacks (7 products)
  - Camping Stoves (7 products)

### Product Data Structure
```typescript
interface Product {
  asin: string          // Amazon ASIN
  title: string         // Full product name
  brand: string         // Manufacturer
  features: string[]    // Key features
  amazonUrl: string     // Affiliate link
  imageUrl: string      // Product image
  rating?: number       // Star rating
  category: string      // Product category
  shortTitle?: string   // Display name
  summary?: string      // Brief description
  slug?: string         // URL slug
}
```

### Amazon Affiliate Components
- **AmazonButton**: Styled CTA with `rel="nofollow sponsored"` and `target="_blank"`
- **AffiliateDisclosure**: FTC-compliant disclosure notice
- **ProsCons**: Two-column pros/cons comparison display

### SEO Optimization
- Dynamic metadata generation for all pages
- JSON-LD structured data (Product, Review, BreadcrumbList)
- Semantic HTML with proper heading hierarchy
- Open Graph and Twitter Card meta tags
- Sitemap generation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the site.

### First Steps: Customize Your Site

1. **Edit the configuration file:**
   ```bash
   # Open lib/site.config.ts in your editor
   ```

2. **Change basic branding:**
   ```typescript
   brand: {
     name: "Your Site Name",
     tagline: "Your Tagline",
     description: "Your description",
   }
   ```

3. **Update colors (optional):**
   ```typescript
   theme: {
     colors: {
       light: {
         primary: "oklch(0.30 0.02 240)",  // Your primary color
         accent: "oklch(0.60 0.20 25)",     // Your accent color
       }
     }
   }
   ```

4. **Customize navigation:**
   ```typescript
   navigation: {
     main: [
       { label: "Home", href: "/" },
       { label: "Reviews", href: "/reviews" },
       // Add your menu items
     ]
   }
   ```

5. **Save and refresh** - Changes apply immediately in dev mode!

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📦 Build & Deployment

The project is configured for **static export** (JAMstack):

```javascript
// next.config.mjs
export default {
  output: 'export',
  images: { unoptimized: true }
}
```

### Build Output
```bash
npm run build
```

Generates static files in the `out/` directory, ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🎯 Page Routes

The site includes 15+ routes:

### Static Pages
- `/` - Homepage with hero, categories, featured products
- `/about` - About page
- `/contact` - Contact page
- `/guides/tent-buying-guide` - Tent buying guide
- `/guides/sleeping-bag-guide` - Sleeping bag guide
- `/guides/backpack-guide` - Backpack guide

### Dynamic Pages
- `/product/[asin]` - Individual product pages (30 products)
- `/category/[category]` - Category listing pages (4 categories)
- `/review/[slug]` - MDX review articles

## 🎨 Design System

### Tailwind CSS 4 Configuration
- CSS-first configuration in `app/globals.css`
- Custom color palette with CSS variables
- Dark mode support via `class` strategy
- Responsive breakpoints: sm, md, lg, xl, 2xl

### Component Library
- Built with **shadcn/ui** pattern
- Radix UI primitives for accessibility
- Customizable via `components.json`
- Components in `components/ui/`

## 📝 Content Management

### Site-Wide Content (via Configuration)

**Most content is managed through `lib/site.config.ts`:**

- ✅ Site name, tagline, description
- ✅ Navigation menu items
- ✅ Homepage hero section
- ✅ Category cards and descriptions
- ✅ Page titles and descriptions (Reviews, Guides)
- ✅ Footer content and links
- ✅ SEO metadata

**No need to edit individual component files!**

### MDX Content Files

Review articles are stored in `content/reviews/` as MDX files with frontmatter:

```mdx
---
title: "Product Review Title"
description: "SEO description"
date: "2024-01-15"
author: "Author Name"
category: "tents"
---

# Review Content

Your MDX content with React components...
```

### Adding New Products
Edit `lib/products-data.ts` to add products to the catalog:

```typescript
export const products: Product[] = [
  {
    asin: "B0XXXXXX",
    title: "Product Name",
    brand: "Brand Name",
    category: "tents",
    features: ["Feature 1", "Feature 2"],
    amazonUrl: "https://amazon.com/...",
    imageUrl: "/images/product.jpg",
    rating: 4.5
  }
]
```

## 🔗 Amazon Associates Integration

### Affiliate Links
All Amazon links include:
- Your Amazon Associates tracking ID
- `rel="nofollow sponsored"` attributes
- `target="_blank"` for external navigation

### Compliance
- FTC-compliant disclosure on all pages
- Clear affiliate relationship statements
- Proper link attribution

## 📊 SEO Features

- **Metadata**: Dynamic title, description, keywords for each page
- **Structured Data**: JSON-LD for products, reviews, breadcrumbs
- **Semantic HTML**: Proper heading hierarchy, landmarks
- **Image Optimization**: Alt text, lazy loading
- **Performance**: Static generation, optimized assets

## 🤝 Contributing

This is a template project. Feel free to:
- Customize the design and branding
- Add more products and categories
- Create additional review articles
- Modify the component library
- Enhance SEO and performance

## 📄 License

This project is open source and available for personal and commercial use.

## 🔧 Configuration Files

### Primary Configuration
- **`lib/site.config.ts`** - ⭐ **Main configuration file** - Edit this to customize your site
  - Brand settings (name, logo, tagline)
  - Color theme (light/dark mode)
  - SEO metadata
  - Navigation menu
  - Homepage content
  - Page descriptions
  - Footer content

### Technical Configuration
- `next.config.mjs` - Next.js configuration (static export)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration (strict mode)
- `postcss.config.mjs` - PostCSS with Tailwind CSS 4
- `components.json` - shadcn/ui configuration

### Data Files
- `lib/products-data.ts` - Product catalog (add/edit products here)
- `lib/theme-generator.ts` - Converts config colors to CSS variables (auto-generated)

## 🎯 Customization Workflow

1. **Edit `lib/site.config.ts`** for all branding, content, and styling
2. **Edit `lib/products-data.ts`** to add/modify products
3. **Add MDX files** in `content/` for reviews and guides
4. **Deploy** - Changes automatically apply across the entire site

## 📞 Support

For questions or issues with this template, please refer to the official documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)

---

## 🌟 Quick Start Summary

**To customize this template:**

1. Edit `lib/site.config.ts` - Change branding, colors, content
2. Edit `lib/products-data.ts` - Add your products
3. Add MDX files in `content/` - Create reviews and guides
4. Run `npm run build` - Generate static site
5. Deploy to Cloudflare Pages, Netlify, or Vercel

**That's it!** No need to edit individual component files.

---

Built with ❤️ for affiliate marketers and content creators
