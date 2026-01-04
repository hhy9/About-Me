import React from "react";

//같은 구조이지만 폰트 사이즈 달라지는 경우 , 코드 중복 줄이고 제한된 선택지
type HeadingSize = "hero" | "section";

//? : 왜 type으로 정의하는지 그냥 간단한지 아닌지로 interface/type인지
type InfoCardProps = {
  title: string;
  description: string;
  titleSize?: HeadingSize;
};

// 목표: h1만 쓰지 말고 h2/h3 등 필요에 맞게 바꿀 수 있게 하기
// 이유: 접근성과 SEO
type HeadingProps = {
  as?: "h1" | "h2" | "h3"; // ? 태그는 제네릭으로 안받고 as로 고정해서 받는 이유?
  size?: "hero" | "section";
  children: React.ReactNode;
};

// 목표: 텍스트 스타일을 InfoCard 안에 박제하지 말고, 재사용 가능하게 빼내기
// 이유: About, Work, Writing 등 다른 컴포넌트에서도 똑같이 쓰고 싶으니까
//? : 여기서 function 으로 함수만 따로 빼서 쓰는 이유와 괜찮은지
//? : 여기선 타입을 안만들고 size를 옆에 따로 쓴 이유
//? : 전 코드에선 sizeMap을 밖으로 뺏는데 여긴 왜 함수안에?

// 목표: ref 전달도 안전하게 만들기 - 6단계(선택)
// 이유: 실무에서 종종 필요 (포커스 제어, 스크롤 등)
//?: ref 전달이 필요한 경우 , 아닌 경우 ref전달을 해야하는지? 다들 하는지?
// ?:export function 이였다가 forwardRef하니까 왜 const 가 생기는지?
//?:HTMLHeadingElement 가 무엇이며 React forwardRef 사용법<> 여기 타입안에 뭐 넣는지
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as: Comp = "h1", size = "hero", children }, ref) => {
    //? : sizeMap으로 만들어서 하는 이유 그리고 Record를 쓰는이유 Record가 필요한곳과 이렇게
    // sizeMap이 필요한 경우 활용경우
    //공부 포인트: union 타입 + map으로 관리.
    const sizeMap: Record<HeadingSize, string> = {
      hero: "text-[20px] font-semibold text-black",
      section: "text-[14px] font-medium text-black",
    };
    return (
      <Comp ref={ref} className={sizeMap[size]}>
        {children}
      </Comp>
    );
    //<Heading as="h2" size="section">About</Heading>
    //공부 포인트: “as” prop으로 시멘틱 유연하게 바꾸기.
  }
);
//? : displayname의 여부
//nfoCard는 Heading/Subtext 조합으로만 남김.
//공부 포인트: 작은 컴포넌트를 나눠서 조립.
export function Subtext({ children }: { children: React.ReactNode }) {
  return <p className="text-[14px] text-[#555]">{children}</p>;
}

export default function TestInfoCard({
  title,
  description,
  titleSize = "hero",
}: InfoCardProps) {
    return (
  <div>
    <Heading size={titleSize}>{title}</Heading>
    <Subtext>{description}</Subtext>
  </div>
    )
}
