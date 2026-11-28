'use client';

import * as React from 'react';
import Image from 'next/image';
import { HERO_CONCERN_CARDS } from '../../data/hero-stage-data';

interface SkinConcernStripProps {
  activeProductSlug: string | null;
  onSelectConcern: (targetProductSlug: string) => void;
}

export function SkinConcernStrip({
  activeProductSlug,
  onSelectConcern,
}: SkinConcernStripProps) {
  return (
    <div
      role="group"
      aria-label="Shop formulas by skin concern"
      className="grid grid-cols-3 gap-2.5 sm:gap-3"
    >
      {HERO_CONCERN_CARDS.map((card) => {
        const isMatched = activeProductSlug === card.targetProductSlug;
        const arcPathId = `concern-arc-${card.id}`;

        return (
          <button
            key={card.id}
            type="button"
            onClick={() => onSelectConcern(card.targetProductSlug)}
            aria-pressed={isMatched}
            aria-label={`Inspect formula for ${card.labelLine1} ${card.labelLine2 ?? ''}`}
            className={`group relative aspect-[4/4.3] w-full overflow-hidden rounded-xl border text-left transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3825] focus-visible:ring-offset-2 ${
              isMatched
                ? 'border-[#C3A27B] ring-2 ring-[#C3A27B]/75 shadow-[0_14px_30px_-10px_rgba(90,56,37,0.35)] -translate-y-0.5'
                : 'border-[#E7DDD2] hover:border-[#C3A27B]/80 hover:-translate-y-0.5 shadow-sm'
            }`}
          >
            <Image
              src={card.imageSrc}
              alt={card.alt}
              fill
              sizes="(max-width: 768px) 30vw, 145px"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
            />

            {/* Subtle warm lower vignette for crisp curved white text */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2C1A11]/65 via-transparent to-[#2C1A11]/10"
            />

            {/* Crisp vector circular diagnostic reticule & curved typography */}
            <svg
              viewBox="0 0 100 100"
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <defs>
                <path
                  id={arcPathId}
                  d="M 14,56 A 36,36 0 0,0 86,56"
                  fill="none"
                />
              </defs>
              <circle
                cx={card.reticuleOffset.cx}
                cy={card.reticuleOffset.cy}
                r={card.reticuleOffset.r}
                fill="none"
                stroke={isMatched ? 'rgba(245, 213, 184, 0.95)' : 'rgba(250, 247, 242, 0.72)'}
                strokeWidth={isMatched ? '1.3' : '0.85'}
                className="transition-all duration-300"
              />
              <text
                fill="#FAF7F2"
                fontSize="6.7"
                fontWeight="700"
                letterSpacing="0.85"
                className="font-sans uppercase"
              >
                <textPath
                  href={`#${arcPathId}`}
                  startOffset="50%"
                  textAnchor="middle"
                >
                  {card.labelLine1}
                </textPath>
              </text>
              {card.labelLine2 && (
                <text
                  x="50"
                  y="93.5"
                  textAnchor="middle"
                  fill="#F5D5B8"
                  fontSize="5.8"
                  fontWeight="700"
                  letterSpacing="0.95"
                  className="font-sans uppercase"
                >
                  {card.labelLine2}
                </text>
              )}
            </svg>
          </button>
        );
      })}
    </div>
  );
}
