'use client';

import * as React from 'react';
import { motion, useReducedMotion, type Variants } from 'motion/react';
import { LUXURY_EASE } from '@/components/motion';

interface BrandButterflyProps {
  visible?: boolean;
  liftSignal?: number;
}

const flightVariants: Variants = {
  entering: {
    x: [-176, -142, -96, -40, -8, 0],
    y: [12, -16, -5, -18, -5, 0],
    scale: [0.42, 0.92, 1, 1, 0.95, 0.9],
    rotate: [26, 44, 64, 46, 10, -16],
    opacity: [0, 1, 1, 1, 1, 1],
    transition: {
      duration: 2.75,
      times: [0, 0.22, 0.48, 0.74, 0.9, 1],
      ease: 'easeInOut',
    },
  },
  perched: {
    x: 0,
    y: 0,
    scale: 0.9,
    rotate: -16,
    opacity: 1,
    transition: { duration: 0.35, ease: LUXURY_EASE },
  },
  hoverArc: {
    x: [0, -16, -34, -14, 0],
    y: [0, -15, -7, -17, 0],
    scale: [0.9, 1.02, 1, 0.95, 0.9],
    rotate: [-16, -42, 56, 16, -16],
    opacity: 1,
    transition: {
      duration: 1.6,
      times: [0, 0.28, 0.56, 0.84, 1],
      ease: 'easeInOut',
    },
  },
};

function HalfWingSvg({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg
      viewBox="0 0 20 34"
      className="h-full w-full overflow-visible"
      style={mirrored ? { transform: 'scaleX(-1)' } : undefined}
    >
      {/* Outer Forewing & Hindwing silhouette echoing SAN ELYSIA emblem */}
      <path
        d="M19.5 14.5 C16.5 7.2, 8.2 1.8, 2.5 3.6 C-0.4 4.6, 0.6 9.8, 4.4 13.6 C7.2 16.4, 12.6 17.5, 17.8 17.6 C12.4 18.2, 6.8 20.5, 4.8 24.4 C3.4 27.2, 5.2 30.8, 8.8 30.2 C13.5 29.4, 17.6 24.8, 19.5 19.8 Z"
        fill="#694632"
      />
      {/* Delicate champagne inner wing cutouts */}
      <path
        d="M17.2 14.2 C14.6 9.4, 9.4 5.8, 5.6 6.8 C3.8 7.3, 4.6 10.4, 7.6 12.8 C10.4 15.0, 14.2 15.6, 17.2 14.2 Z"
        fill="#FAF7F2"
        fillOpacity="0.88"
      />
      <path
        d="M16.8 19.2 C13.6 20.2, 9.8 22.4, 8.6 25.0 C7.9 26.5, 9.4 27.6, 11.4 26.8 C13.8 25.8, 15.8 22.8, 16.8 19.2 Z"
        fill="#C3A27B"
        fillOpacity="0.65"
      />
    </svg>
  );
}

export function BrandButterfly({ visible = true, liftSignal = 0 }: BrandButterflyProps) {
  const shouldReduceMotion = useReducedMotion();
  const [phase, setPhase] = React.useState<'entering' | 'perched' | 'hoverArc'>(() =>
    shouldReduceMotion ? 'perched' : 'entering'
  );
  const lastSignalRef = React.useRef(liftSignal);

  React.useEffect(() => {
    if (shouldReduceMotion) {
      setPhase('perched');
    }
  }, [shouldReduceMotion]);

  React.useEffect(() => {
    if (liftSignal > lastSignalRef.current) {
      lastSignalRef.current = liftSignal;
      if (!shouldReduceMotion && phase === 'perched' && visible) {
        setPhase('hoverArc');
      }
    }
  }, [liftSignal, phase, shouldReduceMotion, visible]);

  const isFlying = phase !== 'perched' && !shouldReduceMotion;

  return (
    <motion.span
      aria-hidden="true"
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        y: visible ? 0 : -4,
        scale: visible ? 1 : 0.82,
      }}
      transition={{ duration: 0.25, ease: LUXURY_EASE }}
      className="pointer-events-none absolute -top-2.5 -right-2.5 select-none"
      style={{ perspective: 200 }}
    >
      <motion.span
        className="block w-[22px] h-[18px] sm:w-[24px] sm:h-[20px]"
        variants={flightVariants}
        initial={shouldReduceMotion ? 'perched' : 'entering'}
        animate={shouldReduceMotion ? 'perched' : phase}
        onAnimationComplete={(definition) => {
          if (definition === 'entering' || definition === 'hoverArc') {
            setPhase('perched');
          }
        }}
      >
        {/* Subtle vertical lift bob during wingbeats */}
        <motion.span
          className="relative block h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={
            isFlying
              ? { y: [0, -1.6, 0.4, -1.5, 0, -0.2, -1.4, 0] }
              : { y: 0 }
          }
          transition={
            isFlying
              ? { duration: 0.85, repeat: Infinity, ease: 'easeInOut' }
              : { duration: 0.3 }
          }
        >
          {/* Left Wing (3D foreshortening around spine) */}
          <motion.span
            className="absolute left-0 top-0 h-full w-1/2"
            style={{ transformOrigin: '100% 50%', transformStyle: 'preserve-3d' }}
            animate={
              shouldReduceMotion
                ? { rotateY: 24 }
                : isFlying
                  ? { rotateY: [14, 68, 22, 66, 16, 20, 64, 18] }
                  : { rotateY: [26, 26, 46, 26, 26] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : isFlying
                  ? { duration: 0.85, repeat: Infinity, ease: 'easeInOut' }
                  : {
                      duration: 5.2,
                      times: [0, 0.66, 0.8, 0.94, 1],
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
            }
          >
            <HalfWingSvg />
          </motion.span>

          {/* Right Wing (Mirrored 3D foreshortening around spine) */}
          <motion.span
            className="absolute right-0 top-0 h-full w-1/2"
            style={{ transformOrigin: '0% 50%', transformStyle: 'preserve-3d' }}
            animate={
              shouldReduceMotion
                ? { rotateY: -24 }
                : isFlying
                  ? { rotateY: [-14, -68, -22, -66, -16, -20, -64, -18] }
                  : { rotateY: [-26, -26, -46, -26, -26] }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : isFlying
                  ? { duration: 0.85, repeat: Infinity, ease: 'easeInOut' }
                  : {
                      duration: 5.2,
                      times: [0, 0.66, 0.8, 0.94, 1],
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
            }
          >
            <HalfWingSvg mirrored />
          </motion.span>

          {/* Thorax, Abdomen & Delicate Antennae */}
          <svg
            viewBox="0 0 40 34"
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <path
              d="M19.8 11.2 C18.8 7.8, 17.0 5.4, 15.2 4.6 M20.2 11.2 C21.2 7.8, 23.0 5.4, 24.8 4.6"
              stroke="#5A3825"
              strokeWidth="0.9"
              strokeLinecap="round"
              fill="none"
            />
            <ellipse cx="20" cy="18.2" rx="1.25" ry="6.8" fill="#5A3825" />
            <circle cx="20" cy="11.2" r="1.2" fill="#5A3825" />
          </svg>
        </motion.span>
      </motion.span>
    </motion.span>
  );
}
