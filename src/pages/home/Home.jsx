import { Bio } from "./sections/bio/Bio";
import { Projects } from "./sections/projects/Projects";
import { Stack } from "./sections/stack/Stack";
import { Sidebar } from "./sidebar/Sidebar";

export const Home = () => {
  return (
    <main className="w-full flex flex-col gap-10 items-start">
      <div className="px-6">
        <Sidebar />
      </div>
      <div className="lg:ml-[calc(var(--sidebar-width)+48px)] space-y-(--sections-spacing)">
        <Bio />
        <Stack />
        <Projects />
      </div>
    </main>
  );
};
