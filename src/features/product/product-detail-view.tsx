'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Leaf, Package, Star, ArrowUpRight, Check, ShieldAlert } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ProductItem, catalogProducts } from '@/data/catalog';
import { reviews } from '@/data/reviews';
import { useCart } from '@/components/cart/cart-context';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ui/product-card';
import { LUXURY_EASE, AnimatedAccordion, StaggerGroup, StaggerItem, Reveal } from '@/components/motion';

export function ProductDetailView({ product }: { product: ProductItem }) {
  const [selectedImage, setSelectedImage] = React.useState(product.image);
  const [selectedVariantId, setSelectedVariantId] = React.useState(
    product.variants[0]?.id || ''
  );
  const [quantity, setQuantity] = React.useState(1);
  const [addedSuccess, setAddedSuccess] = React.useState(false);

  React.useEffect(() => {
    setSelectedImage(product.image);
    setSelectedVariantId(product.variants[0]?.id || '');
    setQuantity(1);
  }, [product]);

  const { addItem } = useCart();

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) || product.variants[0];

  const productReviews = React.useMemo(
    () => reviews.filter((r) => r.productSlug === product.slug),
    [product.slug]
  );

  const avgRating = React.useMemo(() => {
    if (!productReviews.length) return '5.0';
    const sum = productReviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / productReviews.length).toFixed(1);
  }, [productReviews]);

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
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-start">
        {/* Left: Gallery */}
        <div className="lg:sticky lg:top-28">
          <div className="inset-frame overflow-hidden rounded-sm bg-[#F3ECE2] border border-[#E7DDD2] aspect-[4/5] relative w-full shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedImage}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.28, ease: LUXURY_EASE }}
                className="relative h-full w-full"
              >
                <Image
                  src={selectedImage}
                  alt={product.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
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

          {/* Packaging Color Theme Note */}
          <div
            className="mt-5 flex items-center gap-3 rounded-xs border px-4 py-3 text-xs"
            style={{
              backgroundColor: product.colorTheme.surfaceHex,
              borderColor: product.colorTheme.borderHex,
              color: product.colorTheme.textHex,
            }}
          >
            <span
              aria-hidden="true"
              className="h-3.5 w-3.5 rounded-full shrink-0 border border-black/10"
              style={{ backgroundColor: product.colorTheme.primaryHex }}
            />
            <div>
              <span className="font-semibold uppercase tracking-[0.12em] text-[10px]">
                Signature Palette: {product.colorTheme.name}
              </span>
              <p className="text-[11px] opacity-85 mt-0.5">{product.colorTheme.moodNote}</p>
            </div>
          </div>
        </div>

        {/* Right: Product Narrative & Actions */}
        <div className="lg:py-1 flex flex-col justify-between">
          <div>
            {/* Front Label / Eyebrow */}
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-[#685346]">
              {product.frontLabel || product.subtitle}
            </p>

            {/* H1 Title */}
            <h1 className="mt-2.5 font-serif text-3xl sm:text-4xl lg:text-[42px] font-medium leading-tight text-[#3D271D]">
              {product.title}
            </h1>
            <p className="mt-1.5 text-xs uppercase tracking-[0.16em] text-[#8E7B6F]">
              {product.subtitle}
            </p>

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
              <span className="font-medium text-[#3D271D]">{avgRating}</span>
              <span className="text-[#8E7B6F]">
                {productReviews.length > 0
                  ? `(${productReviews.length} verified ${productReviews.length === 1 ? 'review' : 'reviews'})`
                  : '(Community stories)'}
              </span>
            </Link>

            {/* Price display */}
            <div className="my-5 flex items-baseline gap-3">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={selectedVariant?.formattedPrice || product.formattedPrice}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: LUXURY_EASE }}
                  className="font-serif text-2xl sm:text-3xl font-medium text-[#3D271D]"
                >
                  {selectedVariant?.formattedPrice || product.formattedPrice}
                </motion.span>
              </AnimatePresence>
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

            {/* Suitable For */}
            {product.suitableFor && (
              <p className="mt-4 inline-block rounded-xs border border-[#E7DDD2] bg-[#F3ECE2]/60 px-3 py-1.5 text-[11px] font-medium text-[#3D271D]">
                {product.suitableFor}
              </p>
            )}

            {/* Key Benefits */}
            <div className="mt-6 border border-[#E7DDD2] bg-[#FFFDF9] p-5 rounded-xs">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#685346] mb-3">
                Key Benefits
              </p>
              <ul className="space-y-2 text-xs text-[#3D271D]">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                    <Check
                      size={14}
                      strokeWidth={2}
                      className="shrink-0 mt-0.5"
                      style={{ color: product.colorTheme.primaryHex }}
                    />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Variant / Size selector */}
            {product.variants.length > 0 && (
              <div className="mt-6">
                <span className="mb-2 block text-[11px] font-sans font-medium uppercase tracking-wider text-[#3D271D]">
                  Pack Size
                </span>
                <div className="flex flex-wrap gap-2.5">
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
            {/* 1. Key Actives & Botanicals */}
            <AnimatedAccordion title="Key Actives & Ingredients" defaultOpen>
              <div className="text-xs text-[#685346] leading-relaxed space-y-3">
                <ul className="space-y-2.5">
                  {product.keyActives.map((active, i) => (
                    <li key={i} className="border-l-2 border-[#E7DDD2] pl-3">
                      <div className="flex flex-wrap items-center gap-2">
                        {active.ingredientSlug ? (
                          <Link
                            href={`/ingredients/${active.ingredientSlug}`}
                            className="font-semibold text-[#3D271D] hover:text-[#5A3825] underline underline-offset-2"
                          >
                            {active.name}
                          </Link>
                        ) : (
                          <span className="font-semibold text-[#3D271D]">{active.name}</span>
                        )}
                        {active.concentration && (
                          <span className="rounded-xs bg-[#F3ECE2] px-1.5 py-0.5 text-[10px] font-semibold text-[#5A3825]">
                            {active.concentration}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-[#685346]">{active.description}</p>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/ingredients"
                  className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wider text-[#3D271D] underline underline-offset-4"
                >
                  <Leaf size={13} className="text-[#C3A27B]" /> Explore Ingredient Library
                </Link>
              </div>
            </AnimatedAccordion>

            {/* 2. Full Ingredients (INCI) */}
            <AnimatedAccordion title="Full Ingredients (INCI)">
              <div className="text-xs text-[#685346] leading-relaxed">
                <p>{product.inci}</p>
              </div>
            </AnimatedAccordion>

            {/* 3. How to Use */}
            <AnimatedAccordion title="Directions for Use">
              <div className="text-xs text-[#685346] leading-relaxed">
                <ol className="list-decimal pl-5 space-y-1.5">
                  {product.howToUse.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </div>
            </AnimatedAccordion>

            {/* 4. Caution & Storage */}
            <AnimatedAccordion title="Caution & Storage Advice">
              <div className="text-xs text-[#685346] leading-relaxed space-y-2">
                <p className="flex items-start gap-2">
                  <ShieldAlert size={14} className="shrink-0 mt-0.5 text-[#5A3825]" />
                  <span>
                    <strong>Caution:</strong>{' '}
                    {product.caution ||
                      'For external use only. Avoid contact with eyes. Patch test before use. Discontinue use if irritation occurs.'}
                  </span>
                </p>
                <p>
                  <strong>Storage:</strong>{' '}
                  {product.storage || 'Store in a cool, dry place away from direct sunlight.'}
                </p>
              </div>
            </AnimatedAccordion>
          </div>
        </div>
      </div>

      {/* Related Essentials Row */}
      <div className="mt-20 pt-12 border-t border-[#3D271D]/15">
        <Reveal>
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
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {relatedProducts.map((rel, index) => (
            <StaggerItem key={rel.id}>
              <ProductCard product={rel} index={index} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </div>
  );
}
