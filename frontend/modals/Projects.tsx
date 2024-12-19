import EmblaCarousel from "@/components/Carousel/EmblaCarousel";
import Container from "@/components/Container";
import SectionName from "@/components/SectionName";
import { fetchProjects } from "@/data/strapi";
import { Route } from "@/types/route";

export default async function Projects() {
  const data = await fetchProjects();

  const projects = data
    .map((project) => ({
      images: project.images?.map((image: { url: string }) => image.url) || [],
      title: project.title || "No title",
      link: `${Route.PROJECTS}/${project.id}`,
    }))
    .slice(0, 3);

  return (
    <section>
      <Container>
        <SectionName name="Projects" />

        <EmblaCarousel slides={projects} />
      </Container>
    </section>
  );
}
