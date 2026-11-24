# SAN ELYSIA — Backend Integration Contract Map

**Document Status:** Ground-Truth Specification  
**Protocol:** RESTful JSON over HTTPS  
**Base Path:** `/api/v1/storefront`  
**Financial Standard:** Strictly integer **Paise** (₹1.00 = `100` paise)  
**Security Scope:** Tenant Publishable API Key (`x-publishable-key` / `NEXT_PUBLIC_STOREFRONT_KEY`)  
**Shopper Session Scope:** `x-session-token` (Persistent string, e.g. `ses_<uuid>`)

---

## 1. Global Gateway Envelope & Error Conventions

### 1.1 Success Response Envelope
All successful storefront responses follow this uniform wrapper:
```typescript
interface ApiResponse<T> {
  success: true;
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
```

### 1.2 Error Response Envelope
```typescript
interface ApiErrorResponse {
  success: false;
  error: StorefrontErrorCode;
  message: string;
}

type StorefrontErrorCode =
  | 'STOREFRONT_KEY_REQUIRED'
  | 'STOREFRONT_KEY_INVALID'
  | 'STOREFRONT_ORIGIN_UNAUTHORIZED'
  | 'MODULE_NOT_DOCKED'
  | 'RATE_LIMIT_EXCEEDED'
  | 'VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'OUT_OF_STOCK'
  | 'CART_EXPIRED'
  | 'INTERNAL_ERROR';
```

---

## 2. API Contract Definitions

### 2.1 Storefront Info & Branding Metadata
`GET /api/v1/storefront/info`

Fetches white-label branding, visual theme configuration, announcement banner, and checkout toggles.

#### Request Headers
```http
x-publishable-key: <NEXT_PUBLIC_STOREFRONT_KEY>
```

#### Response Data Model (`StorefrontInfoDTO`)
```typescript
interface StorefrontInfoDTO {
  orgId: string;
  storeName: string;
  tagline: string;
  logoUrl?: string;
  logoLightUrl?: string;
  faviconUrl?: string;
  phone?: string;
  email?: string;
  theme?: {
    primaryHsl?: string;
    accentColor?: string;
    fontFamily?: string;
    borderRadiusRem?: number;
    darkMode?: boolean;
    presetTheme?: string;
  };
  bannerAnnouncement?: string;
  heroHeadline?: string;
  heroDescription?: string;
  allowCod: boolean;
  allowOnlinePayment: boolean;
  pickupEnabled: boolean;
  deliveryEnabled: boolean;
}
```

---

### 2.2 Product Catalog Listing
`GET /api/v1/storefront/catalog`

Fetches active online product listings with real-time aggregated cross-branch inventory, badges, media, and pricing.

#### Query Parameters
- `query` (optional string): Case-insensitive search on title, SKU, or brand.
- `category` (optional string): Exact category filter.
- `badge` (optional string): `BEST_SELLER` | `NEW_ARRIVAL` | `TRENDING` | `DEAL_OF_DAY`.
- `sort` (optional string): `featured` | `price_asc` | `price_desc` | `newest`.
- `page` (optional integer): Defaults to `1`.
- `limit` (optional integer): Defaults to `24` (max `60`).

#### Response Data Model (`CatalogProductDTO[]`)
```typescript
interface CatalogProductDTO {
  id: string;
  slug: string;
  title: string;
  sku: string;
  brand: string;
  category: string;
  pricePaise: number;
  compareAtPricePaise?: number;
  discountPercent?: number;
  badge?: string;
  isFeatured: boolean;
  inStock: boolean;
  availableQuantity: number;
  thumbnailUrl: string;
  images: Array<{
    id: string;
    url: string;
    altText?: string;
    isThumbnail: boolean;
  }>;
  variants: Array<{
    id: string;
    title: string;
    sku: string;
    pricePaise: number;
    compareAtPaise?: number;
    attributes: Record<string, string>;
    imageUrl?: string;
    isActive: boolean;
  }>;
}
```

---

### 2.3 Product Details by Slug (PDP)
`GET /api/v1/storefront/products/:slug`

Fetches complete product information by unique slug, including rich HTML description, formulation specs, full gallery, and multi-branch stock availability.

