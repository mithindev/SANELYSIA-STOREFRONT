# SAN ELYSIA — Frontend Engineering Guidelines

## 1. Design Tokens & Styling Conventions

### 1.1 Color Tokens
All styling must strictly consume the defined semantic design tokens:
- `--color-bg-primary`: `#FAF7F2` (Creamy Warm Ivory)
- `--color-bg-secondary`: `#F3ECE2` (Muted Warm Stone)
- `--color-bg-surface`: `#FFFDF9` (Luminous Soft Cream)
- `--color-text-primary`: `#3D271D` (Light Warm Chocolate)
- `--color-text-secondary`: `#685346` (Medium Warm Cacao)
- `--color-text-muted`: `#8E7B6F` (Gentle Earth Tone)
- `--color-brand-primary`: `#5A3825` (Deep Warm Chocolate)
- `--color-brand-accent`: `#C3A27B` (Muted Warm Champagne)
- `--color-brand-highlight`: `#E6B994` (Soft Apricot Highlighter)
- `--color-border-subtle`: `#E7DDD2` (Warm Sand Border)
- `--color-product-mauve`: `#A96D7D` (Authentic Serum Bottle Mauve — product-specific only)

### 1.2 Typography
- **Headings & Editorial Titles:** Cormorant Garamond / Editorial Serif (`font-serif`), with intentional italic accents on select hero words.
- **UI & Body Copy:** Inter / Geist Sans (`font-sans`), clean, highly readable, with generous tracking (`tracking-wide` / `tracking-widest`) on uppercase navigation, eyebrow badges, and button text.

---

## 2. Component Architecture Boundaries

```
src/
├── app/                  # Routing, layouts, page composition, error boundaries
├── components/
│   ├── ui/               # Reusable UI atoms (Button, Badge, Card, Container)
│   ├── layout/           # Global shell (AnnouncementBar, Header, MobileNav, Footer)
│   └── shared/           # Cross-feature visual blocks
├── features/
│   ├── home/             # Homepage feature slice (HeroSection, BenefitRow, RitualCard)
│   ├── catalog/          # Future product grid & filters
│   ├── product/          # Future PDP details & variants
│   └── cart/             # Future slide-out cart & line items
└── lib/
    ├── backend/          # Server API client, DTO contracts, mappers, normalized errors
    ├── env/              # Strict schema validation for environment variables
    └── utils/            # Generic styling and formatting helpers
```

---

## 3. Accessibility Standards (WCAG 2.2 AA)
- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<aside>`).
- All interactive controls must be native HTML `<button>` or `<a>` elements with accessible labels (`aria-label` for icon-only buttons).
- Visible focus rings with high contrast (`focus-visible:ring-2 focus-visible:ring-[#5A3825]`).
- Screen reader-friendly announcement bar and drawer focus traps.
- Full support for `prefers-reduced-motion`.
