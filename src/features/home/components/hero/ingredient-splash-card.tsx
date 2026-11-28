'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import type { HeroIngredientCardSpec } from '../../data/hero-stage-data';
import { IngredientVisual } from './ingredient-visual';

const DESKTOP_CARD_SLOTS = [
  {
    positionClass: 'lg:left-[2%] lg:top-[5%]',
    tiltDeg: -4.5,
    burstFrom: { x: 110, y: 75 },
  },
  {
    positionClass: 'lg:right-[2%] lg:top-[4%]',
    tiltDeg: 4.5,
    burstFrom: { x: -110, y: 75 },
  },
  {
    positionClass: 'lg:left-[1%] lg:bottom-[22%]',
    tiltDeg: 3.5,
    burstFrom: { x: 115, y: -55 },
  },
  {
    positionClass: 'lg:right-[1%] lg:bottom-[21%]',
    tiltDeg: -3.5,
    burstFrom: { x: -115, y: -55 },
  },
] as const;

interface IngredientSplashCardProps {
  ingredient: HeroIngredientCardSpec;
  index: number;
  reducedMotion: boolean;
  isDesktop: boolean;
}

export function IngredientSplashCard({
  ingredient,
  index,
  reducedMotion,
  isDesktop,
}: IngredientSplashCardProps) {
  const slot = DESKTOP_CARD_SLOTS[index] ?? DESKTOP_CARD_SLOTS[0];

  return (
    <motion.div
      initial={
        reducedMotion
          ? { opacity: 0 }
          : isDesktop
            ? {
                opacity: 0,
                scale: 0.58,
                x: slot.burstFrom.x,
                y: slot.burstFrom.y,
                rotate: 0,
              }
            : {
                opacity: 0,
                scale: 0.82,
                y: 16,
              }
      }
      animate={
        reducedMotion
          ? { opacity: 1 }
          : {
              opacity: 1,
              scale: 1,
              x: 0,
              y: 0,
              rotate: isDesktop ? slot.tiltDeg : 0,
            }
      }
      exit={
        reducedMotion
          ? { opacity: 0, transition: { duration: 0.14 } }
          : {
              opacity: 0,
              scale: 0.78,
              transition: { duration: 0.18, ease: [0.4, 0, 1, 1] },
            }
      }
      whileHover={
        reducedMotion
          ? undefined
          : {
              scale: 1.045,
              rotate: 0,
              y: -4,
              transition: { type: 'spring', stiffness: 360, damping: 24 },
            }
      }
      transition={{
        type: 'spring',
        stiffness: 290,
        damping: 23,
        mass: 0.8,
        delay: reducedMotion ? 0 : 0.08 + index * 0.055,
      }}
      className={`lg:pointer-events-auto lg:absolute ${slot.positionClass} z-30`}
    >
      <Link
        href={`/ingredients/${ingredient.ingredientSlug}`}
        aria-label={`${ingredient.name}${ingredient.concentration ? ` ${ingredient.concentration}` : ''} — ${ingredient.actionTag}`}
        className="liquid-glass-card group relative block h-[132px] w-full overflow-hidden rounded-2xl border border-[#FFFDF9]/85 bg-[#FAF7F2]/65 backdrop-blur-md transition-shadow duration-300 hover:shadow-[0_24px_48px_-14px_rgba(61,39,29,0.34)] lg:h-[144px] lg:w-[144px] xl:h-[154px] xl:w-[154px]"
      >
        {/* Macro botanical/active image */}
        <div className="absolute inset-0">
          <IngredientVisual ingredient={ingredient} />
        </div>

        {/* Specular liquid glass rim & subtle top reflection */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/55"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent opacity-80"
        />

        {/* Legible bottom gradient scrim */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] bg-gradient-to-t from-[#24150E]/90 via-[#24150E]/48 to-transparent"
        />

        {/* Top-right inspect indicator */}
        <span
          aria-hidden="true"
          className="absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-white/40 bg-[#3D271D]/35 text-[#FAF7F2] opacity-0 backdrop-blur-xs transition-all duration-200 group-hover:opacity-100"
        >
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>

        {/* Ingredient Title & Action Tag */}
        <div className="absolute inset-x-0 bottom-0 p-3 text-left">
          <p className="font-serif text-[16px] leading-[1.12] font-medium text-[#FAF7F2] drop-shadow-xs xl:text-[17px]">
            <span>{ingredient.name}</span>
            {ingredient.concentration && (
              <span className="ml-1 font-sans text-[10px] font-semibold tracking-wider text-[#F5D5B8]">
                {ingredient.concentration}
              </span>
            )}
          </p>
          <p className="mt-1 text-[8.5px] font-semibold uppercase tracking-[0.18em] text-[#F5D5B8]/95">
            {ingredient.actionTag}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
