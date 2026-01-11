// components/sections/experience-section.tsx
import React from "react";
import { ContactLineItem } from "../ui/ContactLineItem";
import { Heading } from "../ui/Heading";
import { Stack } from "../ui/Stack";

export default function ContactSection() {
  return (
    <section className="w-full max-w-2xl">
      <Heading as="h2" size="section" className="mb-6 pb-2 border-b">
        Contact
      </Heading>
      
      <Stack gap="1">
      <Stack gap="1">
        <ContactLineItem
          label="Phone"
          link="010-3542-9693"
        />
        
        <ContactLineItem
          label="GitHub"
          link="hhy9"
          href="https://github.com/hhy9"
          icon
        />
      </Stack>
       
      </Stack>
    </section>
  )
}