import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ArrowDown, Droplet, Heart, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      aria-label="Welcome to SAN ELYSIA"
      className="relative overflow-hidden bg-[#FAF7F2] pt-8 sm:pt-12 md:pt-14 pb-14 sm:pb-20"
    >
      {/* Outer Left Edge Vertical Brand Statement (Desktop) */}
      <div
        aria-hidden="true"
        className="hidden 2xl:flex absolute left-4 top-[48%] -translate-y-1/2 -rotate-90 origin-center select-none pointer-events-none items-center"
      >
        <span className="font-sans text-[8.5px] tracking-[0.3em] uppercase text-[#8E7B6F]/80 whitespace-nowrap font-medium">
          SAN ELYSIA — THOUGHTFUL SKINCARE FOR EVERYDAY GLOW
        </span>
      </div>

      <Container className="relative px-5 sm:px-8 md:px-12 lg:px-14 xl:px-18">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-14 items-center">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Editorial Typography, Copy, CTAs, Benefits   */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C3A27B] inline-block" />
              <span className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-[#685346]">
                SCIENCE-INFORMED SKINCARE. MADE FOR YOU.
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-[44px] leading-[1.08] sm:text-5xl md:text-6xl xl:text-[68px] text-[#3D271D] font-normal tracking-tight">
              Feel balanced.
              <br />
              Glow{' '}
              <span className="editorial-highlight italic font-normal text-[#3D271D]">
                naturally.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="font-sans text-sm sm:text-[15px] md:text-base leading-relaxed text-[#685346] max-w-[500px] mt-5 sm:mt-6">
              A thoughtful serum and targeted skincare essentials to help keep your skin clear,
              comfortable and healthy-looking. Because your glow begins with balance.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mt-8 sm:mt-9">
              <Link href="#shop">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5"
                >
                  <span>SHOP THE BALANCING SERUM</span>
                  <ArrowRight className="w-4 h-4 stroke-[2]" />
                </Button>
              </Link>

              <Link href="#ritual">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span>FIND YOUR RITUAL</span>
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </Button>
              </Link>
            </div>

            {/* Subtle Divider */}
            <div className="border-t border-[#E7DDD2] my-8 sm:my-10" />

            {/* Benefit Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 pt-1">
              {/* Benefit 1 */}
              <div className="flex items-start sm:flex-col gap-3 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F3ECE2] flex items-center justify-center flex-shrink-0 text-[#685346]">
                  <Droplet className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#3D271D] leading-tight">
                    TARGETED FORMULATIONS
                  </h3>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex items-start sm:flex-col gap-3 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F3ECE2] flex items-center justify-center flex-shrink-0 text-[#685346]">
                  <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#3D271D] leading-tight">
                    GENTLE, EVERYDAY CARE
                  </h3>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex items-start sm:flex-col gap-3 sm:gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#F3ECE2] flex items-center justify-center flex-shrink-0 text-[#685346]">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-sans text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#3D271D] leading-tight">
                    CLEARER, MORE BALANCED SKIN
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Overlapping Image Cluster & Editorial Card  */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-6 relative mt-6 lg:mt-0">
            {/* Visual Cluster Canvas */}
            <div className="relative w-full max-w-[560px] mx-auto lg:ml-auto">
              {/* Sand/Stone Architectural Background Accent Block */}
              <div
                aria-hidden="true"
                className="absolute -top-3.5 right-0 sm:right-2 w-[66%] sm:w-[64%] h-[78%] bg-[#EFE8DF] -z-10 rounded-xs"
              />

              {/* Primary Product Environment Image Frame */}
              <div className="relative w-[66%] sm:w-[64%] ml-auto aspect-[4/3] rounded-xs overflow-hidden bg-[#FAF7F2] shadow-sm border border-[#E7DDD2]/70">
                <Image
                  src="/images/hero/hero-product-frame.jpg"
                  alt="SAN ELYSIA Balancing Serum on architectural stone podium with dried floral vase"
                  fill
                  priority
                  sizes="(max-width: 768px) 70vw, (max-width: 1200px) 35vw, 380px"
                  className="object-cover object-center"
                />
              </div>

              {/* Overlapping Ritual Model Portrait (Lower-Left Intentional Layering) */}
              <div className="absolute left-0 top-[28%] sm:top-[26%] w-[38%] sm:w-[36%] aspect-[3/4] rounded-xs overflow-hidden bg-[#FAF7F2] shadow-xl border-[3px] border-[#FAF7F2] z-20 transition-transform duration-300 hover:scale-[1.01]">
                <Image
                  src="/images/hero/hero-ritual-model.jpg"
                  alt="Smiling woman with radiant glowing skin gently touching her cheek"
                  fill
                  sizes="(max-width: 768px) 38vw, (max-width: 1200px) 18vw, 200px"
                  className="object-cover object-center"
                />
              </div>

              {/* Editorial Information Card (Directly beneath the product photo) */}
              <div className="mt-4 sm:mt-5 ml-auto w-[62%] sm:w-[60%] bg-[#FFFDF9] border border-[#E7DDD2] p-3.5 sm:p-4.5 flex items-center justify-between group cursor-pointer hover:border-[#C3A27B] transition-colors shadow-xs">
                <div className="flex flex-col pr-1">
                  <span className="font-sans text-[9px] sm:text-[9.5px] font-semibold tracking-[0.2em] uppercase text-[#8E7B6F]">
                    01 — THE EVERYDAY RITUAL
                  </span>
                  <span className="font-serif text-[15px] sm:text-base text-[#3D271D] font-normal mt-0.5 group-hover:text-[#5A3825] transition-colors whitespace-nowrap">
                    A little more balance.
                  </span>
                </div>
                <div className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full border border-[#E7DDD2] flex items-center justify-center flex-shrink-0 text-[#3D271D] group-hover:bg-[#5A3825] group-hover:text-[#FAF7F2] group-hover:border-[#5A3825] transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Transition Indicator */}
        <div className="mt-14 sm:mt-18 lg:mt-20 flex items-center justify-center">
          <Link
            href="#formula"
            className="group inline-flex items-center gap-1.5 font-sans text-[10.5px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-[#685346] hover:text-[#3D271D] transition-colors"
          >
            <span>A THOUGHTFUL APPROACH TO SKINCARE</span>
            <ArrowDown className="w-3.5 h-3.5 stroke-[2] group-hover:translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
