import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Sprout, Droplets, Heart } from 'lucide-react';

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative overflow-hidden border-b border-[#3D271D]/15 bg-[#F3ECE2]/70 py-20 lg:py-24">
      {/* Outer Left Edge Vertical Caption Rail */}
      <div
        aria-hidden="true"
        className="caption-rail pointer-events-none absolute left-5 top-0 hidden h-full items-center xl:flex select-none z-10"
      >
        <span
          className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8E7B6F]/70 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          N°03 — CARE WITH INTENTION
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        {/* Left: Offset Framed Image */}
        <div className="relative mx-3">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-full w-full border border-[#3D271D]/20 rounded-xs"
          />
          <div className="relative aspect-[4/3] w-full rounded-sm overflow-hidden bg-[#FAF7F2] border border-[#E7DDD2] shadow-md">
            <Image
              src="/images/products/night-cream.jpg"
              alt="SAN ELYSIA Intensive Brightening and Skin Renewal Night Cream on travertine stone"
              fill
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover"
            />
          </div>
          <span className="absolute -bottom-5 -right-3 border border-[#3D271D]/20 bg-[#FAF7F2] px-5 py-3 text-[9px] font-sans font-medium uppercase tracking-[0.17em] text-[#3D271D] shadow-sm select-none">
            Nature is our starting point.
          </span>
        </div>

        {/* Right: Editorial Story */}
        <div>
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            Thoughtfully chosen. Simply beautiful.
          </p>
          <h2 className="mt-5 font-serif text-4xl lg:text-5xl font-medium tracking-tight text-[#3D271D]">
            Nothing extra.
            <br />
            Just <span className="marker italic font-normal text-[#3D271D]">goodness.</span>
          </h2>
          <p className="mt-6 max-w-[510px] text-sm leading-relaxed text-[#685346]">
            We believe feeling good in your skin shouldn’t mean doing more. SAN ELYSIA brings together
            purposeful clinical actives and uncomplicated botanical rituals — a gentle invitation to
            slow down, reset, and care for yourself.
          </p>

          <div className="mt-8 grid grid-cols-3 border-y border-[#3D271D]/20 py-5">
            <div>
              <Sprout size={23} strokeWidth={1.3} className="text-[#3D271D]" />
              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D]">
                Nature-led care
              </p>
            </div>
            <div className="border-x border-[#3D271D]/20 pl-5">
              <Droplets size={23} strokeWidth={1.3} className="text-[#3D271D]" />
              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D]">
                Purposeful formulas
              </p>
            </div>
            <div className="pl-5">
              <Heart size={23} strokeWidth={1.3} className="text-[#3D271D]" />
              <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.14em] text-[#3D271D]">
                Everyday wellbeing
              </p>
            </div>
          </div>

          <Link
            href="/ingredients"
            className="inline-flex min-h-11 items-center gap-2 border-b border-[#3D271D]/30 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] transition-colors hover:border-[#3D271D] mt-6"
          >
            <span>Discover what goes in</span>
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
