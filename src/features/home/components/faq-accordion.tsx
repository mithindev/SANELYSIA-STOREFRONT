'use client';

import * as React from 'react';
import { Plus } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { LUXURY_EASE } from '@/components/motion';

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div>
      {items.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={faq.question}
            className="border-b border-[#3D271D]/20 last:border-b-0"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="group flex w-full min-h-[72px] cursor-pointer items-center justify-between gap-5 py-5 text-left transition-colors hover:text-[#5A3825]"
            >
              <span className="flex items-start gap-4">
                <span className="pt-0.5 text-[10px] font-mono text-[#8E7B6F]">0{index + 1}</span>
                <span className="font-serif text-base sm:text-lg text-[#3D271D] font-normal group-hover:text-[#5A3825] transition-colors">
                  {faq.question}
                </span>
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.25, ease: LUXURY_EASE }}
                className="shrink-0 text-[#3D271D]"
              >
                <Plus size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: LUXURY_EASE }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 pl-8 pr-4 text-sm leading-relaxed text-[#685346]">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
