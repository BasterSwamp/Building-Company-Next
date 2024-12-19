import Container from "@/components/Container";
import Image from "next/image";
import heroImg from "@/public/hero.jpg";
import SectionName from "@/components/SectionName";
import { data2 } from "@/utils/data.js";

export default function AboutUs() {
  return (
    <section>
      <Container>
        <SectionName name="About Us" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
          <h2 className="font-medium">
            OUR TEAM IS READY TO BUILD YOUR DREAMS
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            numquam saepe repellendus ut dignissimos, soluta dolor fugit facilis
            esse maiores culpa maxime labore molestiae magni vel voluptatum
            quisquam dicta quasi?
          </p>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100" />
          <Image
            src={heroImg}
            alt="video"
            className="object-cover h-[200px] md:h-[450px] w-full"
          />
        </div>
        <div className="grid grid-cols-2 md:flex justify-between gap-4 md:gap-8 mt-4">
          {data2.map((item) => (
            <div key={item.title}>
              <h2 className="mb-2 text-primary">{item.title}</h2>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
