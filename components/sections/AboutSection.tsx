import { Heading } from "../ui/Heading";
import { Stack } from "../ui/Stack";
import { Text } from "../ui/Text";

// 기술 테크 정리, 그외 학습
export default function AboutSection() {
  return (
    <section>
      <Stack gap="3">
        <Heading as="h2">
          코드는 줄이고, 구조는 세우고, 삽질은 덜고 싶은 프론트엔드 4년차입니다.
        </Heading>
        <Text variant="muted" className="mt-2">
          React 기반으로 프론트엔드 개발을 4년 넘게 해오고 있어요.
        </Text>
        <Text variant="muted">
          기존 시스템 마이그레이션이나 디자인 시스템 정리 같은 실전형 작업을
          자주 해왔고,
          <br />
          복잡한 UI 구조를 단순하게 만들고, 실전 중심의 컴포넌트 설계에 집중하고
          있습니다.
        </Text>
        <Text variant="muted">
          요즘은 “이 코드 왜 이렇게 짜여있지?”에 대한 설명이 가능한 개발자가
          되려고 문서화 연습도 하고 있습니다.
          <br />
          코드는 줄이고, 의미는 남기는 게 목표입니다.
        </Text>
      </Stack>
    </section>
  );
}
