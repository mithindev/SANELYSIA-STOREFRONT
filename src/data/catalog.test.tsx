import fs from 'node:fs';
import path from 'node:path';
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { catalogProducts, ProductItem } from './catalog';
import { ingredients } from './ingredients';
import { ProductDetailView } from '@/features/product/product-detail-view';
import { CartProvider, useCart } from '@/components/cart/cart-context';

function VariantCartProbe({ product }: { product: ProductItem }) {
  const { addItem, items, formattedTotal } = useCart();
  const variant = product.variants[0];
  return (
    <div>
      <button type="button" onClick={() => addItem(product, variant.title, 2)}>
        Add Probe
      </button>
      <span data-testid="total">{formattedTotal}</span>
      <span data-testid="count">{items.reduce((s, i) => s + i.quantity, 0)}</span>
    </div>
  );
}

describe('PDF-aligned catalog and ingredient data integrity', () => {
  const requiredSlugs = [
    'balancing-serum',
    'sepiwhite-serum',
    'clear-tone-serum',
    'lumivitac-serum',
    'night-cream',
  ];

  it('contains all 5 PDF formulations with complete INCI, benefits, and color themes', () => {
    const slugs = catalogProducts.map((p) => p.slug);
    for (const slug of requiredSlugs) {
      expect(slugs).toContain(slug);
      const product = catalogProducts.find((p) => p.slug === slug)!;
      expect(product.benefits.length).toBeGreaterThanOrEqual(4);
      expect(product.keyActives.length).toBeGreaterThanOrEqual(5);
      expect(product.inci.length).toBeGreaterThan(20);
      expect(product.howToUse.length).toBeGreaterThanOrEqual(3);
      expect(product.colorTheme.name).toBeTruthy();
      expect(product.colorTheme.primaryHex).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });

  it('links every keyActive ingredientSlug and ingredient foundInSlugs cleanly', () => {
    const ingredientSlugs = new Set(ingredients.map((i) => i.slug));
    const productSlugs = new Set(catalogProducts.map((p) => p.slug));

    for (const product of catalogProducts) {
      for (const active of product.keyActives) {
        if (active.ingredientSlug) {
          expect(ingredientSlugs.has(active.ingredientSlug)).toBe(true);
        }
      }
    }

    for (const ingredient of ingredients) {
      expect(ingredient.foundInSlugs.length).toBeGreaterThan(0);
      for (const slug of ingredient.foundInSlugs) {
        expect(productSlugs.has(slug)).toBe(true);
      }
    }
  });

  it('ensures all referenced product image assets exist on disk', () => {
    for (const product of catalogProducts) {
      for (const imgPath of [product.image, ...product.gallery]) {
        const diskPath = path.join(process.cwd(), 'public', imgPath.replace(/^\//, ''));
        expect(fs.existsSync(diskPath)).toBe(true);
      }
    }
  });

  it('renders full INCI, benefits, and color theme on ProductDetailView', () => {
    const clearTone = catalogProducts.find((p) => p.slug === 'clear-tone-serum')!;
    render(
      <CartProvider>
        <ProductDetailView product={clearTone} />
      </CartProvider>
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Clear Tone' })).toBeInTheDocument();
    expect(screen.getByText(/Signature Palette: Beige \+ Champagne/i)).toBeInTheDocument();
    expect(screen.getByText(clearTone.inci)).toBeInTheDocument();
    expect(screen.getByText(clearTone.benefits[0])).toBeInTheDocument();
  });

  it('calculates cart totals using selected variant pricing', () => {
    const mockMultiVariant: ProductItem = {
      ...catalogProducts[0],
      id: 'prod_probe',
      variants: [
        { id: 'v2', title: '50 ml Variant', pricePaise: 245000, formattedPrice: '₹2,450' },
      ],
    };

    render(
      <CartProvider>
        <VariantCartProbe product={mockMultiVariant} />
      </CartProvider>
    );

    fireEvent.click(screen.getByRole('button', { name: 'Add Probe' }));
    expect(screen.getByTestId('count').textContent).toBe('2');
    expect(screen.getByTestId('total').textContent).toBe('₹4,900');
  });
});
