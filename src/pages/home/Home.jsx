import { Bio } from "./sections/bio/Bio";
import { Projects } from "./sections/projects/Projects";
import { Stack } from "./sections/stack/Stack";
import { Sidebar } from "./sidebar/Sidebar";

export const Home = () => {
  return (
    <main className="flex items-start gap-10 py-24 px-20">
      <div className="max-w-(--sideBar-width)">
        <Sidebar />
      </div>
      <div className="ml-(--sideBar-width) space-y-(--sections-spacing) max-w-[70%]">
        <Bio />
        <Stack />
        <Projects />
      </div>
    </main>
  );
};
