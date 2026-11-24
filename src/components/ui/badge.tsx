import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'subtle' | 'outline' | 'solid';
}

export function Badge({
  className,
  variant = 'subtle',
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.18em] px-2.5 py-1',
        {
          'bg-[#F3ECE2] text-[#685346]': variant === 'subtle',
          'border border-[#E7DDD2] text-[#685346]': variant === 'outline',
          'bg-[#5A3825] text-[#FAF7F2]': variant === 'solid',
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
