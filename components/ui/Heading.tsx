import { cva, VariantProps } from "@/node_modules/class-variance-authority/dist/index";
import React from "react";
import { cn } from "@/lib/utils"

const headingVariants = cva(
    //베이스 스타일 (항상 적용)
    "tracking-tight text-gray-900 leading-tight",
    {
        variants: {
            size: {
                hero: "text-[20px] font-semibold",
                section: "text-2xl font-bold",
                small: "text-[14px] font-medium",
            }
        },
        defaultVariants: {
            size: "hero"
        }
    }
)
//모든 제목이 h1로만 나옴 (SEO 문제)
//SEO: 구글은 HTML 태그를 봄 (h1, h2 순서 중요)
// ✅ onClick, onMouseEnter 등 모든 HTML 속성 지원
interface HeadingProps extends React.HtmlHTMLAttributes<HTMLHeadingElement>,VariantProps<typeof headingVariants> {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; //~로서(시멘틱태그)
  className?: string;
}

export const Heading = React.forwardRef<HTMLHeadingElement,HeadingProps>(({
  children,
  as = "h1",
  size,
  className,
  ...props
}, ref) => {
  const Comp = as; // as변수에 담기
  // size에 따라 다른 클래스 적용

  return (
      <Comp ref={ref}
      className={cn(headingVariants({ size }), className)}
       {...props} // onClick, id, aria-label 등 자동 전달
       >
        {children}
      </Comp>
  );
})

// ⚠️ 개발자 도구에서 컴포넌트 이름 표시
Heading.displayName = "Heading"