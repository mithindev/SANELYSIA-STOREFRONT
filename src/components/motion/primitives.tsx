'use client';

import * as React from 'react';
import {
  MotionConfig,
  motion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'motion/react';
import { Plus } from 'lucide-react';

export const LUXURY_EASE = [0.22, 1, 0.36, 1] as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  immediate?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  y = 18,
  immediate = false,
}: RevealProps) {
  const initial = { opacity: 0, y };
  const target = { opacity: 1, y: 0 };
  const transition = { duration, delay, ease: LUXURY_EASE };

  if (immediate) {
    return (
      <motion.div
        initial={initial}
        animate={target}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MaskedLineProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  immediate?: boolean;
}

export function MaskedLine({
  children,
  className = '',
  delay = 0,
  duration = 0.72,
  immediate = false,
}: MaskedLineProps) {
  const animation = immediate
    ? { animate: { y: '0%', opacity: 1 } }
    : { whileInView: { y: '0%', opacity: 1 }, viewport: { once: true, amount: 0.3 } };

  return (
    <span className={`block overflow-hidden pb-[0.06em] -mb-[0.06em] ${className}`}>
      <motion.span
        className="block"
        initial={{ y: '105%', opacity: 0 }}
        {...animation}
        transition={{ duration, delay, ease: LUXURY_EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  immediate?: boolean;
}

export function StaggerGroup({
  children,
  className,
  stagger = 0.07,
  delay = 0,
  immediate = false,
}: StaggerGroupProps) {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  if (immediate) {
    return (
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const itemVariants: Variants = {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: LUXURY_EASE },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

interface ImageRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function ImageReveal({
  children,
  className,
  delay = 0,
  immediate = false,
}: ImageRevealProps) {
  const initial = {
    opacity: 0,
    scale: 1.05,
    clipPath: 'inset(4% 0% 4% 0%)',
  };
  const target = {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0% 0% 0%)',
  };
  const transition = { duration: 0.8, delay, ease: LUXURY_EASE };

  if (immediate) {
    return (
      <motion.div
        initial={initial}
        animate={target}
        transition={transition}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={initial}
      whileInView={target}
      viewport={{ once: true, amount: 0.15 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MarkerHighlightProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  immediate?: boolean;
}

export function MarkerHighlight({
  children,
  className = '',
  delay = 0.28,
  immediate = false,
}: MarkerHighlightProps) {
  const barAnimation = immediate
    ? { animate: { scaleX: 1 } }
    : { whileInView: { scaleX: 1 }, viewport: { once: true, amount: 0.5 } };

  return (
    <span className={`relative inline-block isolate z-0 whitespace-nowrap ${className}`}>
      {children}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0 }}
        {...barAnimation}
        transition={{ duration: 0.65, delay, ease: LUXURY_EASE }}
        style={{ originX: 0, rotate: '-1.5deg' }}
        className="pointer-events-none absolute -z-10 -left-[0.04em] -right-[0.04em] bottom-[0.04em] h-[0.26em] rounded-[1px] bg-[#F5D5B8]"
      />
    </span>
  );
}

export function ParallaxFrame({
  children,
  className,
  offset = 14,
  scaleRange,
}: {
  children: React.ReactNode;
  className?: string;
  offset?: number;
  scaleRange?: [number, number];
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const rawY = useTransform(scrollYProgress, [0, 1], [-offset, offset]);
  const y = useSpring(rawY, { stiffness: 120, damping: 24, mass: 0.5 });

  const rawScale = useTransform(
    scrollYProgress,
    [0, 1],
    scaleRange || [1, 1]
  );
  const scale = useSpring(rawScale, { stiffness: 120, damping: 24, mass: 0.5 });

  return (
    <motion.div
      ref={ref}
      style={scaleRange ? { y, scale } : { y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function ScrollProgressLine({ visible = true }: { visible?: boolean }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, originX: 0 }}
      initial={false}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.25 }}
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C3A27B]/85"
    />
  );
}

export function AnimatedAccordion({
  title,
  defaultOpen = false,
  children,
}: {
  title: string;
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <div className="py-4">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full cursor-pointer items-center justify-between text-left text-sm font-sans font-medium text-[#3D271D] select-none hover:text-[#5A3825] transition-colors"
      >
        <span>{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: LUXURY_EASE }}
          className="shrink-0 text-[#3D271D]"
        >
          <Plus size={15} />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: LUXURY_EASE }}
        aria-hidden={!isOpen}
        className="overflow-hidden"
      >
        <div className="pt-3 pb-2">{children}</div>
      </motion.div>
    </div>
  );
}
