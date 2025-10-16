import { projectsData } from "@/data/projectsData";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";

export const ProjectsTable = () => {
  const tableColumns = ["Year", "Project", "Stack", "Repo", "Live"];
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="text-sm text-left text-(--text-secondary)">
            {tableColumns.map((column, i) => (
              <th key={i} className="p-6 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm text-(--text-primary)">
          {projectsData.map((project) => (
            <tr
              key={project.id}
              className="border-b border-(--border-primary) hover:bg-(--bg-secondary)/30 transition-colors duration-300"
            >
              <td className="p-6 text-(--text-tertiary)">2025</td>
              <td className="p-6 font-medium">{project.title}</td>
              <td className="p-6">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-xs text-(--accent-secondary) bg-(--accent-tertiary)/20 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="p-6">
                <Link
                  to={project.repo}
                  target="_blank"
                  className="hover:text-(--accent-secondary) transition-colors flex items-center gap-1"
                >
                  <FaCode /> Source Code
                </Link>
              </td>
              <td className="p-6 flex items-center gap-1">
                <Link
                  to={project.link}
                  target="_blank"
                  className="hover:text-(--accent-secondary) transition-colors flex items-center gap-1 group"
                >
                  {project.shortLink}
                  <CgArrowsExpandUpRight className="duration-300 group-hover:animate-pulse" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
