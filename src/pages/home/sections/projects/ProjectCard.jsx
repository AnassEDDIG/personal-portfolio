import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export const ProjectCard = ({ project }) => {
  return (
    <div className="p-6 rounded-md flex gap-16 justify-between duration-300 opacity-70 hover:bg-(--bg-tertiary) hover:opacity-100 hover:text-(--accent-primary) hover:shadow-(--glass-shadow) cursor-pointer group">
      <Link to={project.link} target="_blank" className="w-[500px]">
        <img
          className="object-cover w-full h-full border-2 border-(--bg-secondary)/40 group-hover:border-(--bg-secondary) rounded-md transition duration-300"
          src={project.image}
          alt={`${project.title} image`}
        />
      </Link>
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
    </div>
  );
};
