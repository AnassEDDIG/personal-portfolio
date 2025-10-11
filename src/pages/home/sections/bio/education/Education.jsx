import { EducationCard } from "./EducationCard";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { educationData } from "../bioData";

export const Education = () => {
  return (
    <div>
      <div className="space-y-6 cards-wrapper">
        {educationData.map((ele) => (
          <EducationCard key={ele.id} data={ele} />
        ))}
      </div>
    </div>
  );
};
