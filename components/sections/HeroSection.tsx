import Image from "@/node_modules/next/image";
import { Heading } from "../ui/Heading";
import { Stack } from "../ui/Stack";
import { Text } from "../ui/Text";

//프로필 헤드라인(자기소개, 이미지, 직업 역할)
export default function HeroSection() {
  return (
      <section className="flex items-center gap-5">
        <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={"/me.jpg"}
            alt="profile"
            fill
            priority
            sizes="80px"
            className="object-cover"
          />
        </div>
        <Stack gap="1">
          <Heading as="h1" size="hero">
            황혜영
          </Heading>
          <Text variant="muted">Frontend Developer</Text>
        </Stack>
      </section>
  );
}
