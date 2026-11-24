# SAN ELYSIA — Architecture Discovery Report

**Document Status:** Approved Baseline  
**Author:** Lead Frontend Architect & Senior Staff Engineer  
**Date:** November 24, 2026  
**Repository:** `SANELYSIA-STOREFRONT-WEBSITE`  
**Target URL Base:** Headless Storefront presentation layer  

---

## 1. Executive Summary

This discovery report records the architectural findings of the initial technical audit conducted across the SAN ELYSIA storefront repository (`/Users/mithindev/Desktop/O-COMMERCE/SANELYSIA-STOREFRONT-WEBSITE`), the accompanying headless commerce engine (`/Users/mithindev/Desktop/O-COMMERCE/IMA/IMA's FASHION/apps/server`), and brand design assets (`/Users/mithindev/Desktop/sanelysia asstets`).

The goal of this initiative is to establish a **production-grade headless e-commerce storefront** built with Next.js 16 (App Router), TypeScript (strict mode), and Tailwind CSS 4, designed specifically for **SAN ELYSIA**—a premium, science-informed luxury skincare brand.

---

## 2. Current Storefront State

- **Repository Location:** `/Users/mithindev/Desktop/O-COMMERCE/SANELYSIA-STOREFRONT-WEBSITE`
- **Initial State:** Greenfield repository initialized with Git on branch `main` and a single empty `README.MD`.
- **Legacy Artifacts:** No legacy code, obsolete frameworks, or conflicting build configurations exist within the storefront directory.
- **Architectural Opportunity:** We can implement a clean, production-grade frontend architecture adhering strictly to modern Next.js 16 App Router standards, zero technical debt, and typed integration boundaries from day zero.

---

## 3. Headless Backend Architecture & Capability Inventory

The storefront integrates with the **Optiviz Omnichannel Retail Engine** located at `/Users/mithindev/Desktop/O-COMMERCE/IMA/IMA's FASHION/apps/server`.

### 3.1 Backend Specifications
- **Protocol:** RESTful JSON over HTTPS
- **Base Path:** `/api/v1/storefront`
- **Authentication Method:** Tenant Publishable Key passed via `x-publishable-key` (or `x-storefront-key` / `Authorization: Bearer <key>`). Safe for client-side inclusion (e.g. `NEXT_PUBLIC_STOREFRONT_KEY`).
- **Shopper Session Scoping:** Frictionless, accountless cart and checkout tracking via `x-session-token` header (format: `ses_<token>`).
- **Financial Unit:** All financial values are strictly represented in **Paise** (integer, where ₹1.00 = `100` paise).
- **Inventory System:** Distributed Order Management (DOM) calculating sellable stock aggregated across active retail stores minus a walk-in buffer:
  $$\text{SellableStock} = \max\left(0, \sum_{\text{shops}} \text{PhysicalQuantity} - \max(1, \text{ActiveShopsCount})\right)$$
- **Stock Reservation:** Checkout initiation places an authoritative 10-minute temporary `StockHold` on physical store inventory before payment confirmation.

### 3.2 Capability Matrix

| Capability | Backend Availability | Primary Endpoint / Mechanism | Integration Readiness |
|:---|:---:|:---|:---:|
| **Store Branding & Info** | **Verified** | `GET /api/v1/storefront/info` | Ready. Delivers store name, announcement banner, hero copy, theme metadata, and payment toggles. |
| **Product Catalogue** | **Verified** | `GET /api/v1/storefront/catalog` | Ready. Full query support (`query`, `category`, `badge`, `sort`, `page`, `limit`). |
| **Product Details (PDP)** | **Verified** | `GET /api/v1/storefront/products/:slug` | Ready. Complete PDP payload with variants, multi-branch stock availability, images, and HTML descriptions. |
| **Inventory & Stock** | **Verified** | Integrated inside catalog & product endpoints | Ready. Live multi-branch aggregated stock. |
| **Cart Retrieval** | **Verified** | `GET /api/v1/storefront/cart` | Ready. Session-scoped via `x-session-token`. |
| **Cart Mutations** | **Verified** | `POST /api/v1/storefront/cart/items` | Ready. Supports add, quantity change, and deletion (quantity = 0). |
| **Promotions & Coupons** | **Verified** | `POST /api/v1/storefront/cart/coupon`<br>`DELETE /api/v1/storefront/cart/coupon` | Ready. Validates minimum order amounts, redemption caps, and auto-detaches upon line-item drops. |
| **Checkout Initiation** | **Verified** | `POST /api/v1/storefront/checkout/initiate` | Ready. 10-minute temporary stock reservation; rate-limited to 10 per 15 minutes. |
| **Checkout Confirmation** | **Verified** | `POST /api/v1/storefront/checkout/confirm` | Ready. Handles `ONLINE` (requires verified `paymentRef`) and `COD`. |
| **Order Tracking** | **Verified** | `GET /api/v1/storefront/orders/track` | Ready. Public tracking by `orderNumber` with strict PII masking (`phoneMasked`, omitted street lines). |
| **Customer Auth (Login/Register)** | **Verified (ERP)** / **Optional (Storefront)** | Headless storefront is customer session-first; administrative auth lives at `/api/v1/auth/login`. | Customer accounts can be layered on without blocking core guest checkout flows. |
| **Content Management (CMS)** | **Partially Verified** | Handled through `/api/v1/storefront/info` + curated storefront config | Editorial editorial content (Skin Journal, Philosophy) defined as structured configuration with backend info fallback. |

