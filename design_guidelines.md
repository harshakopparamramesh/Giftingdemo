# Corporate Gifting Platform - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based (E-commerce + Premium B2B)

Drawing inspiration from Shopify's product presentation, combined with LinkedIn's professional aesthetic and Stripe's refined simplicity. This creates a trustworthy, premium B2B experience that showcases products elegantly while maintaining corporate credibility.

**Core Principles:**
- Premium professionalism: Elevate products through sophisticated presentation
- Trust through clarity: Clean information hierarchy and generous spacing
- Tactile product focus: Large, high-quality imagery with intuitive interactions
- Corporate confidence: Balanced, structured layouts that inspire business decisions

---

## Typography System

**Font Families:**
- Primary (Headings): Inter or Poppins (600, 700 weights)
- Secondary (Body): Inter or Open Sans (400, 500 weights)
- Accent (Numbers/Stats): Tabular figures from primary font

**Type Scale:**
- Hero Headlines: text-5xl md:text-6xl lg:text-7xl (bold)
- Page Headers: text-4xl md:text-5xl (semibold)
- Section Titles: text-3xl md:text-4xl (semibold)
- Card Titles: text-xl md:text-2xl (semibold)
- Body Large: text-lg (regular)
- Body Default: text-base (regular)
- Body Small: text-sm (medium for labels, regular for secondary text)
- Captions: text-xs (medium, uppercase tracking-wide for categories)

**Line Heights:**
- Headlines: leading-tight (1.1-1.2)
- Subheadings: leading-snug (1.25-1.3)
- Body text: leading-relaxed (1.625)

---

## Layout System

**Spacing Units:** Consistent use of Tailwind units: 4, 6, 8, 12, 16, 20, 24, 32

**Container Strategy:**
- Full-width sections: w-full with inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Content sections: max-w-6xl mx-auto
- Text-heavy content: max-w-4xl mx-auto
- Product grids: max-w-7xl

**Vertical Rhythm:**
- Section padding: py-16 md:py-24 lg:py-32
- Component spacing: space-y-12 md:space-y-16
- Card internal padding: p-6 md:p-8

**Grid Systems:**
- Product catalog: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8
- Featured products (homepage): grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
- Corporate solutions features: grid-cols-1 md:grid-cols-2 gap-12
- Testimonials: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Admin dashboard stats: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4

---

## Component Library

### Navigation
**Header:** Sticky top navigation with backdrop-blur-md, padding py-4 md:py-6
- Logo (left), navigation links (center), CTA buttons (right)
- Mobile: Hamburger menu with slide-in drawer
- Include trust indicator: "Trusted by 500+ Corporations" with small badge

### Hero Section
**Layout:** Full-width with min-h-[600px] md:min-h-[700px], not forced to 100vh
- Large hero image with overlay gradient for text readability
- Two-column layout on desktop: 60% text content (left), 40% complementary image or form (right)
- Primary CTA with backdrop-blur-xl bg-white/20 treatment over image
- Includes: Headline, subheadline, dual CTAs ("Request Quote" primary, "View Catalog" secondary), trust badges row

### Product Cards
**Structure:** Elevated cards with hover transform and shadow transitions
- Image container: aspect-[4/3] with object-cover
- Content padding: p-6
- Category tag: Absolute positioned top-4 right-4, text-xs uppercase
- Title, brief description (2 lines max with line-clamp-2), price/pricing tier
- Footer with "View Details" and "Quick Enquire" actions
- Hover: -translate-y-2 transition-all duration-300

### Filters & Search (Products Page)
**Layout:** Sticky sidebar on desktop (w-64), collapsible panel on mobile
- Search bar at top with icon
- Filter sections: Category chips, Price range slider, Occasion checkboxes
- "Clear All" link at bottom
- Active filter count badge

