import { Heading } from "../ui/Heading";
import { Stack } from "../ui/Stack";
import { Text } from "../ui/Text";

// 기술 테크 정리, 그외 학습
export default function AboutSection() {
  return (
    <section>
      <Stack gap="3">
        <Heading as="h2">About</Heading>
        <Text variant="muted" className="mt-2">
          I’m a passionate UX designer striving to create intuitive and engaging
          experiences. I’m a big believer that things can always be simpler than
          we think.
        </Text>
      </Stack>
    </section>
  );
}
