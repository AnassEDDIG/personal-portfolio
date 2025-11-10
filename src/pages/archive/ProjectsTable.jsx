import { useState } from "react";
import { projectsData } from "@/data/projectsData";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaAngleDown, FaCode } from "react-icons/fa";

export const ProjectsTable = () => {
  const tableColumns = ["Year", "Project", "Stack", "Repo", "Live"];
  const [expandedRow, setExpandedRow] = useState(null);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

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
          {projectsData.map((project) => {
            const isExpanded = expandedRow === project.id;
            return (
              <>
                {/* Main Row */}
                <tr
                  key={project.id}
                  className={`relative border-(--border-primary) hover:bg-(--bg-secondary)/30 transition-colors duration-300`}
                >
                  <td className="p-6 text-(--text-tertiary)">
                    <button
                      onClick={() => toggleRow(project.id)}
                      className={`cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    >
                      <FaAngleDown className="text-lg" />
                    </button>
                    2025
                  </td>
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

                {/* Expandable Row with Animation */}
                <tr className="border-b border-(--border-primary)">
                  <td colSpan={5} className="p-0">
                    <div
                      className={`transition-all duration-300 ease overflow-hidden ${
                        isExpanded
                          ? "max-h-96 opacity-100 p-6"
                          : "max-h-0 opacity-0 p-0"
                      }`}
                    >
                      <div className="flex items-start gap-3 text-(--text-secondary) leading-relaxed text-balance">
                        <span className="exo-font text-lg font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-(--accent-primary) via-(--accent-secondary) to-white shrink-0">
                          Overview:
                        </span>
                        <p className="text-(--text-secondary) leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
