import * as React from "react"

// ----------- Polymorphic 타입 유틸 -----------

// 컴포넌트가 어떤 태그(as)로 렌더될지 정하는 타입
type AsProp<E extends React.ElementType> = { as?: E }

// P: 고유 props, E: 태그
// => 고유 props + as + 원래 태그 props - 충돌나는 키들
type PolymorphicProps<E extends React.ElementType, P> =
  P & AsProp<E> & Omit<React.ComponentPropsWithoutRef<E>, keyof P | "as">

// ----------- Heading 관련 타입/스타일 -----------

// 우리가 허용하는 두 가지 사이즈 (20px, 14px)
type HeadingSize = "hero" | "section"

// 허용 태그: h1~h3
type HeadingTag = "h1" | "h2" | "h3"

// 사이즈에 따라 Tailwind 클래스 매핑
const sizeMap: Record<HeadingSize, string> = {
  hero: "text-[20px] font-semibold",
  section: "text-[14px] font-medium",
}

// 클래스 합치는 간단한 유틸
function cn(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ")
}

// Heading이 가지는 고유 props
type HeadingOwnProps = { size?: HeadingSize; className?: string }


// ✅ 핵심: forwardRef의 두 제네릭을 명시적으로 고정
// 1) 인스턴스 타입 = HTMLHeadingElement
// 2) props 타입 = HeadingProps<HeadingTag>  (즉, as가 "h1"|"h2"|"h3" 모두 허용)
type HeadingProps<E extends React.ElementType = "h1"> =
  ( { as?: HeadingTag } & // as를 HeadingTag로 제한
    Omit<React.ComponentPropsWithoutRef<"h1">, "as"> & // h1/h2/h3 props 동일하니 h1 기준으로
    HeadingOwnProps
  )

// ----------- Heading 컴포넌트 -----------

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ as, size = "hero", className, ...rest }, ref) => {
      const Comp = (as ?? "h1") as HeadingTag
      return (
        <Comp
          ref={ref}
          className={cn("tracking-tight text-black", sizeMap[size], className)}
          {...(rest as any)}
        />
      )
    }
  )
  Heading.displayName = "Heading"

// ----------- Subtext 컴포넌트 -----------
// 14px 회색 텍스트. 설명/부제 용도.
export function Subtext(props: React.HTMLAttributes<HTMLParagraphElement>) {
  const { className, ...rest } = props
  return <p className={cn("text-[14px] text-[#555555]", className)} {...rest} />
}

// ----------- Stack 컴포넌트 -----------
// 세로로 쌓고 gap 주는 레이아웃 컨테이너
export function Stack(
  { gap = "gap-1", className, ...rest }:
  { gap?: string } & React.HTMLAttributes<HTMLDivElement>
) {
  return <div className={cn("flex flex-col", gap, className)} {...rest} />
}

// ----------- InfoCard 컴포넌트 -----------
// Heading + Subtext 조합으로 만든 단순 카드
export type InfoCardProps = {
  title?: string
  description?: string
  titleSize?: HeadingSize
  asTitle?: HeadingTag
  className?: string
  titleClassName?: string
  descClassName?: string
}

export default function InfoCard({
  title = "Sara Lawrence",                      // 기본 타이틀
  description = "Design in San Francisco",      // 기본 설명
  titleSize = "hero",                           // 기본 사이즈: 20px
  asTitle,                                      // 태그 바꾸기 (h1/h2/h3)
  className,
  titleClassName,
  descClassName,
}: InfoCardProps) {
  return (
    <Stack gap="gap-1" className={className}>
      <Heading as={asTitle} size={titleSize} className={titleClassName}>
        {title}
      </Heading>
      <Subtext className={descClassName}>{description}</Subtext>
    </Stack>
  )
}
