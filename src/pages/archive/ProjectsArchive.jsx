import { IoArrowBack } from "react-icons/io5";
import { ProjectsTable } from "./ProjectsTable";
import { projectsData } from "@/data/projectsData";

export const ProjectsArchive = () => {
  return (
    <div className="relative">
      <p className="flex items-center gap-2 text-(--accent-primary) font-semibold cursor-pointer group duration-300 hover:text-(--accent-secondary)">
        <IoArrowBack className="duration-[inherit] group-hover:-translate-x-1" />
        Anass EDDIG
      </p>
      <p className="text-4xl font-semibold">All Projects</p>
      <p className="text-(--text-secondary) max-w-xl mt-2 text-sm">
        A complete archive of my technical projects — from UI experiments to
        full-stack tools. Each project reflects my growth in design,
        performance, and developer experience.
      </p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-(--text-tertiary) text-sm">
          {projectsData.length} projects • {new Date().getFullYear()} ongoing
        </p>
        <div className="flex gap-3 mt-6 text-sm text-(--text-secondary)">
          <button className="hover:text-(--accent-primary)">All</button>
          <button className="hover:text-(--accent-primary)">Backend</button>
          <button className="hover:text-(--accent-primary)">Tools</button>
        </div>
      </div>

      <ProjectsTable />
    </div>
  );
};
