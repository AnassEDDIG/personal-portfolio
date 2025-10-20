import { Bio } from "./sections/bio/Bio";
import { Projects } from "./sections/projects/Projects";
import { Stack } from "./sections/stack/Stack";
import { Sidebar } from "./sidebar/Sidebar";

export const Home = () => {
  return (
    <main className="w-full flex items-start">
      <div>
        <Sidebar />
      </div>
      <div className="ml-[calc(var(--sidebar-width)+48px)] space-y-(--sections-spacing)">
        <Bio />
        <Stack />
        <Projects />
      </div>
    </main>
  );
};
