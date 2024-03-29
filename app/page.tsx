import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import SectionWrapper from "@/components/utils/PageWrapper/SectionWrapper";

export default function Home() {
  return (
    <>
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <SectionWrapper>
        <Camp />
      </SectionWrapper>
      <SectionWrapper>
        <Guide />
      </SectionWrapper>
      <SectionWrapper>
        <Features />
      </SectionWrapper>
      <SectionWrapper>
        <GetApp />
      </SectionWrapper>
    </>
  );
}
