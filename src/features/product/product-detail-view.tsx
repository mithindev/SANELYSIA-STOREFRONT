'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, ArrowRight, Leaf, Package, Star, ArrowUpRight, Check } from 'lucide-react';
import { ProductItem, catalogProducts } from '@/data/catalog';
import { useCart } from '@/components/cart/cart-context';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/product-card';

export function ProductDetailView({ product }: { product: ProductItem }) {
  const [selectedImage, setSelectedImage] = React.useState(product.image);
  const [selectedVariantId, setSelectedVariantId] = React.useState(
    product.variants[0]?.id || ''
  );
  const [quantity, setQuantity] = React.useState(1);
  const [addedSuccess, setAddedSuccess] = React.useState(false);

  const { addItem } = useCart();

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const handleAddToCart = () => {
    addItem(product, selectedVariant?.title || 'Default', quantity);
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2000);
  };

  const relatedProducts = catalogProducts
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 py-10 lg:py-16">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-8 text-[11px] font-sans text-[#8E7B6F]">
        <Link href="/" className="hover:text-[#3D271D]">
          Home
        </Link>
        <span className="mx-3 text-[#3D271D]/30">/</span>
        <Link href="/shop" className="hover:text-[#3D271D]">
          Shop
        </Link>
        <span className="mx-3 text-[#3D271D]/30">/</span>
        <span className="text-[#3D271D] font-medium">{product.title}</span>
      </nav>

      {/* 2-Column Main PDP Grid */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Left: Gallery */}
        <div>
          <div className="inset-frame overflow-hidden rounded-sm bg-[#F3ECE2] border border-[#E7DDD2] aspect-[4/5] relative w-full shadow-md">
            <Image
              src={selectedImage}
              alt={product.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover object-center"
            />
          </div>

          {/* Thumbnails */}
          {product.gallery.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.gallery.map((imgUrl, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setSelectedImage(imgUrl)}
                  aria-label={`View photo ${i + 1}`}
                  className={`w-20 aspect-square overflow-hidden rounded-xs border-2 transition-colors cursor-pointer relative ${
                    selectedImage === imgUrl ? 'border-[#3D271D]' : 'border-[#E7DDD2] hover:border-[#8E7B6F]'
                  }`}
                >
                  <Image src={imgUrl} alt="" fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Narrative & Actions */}
        <div className="lg:py-2 flex flex-col justify-between">
          <div>
            {/* Category / Subtitle Eyebrow */}
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
              {product.subtitle}
            </p>

            {/* H1 Title */}
            <h1 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium leading-tight text-[#3D271D]">
              {product.title}
            </h1>

            {/* Rating link */}
            <Link
              href="/reviews"
              className="mt-3.5 inline-flex items-center gap-2 text-xs text-[#685346] hover:text-[#3D271D] transition-colors"
            >
              <div className="flex text-[#C3A27B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-[#C3A27B]" />
                ))}
              </div>
              <span className="font-medium text-[#3D271D]">5.0</span>
              <span className="text-[#8E7B6F]">(18 verified reviews)</span>
            </Link>

            {/* Price display */}
            <div className="my-5 flex items-baseline gap-3">
              <span className="font-serif text-2xl sm:text-3xl font-medium text-[#3D271D]">
                {selectedVariant?.formattedPrice || product.formattedPrice}
              </span>
              {product.formattedCompareAtPrice && (
                <span className="text-sm text-[#8E7B6F] line-through font-sans">
                  {product.formattedCompareAtPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <div
              className="text-sm leading-relaxed text-[#685346] space-y-3"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />

            {/* Variant selector */}
            {product.variants.length > 1 && (
              <div className="mt-6">
                <label
                  htmlFor="variant-select"
                  className="mb-2 block text-xs font-sans font-medium uppercase tracking-wider text-[#3D271D]"
                >
                  Select Volume
                </label>
                <div className="flex gap-2.5">
                  {product.variants.map((v) => (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVariantId(v.id)}
                      className={`px-4 py-2.5 text-xs font-sans rounded-xs border transition-colors cursor-pointer ${
                        selectedVariantId === v.id
                          ? 'border-[#3D271D] bg-[#F3ECE2] text-[#3D271D] font-semibold'
                          : 'border-[#E7DDD2] bg-[#FAF7F2] text-[#685346] hover:border-[#3D271D]'
                      }`}
                    >
                      {v.title}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity and Add to Bag */}
            <div className="mt-7 flex items-center gap-3.5">
              {/* Stepper */}
              <div className="flex h-12 items-center border border-[#3D271D]/25 rounded-sm bg-[#FFFDF9]">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  className="flex h-11 w-11 items-center justify-center text-[#3D271D] hover:bg-[#F3ECE2] cursor-pointer"
                >
                  <Minus size={14} />
                </button>
                <span className="min-w-8 text-center text-sm font-sans font-medium text-[#3D271D]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(Math.min(99, quantity + 1))}
                  aria-label="Increase quantity"
                  className="flex h-11 w-11 items-center justify-center text-[#3D271D] hover:bg-[#F3ECE2] cursor-pointer"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add Button */}
              <Button
                variant="primary"
                size="md"
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2.5 min-h-12"
              >
                {addedSuccess ? (
                  <>
                    <Check size={16} className="text-[#C3A27B]" />
                    <span>Added to your bag!</span>
                  </>
                ) : (
                  <>
                    <Plus size={16} />
                    <span>Add to your bag</span>
                  </>
                )}
              </Button>
            </div>

            {/* Delivery Guarantee note */}
            <p className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-[0.14em] text-[#8E7B6F]">
              <Package size={15} strokeWidth={1.5} className="text-[#3D271D]" />
              Complimentary insured shipping across India on orders over ₹2,500
            </p>
          </div>

          {/* Accordions */}
          <div className="mt-8 border-t border-[#3D271D]/20 divide-y divide-[#3D271D]/20">
            {/* 1. Ingredients */}
            <details className="group py-4" open>
              <summary className="flex cursor-pointer items-center justify-between text-sm font-sans font-medium text-[#3D271D] select-none">
                <span>Key Ingredients & Active Formulation</span>
                <Plus size={15} className="transition-transform group-open:rotate-45" />
              </summary>
              <div className="pt-3 pb-2 text-xs text-[#685346] leading-relaxed space-y-2">
                <ul className="list-disc pl-5 space-y-1">
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
                <Link
                  href="/ingredients"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#3D271D] underline underline-offset-4"
                >
                  <Leaf size={13} className="text-[#C3A27B]" /> Explore Ingredient Library
                </Link>
              </div>
            </details>

            {/* 2. How to Use */}
            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-sans font-medium text-[#3D271D] select-none">
                <span>How to Apply / The Ritual</span>
                <Plus size={15} className="transition-transform group-open:rotate-45" />
              </summary>
              <div className="pt-3 pb-2 text-xs text-[#685346] leading-relaxed">
                <ol className="list-decimal pl-5 space-y-1.5">
                  {product.howToUse.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </details>

            {/* 3. Safety Advice */}
            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-sans font-medium text-[#3D271D] select-none">
                <span>Safety & Storage Advice</span>
                <Plus size={15} className="transition-transform group-open:rotate-45" />
              </summary>
              <div className="pt-3 pb-2 text-xs text-[#685346] leading-relaxed">
                <p>
                  For external use only. Patch test before initial use. Store in a cool, dry place
                  away from direct sun. Our formulations do not replace daily SPF 30+ sun protection.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Related Essentials Row */}
      <div className="mt-20 pt-12 border-t border-[#3D271D]/15">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
              COMPLEMENTARY CARE
            </p>
            <h2 className="mt-2 font-serif text-3xl font-medium text-[#3D271D]">
              Complete your daily ritual.
            </h2>
          </div>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#3D271D] hover:text-[#5A3825] font-semibold"
          >
            <span>View all</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((rel, index) => (
            <ProductCard key={rel.id} product={rel} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
