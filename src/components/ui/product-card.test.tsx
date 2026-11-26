import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProductCard } from './product-card';
import { CartProvider } from '@/components/cart/cart-context';
import { catalogProducts } from '@/data/catalog';

describe('ProductCard component', () => {
  const sampleProduct = catalogProducts[0];

  it('renders product title, subtitle, and formatted price', () => {
    render(
      <CartProvider>
        <ProductCard product={sampleProduct} index={0} />
      </CartProvider>
    );

    expect(screen.getByText(sampleProduct.title)).toBeInTheDocument();
    expect(screen.getByText(sampleProduct.subtitle)).toBeInTheDocument();
    expect(screen.getAllByText(sampleProduct.formattedPrice).length).toBeGreaterThanOrEqual(1);
  });

  it('renders the quick add button for in-stock products', () => {
    render(
      <CartProvider>
        <ProductCard product={sampleProduct} index={0} />
      </CartProvider>
    );

    expect(
      screen.getByRole('button', { name: /Quick add/i })
    ).toBeInTheDocument();
  });
});
