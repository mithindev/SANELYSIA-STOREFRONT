import { describe, it, expect } from 'vitest';
import { StorefrontApiError } from './errors';
import { mapCatalogProductToPresentation } from './mappers/product';
import { CatalogProductDTO } from './contracts/storefront';

describe('StorefrontApiError', () => {
  it('instantiates from standard backend error JSON', () => {
    const errorJson = {
      success: false,
      error: 'OUT_OF_STOCK',
      message: 'Product variant is depleted across all branches',
    };
    const err = StorefrontApiError.fromResponse(400, errorJson);
    expect(err.code).toBe('OUT_OF_STOCK');
    expect(err.status).toBe(400);
    expect(err.message).toBe('Product variant is depleted across all branches');
  });

  it('creates network error', () => {
    const err = StorefrontApiError.networkError(new Error('Connection refused'));
    expect(err.code).toBe('NETWORK_ERROR');
    expect(err.status).toBe(0);
  });
});

describe('mapCatalogProductToPresentation', () => {
  it('transforms DTO into clean presentation model', () => {
    const mockDto: CatalogProductDTO = {
      id: 'prod-123',
      slug: 'san-elysia-balancing-serum',
      title: 'San Elysia Niacinamide 12% Balancing Serum',
      sku: 'SAN-SERUM-100',
      brand: 'SAN ELYSIA',
      category: 'Serums & Treatments',
      pricePaise: 69900,
      compareAtPricePaise: 89900,
      discountPercent: 22,
      badge: 'TRENDING',
      isFeatured: true,
      inStock: true,
      availableQuantity: 49,
      thumbnailUrl: '/images/products/san-elysia-serum.jpg',
      images: [
        {
          id: 'img-1',
          url: '/images/products/san-elysia-serum.jpg',
          altText: 'San Elysia Serum',
          isThumbnail: true,
        },
      ],
      variants: [
        {
          id: 'var-1',
          title: '100ml',
          sku: 'SAN-SERUM-100',
          pricePaise: 69900,
          compareAtPaise: 89900,
          attributes: { Volume: '100ml' },
          isActive: true,
        },
      ],
    };

    const model = mapCatalogProductToPresentation(mockDto);
    expect(model.id).toBe('prod-123');
    expect(model.formattedPrice).toBe('₹699');
    expect(model.formattedCompareAtPrice).toBe('₹899');
    expect(model.inStock).toBe(true);
    expect(model.availableStock).toBe(49);
    expect(model.variants[0].formattedPrice).toBe('₹699');
  });
});
