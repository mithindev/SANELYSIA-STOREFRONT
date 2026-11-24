# SAN ELYSIA — Headless E-Commerce Storefront

> Production-grade headless e-commerce presentation layer for **SAN ELYSIA**, a premium science-informed skincare brand. Built with Next.js 16 (App Router), TypeScript (Strict), Tailwind CSS 4, and server-authoritative commerce boundaries.

---

## 1. Overview & Architecture

SAN ELYSIA is engineered as a decoupled storefront presentation layer connecting to an authoritative headless commerce engine. The backend remains the single source of truth for catalogue pricing, multi-branch stock availability, shopping carts, and order checkout.

### Core Technology Stack
- **Framework:** Next.js 16 (App Router, Turbopack, React 19)
- **Language:** TypeScript 5.7+ (strict mode enabled, 0 `any`)
- **Styling:** Tailwind CSS 4 (token-driven, `@theme` CSS custom properties)
- **UI Primitives:** Custom accessible components & Lucide Icons
- **Backend Integration:** Typed, server-only client layer (`src/lib/backend/client.ts`)
- **Validation:** Zod environment validation (`src/lib/env/index.ts`)
- **Testing:** Vitest, React Testing Library, and Playwright verification

---

## 2. Directory Structure

```text
SANELYSIA-STOREFRONT-WEBSITE/
├── docs/
│   └── architecture/
│       ├── discovery-report.md           # Repository & backend audit
│       ├── backend-contract-map.md       # Authoritative API schemas & DTOs
│       ├── architecture-decisions.md     # ADR records (001–004)
│       └── frontend-guidelines.md        # Tokens, a11y & RSC guidelines
├── public/
│   ├── images/
│   │   ├── brand/                        # Official vector SVGs & logos
│   │   ├── products/                     # Authentic serum photography
│   │   └── hero/                         # Cropped editorial hero assets
├── src/
│   ├── app/
│   │   ├── layout.tsx                    # Root layout with fonts & SEO
│   │   ├── globals.css                   # Tailwind 4 tokens & highlights
│   │   ├── page.tsx                      # Homepage root
│   │   ├── error.tsx                     # Route-level error boundary
│   │   ├── global-error.tsx              # Root global error handler
│   │   └── not-found.tsx                 # 404 luxury fallback
│   ├── components/
│   │   ├── ui/                           # Button, Container, Badge
│   │   └── layout/                       # AnnouncementBar, Header, Drawer
│   ├── features/
│   │   └── home/                         # HeroSection, BenefitRow, RitualCard
│   ├── lib/
│   │   ├── backend/                      # Typed server-only client & errors
│   │   ├── env/                          # Zod environment validation
│   │   └── utils/                        # Formatting & class merging
│   └── tests/
│       └── setup.ts                      # Vitest test environment
├── scripts/
│   └── visual-verify.mjs                 # Cross-viewport visual auditor
├── .env.example
├── next.config.ts
├── tsconfig.json
├── eslint.config.mjs
└── package.json
```

---

## 3. Getting Started

### Prerequisites
- Node.js >= 20.x (tested on v26.12.1)
- npm >= 10.x

### Installation
```bash
git clone <repository>
cd SANELYSIA-STOREFRONT-WEBSITE
npm install
```

### Environment Configuration
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Set your headless commerce backend URL and tenant publishable key:
```env
NEXT_PUBLIC_STOREFRONT_API_URL=http://localhost:5098
NEXT_PUBLIC_STOREFRONT_KEY=pk_test_sanelysia_storefront_live
```

---

## 4. Development & Build Scripts

| Script | Purpose |
|:---|:---|
| `npm run dev` | Starts local Next.js development server (Turbopack) |
| `npm run build` | Compiles production Next.js build |
| `npm run start` | Runs compiled production build |
| `npm run lint` | Runs ESLint validation across project |
| `npm run typecheck` | Validates TypeScript with strict type-safety (`tsc --noEmit`) |
| `npm run test` | Runs unit and component tests with Vitest |
| `node scripts/visual-verify.mjs` | Runs headless browser cross-device visual check |

---

## 5. Architectural Principles

1. **Server-Authoritative:** Product availability, currency calculations (strictly in integer paise), and order states originate from the commerce engine.
2. **Server Components by Default:** Client-side JavaScript is confined to interactive UI micro-islands (mobile navigation, cart drawers).
3. **Restrained Luxury Palette:** Light warm chocolate (`#3D271D`), creamy ivory (`#FAF7F2`), muted champagne (`#C3A27B`), and authentic dusty mauve (`#A96D7D`) isolated strictly to product photography.
