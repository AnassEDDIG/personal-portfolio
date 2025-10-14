import { Routes, Route } from "react-router-dom";
import { ProjectsArchive } from "../pages/archive/ProjectsArchive";
import { Home } from "../pages/home/Home";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/projects" element={<ProjectsArchive />} />
    </Routes>
  );
};
