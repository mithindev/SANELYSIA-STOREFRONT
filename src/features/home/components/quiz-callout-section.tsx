import * as React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal, MarkerHighlight } from '@/components/motion';

export function QuizCalloutSection() {
  return (
    <section className="relative overflow-hidden border-b border-[#3D271D]/15 py-20 lg:py-24 bg-[#FAF7F2]">
      <Reveal className="mx-auto w-full max-w-[1320px] px-6 md:px-10 lg:px-16 text-center">
        <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] text-[#685346]">
          Not sure where to begin?
        </p>
        <h2 className="mx-auto mt-4 max-w-[650px] font-serif text-4xl sm:text-5xl font-medium tracking-tight text-[#3D271D]">
          Your skin. Your rhythm.
          <br />
          Let’s find{' '}
          <MarkerHighlight className="italic font-normal text-[#3D271D]">
            your glow.
          </MarkerHighlight>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-[#685346]">
          A few simple diagnostic questions. A little science-informed guidance. Discover a targeted care
          ritual that feels right for you.
        </p>
        <div className="mt-8 flex justify-center">
          <Link href="/quiz">
            <Button variant="primary" size="md" className="group inline-flex items-center gap-3">
              <span>Take the skin quiz</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        <p className="mt-4 text-[9px] font-medium uppercase tracking-[0.16em] text-[#8E7B6F]">
          2 minutes · No sign-up needed · Personalized recommendations
        </p>
      </Reveal>
    </section>
  );
}
