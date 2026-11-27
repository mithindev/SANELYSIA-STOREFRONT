import { CatalogProductDTO, ProductDetailDTO } from '../contracts/storefront';
import { formatPaise } from '@/lib/utils/cn';

export interface ProductPresentationModel {
  id: string;
  slug: string;
  title: string;
  brand: string;
  category: string;
  formattedPrice: string;
  rawPricePaise: number;
  formattedCompareAtPrice?: string;
  discountPercentage?: number;
  badge?: string;
  inStock: boolean;
  availableStock: number;
  heroImage: {
    url: string;
    alt: string;
  };
  gallery: Array<{
    id: string;
    url: string;
    alt: string;
  }>;
  variants: Array<{
    id: string;
    title: string;
    sku: string;
    formattedPrice: string;
    inStock: boolean;
    attributes: Record<string, string>;
  }>;
}

export function mapCatalogProductToPresentation(dto: CatalogProductDTO): ProductPresentationModel {
  const primaryImg = dto.images?.find((i) => i.isThumbnail) || dto.images?.[0];

  return {
    id: dto.id,
    slug: dto.slug,
    title: dto.title,
    brand: dto.brand || 'SAN ELYSIA',
    category: dto.category,
    formattedPrice: formatPaise(dto.pricePaise),
    rawPricePaise: dto.pricePaise,
    formattedCompareAtPrice: dto.compareAtPricePaise
      ? formatPaise(dto.compareAtPricePaise)
      : undefined,
    discountPercentage: dto.discountPercent,
    badge: dto.badge,
    inStock: dto.inStock,
    availableStock: dto.availableQuantity,
    heroImage: {
      url: primaryImg?.url || dto.thumbnailUrl || '/images/products/balancing-serum.jpg',
      alt: primaryImg?.altText || dto.title,
    },
    gallery: (dto.images || []).map((img) => ({
      id: img.id,
      url: img.url,
      alt: img.altText || dto.title,
    })),
    variants: (dto.variants || []).map((v) => ({
      id: v.id,
      title: v.title,
      sku: v.sku,
      formattedPrice: formatPaise(v.pricePaise),
      inStock: v.isActive,
      attributes: v.attributes || {},
    })),
  };
}
