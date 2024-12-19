import { ProjectInterface } from "@/types/strapi";

export const fetchProjects = async () => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL}/api/projects?populate=*`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      }
    );

    const { data }: { data: ProjectInterface[] } = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const fetchProject = async (id: string) => {
  try {
    const response = await fetch(
      `${process.env.STRAPI_URL}/api/projects/${id}?populate=*`,
      {
        cache: "no-cache",
        headers: {
          Authorization: `Bearer ${process.env.STRAPI_API_KEY}`,
        },
      }
    );

    const { data }: { data: ProjectInterface } = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
