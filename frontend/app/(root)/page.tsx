import SectionSplit from "@/components/SectionSplit";
import AboutUs from "./modules/AboutUs";
import CoreValues from "./modules/CoreValues";
import Hero from "./modules/Hero";
import Services from "@/modals/Services";
import Projects from "@/modals/Projects";
import Career from "./modules/Career";
import ContactUs from "@/modals/ContactUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <CoreValues />
      <SectionSplit>
        <AboutUs />
        <Services />
        <Projects />
        <Career />
      </SectionSplit>
      <ContactUs />
    </div>
  );
}
