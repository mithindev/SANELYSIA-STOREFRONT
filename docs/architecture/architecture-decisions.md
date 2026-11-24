# SAN ELYSIA — Architecture Decision Records (ADR)

## ADR 001: Next.js 16 App Router as Foundation Framework
- **Status:** Approved
- **Context:** Storefront requires high performance (LCP < 2.5s), SEO optimization, React Server Components (RSC), image optimization, streaming, and modern routing.
- **Decision:** Use Next.js 16 App Router with React 19. All pages and data-fetching boundaries will use Server Components by default. Client components (`"use client"`) will be strictly scoped to interactive micro-islands (mobile menu drawer, interactive selectors, cart sidebar).
- **Consequences:** Maximizes performance, minimizes browser JavaScript execution overhead, and eliminates credential leakage to client bundles.

## ADR 002: Tailwind CSS 4 Token-Driven Design System
- **Status:** Approved
- **Context:** SAN ELYSIA requires a bespoke, restrained luxury skincare aesthetic (warm ivory background, light warm chocolate typography, restrained champagne accents, and authentic dusty mauve isolated to product photography).
- **Decision:** Utilize Tailwind CSS 4 with CSS-first `@theme` configuration and standard CSS custom properties. No runtime CSS-in-JS libraries or arbitrary ad-hoc styling.
- **Consequences:** Zero runtime CSS overhead, strict design token discipline, and immediate consistency across responsive breakpoints.

## ADR 003: Server-Authoritative Commerce State Management
- **Status:** Approved
- **Context:** E-commerce data (product catalogs, pricing, inventory stock, cart totals, and orders) must never diverge between client and backend.
- **Decision:** Backend remains the authoritative source of truth. No client-side catalog duplication (no Redux/Zustand mirror). Cart is synced with session token (`x-session-token`) via server actions / route handlers. Filtering and pagination state are driven by URL search parameters.
- **Consequences:** Eliminates stale client-side price/stock bugs and ensures multi-branch inventory integrity.

## ADR 004: Centralized Server-Only Backend Client Layer
- **Status:** Approved
- **Context:** Direct calls to `fetch()` distributed across UI components lead to security leaks, inconsistent error handling, and unversioned endpoints.
- **Decision:** All communication with the headless commerce API is routed through a single typed client in `src/lib/backend/client.ts`. Backend contracts are formally typed in `src/lib/backend/contracts/`. Errors are normalized to standard domain models in `src/lib/backend/errors.ts`.
- **Consequences:** Centralizes API credentials, provides deterministic retry/timeout handling, and ensures presentation components receive clean presentation models via dedicated mappers.
