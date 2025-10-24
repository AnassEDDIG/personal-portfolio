import { skillsIcons } from "@/assets/skills-icons";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaCodepen } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

export const Technologies = () => {
  const sections = [
    {
      title: "Languages",
      items: [
        { name: "JavaScript", logo: skillsIcons.js },
        { name: "TypeScript", logo: skillsIcons.ts },
        { name: "Java", logo: skillsIcons.java },
        { name: "HTML", logo: skillsIcons.html },
        { name: "CSS", logo: skillsIcons.css },
      ],
    },
    {
      title: "Frontend",
      items: [
        { name: "React.js", logo: skillsIcons.react },
        { name: "Tailwind CSS", logo: skillsIcons.tailwind },
        { name: "Sass", logo: skillsIcons.sass },
      ],
    },
    {
      title: "Backend",
      items: [
        { name: "Node.js", logo: skillsIcons.node },
        { name: "Express.js", logo: skillsIcons.express },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MongoDB", logo: skillsIcons.mongodb },
        { name: "MySQL", logo: skillsIcons.mysql },
      ],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", logo: skillsIcons.git },
        { name: "GitHub", logo: skillsIcons.github },
        { name: "VS Code", logo: skillsIcons.vscode },
        { name: "Postman", logo: skillsIcons.postman },
        { name: "Vercel", logo: skillsIcons.vercel },
        { name: "Netlify", logo: skillsIcons.netlify },
      ],
    },
    {
      title: "Design",
      items: [
        { name: "Figma", logo: skillsIcons.figma },
        { name: "Canva", logo: skillsIcons.canva },
      ],
    },
  ];

  const platforms = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/AnassEDDIG",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "#",
    },
    {
      name: "CodePen",
      icon: <FaCodepen />,
      link: "#",
    },
    { name: "LeetCode", icon: <SiLeetcode />, link: "#" },
  ];

  return (
    <div className="relative">
      {/* Back Link */}
      <Link
        to={"/"}
        className="flex items-center gap-2 text-(--accent-primary) font-semibold not-last-of-type:group duration-300 hover:text-(--accent-secondary)"
      >
        <IoArrowBack className="duration-[inherit] group-hover:-translate-x-1" />
        Anass EDDIG
      </Link>

      {/* Page Title */}
      <p className="text-4xl font-semibold mt-2">Technologies & Tools</p>
      <p className="text-(--text-secondary) max-w-xl mt-2 text-sm">
        A categorized overview of the languages, frameworks, and tools I use to
        build, design, and optimize applications.
      </p>

      {/* Container Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {sections.map((section, i) => (
          <div
            key={section.title}
            className="relative bg-(--bg-tertiary) p-6 rounded-lg duration-300 group exo-font"
          >
            {/* Decorative Borders */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-(--accent-tertiary) rounded-xs group-hover:w-8 group-hover:h-8 duration-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-(--accent-tertiary) rounded-xs group-hover:w-8 group-hover:h-8 duration-300" />

            {/* Title */}
            <h3 className="text-(--accent-secondary) font-semibold text-lg mb-4">
              {section.title}
            </h3>

            {/* Icons */}
            <div className="flex flex-wrap items-center gap-4">
              {section.items.map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center grayscale-100 group-hover:grayscale-0 duration-300"
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-10 h-10 select-none pointer-events-none"
                    loading="lazy"
                  />
                  <span className="mt-2 text-xs text-(--text-primary)">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-(--accent-secondary) mb-4 exo-font">
          Platforms & Networks
        </h3>
        <div className="flex flex-wrap gap-4">
          {platforms.map((platform, i) => (
            <a
              key={i}
              className="flex items-center gap-2 text-sm text-(--text-primary) bg-(--bg-secondary) border border-(--border-primary) px-4 py-2 rounded-md hover:text-(--accent-secondary) hover:border-(--accent-tertiary) transition-all duration-300"
            >
              <span className="text-(--accent-primary) text-lg">
                {platform.icon}
              </span>
              {platform.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
