import Image from "@/node_modules/next/image";
import InfoCard from "../ui/InfoCard";

//프로필 헤드라인(자기소개, 이미지, 직업 역할)
export default function HeroSection() {
  return (
      <div style={{display:"flex", gap:'20px',alignItems:'center', width:'600px'}}>
        <div className="relative w-20 h-20 rounded-full overflow-hidden">
          <Image
            src={"/img/test3.jpeg"}
            alt="profile"
            fill
            priority
            sizes="80px"
            className="object-cover"
          />
        </div>
        <InfoCard />
      </div>
  );
}
