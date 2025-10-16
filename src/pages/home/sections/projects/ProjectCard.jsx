import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <Link
      key={project.id}
      to={project.link}
      target="_blank"
      className="opacity-80 group"
    >
      <div className="p-6 grid grid-cols-[1fr_3fr] gap-16 rounded-md duration-300 group-hover:bg-(--bg-tertiary) group-hover:opacity-100 group-hover:shadow-(--glass-shadow)">
        <div className="select-none">
          <img
            className="border-2 border-(--bg-secondary)/40 rounded-md"
            src={project.image}
            alt={`${project.title} image`}
          />
        </div>
        <div className="space-y-3 group-hover:text-(--accent-secondary)">
          <p className="text-sm flex items-center gap-2 group">
            {project.title}
            <CgArrowsExpandUpRight className="text-lg duration-300 group-hover:animate-pulse" />
          </p>
          <p className="text-sm text-(--text-tertiary)">
            {project.description}
          </p>
          <div className="flex items-center gap-2">
            {project.stack.map((ele) => (
              <p className="text-xs text-(--accent-secondary) bg-(--accent-tertiary)/30 w-fit px-4 py-2 rounded-full flex items-center gap-2">
                {ele}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
