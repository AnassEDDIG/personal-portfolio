import { IoArrowBack } from "react-icons/io5";

export const ProjectsArchive = () => {
  return (
    <div>
      <p className="flex items-center gap-2 text-(--accent-primary) font-semibold cursor-pointer group">
        <IoArrowBack className="group-hover:-translate-x-2 duration-300" />
        Anass EDDIG
      </p>
      <p className="text-4xl font-semibold">All Projects</p>
    </div>
  );
};
