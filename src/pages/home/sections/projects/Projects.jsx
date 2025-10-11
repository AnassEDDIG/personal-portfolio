import { ProjectCard } from "./ProjectCard";
import { projectsData } from "./projectsData";

export const Projects = () => {
  return (
    <div id="projects" className="cards-wrapper">
      {projectsData.map((project) => (
        <ProjectCard project={project} />
      ))}
    </div>
  );
};
