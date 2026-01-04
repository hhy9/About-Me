import React from "react";
import {
  cva,
  VariantProps,
} from "@/node_modules/class-variance-authority/dist/index";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-[14px] text-gray-900 leading-relaxed",
      muted: "text-[14px] text-gray-500 leading-relaxed",
      small: "text-xs text-gray-600",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface TextProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: "p" | "span" | "div";
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, as = "p", variant, className, ...props }, ref) => {
    const Comp = as;
    return (
      <Comp 
      ref={ref}
      className={cn(textVariants({ variant }), className)} {...props}>
        {children}
      </Comp>
    );
  }
);

Text.displayName = "Text"