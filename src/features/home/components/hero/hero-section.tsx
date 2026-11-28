import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowDown, Droplet, ShieldCheck, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Reveal,
  MaskedLine,
  StaggerGroup,
  StaggerItem,
  MarkerHighlight,
} from '@/components/motion';
import { HeroInteractiveStage } from './hero-interactive-stage';

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

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid items-center gap-10 pt-8 pb-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:pt-10 lg:pb-16">
        {/* ========================================================= */}
        {/* LEFT COLUMN: Editorial Typography, Copy, CTAs, Benefits   */}
        {/* ========================================================= */}
        <div className="flex flex-col justify-center">
          {/* Eyebrow */}
          <Reveal immediate delay={0.02} y={12}>
            <p className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C3A27B] inline-block" />
              SCIENCE-INFORMED SKINCARE. MADE FOR YOU.
            </p>
          </Reveal>

          {/* Main Editorial Headline */}
          <h1 className="mt-7 font-serif text-[46px] leading-[1.13] sm:text-[60px] xl:text-[70px] font-medium tracking-[-0.045em] text-[#3D271D]">
            <MaskedLine immediate delay={0.06}>
              Feel balanced.
            </MaskedLine>
            <MaskedLine immediate delay={0.14}>
              Glow{' '}
              <MarkerHighlight immediate delay={0.42} className="italic font-normal text-[#3D271D]">
                naturally.
              </MarkerHighlight>
            </MaskedLine>
          </h1>

          {/* Supporting Description */}
          <Reveal immediate delay={0.16} y={16}>
            <p className="mt-6 max-w-[430px] text-[14px] leading-[1.9] text-[#685346]">
              Targeted brightening serums, oil-balancing care, and intensive overnight renewal—formulated
              with Niacinamide, Vitamin C, Kojic Acid, Sepiwhite™, and soothing botanicals for a
              clearer, more radiant-looking complexion.
            </p>
          </Reveal>

          {/* Call to Actions */}
          <Reveal immediate delay={0.24} y={16}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#daily-favorites">
                <Button
                  variant="primary"
                  size="md"
                  className="inline-flex items-center justify-center gap-3 group"
                >
                  <span>EXPLORE THE COLLECTION</span>
                  <ArrowRight className="w-4 h-4 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/quiz">
                <Button
                  variant="secondary"
                  size="md"
                  className="inline-flex items-center justify-center gap-3 group"
                >
                  <span>FIND YOUR RITUAL</span>
                  <ArrowRight className="w-4 h-4 -rotate-45 stroke-[1.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
            </div>
          </Reveal>

          {/* Benefit Row: Strict 3-column bare icons across all breakpoints */}
          <StaggerGroup
            immediate
            delay={0.32}
            stagger={0.08}
            className="mt-10 grid max-w-[460px] grid-cols-3 gap-3 border-t border-[#3D271D]/15 pt-6"
          >
            {/* Benefit 1 */}
            <StaggerItem y={12}>
              <Droplet size={20} strokeWidth={1.25} className="text-[#3D271D]" />
              <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D] leading-normal">
                TARGETED
                <br />
                SERUMS & NIGHT CARE
              </p>
            </StaggerItem>

            {/* Benefit 2 */}
            <StaggerItem y={12}>
              <Sun size={20} strokeWidth={1.25} className="text-[#3D271D]" />
              <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D] leading-normal">
                BRIGHTENING &
                <br />
                TONE CLARITY
              </p>
            </StaggerItem>

            {/* Benefit 3 */}
            <StaggerItem y={12}>
              <ShieldCheck size={20} strokeWidth={1.25} className="text-[#3D271D]" />
              <p className="mt-2.5 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D] leading-normal">
                FULL INCI
                <br />
                TRANSPARENCY
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN: Interactive Product Stage & Concern Strip   */}
        {/* ========================================================= */}
        <Reveal immediate delay={0.08} y={14}>
          <HeroInteractiveStage />
        </Reveal>
      </div>

      {/* Bottom Transition Indicator */}
      <a
        href="#daily-favorites"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-[8px] uppercase tracking-[0.2em] text-[#685346] hover:text-[#3D271D] transition-colors lg:flex"
      >
        <span>A THOUGHTFUL APPROACH TO SKINCARE</span>
        <ArrowDown size={12} strokeWidth={1.5} className="animate-gentle-float" />
      </a>
    </section>
  );
}
