import { Hero } from "./hero/Hero";
import { Education } from "./education/Education";
import { ViewMore } from "@/components/commun/ViewMore";
import "./Bio.css";

export const Bio = () => {
  return (
    <div id="bio">
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
