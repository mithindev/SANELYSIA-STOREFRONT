import * as React from 'react';
import { faqs } from '@/data/faqs';
import { Reveal } from '@/components/motion';
import { FaqAccordion } from './faq-accordion';

export function FaqSection() {
  return (
    <section id="faq" className="relative overflow-hidden border-b border-[#3D271D]/15 py-20 lg:py-24 bg-[#FAF7F2]">
      {/* Outer Left Edge Vertical Caption Rail */}
      <div
        aria-hidden="true"
        className="caption-rail pointer-events-none absolute left-5 top-0 hidden h-full items-center xl:flex select-none z-10"
      >
        <span
          className="text-[9px] font-medium uppercase tracking-[0.3em] text-[#8E7B6F]/70 whitespace-nowrap"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          N°07 — GOOD TO KNOW
        </span>
      </div>

      <div className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 grid gap-10 lg:grid-cols-[.8fr_1.5fr] lg:gap-20">
        <Reveal>
          <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
            A little clarity
          </p>
          <h2 className="mt-4 font-serif text-4xl lg:text-5xl font-medium tracking-tight text-[#3D271D]">
            Wondering
            <br />
            about something?
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-[#685346]">
            We’re always here to help guide your routine. Say hello anytime at
            <br />
            <a
              href="mailto:care@sanelysia.com"
              className="text-[#3D271D] font-medium underline underline-offset-4 hover:text-[#5A3825] transition-colors"
            >
              care@sanelysia.com
            </a>
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <FaqAccordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
