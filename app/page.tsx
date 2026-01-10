import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import { Container } from "@/components/ui/Contatiner";
import { Stack } from "@/components/ui/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container>
        <Stack gap="12">
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
        </Stack>
      </Container>
    </>
  );
}
