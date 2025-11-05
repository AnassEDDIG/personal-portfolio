import { SectionTitle } from "@/components/commun/SectionTitle";
import { EducationCard } from "./EducationCard";
import { educationData } from "@/data/bioData";

export const Education = () => {
  return (
    <section>
      <SectionTitle text={"Education"} />
      <div className="space-y-6 cards-wrapper">
        {educationData.map((ele) => (
          <EducationCard key={ele.id} data={ele} />
        ))}
      </div>
    </section>
  );
};
