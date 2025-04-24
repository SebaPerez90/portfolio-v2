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
        outline:
          'border border-black/60 bg-transparent text-black shadow-sm hover:bg-accent hover:text-accent-foreground flex items-center gap-2 dark:text-white dark:border-white/60 hover:dark:text-white/80 active:scale-[0.98]',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        primary:
          'text-white bg-custom-blue duration-200 h-20 hover:cursor-pointer tracking-wider flex items-center gap-2 hover:bg-custom-blue/80 active:bg-[#4545e1] active:scale-[0.98] dark:bg-custom-orange hover:dark:bg-custom-orange/80 dark:active:bg-[#b86b07] dark:text-black',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-[50px] rounded-xl px-[32px] py-[22px]',
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
