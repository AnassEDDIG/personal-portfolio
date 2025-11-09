import { Hero } from "./hero/Hero";
import { Education } from "./education/Education";
import { ViewMore } from "@/components/commun/ViewMore";
import "./Bio.css";
import { SectionTitle } from "@/components/commun/SectionTitle";

export const Bio = () => {
  return (
    <div id="bio" className="px-2 md:px-6">
      <SectionTitle text={"Bio"} />
      <div className="space-y-(--sections-spacing)">
        <Hero />
        <Education />
      </div>
      <span onClick={() => window.open("./resume.pdf", "_blank")}>
        <ViewMore text={"View full resume"} />
      </span>
    </div>
  );
};
