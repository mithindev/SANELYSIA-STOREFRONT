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
          'inline-flex items-center justify-center font-sans uppercase font-medium tracking-[0.16em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5A3825] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer',
          {
            // Primary: deep warm chocolate background, ivory text
            'bg-[#5A3825] text-[#FAF7F2] hover:bg-[#452818] shadow-sm':
              variant === 'primary',
            // Secondary / Outline: warm chocolate border, ivory surface, dark text
            'border border-[#3D271D] bg-[#FAF7F2] text-[#3D271D] hover:bg-[#F3ECE2]':
              variant === 'secondary' || variant === 'outline',
            // Ghost: subtle text link
            'text-[#3D271D] hover:bg-[#F3ECE2]':
              variant === 'ghost',
          },
          {
            'text-[11px] px-3.5 py-2 rounded-none': size === 'sm',
            'text-xs px-6 py-3.5 rounded-none': size === 'md',
            'text-[13px] px-8 py-4 rounded-none': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