#### Response Data Model (`ProductDetailDTO`)
```typescript
interface ProductDetailDTO extends CatalogProductDTO {
  productId: string;
  originalName: string;
  shortDescription?: string;
  descriptionHtml?: string;
  highlights?: string[];
  specifications?: Record<string, string>;
  metaTitle?: string;
  metaDescription?: string;
  branchAvailability: Array<{
    shopId: string;
    shopName: string;
    inStock: boolean;
    quantity: number;
  }>;
}
```

---

### 2.4 Cart Operations

#### 2.4.1 Retrieve Current Cart
`GET /api/v1/storefront/cart`

**Headers:** `x-publishable-key`, `x-session-token`

```typescript
interface CartDTO {
  id: string;
  sessionToken: string;
  itemsCount: number;
  items: CartItemDTO[];
  subtotalPaise: number;
  discountPaise: number;
  shippingFeePaise: number;
  freeShippingThresholdPaise: number;
  amountNeededForFreeShippingPaise: number;
  totalPaise: number;
  coupon?: {
    code: string;
    discountType: 'PERCENTAGE' | 'FIXED';
    discountValue: number;
    discountPaise: number;
  };
}

interface CartItemDTO {
  id: string;
  listingId: string;
  variantId?: string;
  productId: string;
  name: string;
  sku: string;
  quantity: number;
  unitPricePaise: number;
  totalPaise: number;
  thumbnailUrl?: string;
}
```

#### 2.4.2 Mutate Cart Items
`POST /api/v1/storefront/cart/items`

**Body:**
```json
{
  "listingId": "uuid",
  "quantity": 1,
  "variantId": "uuid"
}
```
Setting `quantity <= 0` removes the item. Returns updated `CartDTO`.

#### 2.4.3 Apply / Remove Coupon
- `POST /api/v1/storefront/cart/coupon` with `{ "code": "SANGLOW20" }`
- `DELETE /api/v1/storefront/cart/coupon`
Returns updated `CartDTO`.

---

### 2.5 Checkout Initiation
`POST /api/v1/storefront/checkout/initiate`

Places an authoritative 10-minute temporary `StockHold` on physical store inventory and creates an initial order record.

**Rate Limit:** 10 requests per 15 minutes per session + IP.

**Body:**
```typescript
interface CheckoutInitiateRequest {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  paymentMethod: 'ONLINE' | 'COD';
  customerNotes?: string;
}
```

**Response Data (`CheckoutInitiateResponse`):**
```typescript
interface CheckoutInitiateResponse {
  orderId: string;
  orderNumber: string;
  totalPaise: number;
  currency: 'INR';
  paymentMethod: 'ONLINE' | 'COD';
  allocationsCount: number;
}
```

---

### 2.6 Checkout Confirmation
`POST /api/v1/storefront/checkout/confirm`

Confirms the order, commits store fulfillment packages, releases temporary stock holds, clears the session cart, and triggers fulfillment webhooks.

**Body:**
```typescript
interface CheckoutConfirmRequest {
  orderId: string;
  paymentRef?: string; // Required when paymentMethod is ONLINE
}
```

**Response Data (`CheckoutConfirmResponse`):**
```typescript
interface CheckoutConfirmResponse {
  orderId: string;
  orderNumber: string;
  status: 'CONFIRMED';
  packages: Array<{
    id: string;
    orderId: string;
    organizationId: string;
    shopId: string;
    packageNumber: string;
    status: string;
    shop: { id: string; name: string; code: string };
    items: Array<{
      id: string;
      quantity: number;
      product: { name: string; sku: string };
    }>;
  }>;
}
```

---

### 2.7 Order Tracking (Public)
`GET /api/v1/storefront/orders/track?orderNumber=ORD-...`

Public customer tracking endpoint with privacy masking.

**Response Data (`OrderTrackingDTO`):**
```typescript
interface OrderTrackingDTO {
  id: string;
  orderNumber: string;
  status: string;
  paymentStatus: string;
  paymentMethod: string;
  totalPaise: number;
  createdAt: string;
  shippingAddress: {
    name: string;
    phoneMasked: string;
    city: string;
    state: string;
    pincode: string;
  };
  items: Array<{
    id: string;
    name: string;
    sku: string;
    quantity: number;
    totalPaise: number;
    imageUrl?: string;
  }>;
  packages: Array<{
    id: string;
    packageNumber: string;
    status: string;
    shopName: string;
  }>;
}
```
