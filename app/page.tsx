import AboutSection from "@/components/blocks/about";
import CallToAction from "@/components/blocks/call-to-action";
import OurEventsSection from "@/components/blocks/events-others";
import InclusiveCareHero from "@/components/blocks/hero-section";
import Partners from "@/components/blocks/partners";
import ProjectsSection from "@/components/blocks/projects";
import WhatwedoSection from "@/components/blocks/what-we-do";
import { Background } from "@/components/custom/background";



export default function Home() {
  return (
    
    <Background>

       <div className="">
      <InclusiveCareHero />

      <AboutSection/>

      <Partners/>

      <WhatwedoSection/>

      <ProjectsSection/>

      <CallToAction/>
    
      <OurEventsSection/>

    </div>

    </Background>
   
  );
}
