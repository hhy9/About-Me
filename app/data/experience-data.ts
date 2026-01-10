import { TimelineItemProps } from "./../../components/ui/TimeLineIteml";
export const experienceData: TimelineItemProps[] = [
  {
    period: "2025.01 — 2025.04",
    title: "Frontend Developer at 지팬스스마트로",
    subtitle: "관제 인터페이스 API 서버 개발",
    works: [
      "NestJS 기반의 중간 인터페이스 API 서버를 설계하고 구축",
      "TypeORM을 활용한 데이터 모델링 및 인증 처리 로직 구현",
      "Kafka 연동으로 배차·관제 데이터의 실시간 메시지 전달 구조 구성",
    ],
    descriptions: [
      "배차·관제 시스템과 외부 플랫폼 간 통신을 담당하는 중간 API 서버를 개발했습니다.",
      "인증 처리, 데이터 전송, 메시지 큐 흐름을 직접 설계하며 단순 구현이 아닌 전체 데이터 흐름을 이해하는 데 집중했습니다.",
      "프론트엔드 개발자로서 백엔드 아키텍처와 실시간 시스템 구조에 대한 이해도를 확장할 수 있었던 프로젝트입니다.",
    ],
  },
  {
    period: "2024.08 — 2024.11",
    title: "Frontend Developer at 지팬스스마트로",
    subtitle: "Helmet 안전모 모니터링 시스템",
    works: [
      "Next.js App Router 기반으로 도메인 단위 레이아웃 구조 설계",
      "next-auth와 middleware를 활용한 인증 흐름 구성",
      "React-hook-form과 서버 액션을 활용한 폼 UX 개선",
      "실시간 센서 데이터 시각화 UI 구현",
    ],
    descriptions: [
      "현장 노동자의 안전모 센서 데이터를 실시간으로 모니터링하는 웹 시스템을 개발했습니다.",
      "클라이언트와 서버의 역할을 분리한 구조를 설계하고, 인증과 폼 처리 흐름을 일관되게 관리하는 데 집중했습니다.",
      "기능 구현보다 구조적인 안정성과 유지보수를 우선으로 고민했던 경험이 인상 깊은 프로젝트였습니다.",
    ],
  },
  {
    period: "2024.01 — 2024.06",
    title: "Frontend Developer at 지팬스스마트로",
    subtitle: "익산시 다이로움 물류 앱",
    works: [
      "React Native 기반 크로스 플랫폼 앱(iOS/Android) 개발",
      "위치 권한 요청, GPS, 카메라 모듈 등 네이티브 기능 연동",
      "React Query를 활용한 무한 스크롤 API 통신 구성",
      "Firebase와 Notifee를 활용한 푸시 알림 시스템 구축",
    ],
    descriptions: [
      "농가 물품을 배송하는 기사용 물류 앱을 React Native로 개발했습니다.",
      "네이티브 기능과 API 통신이 자연스럽게 연결되도록 구조를 설계했고, 실제 사용 환경에서의 UX를 많이 고려했습니다.",
      "모바일 환경에서의 상태 관리와 사용자 흐름을 실전으로 경험할 수 있었던 프로젝트였습니다.",
    ],
  },
  {
    period: "2021.03 — 2025.07",
    title: "Frontend Developer at 지팬스스마트로",
    subtitle: "물류 플랫폼 웹 리뉴얼",
    works: [
      "Ext JS 기반 레거시 시스템을 React + TypeScript로 마이그레이션",
      "Redux Toolkit 도입으로 상태 관리 구조 단순화",
      "Webpack에서 Vite로 전환해 빌드 속도 개선",
      "Naver Map API와 마커 클러스터링을 활용한 실시간 관제 UI 구현",
      "공통 컴포넌트 라이브러리 구축 및 Storybook 문서화",
    ],
    descriptions: [
      "기존 물류 플랫폼 프론트를 전반적으로 리뉴얼하며 구조 개선을 주도한 프로젝트입니다.",
      "레거시 코드를 정리하고, 유지보수와 확장성을 고려한 구조로 전환하는 데 집중했습니다.",
      "복잡한 관제 UI와 실시간 데이터 처리 경험을 통해 구조 설계의 중요성을 체감했습니다.",
    ],
  },
  {
    period: "2020.10 — 2021.01",
    title: "Frontend Intern at 한터글로벌",
    subtitle: "Whosfan 앱 클론 / 사내 통계 시스템",
    works: [
      "[Whosfan 앱 클론 프로젝트]",
      "JSP 기반 앱을 React로 클론 구현",
      "컴포넌트 구조 개선 및 반응형 UI 대응",
      "",
      "[사내 통계 시스템 개발]",
      "Chart.js를 활용한 내부 데이터 시각화 화면 구축",
      "대시보드 구성 및 시각 요소 개선",
    ],
    descriptions: [
      "사내 프로젝트로 앱 클론 작업과 내부 통계 시스템 개발을 함께 경험했습니다.",
      "데이터를 단순히 보여주는 것이 아니라, 사용자가 이해하기 쉬운 형태로 표현하는 방법을 고민했습니다.",
      "프론트엔드 개발의 기본기와 UI 사고 방식을 다질 수 있었던 첫 실무 경험이었습니다.",
    ],
  },
];
