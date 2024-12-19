import SectionSplit from "@/components/SectionSplit";
import Banner from "@/modals/Banner";
import ProjectSingle from "./modules/ProjectSingle";
import { fetchProjects } from "@/data/strapi";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = await params;

  const data = await fetchProjects();
  const project = data.find((p) => p.id === Number(id));

  return (
    <>
      <Banner />

      <SectionSplit>
        {project && (
          <ProjectSingle
            title={project.title}
            description={project.description}
            year={project.year}
            location={project.location}
            images={project.images?.map((image) => image.url)}
          />
        )}
      </SectionSplit>
    </>
  );
}
