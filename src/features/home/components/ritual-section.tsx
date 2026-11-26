import * as React from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RitualInvitationSection() {
  return (
    <section id="ritual" className="relative overflow-hidden border-b border-[#3D271D]/15 bg-[#FAF7F2] py-20 lg:py-24">
      {/* Outer Left Edge Vertical Caption Rail */}
      <div
        aria-hidden="true"
        className="caption-rail pointer-events-none absolute left-5 top-0 hidden h-full items-center xl:flex select-none z-10"
      >
        <span
          className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8E7B6F]/70 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          N°04 — YOUR GLOW, ON REPEAT
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20 items-center">
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            Consistency feels good.
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-medium tracking-tight text-[#3D271D]">
            Your ritual.
            <br />
            <span className="marker italic font-normal text-[#3D271D]">A regular little joy.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-[#685346]">
            Keep the care coming with a recurring skincare delivery. Less remembering to restock.
            More uninterrupted time for yourself.
          </p>
          <div className="mt-8">
            <Link href="/shop?category=bundles">
              <Button variant="primary" size="md" className="inline-flex items-center gap-3">
                <span>Discover ritual bundles</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>

        {/* Right: Glassmorphism Feature Card */}
        <div className="self-center border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-7 sm:p-9 rounded-xs shadow-xs">
          <div className="flex items-center justify-between border-b border-[#3D271D]/15 pb-5">
            <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#3D271D]">
              The SAN ELYSIA ritual bundle
            </p>
            <Sparkles size={23} strokeWidth={1.3} className="text-[#C3A27B]" />
          </div>

          <ul className="space-y-5 py-7 text-sm text-[#3D271D]">
            <li className="flex items-center gap-3">
              <Check size={17} strokeWidth={1.5} className="text-[#5A3825] shrink-0" />
              <span>Your complete 3-step essentials, coordinated to finish together</span>
            </li>
            <li className="flex items-center gap-3">
              <Check size={17} strokeWidth={1.5} className="text-[#5A3825] shrink-0" />
              <span>Complimentary insured shipping across India</span>
            </li>
            <li className="flex items-center gap-3">
              <Check size={17} strokeWidth={1.5} className="text-[#5A3825] shrink-0" />
              <span>12% bundle savings compared to individual essentials</span>
            </li>
          </ul>

          <p className="border-t border-[#3D271D]/15 pt-5 text-[11px] leading-relaxed text-[#8E7B6F]">
            Formulated for lasting skin equilibrium. Always in control of your routine.
          </p>
        </div>
      </div>
    </section>
  );
}
