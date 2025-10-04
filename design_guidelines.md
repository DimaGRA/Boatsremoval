# Design Guidelines: Junk Boat Removal Website

## Design Approach

**Reference-Based Approach**: Drawing inspiration from Yandex Delivery's vibrant, service-focused design and the Russian junk removal site's practical, conversion-optimized structure. This creates a bold, trustworthy service website that prioritizes ease of booking and clear pricing.

**Key Design Principles**:
- High-contrast, energetic yellow-and-black color scheme for immediate recognition
- Service-first layout with prominent CTAs and phone numbers
- Visual item selectors making it easy to identify removable items
- Trust-building through transparent pricing and clear service options
- Multi-language accessibility for global maritime markets

## Core Design Elements

### A. Color Palette

**Primary Colors**:
- Bright Yellow: `48 100% 50%` - Primary brand color for CTAs, headers, accents
- Deep Yellow: `45 100% 45%` - Hover states, secondary emphasis
- Pure Black: `0 0% 0%` - Text, headers, navigation
- Charcoal: `0 0% 15%` - Secondary text, borders

**Supporting Colors**:
- White: `0 0% 100%` - Backgrounds, card surfaces
- Light Gray: `0 0% 96%` - Section backgrounds, subtle dividers
- Medium Gray: `0 0% 60%` - Helper text, disabled states

**Semantic Colors**:
- Success Green: `142 70% 45%` - Confirmation messages
- Alert Red: `0 85% 60%` - Urgent notices, warnings

### B. Typography

**Font Families**:
- Primary: Inter (Google Fonts) - Clean, modern sans-serif for all body text and UI
- Headers: Inter Bold/ExtraBold - Strong, authoritative headings

**Type Scale**:
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-extrabold
- Section Headers: text-3xl md:text-4xl, font-bold
- Subsections: text-2xl md:text-3xl, font-semibold
- Body Large: text-lg, font-normal
- Body Regular: text-base, font-normal
- Small Text: text-sm, font-normal
- Phone Numbers: text-2xl md:text-3xl, font-bold (prominent display)

### C. Layout System

**Spacing Primitives**: Use Tailwind spacing units of 4, 6, 8, 12, 16, 20, and 24 for consistent vertical and horizontal rhythm (p-4, m-8, gap-6, etc.).

**Container Strategy**:
- Max-width containers: `max-w-7xl mx-auto px-6 lg:px-8`
- Full-width sections with inner containers for controlled content width
- Section padding: `py-16 md:py-20 lg:py-24`

**Grid Systems**:
- Item grids: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` for boat/equipment showcases
- Pricing cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` for size-based pricing
- Service features: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

### D. Component Library

**Navigation**:
- Fixed header with bright yellow background, black text
- Logo on left, phone number prominently in center-right, language switcher on far right
- Hamburger menu for mobile with slide-out drawer
- Dropdown menus for service categories (boats, jet skis, docks, equipment)

**Hero Section**:
- Full-width hero with large background image of boats/marina
- Yellow semi-transparent overlay (bg-yellow-500/20) for readability
- Centered content with massive headline, subheadline, dual CTAs
- Primary CTA: Solid yellow button, secondary CTA: Outline white button with blur backdrop
- Phone number displayed prominently below CTAs

**Service Calculator/Selector**:
- Interactive card grid showing visual representations of removable items
- Each card: Image of item, item name, base price
- Checkboxes or quantity selectors for building custom quote
- Running total displayed in sticky footer or sidebar
- Yellow accent borders on selected items

**Pricing Cards**:
- Four-column grid for different boat sizes (small, medium, large, commercial)
- Each card: Boat size illustration, cubic capacity, base price, "Book Now" CTA
- Yellow background for featured/popular option
- White cards with black borders for others

**Item Grid**:
- Masonry or standard grid of removable marine items with images
- Each item: High-quality photo, item name, starting price
- Hover effect: Yellow border, slight scale increase
- Quick-add buttons for calculator

**Contact Form**:
- Two-column layout: Form on left, contact info/map on right
- Yellow submit button, black form labels
- Fields: Name, Phone, Email, Location, Boat Type, Message
- Validation with inline error messages in red

**Trust Indicators**:
- Customer testimonials with photos in card format
- Before/after removal photo galleries
- Service guarantees in icon + text format
- Response time badges ("Within 1 Hour Response")

**Footer**:
- Dark background (black or charcoal)
- Multi-column layout: Services, Locations, Contact, Legal
- Newsletter signup with yellow CTA button
- Social media icons
- Copyright and trust badges

### E. Images

**Hero Image**:
Large, high-quality photograph of a cluttered marina or old boat being removed. Should convey the "before" state that the service solves. Image should be 1920x1080 minimum, with slightly desaturated treatment to allow yellow overlay to pop.

**Service Item Images**:
Individual product-style photos of various marine items on white/transparent backgrounds:
- Different boat types (sailboats, motorboats, fishing boats, jet skis)
- Marine equipment (anchors, buoys, dock sections, boat trailers)
- 400x400px minimum, consistent styling across all items

**Before/After Gallery**:
Split-screen or side-by-side comparisons showing cluttered marinas/properties transformed to clean spaces. 6-8 image pairs minimum.

**Background Patterns**:
Subtle nautical patterns (waves, anchors) in very light gray for section dividers.

## Multi-Language Implementation

**Language Switcher**:
- Dropdown in header with flag icons
- Supported languages: English (default), Spanish, Portuguese, French, Mandarin
- Maintains URL structure with language prefix (/en/, /es/, etc.)
- All pricing, CTAs, and navigation translated

**Text Handling**:
- Use language-neutral icons and imagery
- Ensure sufficient space in design for longer translations (German, Russian)
- Phone numbers format appropriately per locale

## Responsive Behavior

**Mobile (< 768px)**:
- Single-column layouts
- Stacked navigation with hamburger menu
- Touch-friendly button sizes (min 44px height)
- Click-to-call phone numbers
- Simplified calculator with accordion sections

**Tablet (768px - 1024px)**:
- Two-column grids where appropriate
- Maintained visual hierarchy
- Optimized image sizes

**Desktop (> 1024px)**:
- Full multi-column layouts
- Hover interactions enabled
- Spacious padding and margins

This design creates a high-energy, conversion-focused website that makes junk boat removal easy to understand, price, and book, while maintaining global accessibility through multi-language support.