import { cn } from "@/lib/utils";
import { cva } from "@/node_modules/class-variance-authority/dist/index";
import React from "react";
// Tailwind gap 값
// gap-1  // 0.25rem = 4px
// gap-2  // 0.5rem  = 8px
// gap-3  // 0.75rem = 12px
// gap-4  // 1rem    = 16px
// gap-6  // 1.5rem  = 24px
// gap-8  // 2rem    = 32px
// gap-12 // 3rem    = 48px

// Tailwind는 동적인클래스는 빌드타임에 발견못함 정적으로 선언
const gapClasses = {
    "1": "gap-1",
    "2": "gap-2",
    "3": "gap-3",
    "4": "gap-4",
    "6": "gap-6",
    "8": "gap-8",
    "12": "gap-12",
  } as const

interface StackProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  gap?: "1" | "2" | "3" | "4" | "6" | "8" | "12";
  direction?: "column" | "row";
}
//일관성있는 레이아웃
export const Stack = React.forwardRef<HTMLDivElement, StackProps>(
  ({ gap = "2", direction = "column", className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          `flex`,
          direction === "column" ? "flex-col" : "flex-row",
          gapClasses[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Stack.displayName = "Stack"