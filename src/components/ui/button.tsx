import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-black/60 bg-transparent text-black shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary:
          'text-white font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] dark:hover:shadow-[#ff910063] [height:3.5em] hover:cursor-pointer [transition:300ms] dark:from-custom-orange dark:via-custom-orange dark:to-custom-orange',
        secondary:
          'text-transparent bg-clip-text font-semibold border border-indigo-500/70 bg-white shadow-lg hover:scale-105 duration-200 hover:drop-shadow-2xl hover:shadow-[#7dd3fc] dark:hover:shadow-[#ff910063] hover:cursor-pointer [transition:300ms]  bg-gradient-to-r z-40 from-indigo-500 [height:3.5em] via-purple-500 to-pink-500 dark:text-custom-orange dark:border-custom-orange',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-xl px-8 py-[22px]',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean | null;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, loading = null, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={props?.disabled || (loading as boolean)}
      >
        {children}
        {/* in line 49 can be edit our custom loader */}
        {loading && <div className="loader"></div>}
      </Comp>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
