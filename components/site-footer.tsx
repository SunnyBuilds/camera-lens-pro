import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Wild Nature Journey</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for honest camping and outdoor gear reviews. We help adventurers find the perfect
              equipment.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/reviews?category=camp-essentials"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Camp Essentials
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews?category=cooking-dining"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Cooking & Dining
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews?category=gear-electronics"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gear & Electronics
                </Link>
              </li>
              <li>
                <Link
                  href="/reviews?category=safety-navigation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Safety & Navigation
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Guides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Guides
                </Link>
              </li>
              <li>
                <Link href="/guides?category=Beginner Tips" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Beginner Tips
                </Link>
              </li>
              <li>
                <Link href="/guides?category=Seasonal Tips" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Seasonal Tips
                </Link>
              </li>
              <li>
                <Link href="/guides?category=Safety %26 Survival" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Safety & Survival
                </Link>
              </li>
              <li>
                <Link href="/guides?category=Destination Guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Destination Guides
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/checklists" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Gear Checklists
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/disclosure" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            We earn from qualifying purchases as an Amazon Associate.
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Wild Nature Journey. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
