'use client';

import * as React from 'react';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';
import { catalogProducts, SkinConcern } from '@/data/catalog';
import { ProductCard } from '@/components/ui/product-card';

const categories = [
  { value: 'all', label: 'All Formulations' },
  { value: 'serums', label: 'Targeted Serums' },
  { value: 'night-care', label: 'Night Renewal' },
  { value: 'bundles', label: 'Ritual Bundles' },
];

const concernFilters: Array<{ value: 'all' | SkinConcern; label: string }> = [
  { value: 'all', label: 'All Concerns' },
  { value: 'brightening', label: 'Brightening & Radiance' },
  { value: 'pigmentation', label: 'Dark Spots & Pigmentation' },
  { value: 'oil-control', label: 'Oil & Pore Care' },
  { value: 'hydration', label: 'Hydration & Renewal' },
];

export function CatalogView({ initialCategory = 'all' }: { initialCategory?: string }) {
  const validInitial = categories.some((c) => c.value === initialCategory)
    ? initialCategory
    : 'all';
  const [selectedCategory, setSelectedCategory] = React.useState(validInitial);
  const [selectedConcern, setSelectedConcern] = React.useState<'all' | SkinConcern>('all');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('featured');

  React.useEffect(() => {
    setSelectedCategory(
      categories.some((c) => c.value === initialCategory) ? initialCategory : 'all'
    );
  }, [initialCategory]);

  const filteredProducts = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return catalogProducts
      .filter((product) => {
        const matchesCategory =
          selectedCategory === 'all' || product.category === selectedCategory;
        const matchesConcern =
          selectedConcern === 'all' || product.concerns.includes(selectedConcern);
        const matchesQuery =
          !q ||
          product.title.toLowerCase().includes(q) ||
          product.subtitle.toLowerCase().includes(q) ||
          (product.frontLabel && product.frontLabel.toLowerCase().includes(q)) ||
          product.shortDescription.toLowerCase().includes(q) ||
          product.inci.toLowerCase().includes(q) ||
          product.ingredients.some((ing) => ing.toLowerCase().includes(q)) ||
          product.benefits.some((b) => b.toLowerCase().includes(q));
        return matchesCategory && matchesConcern && matchesQuery;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.pricePaise - b.pricePaise;
        if (sortBy === 'price-high') return b.pricePaise - a.pricePaise;
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        return 0;
      });
  }, [selectedCategory, selectedConcern, searchQuery, sortBy]);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-14 lg:py-20">
      {/* Header */}
      <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
        THE SAN ELYSIA COLLECTION
      </p>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3D271D]">
          Targeted actives,
          <br />
          <span className="marker italic font-normal text-[#3D271D]">for everyday clarity.</span>
        </h1>
        <p className="max-w-[380px] text-sm leading-relaxed text-[#685346]">
          Four targeted brightening and oil-balancing serums paired with an intensive overnight
          renewal cream — formulated for visible tone harmony and barrier comfort.
        </p>
      </div>

      {/* Category Tabs */}
      <nav
        aria-label="Product categories"
        className="mt-10 flex flex-wrap gap-x-7 gap-y-2 border-b border-[#3D271D]/20"
      >
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setSelectedCategory(cat.value)}
            className={`min-h-12 border-b-2 py-3 text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer ${
              selectedCategory === cat.value
                ? 'border-[#3D271D] text-[#3D271D]'
                : 'border-transparent text-[#8E7B6F] hover:text-[#3D271D]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </nav>

      {/* Skin Concern Pills */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E7B6F] mr-2">
          By Concern:
        </span>
        {concernFilters.map((concern) => (
          <button
            key={concern.value}
            type="button"
            onClick={() => setSelectedConcern(concern.value)}
            className={`px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] rounded-full border transition-colors cursor-pointer ${
              selectedConcern === concern.value
                ? 'border-[#3D271D] bg-[#3D271D] text-[#FAF7F2]'
                : 'border-[#E7DDD2] bg-[#FFFDF9] text-[#685346] hover:border-[#3D271D]/50'
            }`}
          >
            {concern.label}
          </button>
        ))}
      </div>

      {/* Search & Sort Toolbar */}
      <div className="my-7 flex flex-wrap items-center justify-between gap-4">
        {/* Search */}
        <div className="flex items-center border border-[#3D271D]/20 bg-[#FFFDF9] px-3.5 rounded-xs w-full sm:w-auto">
          <Search size={16} strokeWidth={1.5} className="text-[#8E7B6F]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search serum, active or INCI…"
            aria-label="Search products"
            className="min-w-0 bg-transparent p-3 text-xs text-[#3D271D] placeholder:text-[#8E7B6F] outline-none w-64"
          />
        </div>

        {/* Counter & Sort */}
        <div className="flex items-center gap-4">
          <span className="text-[11px] text-[#8E7B6F] font-sans">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'formulation' : 'formulations'}
          </span>
          <div className="flex items-center gap-2">
            <label htmlFor="sort-select" className="sr-only">
              Sort products
            </label>
            <select
              id="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-11 border border-[#3D271D]/20 bg-[#FFFDF9] px-3 text-xs text-[#3D271D] rounded-xs outline-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid or Empty */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center">
          <h2 className="font-serif text-3xl text-[#3D271D]">No formulations match that filter.</h2>
          <p className="mt-3 text-sm text-[#685346]">
            Try clearing your search or concern filters to explore the complete SAN ELYSIA collection.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSelectedConcern('all');
              setSearchQuery('');
            }}
            className="mt-6 inline-flex min-h-12 items-center gap-2 bg-[#5A3825] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FAF7F2] rounded-sm hover:bg-[#3D271D] cursor-pointer"
          >
            <span>Explore everything</span>
            <ArrowRight size={14} />
          </button>
        </div>
      )}

      {/* Ritual Bundles Banner Footer */}
      <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-y border-[#3D271D]/20 bg-[#F3ECE2]/60 p-7 sm:p-9 rounded-xs">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#3D271D]">
            Pair your morning glow with overnight renewal.
          </h2>
          <p className="mt-2 text-xs text-[#685346]">
            Save up to 12% and unlock complimentary insured shipping across India with our curated AM/PM sets.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSelectedCategory('bundles');
            setSelectedConcern('all');
          }}
          className="inline-flex min-h-12 items-center gap-2 border border-[#3D271D]/25 bg-transparent px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-[#3D271D] rounded-sm hover:border-[#3D271D] hover:bg-[#FAF7F2] cursor-pointer"
        >
          <span>View ritual bundles</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}
