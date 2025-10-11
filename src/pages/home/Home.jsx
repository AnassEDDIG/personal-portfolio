import { Bio } from "./sections/bio/Bio";
import { Projects } from "./sections/projects/Projects";
import { Stack } from "./sections/stack/Stack";
import { Sidebar } from "./sidebar/Sidebar";

export const Home = () => {
  return (
    <main className="flex items-start p-24">
      <div className="w-(--sideBar-width)">
        <Sidebar />
      </div>
      <div className="ml-(--sideBar-width) space-y-(--sections-spacing)">
        <Bio />
        <Stack />
        <Projects />
      </div>
    </main>
  );
};
