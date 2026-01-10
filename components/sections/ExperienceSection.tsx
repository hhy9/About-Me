// components/sections/experience-section.tsx
import { Stack } from "@/components/ui/Stack"
import { Heading } from "@/components/ui/Heading"
import { TimeLineItem } from "../ui/TimeLineIteml"
import { experienceData } from "@/app/data/experience-data"

export default function ExperienceSection() {
  return (
    <section className="w-full max-w-2xl">
      <Heading as="h2" size="section" className="mb-6 pb-2 border-b">
        Work Experience
      </Heading>
      
      <Stack gap="6">
        {experienceData.map((el,index) => (
          <TimeLineItem 
          period={el.period}
          title={el.title}
          subtitle={el.subtitle}
          works={el.works}
          descriptions={el.descriptions}  
          key={index}/>
        ))}
       
      </Stack>
    </section>
  )
}