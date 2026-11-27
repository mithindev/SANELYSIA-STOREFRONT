'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Plus, ArrowUpRight, Check } from 'lucide-react';
import { ProductItem } from '@/data/catalog';
import { useCart } from '@/components/cart/cart-context';

export interface ProductCardProps {
  product: ProductItem;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = React.useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.variants[0]?.title || 'Default', 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1600);
  };

  const badgeText = product.badge || (index === 0 ? 'SIGNATURE RITUAL' : `0${index + 1} — DAILY CARE`);

  return (
    <article className="product-card group flex flex-col justify-between">
      {/* Visual Frame */}
      <div className="relative overflow-hidden rounded-sm bg-[#F3ECE2] border border-[#E7DDD2] aspect-[4/5] w-full">
        <Link
          href={`/product/${product.slug}`}
          className="block w-full h-full"
          aria-label={`View ${product.title}`}
        >
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-center transition-transform duration-300 group-hover:scale-[1.035]"
          />
        </Link>

        {/* Top-Left Editorial Badge */}
        <span className="absolute left-3 top-3 border border-[#3D271D]/15 bg-[#FAF7F2]/90 backdrop-blur-xs px-2.5 py-1 text-[8.5px] font-sans font-medium uppercase tracking-[0.16em] text-[#3D271D] select-none">
          {badgeText}
        </span>

        {/* Top-Right Packaging Color Theme Swatch */}
        <span
          className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[8px] font-sans font-semibold uppercase tracking-[0.12em] backdrop-blur-xs select-none"
          style={{
            backgroundColor: `${product.colorTheme.surfaceHex}E6`,
            borderColor: product.colorTheme.borderHex,
            color: product.colorTheme.textHex,
          }}
        >
          <span
            aria-hidden="true"
            className="h-2 w-2 rounded-full shrink-0"
            style={{ backgroundColor: product.colorTheme.primaryHex }}
          />
          <span>{product.colorTheme.name}</span>
        </span>

        {/* Quick Add Slide-up Action on Hover / Focus */}
        <div className="product-quick absolute inset-x-0 bottom-0 z-10 transition-transform duration-220 ease-out">
          {product.inStock ? (
            <button
              type="button"
              onClick={handleQuickAdd}
              aria-label={`Quick add ${product.title} to bag`}
              className="flex min-h-11 w-full items-center justify-between bg-[#3D271D] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#FAF7F2] transition-colors hover:bg-[#5A3825] cursor-pointer"
            >
              <span className="flex items-center gap-2">
                {justAdded ? <Check size={14} className="text-[#C3A27B]" /> : <Plus size={14} />}
                <span>{justAdded ? 'Added to bag' : 'Add to bag'}</span>
              </span>
              <span>{product.formattedPrice}</span>
            </button>
          ) : (
            <Link
              href={`/product/${product.slug}`}
              className="flex min-h-11 items-center justify-between bg-[#3D271D] px-4 py-3 text-[10px] uppercase tracking-[0.14em] text-[#FAF7F2]"
            >
              <span>Discover your ritual</span>
              <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
      </div>

      {/* Meta info below image */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <Link href={`/product/${product.slug}`} className="flex-1">
          <h3 className="font-serif text-[16px] sm:text-[18px] text-[#3D271D] font-normal leading-snug group-hover:text-[#5A3825] transition-colors line-clamp-1">
            {product.title}
          </h3>
          <p className="mt-1.5 text-[9px] uppercase tracking-[0.14em] text-[#8E7B6F] line-clamp-1">
            {product.subtitle}
          </p>
        </Link>
        <p className="shrink-0 pt-0.5 text-xs font-semibold text-[#3D271D]">
          {product.formattedPrice}
        </p>
      </div>
    </article>
  );
}
