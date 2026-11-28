'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowRight, Check, Plus, Sparkles, X } from 'lucide-react';
import { catalogProducts } from '@/data/catalog';
import { useCart } from '@/components/cart/cart-context';
import { LUXURY_EASE } from '@/components/motion';
import { HERO_BOTTLE_SPECS, type HeroBottleSpec } from '../../data/hero-stage-data';
import { IngredientSplashCard } from './ingredient-splash-card';
import { SkinConcernStrip } from './skin-concern-strip';

export function HeroInteractiveStage() {
  const [activeSlug, setActiveSlug] = React.useState<string | null>(null);
  const [hoveredSlug, setHoveredSlug] = React.useState<string | null>(null);
  const [justAddedSlug, setJustAddedSlug] = React.useState<string | null>(null);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const prefersReducedMotion = useReducedMotion() ?? false;
  const { addItem } = useCart();

  React.useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const activeSpec: HeroBottleSpec | null = React.useMemo(
    () => HERO_BOTTLE_SPECS.find((b) => b.slug === activeSlug) ?? null,
    [activeSlug]
  );

  const activeCatalogProduct = React.useMemo(
    () => catalogProducts.find((p) => p.slug === activeSlug) ?? null,
    [activeSlug]
  );

  // Close spotlight on Escape key
  React.useEffect(() => {
    if (!activeSlug) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSlug(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeSlug]);

  const handleBottleClick = (slug: string) => {
    setActiveSlug((current) => (current === slug ? null : slug));
  };

  const handleConcernSelect = (targetSlug: string) => {
    setActiveSlug((current) => (current === targetSlug ? null : targetSlug));
  };

  const handleQuickAdd = () => {
    if (!activeCatalogProduct) return;
    addItem(
      activeCatalogProduct,
      activeCatalogProduct.variants[0]?.title || 'Default',
      1
    );
    setJustAddedSlug(activeCatalogProduct.slug);
    setTimeout(() => setJustAddedSlug(null), 1600);
  };

  const isInspecting = activeSpec !== null;

  return (
    <div className="flex flex-col gap-4">
      {/* ================================================================= */}
      {/* INTERACTIVE PODIUM & SPLASH STAGE                                 */}
      {/* ================================================================= */}
      <div
        className={`relative w-full overflow-hidden rounded-2xl border transition-colors duration-500 ${
          isInspecting
            ? 'border-[#C3A27B]/45 bg-gradient-to-b from-[#F5EDE1] via-[#FAF7F2] to-[#F3ECE2] min-h-[540px] lg:min-h-[455px]'
            : 'border-[#E7DDD2]/90 bg-gradient-to-b from-[#FAF7F2] via-[#FAF7F2] to-[#F3ECE2]/85 min-h-[360px] sm:min-h-[400px] lg:min-h-[455px]'
        }`}
      >
        {/* Subtle studio radial ambient light behind stage */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 transition-opacity duration-500"
          style={{
            background: activeSpec
              ? `radial-gradient(circle at 50% 42%, ${activeSpec.splashHueTint} 0%, rgba(243, 236, 226, 0.35) 50%, transparent 78%)`
              : 'radial-gradient(circle at 52% 48%, rgba(235, 222, 204, 0.52) 0%, transparent 72%)',
          }}
        />

        {/* Click-away backdrop reset when inspecting */}
        {isInspecting && (
          <button
            type="button"
            aria-label="Reset formula spotlight view"
            onClick={() => setActiveSlug(null)}
            className="absolute inset-0 z-10 cursor-default bg-transparent"
          />
        )}

        {/* Top-Left Circular Stamp ("REAL INGREDIENTS • REAL RESULTS") */}
        <motion.div
          aria-hidden="true"
          animate={{ opacity: isInspecting ? 0.2 : 0.88, scale: isInspecting ? 0.9 : 1 }}
          transition={{ duration: 0.35, ease: LUXURY_EASE }}
          className="pointer-events-none absolute left-3 top-3 z-10 hidden sm:block select-none"
        >
          <svg
            viewBox="0 0 110 110"
            className={`h-[78px] w-[78px] text-[#5A3825]/80 ${
              prefersReducedMotion ? '' : 'animate-[spin_32s_linear_infinite]'
            }`}
          >
            <defs>
              <path
                id="seal-circle-path"
                d="M 55, 55 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
              />
            </defs>
            <text
              fill="currentColor"
              fontSize="8.3"
              fontWeight="600"
              letterSpacing="2.4"
              className="font-sans uppercase"
            >
              <textPath href="#seal-circle-path">
                REAL INGREDIENTS • REAL RESULTS •
              </textPath>
            </text>
          </svg>
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center text-[#5A3825]/70"
          >
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
          </span>
        </motion.div>

        {/* Top-Right Close / Interactive Hint Pill */}
        <div className="absolute right-3 top-3 z-40">
          {isInspecting ? (
            <motion.button
              type="button"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => setActiveSlug(null)}
              aria-label="Close ingredient view"
              className="inline-flex min-h-9 items-center gap-1.5 rounded-full border border-[#3D271D]/20 bg-[#FAF7F2]/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] shadow-xs backdrop-blur-md transition-colors hover:bg-[#3D271D] hover:text-[#FAF7F2] cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
              <span>All formulas</span>
            </motion.button>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#3D271D]/12 bg-[#FFFDF9]/85 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#685346] backdrop-blur-xs select-none">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C3A27B] animate-pulse" />
              <span>Tap any bottle for actives</span>
            </span>
          )}
        </div>

        {/* Botanical Framing Sprigs (Recede cleanly during spotlight splash) */}
        <motion.div
          aria-hidden="true"
          animate={{
            opacity: isInspecting ? 0.14 : 0.92,
            scale: isInspecting ? 0.94 : 1,
            x: isInspecting ? -14 : 0,
          }}
          transition={{ duration: 0.45, ease: LUXURY_EASE }}
          className="pointer-events-none absolute -left-4 bottom-[32px] z-[5] w-[34%] max-w-[205px] select-none"
        >
          <Image
            src="/images/hero/stage/botanical-left.png"
            alt=""
            width={507}
            height={768}
            className="h-auto w-full object-contain drop-shadow-[0_12px_20px_rgba(61,39,29,0.12)]"
          />
        </motion.div>

        <motion.div
          aria-hidden="true"
          animate={{
            opacity: isInspecting ? 0.14 : 0.92,
            scale: isInspecting ? 0.94 : 1,
            x: isInspecting ? 14 : 0,
          }}
          transition={{ duration: 0.45, ease: LUXURY_EASE }}
          className="pointer-events-none absolute -right-4 bottom-[34px] z-[5] w-[34%] max-w-[205px] select-none"
        >
          <Image
            src="/images/hero/stage/botanical-right.png"
            alt=""
            width={536}
            height={768}
            className="h-auto w-full object-contain drop-shadow-[0_12px_20px_rgba(61,39,29,0.12)]"
          />
        </motion.div>

        {/* Travertine Two-Tier Stone Plinth */}
        <motion.div
          aria-hidden="true"
          animate={{
            opacity: isInspecting ? 0.12 : 1,
            y: isInspecting ? 20 : 0,
            scale: isInspecting ? 0.96 : 1,
          }}
          transition={{ duration: 0.45, ease: LUXURY_EASE }}
          className="pointer-events-none absolute inset-x-0 bottom-[10px] z-[8] mx-auto w-[90%] max-w-[560px] select-none"
        >
          <Image
            src="/images/hero/stage/travertine-plinth.png"
            alt=""
            width={1376}
            height={610}
            priority
            className="h-auto w-full object-contain drop-shadow-[0_18px_24px_rgba(61,39,29,0.14)]"
          />
        </motion.div>

        {/* Radial Golden Serum Splash Layer (Only active when a product is selected) */}
        <AnimatePresence>
          {activeSpec && (
            <motion.div
              key={`splash-${activeSpec.slug}`}
              aria-hidden="true"
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.42, rotate: -10 }
              }
              animate={
                prefersReducedMotion
                  ? { opacity: 0.85 }
                  : { opacity: 0.92, scale: 1, rotate: 0 }
              }
              exit={
                prefersReducedMotion
                  ? { opacity: 0, transition: { duration: 0.15 } }
                  : { opacity: 0, scale: 0.72, transition: { duration: 0.22 } }
              }
              transition={{
                duration: prefersReducedMotion ? 0.2 : 0.62,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="pointer-events-none absolute left-1/2 top-[132px] z-[15] w-[260px] -translate-x-1/2 -translate-y-1/2 sm:top-[155px] sm:w-[300px] lg:top-[44%] lg:w-[360px] select-none"
            >
              <Image
                src="/images/hero/stage/serum-splash.png"
                alt=""
                width={1024}
                height={1024}
                className="h-auto w-full object-contain drop-shadow-[0_14px_26px_rgba(195,162,123,0.35)]"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* =============================================================== */}
        {/* STAGE INTERACTIVE BOTTLES (Rest cluster + Active spotlight)     */}
        {/* =============================================================== */}
        <div
          className={`relative z-20 w-full ${
            isInspecting
              ? 'h-[268px] sm:h-[295px] lg:h-[465px]'
              : 'h-[345px] sm:h-[390px] lg:h-[465px]'
          }`}
        >
          {HERO_BOTTLE_SPECS.map((bottle, idx) => {
            const isActive = activeSlug === bottle.slug;
            const isHovered = hoveredSlug === bottle.slug;
            const aspectRatio = bottle.cutoutWidth / bottle.cutoutHeight;

            // Compute resting vs inspecting spatial targets
            // Unselected bottles gently slide out toward outer flanks when inspecting
            const inactiveFlankLeft =
              idx < 2 ? 6 + idx * 7 : 94 - (HERO_BOTTLE_SPECS.length - 1 - idx) * 7;

            const activeBottom = isDesktop ? 86 : 16;
            const restBottom = isDesktop
              ? bottle.restLayout.bottomPx
              : Math.round(bottle.restLayout.bottomPx * 0.56);

            return (
              <motion.button
                key={bottle.slug}
                type="button"
                onClick={() => handleBottleClick(bottle.slug)}
                onMouseEnter={() => setHoveredSlug(bottle.slug)}
                onMouseLeave={() =>
                  setHoveredSlug((cur) => (cur === bottle.slug ? null : cur))
                }
                aria-pressed={isActive}
                aria-label={`Inspect ingredients for ${bottle.title} (${bottle.packagingLabel})`}
                initial={false}
                animate={
                  isActive
                    ? {
                        left: '50%',
                        bottom: activeBottom,
                        scale: 1.05,
                        opacity: 1,
                        rotate: 0,
                        zIndex: 35,
                        filter: 'blur(0px)',
                      }
                    : isInspecting
                      ? {
                          left: `${inactiveFlankLeft}%`,
                          bottom: isDesktop ? 82 : 24,
                          scale: 0.64,
                          opacity: 0.24,
                          rotate: 0,
                          zIndex: 12,
                          filter: prefersReducedMotion ? 'blur(0px)' : 'blur(1.5px)',
                        }
                      : {
                          left: `${bottle.restLayout.leftPercent}%`,
                          bottom: restBottom,
                          scale: isHovered ? 1.05 : 1,
                          y: isHovered && !prefersReducedMotion ? -10 : 0,
                          opacity: hoveredSlug && !isHovered ? 0.88 : 1,
                          rotate: isHovered ? 0 : bottle.restLayout.tiltDeg,
                          zIndex: isHovered ? 32 : bottle.restLayout.zIndex,
                          filter: 'blur(0px)',
                        }
                }
                transition={
                  prefersReducedMotion
                    ? { duration: 0.18 }
                    : {
                        type: 'spring',
                        stiffness: 275,
                        damping: 26,
                        mass: 0.85,
                      }
                }
                style={{
                  position: 'absolute',
                  transformOrigin: 'bottom center',
                  x: '-50%',
                }}
                className="group cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3825] focus-visible:ring-offset-4"
              >
                {/* Hover / Active Luminous Aura */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -inset-3 -z-10 rounded-full blur-xl transition-opacity duration-300 ${
                    isActive || isHovered ? 'opacity-75' : 'opacity-0'
                  }`}
                  style={{
                    background: `radial-gradient(circle, ${bottle.auraHex}55 0%, transparent 72%)`,
                  }}
                />

                {/* Hover Micro Label Pill (Rest Mode) */}
                {!isInspecting && (
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#3D271D]/15 bg-[#FFFDF9]/95 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] shadow-sm backdrop-blur-xs transition-all duration-200 ${
                      isHovered
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-1'
                    }`}
                  >
                    {bottle.title}
                  </span>
                )}

                {/* Bottle Cutout Image */}
                <div
                  className="relative transition-[height] duration-300"
                  style={{
                    height: isActive
                      ? 'clamp(196px, 28vw, 286px)'
                      : `clamp(${Math.round(bottle.restLayout.heightPx * 0.64)}px, 23vw, ${bottle.restLayout.heightPx}px)`,
                    width: isActive
                      ? `calc(clamp(196px, 28vw, 286px) * ${aspectRatio.toFixed(4)})`
                      : `calc(clamp(${Math.round(bottle.restLayout.heightPx * 0.64)}px, 23vw, ${bottle.restLayout.heightPx}px) * ${aspectRatio.toFixed(4)})`,
                  }}
                >
                  <Image
                    src={bottle.cutoutSrc}
                    alt={`${bottle.title} — ${bottle.packagingLabel}`}
                    fill
                    priority={idx < 3}
                    sizes="(max-width: 768px) 95px, 130px"
                    className="object-contain drop-shadow-[0_14px_18px_rgba(45,27,18,0.28)]"
                  />
                </div>

                {/* Ground Contact Shadow */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -bottom-1.5 left-1/2 h-3 w-[82%] -translate-x-1/2 rounded-full transition-all duration-300 ${
                    isHovered ? 'opacity-50 scale-x-90' : 'opacity-80 scale-x-100'
                  }`}
                  style={{
                    background:
                      'radial-gradient(ellipse at center, rgba(45,27,18,0.45) 0%, transparent 72%)',
                  }}
                />
              </motion.button>
            );
          })}

        </div>

        {/* =============================================================== */}
        {/* SINGLE-DOM INGREDIENT SPLASH CARDS (2x2 mobile / radial lg+)    */}
        {/* =============================================================== */}
        <AnimatePresence>
          {activeSpec && (
            <motion.div
              key={`cards-${activeSpec.slug}`}
              initial={false}
              className="relative z-30 grid grid-cols-2 gap-2.5 px-3 pb-3 lg:pointer-events-none lg:absolute lg:inset-0 lg:block lg:p-0"
            >
              {activeSpec.splashIngredients.map((ing, index) => (
                <IngredientSplashCard
                  key={ing.id}
                  ingredient={ing}
                  index={index}
                  reducedMotion={prefersReducedMotion}
                  isDesktop={isDesktop}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* =============================================================== */}
        {/* ACTIVE SPOTLIGHT ACTION DOCK                                    */}
        {/* =============================================================== */}
        <AnimatePresence>
          {activeSpec && (
            <motion.div
              key={`dock-${activeSpec.slug}`}
              initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 14 }}
              animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.28, ease: LUXURY_EASE }}
              className="relative z-40 mx-3 mb-3 flex flex-wrap items-center justify-between gap-2.5 rounded-xl border border-[#3D271D]/15 bg-[#FFFDF9]/92 px-3.5 py-2.5 shadow-md backdrop-blur-md lg:absolute lg:inset-x-4 lg:bottom-3 lg:mx-0 lg:mb-0"
            >
              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8E7B6F]">
                  {activeSpec.volumeLabel} · {activeSpec.packagingLabel}
                </p>
                <p className="truncate font-serif text-lg font-medium text-[#3D271D]">
                  {activeSpec.title}{' '}
                  <span className="ml-1 font-sans text-xs font-semibold text-[#5A3825]">
                    {activeSpec.formattedPrice}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleQuickAdd}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-sm bg-[#5A3825] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#FAF7F2] transition-colors hover:bg-[#3D271D] cursor-pointer"
                >
                  {justAddedSlug === activeSpec.slug ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#F5D5B8]" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-3.5 w-3.5" />
                      <span>Add to bag</span>
                    </>
                  )}
                </button>

                <Link
                  href={`/product/${activeSpec.slug}`}
                  className="inline-flex min-h-9 items-center gap-1 rounded-sm border border-[#3D271D]/25 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#3D271D] transition-colors hover:border-[#3D271D] hover:bg-[#F3ECE2]"
                >
                  <span>Formula</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ================================================================= */}
      {/* LOWER SHELF: SKIN CONCERN MACRO CARDS + EDITORIAL RITUAL CARD     */}
      {/* ================================================================= */}
      <div className="grid gap-3 sm:grid-cols-[1.65fr_1fr] sm:items-stretch">
        <SkinConcernStrip
          activeProductSlug={activeSlug}
          onSelectConcern={handleConcernSelect}
        />

        <Link
          href="#ritual"
          className="group flex flex-col justify-between rounded-xl border border-[#E7DDD2] bg-[#FFFDF9] p-4 transition-all duration-300 hover:border-[#C3A27B] hover:shadow-sm"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#8E7B6F]">
            01 — THE EVERYDAY RITUAL
          </p>
          <div className="mt-2 flex items-center justify-between gap-2 font-serif text-[18px] leading-snug text-[#3D271D]">
            <span>Five purposeful formulas.</span>
            <ArrowRight
              size={17}
              strokeWidth={1.5}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
