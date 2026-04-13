# Task ID: 4 - ServiceDetailPage.tsx Complete Rewrite

## Agent: Service Detail Enhancer

## Task
Completely rewrite `/home/z/my-project/src/components/pages/ServiceDetailPage.tsx` with 4 new sections while preserving all existing data.

## Work Log
- Read existing ServiceDetailPage.tsx (698 lines) and analyzed all 5 services with full data
- Read worklog.md for project context and existing patterns
- Reviewed Router.tsx API: `navigate(arg, slug?)` with two-argument form
- Reviewed FadeIn, SectionHeading shared components
- Checked UI component library (Input, Label, Card, Badge, Accordion, Button all available)
- Reviewed `/api/quote` endpoint: expects `{ name, phone, email, service, message }`
- Studied existing spinner pattern from ContactPage/AreasPage
- Studied existing toast usage pattern from AreasPage

## Changes Made

### Preserved (identical)
- All 5 services in `servicesData` array with complete data (390+ lines)
- `ServiceData` interface
- `benefitIcons` array
- Hero Banner section (breadcrumb, icon, title, subtitle, CTAs)
- Benefits Section
- Process Section
- FAQ Section (Accordion)
- CTA Section
- "Service not found" fallback

### NEW Section A: Pricing Section
- Inserted after Hero, before Problem
- Single centered card with DollarSign icon, service label, large price text in brand-orange
- Prices: air-duct $299, dryer-vent $149, hvac $399, mold-removal $499, air-quality $199
- Disclaimer text and two buttons (Get Free Quote + Call)
- `pricingMap` and `serviceLabelMap` record objects

### NEW Section B: Sidebar Quick Quote Form
- Problem section changed from 2-column to 3-column (lg:grid-cols-3)
- Left (lg:col-span-2): problem text + warning signs
- Right (lg:col-span-1): sticky Quick Quote card
  - Dark navy header with Send icon + "Get a Quick Quote" heading
  - Form fields: Name (required), Phone (required), Email
  - Pre-filled service badge showing current service title
  - "Request Quote" button with loading spinner state
  - POSTs to /api/quote with service pre-filled as service.title
  - Success/error toasts via sonner
  - Local useState for form state and loading state

### NEW Section C: Before & After Section
- Inserted after Benefits, before Process
- Side-by-side comparison: red-tinted "Before" card + green-tinted "After" card
- Each card: icon (AlertTriangle/CheckCircle2), heading, 3 bullet points
- Desktop: 2-column grid, Mobile: stacked
- `beforeAfterMap` record with service-specific before/after items for all 5 services

### NEW Section D: Related Services Section
- Inserted after FAQ, before CTA
- "You May Also Need" heading with SectionHeading
- Shows 3 other services (excluding current) as compact cards
- Each card: icon, title, description from `relatedDescMap`, "Learn More" link
- Cards clickable → navigate("service-detail", rel.slug)

### Additional Imports
- Added: `useState` from React
- Added: `Input`, `Label` from shadcn/ui
- Added: `DollarSign`, `Send` from lucide-react
- Added: `toast` from "sonner"

## Technical Details
- "use client" at top ✓
- All responsive (mobile-first) ✓
- Lint passes clean (zero errors) ✓
- Dev server running successfully ✓
- File size: ~680 lines (complete rewrite)
