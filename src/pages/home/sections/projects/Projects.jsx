import { ViewMore } from "@/components/commun/ViewMore";
import { ProjectCard } from "./ProjectCard";
import { projectsData } from "@/data/projectsData";

export const Projects = () => {
  return (
    <div id="projects" className="grid grid-cols-1 gap-4">
      {projectsData.slice(0, 3).map((project) => (
        <ProjectCard project={project} />
      ))}
      <ViewMore text={"View full projects archive"} link={"/projects"} />
    </div>
  );
};
