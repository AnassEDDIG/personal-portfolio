import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <Link
      to={project.link}
      target="_blank"
      className="p-6 rounded-md grid grid-cols-[1fr_3fr] gap-16 justify-between duration-300 opacity-70 hover:bg-(--bg-tertiary) hover:opacity-100 hover:text-(--accent-primary) hover:shadow-(--glass-shadow) cursor-pointer group"
    >
      <div>
        <img
          className="border-2 border-(--bg-secondary)/40 group-hover:border-(--bg-secondary) rounded-md transition duration-300"
          src={project.image}
          alt={`${project.title} image`}
        />
      </div>
      <div className="space-y-3">
        <p className="text-sm flex items-center gap-2 group">
          {project.title}
          <CgArrowsExpandUpRight className="text-lg duration-300 group-hover:animate-pulse" />
        </p>
        <p className="text-sm text-(--text-tertiary)">{project.description}</p>
        <div className="flex items-center gap-2">
          {project.tech.map((ele) => (
            <p className="text-xs bg-(--accent-tertiary)/30 w-fit px-4 py-2 rounded-full flex items-center gap-2">
              {ele}
            </p>
          ))}
        </div>
      </div>
    </Link>
  );
};
