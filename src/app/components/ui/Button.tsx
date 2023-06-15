import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import * as React from "react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-red-500 text-white hover:bg-slate-800",
        quantity: "text-black hover:bg-red-600",
        outline:
          "bg-slate-900 text-white hover:bg-slate-800 border border-slate-200",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 hover:bg-transparent",
        nav: "font-bold text-lg sm:text-white md:text-slate-300 hover:text-white focus:outline-2 focus:outline-white",
        navActive:
          "font-bold text-lg text-white border-b-4 border-red-500 rounded-none focus:outline-2 focus:outline-white",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
        xxs: "h-11 p-1 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