---

## 4. Brand Design System & Asset Assessment

### 4.1 Visual Direction
The brand visual identity is **Light warm chocolate + creamy ivory + restrained champagne**.
- **Primary Background:** Warm ivory (`#F8F5EF` / `#FAF7F2`)
- **Secondary Surfaces:** Soft cream (`#FFFCF7`) and muted stone (`#F1EBE1`)
- **Typography & Brand Contrast:** Light warm chocolate (`#4B352A` / `#3D271D`) for headings, body copy, and primary interactive elements.
- **Brand Accent:** Muted champagne / soft apricot (`#C3A27B` / `#D4B996`) for subtle highlights and underline flourishes.
- **Product Accent:** Dusty mauve (`#A96D7D`) derived authentically from the physical serum bottle; strictly isolated to product representations rather than whole-page backgrounds.

### 4.2 Approved Visual Assets
Audit of `/Users/mithindev/Desktop/sanelysia asstets` and verified fixtures:
1. `san-elysia-logo-chocolate.svg` / `san-elysia-logo-chocolate.png` — Official vector brand mark with profile silhouette and refined serif lettering.
2. `san-elysia-symbol-chocolate.svg` — Standalone brand emblem.
3. `san-elysia-logo-champagne.svg` / `san-elysia-logo-ivory.png` — High-contrast alternate colorways for dark backgrounds.
4. `san-elysia-serum.jpg` (authentic photograph, 1024x576) — The physical 30ml dusty-mauve bottle on warm stone podium with botanical leaves and active serum splash.
5. Reference design screenshot (`media_1795512646396_9be9dbff.jpg`) — Approved composition for the desktop and mobile storefront hero, announcement bar, navigation, and benefit row.

---

## 5. Architectural & Security Strategy

1. **Server Components by Default:** Page compositions, catalogue data fetches, and metadata rendering occur exclusively on the server, minimizing client JavaScript bundle size and achieving Core Web Vitals targets (LCP < 2.5s, CLS < 0.1).
2. **Centralized Backend Client:** A server-only client (`src/lib/backend/client.ts`) handles base URLs, publishable key injection, timeout handling, error normalization, and caching.
3. **Data Ownership:** The backend remains the sole authority for product pricing, inventory calculation, and order state. The frontend presents and validates interactions without duplicating business rules.
4. **Security Boundaries:** Zero backend secrets are exposed via `NEXT_PUBLIC_*`. Only the publishable key (`NEXT_PUBLIC_STOREFRONT_KEY`) and API URL are exposed. Sensitive payment workflows never collect or store raw card credentials.

---

## 6. Recommended Implementation Phases

- **Phase 1: Foundation:** Project scaffold with Next.js 16, TypeScript strict mode, Tailwind CSS 4, ESLint, Prettier, Vitest, Playwright, token system, and typed backend client.
- **Phase 2: Global Shell:** Root layout, font configuration, announcement bar, responsive navigation header with official logo, and error boundaries.
- **Phase 3: Homepage Hero Slice:** Pure Glow editorial two-column composition, serif typography with italic accent and champagne highlight, primary and secondary CTAs, 3-item benefit row, overlapping product and ritual imagery, and editorial card `01 — THE EVERYDAY RITUAL`.
- **Phase 4: Verification:** Strict typing validation, linting, unit/component tests, production build, and cross-device browser validation (360px–1680px).
