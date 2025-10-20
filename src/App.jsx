import GalaxyBackground from "./components/effects/GalaxyBackground";
import CursorLight from "./components/effects/CursorLight";
import { useEffect } from "react";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <main className="py-(--main-padding-y) px-(--main-padding-x)">
      <CursorLight />
      <GalaxyBackground />
      <AllRoutes />
    </main>
  );
}

export default App;
