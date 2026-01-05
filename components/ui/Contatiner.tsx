import { cn } from "@/lib/utils";
import React from "react";

const sizeClasses = {
  sm: "max-w-xl", // 576px
  md: "max-w-2xl", // 672px
  lg: "max-w-4xl", // 896px
} as const;

console.log("ty", typeof sizeClasses);
interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: keyof typeof sizeClasses;
}

export const Container = ({
  size = "md",
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={cn("w-full mx-auto px-4", sizeClasses[size], className)}
      {...props}
    />
  );
};


Container.displayName = "Container"