import { CgArrowsExpandUpRight } from "react-icons/cg";
import { Link } from "react-router-dom";

export const ViewMore = ({ text, link }) => {
  return (
    <Link to={link} className="px-6 mt-10">
      <div className="flex items-center gap-1 cursor-pointer duration-300 hover:text-(--accent-secondary) group">
        {text}
        <CgArrowsExpandUpRight className="text-lg duration-300 group-hover:animate-pulse" />
      </div>
    </Link>
  );
};
