import { Heading, Subtext } from "../ui/InfoCard";

// 기술 테크 정리, 그외 학습
export default function AboutSection() {
  return (
    <>
      <div style={{ display: "flex" ,flexDirection:'column', gap:'5px', width:'600px',
    }}>
        <div>About</div>
        {/* <div style={{whiteSpace:'pre-wrap',lineHeight:'1.8',fontSize:'14px'}}>
          I’m a passionate UX designer striving to create intuitive and engaging
          experiences. I’m a big believer that things can always be simpler than
          we think.
        </div> */}

        <Subtext>
        I’m a passionate UX designer striving to create intuitive and engaging
          experiences. I’m a big believer that things can always be simpler than
          we think.
        </Subtext>
      </div>
    </>
  );
}
