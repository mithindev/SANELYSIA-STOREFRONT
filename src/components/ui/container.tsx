import * as React from 'react';
import { cn } from '@/lib/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn('max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14', className)}
      {...props}
    >
      {children}
    </Component>
  );
}
