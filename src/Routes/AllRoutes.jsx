import { Routes, Route } from "react-router-dom";
import { ProjectsArchive } from "../pages/archive/ProjectsArchive";
import { Home } from "../pages/home/Home";
import { NotFound } from "../pages/notfound/NotFound";
import { Technologies } from "../pages/technologies/Technologies";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsArchive />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
