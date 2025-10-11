import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import "./sidebar.css"

export const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("bio");

  useEffect(() => {
    const sections = ["bio", "stack", "projects"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60% 0px",
        threshold: 0.1,
      }
    );

    // Observe each section by id
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-3 fixed">
      <h1 className="text-4xl sm:text-5xl font-bold">Anass EDDIG</h1>
      <p className="text-(--text-secondary) font-semibold">
        Full Stack Developer
        <span className="text-(--accent-primary)">.</span>
      </p>
      <p className="text-(--text-tertiary) text-sm w-2/3">
        I build pixel-perfect, performant web apps with a focus on user
        experience.
      </p>

      <div className="mt-10 space-y-3">
        {["bio", "stack", "projects"].map((ele, index) => (
          <li
            key={index}
            data-section={ele}
            className={`flex items-center gap-1 current-section-highlighter relative text-xs font-semibold text-(--text-tertiary) w-fit ${
              activeSection === ele ? "active" : ""
            }`}
          >
            <div className="mami"></div>
            {ele.toUpperCase()}
          </li>
        ))}
      </div>

      <div className="flex gap-2 mt-20 text-lg">
        <FaGithub />
        <FaLinkedin />
        <SiLeetcode />
        <FaMedium />
      </div>
    </div>
  );
};
