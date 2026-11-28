'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { LUXURY_EASE } from '@/components/motion';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: LUXURY_EASE }}
    >
      {children}
    </motion.div>
  );
}
