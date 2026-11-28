import * as React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Quote } from 'lucide-react';
import { Reveal } from '@/components/motion';

export function CommunitySection() {
  return (
    <section className="relative overflow-hidden border-b border-[#3D271D]/15 bg-[#F3ECE2]/40 py-20 lg:py-24">
      {/* Outer Left Edge Vertical Caption Rail */}
      <div
        aria-hidden="true"
        className="caption-rail pointer-events-none absolute left-5 top-0 hidden h-full items-center xl:flex select-none z-10"
      >
        <span
          className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8E7B6F]/70 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          N°05 — A COMMUNITY, GROWING GENTLY
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <Quote size={30} strokeWidth={1} className="text-[#C3A27B]" />
          <blockquote className="mt-5 max-w-2xl font-serif text-3xl leading-snug sm:text-4xl text-[#3D271D] font-normal">
            “A little less doing.
            <br />
            A little more <span className="italic">being you.</span>”
          </blockquote>
          <p className="mt-6 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8E7B6F]">
            The SAN ELYSIA Philosophy
          </p>
        </Reveal>

        <Reveal delay={0.14} className="border-l border-[#3D271D]/20 pl-7 lg:pl-10">
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            Real rituals. Honest experiences.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[#685346]">
            Every glow story starts somewhere. Our community values thoughtful formulation over hype —
            read honest experiences or share what your daily ritual feels like.
          </p>
          <Link
            href="/reviews"
            className="group inline-flex min-h-11 items-center gap-2 border-b border-[#3D271D]/30 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#3D271D] transition-colors hover:border-[#3D271D] mt-5"
          >
            <span>Read community stories</span>
            <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
