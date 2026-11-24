/**
 * Authoritative Backend DTOs
 * Follows headless-storefront-api-reference v1.0.0
 */

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: string;
  message?: string;
}

export interface StorefrontInfoDTO {
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
    primaryForegroundHsl?: string;
    accentColor?: string;
    borderRadiusRem?: number;
    fontFamily?: string;
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

export interface CatalogProductDTO {
  id: string;
  slug: string;
  title: string;
  sku: string;
  brand: string;
  category: string;
  pricePaise: number;
  compareAtPricePaise?: number;
  discountPercent?: number;
  badge?: 'BEST_SELLER' | 'NEW_ARRIVAL' | 'TRENDING' | 'DEAL_OF_DAY' | string;
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

export interface ProductDetailDTO extends CatalogProductDTO {
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

export interface CartItemDTO {
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

export interface CartDTO {
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
