import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Droplet, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to SAN ELYSIA"
      className="relative overflow-hidden border-b border-[#3D271D]/15 bg-[#FAF7F2]"
    >
      {/* Outer Left Edge Vertical Brand Statement (Desktop Only) */}
      <div
        aria-hidden="true"
        className="caption-rail pointer-events-none absolute left-5 top-0 hidden h-full items-center xl:flex select-none z-10"
      >
        <span
          className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8E7B6F]/70 whitespace-nowrap"
          style={{
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          SAN ELYSIA — THOUGHTFUL SKINCARE FOR EVERYDAY GLOW
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid min-h-[calc(100dvh-118px)] items-center gap-12 py-16 lg:min-h-[690px] lg:grid-cols-2 lg:gap-10 lg:py-20">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Editorial Typography, Copy, CTAs, Benefits   */}
        {/* ========================================================= */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <p className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C3A27B] inline-block" />
            SCIENCE-INFORMED SKINCARE. MADE FOR YOU.
          </p>

          {/* Main Editorial Headline */}
          <h1 className="mt-7 font-serif text-[46px] leading-[1.13] sm:text-[60px] xl:text-[70px] font-medium tracking-[-0.045em] text-[#3D271D]">
            Feel balanced.
            <br />
            Glow{' '}
            <span className="marker italic font-normal text-[#3D271D]">
              naturally.
            </span>
          </h1>

          {/* Supporting Description */}
          <p className="mt-6 max-w-[410px] text-[14px] leading-[1.9] text-[#685346]">
            A thoughtful serum and targeted skincare essentials to help keep your skin clear,
            comfortable and healthy-looking. Because your glow begins with balance.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#shop">
              <Button
                variant="primary"
                size="md"
                className="inline-flex items-center justify-center gap-3"
              >
                <span>SHOP THE BALANCING SERUM</span>
                <ArrowRight className="w-4 h-4 stroke-[1.5]" />
              </Button>
            </Link>

            <Link href="#ritual">
              <Button
                variant="secondary"
                size="md"
                className="inline-flex items-center justify-center gap-3"
              >
                <span>FIND YOUR RITUAL</span>
                <ArrowRight className="w-4 h-4 -rotate-45 stroke-[1.5]" />
              </Button>
            </Link>
          </div>

          {/* Benefit Row: Strict 3-column bare icons across all breakpoints */}
          <div className="mt-10 grid max-w-[460px] grid-cols-3 gap-3 border-t border-[#3D271D]/15 pt-6">
            {/* Benefit 1 */}
            <div>
              <Droplet size={20} strokeWidth={1.25} className="text-[#3D271D]" />
              <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D] leading-normal">
                TARGETED
                <br />
                FORMULATIONS
              </p>
            </div>

            {/* Benefit 2 */}
            <div>
              <Heart size={20} strokeWidth={1.25} className="text-[#3D271D]" />
              <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D] leading-normal">
                GENTLE, EVERYDAY
                <br />
                CARE
              </p>
            </div>

            {/* Benefit 3 */}
            <div>
              <Sparkles size={20} strokeWidth={1.25} className="text-[#3D271D]" />
              <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D] leading-normal">
                CLEARER, MORE
                <br />
                BALANCED SKIN
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Overlapping Image Cluster & Editorial Card  */}
        {/* ========================================================= */}
        <div className="hero-collage">
          {/* Layer 1: Backdrop Accent */}
          <div className="hero-backdrop" aria-hidden="true" />

          {/* Layer 2: Main Still Product Image with Inset Frame */}
          <div className="hero-still inset-frame overflow-hidden bg-[#FAF7F2]">
            <Image
              src="/images/hero/san-elysia-serum-cutout.webp"
              alt="SAN ELYSIA Niacinamide 12% Balancing Serum on natural stone pedestal with fresh botanicals and jasmine blossoms"
              fill
              priority
              sizes="(max-width: 768px) 83vw, (max-width: 1200px) 45vw, 550px"
              className="object-cover object-bottom"
            />
          </div>

          {/* Layer 3: Overlapping Ritual Model Portrait (Lower-Left Intentional Layering) */}
          <div className="hero-portrait overflow-hidden shadow-xl">
            <Image
              src="/images/hero/hero-ritual-model.jpg"
              alt="Smiling woman with radiant glowing skin gently touching her cheek"
              fill
              sizes="(max-width: 768px) 46vw, 250px"
              className="object-cover object-center"
            />
          </div>

          {/* Layer 4: Editorial Information Card (Directly beneath the product pedestal) */}
          <Link
            href="#ritual"
            className="hero-note group transition-colors hover:bg-[#F3ECE2]/90 block"
          >
            <p className="text-[9px] uppercase tracking-[0.16em] text-[#8E7B6F]">
              01 — THE EVERYDAY RITUAL
            </p>
            <p className="mt-2 flex items-center justify-between font-serif text-lg text-[#3D271D]">
              <span>A little more balance.</span>
              <ArrowRight size={17} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
            </p>
          </Link>
        </div>
      </div>

      {/* Bottom Transition Indicator */}
      <a
        href="#formula"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#685346] hover:text-[#3D271D] transition-colors lg:flex"
      >
        <span>A THOUGHTFUL APPROACH TO SKINCARE</span>
        <ArrowDown size={12} strokeWidth={1.5} className="transition-transform hover:translate-y-0.5" />
      </a>
    </section>
  );
}