### Product Detail Page
**Layout:** Two-column (md:grid-cols-2 gap-12)
- Left: Image gallery with main image + thumbnail strip below (grid-cols-4 gap-2)
- Right: Product information with structured sections:
  - Category breadcrumb
  - Product name (text-4xl)
  - Price/tier indicator
  - Description with rich formatting
  - Specifications grid (2 columns)
  - Customization options checkboxes
  - Quantity selector
  - "Enquire Now" prominent CTA
  - Trust elements: MOQ info, delivery timeline, return policy links

### Corporate Solutions Page
**Multi-section approach:**
1. Hero with value proposition
2. 3-column benefits grid with icons and descriptions
3. Process timeline (horizontal on desktop, vertical on mobile) with numbered steps
4. Customization showcase: 2-column layout with image galleries
5. Packaging options: Card grid showing different tiers
6. Client logos section: grid-cols-3 md:grid-cols-6 with grayscale hover-to-color effect
7. CTA section with contact form (2-column: form + contact info)

### Forms
**Contact/Enquiry Forms:**
- Single column layout with max-w-2xl
- Input fields: Consistent height (h-12), rounded-lg, border-2 focus states
- Labels: text-sm font-medium mb-2
- Required field indicators
- Field groups with space-y-4
- Submit button: Full width on mobile, auto on desktop, h-12
- Success/error states with inline validation messages

**Admin Dashboard Forms:**
- Two-column layout for product entry (image upload left, details right)
- Grouped sections with subtle dividers (border-t pt-6 mt-6)
- Drag-and-drop image upload area with preview
- Rich text editor for descriptions
- Price calculator for bulk pricing tiers

### Admin Dashboard
**Layout:** Sidebar navigation (w-64 fixed) + main content area
- Stats cards row: grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4
- Data tables: Responsive with horizontal scroll on mobile
- Action buttons grouped in corners
- Tabs for switching between inventory and orders
- Modal overlays for edit/delete confirmations

### Footer
**Rich footer with 4-column grid:**
- Column 1: Company info, logo, tagline
- Column 2: Quick links (Products, Solutions, About, Contact)
- Column 3: Categories (Employee Gifts, Festive, Premium, Custom)
- Column 4: Contact details, newsletter signup (compact form), social links
- Bottom bar: Copyright, Privacy Policy, Terms
- Padding: pt-16 pb-8

---

## Interactions & Animations

**Minimal, purposeful animations only:**
- Card hover: Subtle lift with shadow expansion
- Button hover: Slight scale (scale-105) with smooth transition
- Image galleries: Crossfade transitions (duration-300)
- Form validation: Shake animation on error
- Loading states: Simple spinner, no elaborate loaders
- No scroll-triggered animations, no parallax effects

---

## Images

### Required Images:

1. **Homepage Hero Image:** Wide-angle shot of elegantly packaged corporate gift hampers in premium setting (boardroom or executive office), 1920x1080px minimum, high quality
   - Placement: Full-width background with gradient overlay

2. **Category Featured Images (3-4):** 
   - Employee appreciation gifts setup
   - Festive corporate hampers
   - Premium executive gift boxes
   - Custom branded merchandise display
   - Each: 800x600px, card format

3. **Product Images:** 40-50 product photos showing:
   - Gift hampers from multiple angles
   - Packaging details
   - Unboxing experience shots
   - Scale reference images
   - Each: 800x800px square for consistency

4. **Corporate Solutions Page:** 
   - Bulk order warehouse/preparation area
   - Customization/branding process
   - Packaging options comparison
   - Each: 1200x800px

5. **About Page:** 
   - Team photo in professional setting
   - Office/warehouse facilities
   - Quality control process
   - Each: 1200x800px

6. **Client Logos:** 15-20 recognizable company logos for testimonial section, 200x80px, grayscale initially

**Image Treatment:** All product images should maintain consistent aspect ratios, use subtle shadows, and have clean white/neutral backgrounds for product shots. Lifestyle images should have natural lighting and premium aesthetic.