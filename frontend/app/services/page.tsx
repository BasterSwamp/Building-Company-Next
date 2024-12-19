import SectionSplit from "@/components/SectionSplit";
import Banner from "@/modals/Banner";
import Achievement from "./modules/Achievement";
import Services from "@/modals/Services";
import Projects from "@/modals/Projects";

export default function ServicesPage() {
  return (
    <>
      <Banner />

      <SectionSplit>
        <Achievement />
        <Services />
        <Projects />
      </SectionSplit>
    </>
  );
}
