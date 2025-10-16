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
      <ViewMore text={"View full resume"} />
    </div>
  );
};
