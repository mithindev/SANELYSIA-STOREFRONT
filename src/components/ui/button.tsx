import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-sans uppercase font-bold tracking-[0.15em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3825] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer rounded-sm',
          {
            // Primary: deep warm chocolate background, ivory text
            'bg-[#5A3825] text-[#FAF7F2] hover:bg-[#3D271D] border border-transparent shadow-sm':
              variant === 'primary',
            // Secondary / Outline: subtle 25% opacity border on transparent background
            'border border-[#3D271D]/25 bg-transparent text-[#3D271D] hover:border-[#3D271D] hover:bg-[#F3ECE2]/50':
              variant === 'secondary' || variant === 'outline',
            // Ghost: subtle text link
            'text-[#3D271D] hover:bg-[#F3ECE2]':
              variant === 'ghost',
          },
          {
            'text-[10px] px-4 py-2 min-h-9': size === 'sm',
            'text-[11px] px-6 py-3.5 min-h-12': size === 'md',
            'text-xs px-8 py-4 min-h-14': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
