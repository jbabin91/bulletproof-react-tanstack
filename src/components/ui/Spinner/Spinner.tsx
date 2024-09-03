import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

import { cn } from '@/utils/cn';

const spinnerVariants = cva('animate-spin', {
  defaultVariants: {
    size: 'default',
    variant: 'default',
  },
  variants: {
    size: {
      default: 'size-8',
      lg: 'size-16',
      sm: 'size-4',
      xl: 'size-24',
    },
    variant: {
      default: 'text-slate-600',
      light: 'text-white',
    },
  },
});

export type SpinnerProps = {
  asChild?: boolean;
} & React.HTMLAttributes<SVGSVGElement> &
  VariantProps<typeof spinnerVariants>;

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <>
        <svg
          ref={ref}
          className={cn(spinnerVariants({ className, size, variant }))}
          fill="none"
          height="24"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
          {...props}
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
        <span className="sr-only">Loading</span>
      </>
    );
  },
);
Spinner.displayName = 'Spinner';

export { Spinner, spinnerVariants };
