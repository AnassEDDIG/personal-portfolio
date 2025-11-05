import { LuDot } from "react-icons/lu";
import { PiCertificateDuotone } from "react-icons/pi";

export const EducationCard = ({ data }) => {
  return (
    <div className="card p-6 rounded-md flex flex-col gap-4 md:gap-10 lg:gap-16 md:flex-row justify-between duration-300 bg-(--bg-tertiary) lg:bg-transparent hover:bg-(--bg-tertiary) shadow-(--glass-shadow) lg:shadow-none  lg:hover:shadow-(--glass-shadow)">
      <div>
        <p className="text-(--text-tertiary) text-xs">{data.year}</p>
      </div>
      <div className="space-y-3">
        <p className="text-sm flex flex-col xl:flex-row xl:items-center">
          {data.degree}
          <span className="hidden xl:block">
            <LuDot />
          </span>
          <span className="exo-font text-(--accent-secondary) text-xs">
            {data.university}
          </span>
        </p>
        <p className="text-sm text-(--text-tertiary) text-balance">{data.details}</p>
        <p className="text-xs bg-(--accent-tertiary)/40 w-fit px-4 py-2 rounded-md flex items-center gap-2">
          <PiCertificateDuotone className="text-lg" /> {data.certificates}
        </p>
      </div>
    </div>
  );
};
