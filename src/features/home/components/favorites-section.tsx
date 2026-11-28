import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { catalogProducts } from '@/data/catalog';
import { ProductCard } from '@/components/ui/product-card';
import { Reveal, StaggerGroup, StaggerItem } from '@/components/motion';

export function FavoritesSection() {
  const featured = catalogProducts.slice(0, 6);

  return (
    <section id="daily-favorites" className="relative overflow-hidden border-b border-[#3D271D]/15 py-20 lg:py-24 bg-[#FAF7F2]">
      {/* Outer Left Edge Vertical Caption Rail */}
      <div
        aria-hidden="true"
        className="caption-rail pointer-events-none absolute left-5 top-0 hidden h-full items-center xl:flex select-none z-10"
      >
        <span
          className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8E7B6F]/70 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          N°02 — THE FIVE FORMULATIONS
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
        <Reveal>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
                Targeted serums & overnight renewal.
              </p>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[44px] font-medium text-[#3D271D] tracking-tight">
                Meet the SAN ELYSIA lineup.
              </h2>
            </div>
            <Link
              href="/shop"
              className="group inline-flex min-h-11 items-center gap-2 border-b border-[#3D271D]/30 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] transition-colors hover:border-[#3D271D]"
            >
              <span>Explore all formulations</span>
              <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3 lg:gap-x-8">
          {featured.map((product, index) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
