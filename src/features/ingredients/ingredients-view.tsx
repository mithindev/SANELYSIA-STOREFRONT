import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Leaf } from 'lucide-react';
import { ingredients } from '@/data/ingredients';
import {
  Reveal,
  MaskedLine,
  MarkerHighlight,
  ImageReveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion';

export function IngredientsView() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative overflow-hidden border-b border-[#3D271D]/15 bg-[#F3ECE2]/60 py-16 lg:py-20">
        <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal immediate>
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
                KNOW WHAT GOES IN. FEEL GOOD ABOUT IT.
              </p>
            </Reveal>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#3D271D]">
              <MaskedLine immediate delay={0.05}>
                A little nature.
              </MaskedLine>
              <MaskedLine immediate delay={0.14}>
                <MarkerHighlight immediate delay={0.38} className="italic font-normal text-[#3D271D]">
                  A lot of intention.
                </MarkerHighlight>
              </MaskedLine>
            </h1>
            <Reveal immediate delay={0.2}>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-[#685346]">
                Every single active and botanical extract has a deliberate purpose. Explore the
                science-backed essentials behind your SAN ELYSIA ritual—and what they can, and can’t, do.
              </p>
            </Reveal>
          </div>

          <ImageReveal immediate delay={0.12} className="inset-frame aspect-[4/3] w-full rounded-sm overflow-hidden bg-[#FAF7F2] border border-[#E7DDD2] relative shadow-md">
            <Image
              src="/images/products/ritual-collection.jpg"
              alt="SAN ELYSIA targeted serums and night cream arranged on warm travertine stone"
              fill
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover"
            />
          </ImageReveal>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-16 lg:py-20 bg-[#FAF7F2]">
        <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
                  THE INGREDIENT DIRECTORY
                </p>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-medium text-[#3D271D]">
                  Goodness, explained with clarity.
                </h2>
              </div>
              <Link
                href="/benefits"
                className="group inline-flex min-h-11 items-center gap-2 border-b border-[#3D271D]/30 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] hover:border-[#3D271D]"
              >
                <span>Explore daily routine guide</span>
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          {/* List */}
          <StaggerGroup stagger={0.05} className="border-t border-[#3D271D]/20 divide-y divide-[#3D271D]/20">
            {ingredients.map((ing, index) => (
              <StaggerItem key={ing.slug} y={12}>
                <Link
                  href={`/ingredients/${ing.slug}`}
                  className="group grid gap-4 py-8 sm:grid-cols-[.1fr_.8fr_1fr_.1fr] sm:items-center hover:bg-[#F3ECE2]/40 px-3 transition-colors rounded-xs"
                >
                  <span className="font-mono text-xs text-[#8E7B6F]">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl text-[#3D271D] group-hover:text-[#5A3825] group-hover:italic transition-colors">
                      {ing.name}
                    </h3>
                    <p className="mt-1.5 text-[9px] uppercase tracking-[0.14em] text-[#8E7B6F]">
                      {ing.annotation}
                    </p>
                  </div>
                  <p className="text-xs leading-relaxed text-[#685346]">{ing.benefit}</p>
                  <ArrowUpRight
                    size={20}
                    strokeWidth={1.25}
                    className="hidden justify-self-end text-[#3D271D] group-hover:translate-x-1 transition-transform sm:block"
                  />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>

          {/* Transparency Disclaimer */}
          <div className="mt-12 flex items-start gap-4 border border-[#3D271D]/20 bg-[#F3ECE2]/80 p-6 rounded-xs">
            <Leaf size={22} strokeWidth={1.3} className="shrink-0 text-[#C3A27B] mt-0.5" />
            <p className="text-xs leading-relaxed text-[#685346]">
              Natural does not automatically mean suitable for everyone. Always check complete product
              packaging, patch test active serums before use, and consult a medical professional if you
              have persistent inflammatory concerns. Our ingredient guides are educational, not medical
              advice.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
