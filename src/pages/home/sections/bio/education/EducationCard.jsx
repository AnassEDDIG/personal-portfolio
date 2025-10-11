import { LuDot } from "react-icons/lu";
import { PiCertificateDuotone } from "react-icons/pi";

export const EducationCard = ({ data }) => {
  return (
    <div className="card p-6 rounded-md flex gap-16 justify-between duration-300 hover:bg-(--bg-tertiary) hover:shadow-(--glass-shadow)">
      <div>
        <p className="text-(--text-tertiary) text-xs">{data.year}</p>
      </div>
      <div className="space-y-3">
        <p className="text-sm flex items-center">
          {data.degree}
          <span>
            <LuDot />
          </span>
          <span className="text-(--accent-secondary)"> {data.university}</span>
        </p>
        <p className="text-sm text-(--text-tertiary)">{data.details}</p>
        <p className="text-xs bg-(--accent-tertiary)/40 w-fit px-4 py-2 rounded-md flex items-center gap-2">
          <PiCertificateDuotone className="text-lg" /> {data.certificates}
        </p>
      </div>
    </div>
  );
};
