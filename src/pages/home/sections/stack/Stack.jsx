import { skillsIcons } from "../../../../assets/skills-icons";
import { CgArrowsExpandUpRight } from "react-icons/cg";
import { ViewMore } from "../../../../components/commun/ViewMore";

export const Stack = () => {
  const stack = [
    { name: "HTML", logo: skillsIcons.html },
    { name: "CSS", logo: skillsIcons.css },
    { name: "JavaScript", logo: skillsIcons.js },
    { name: "Tailwind CSS", logo: skillsIcons.tailwind },
    { name: "Java", logo: skillsIcons.java },
    { name: "TypeScript", logo: skillsIcons.ts },
    { name: "Node.js", logo: skillsIcons.node },
    { name: "Express.js", logo: skillsIcons.express },
    { name: "React.js", logo: skillsIcons.react },
    { name: "MongoDB", logo: skillsIcons.mongodb },
    { name: "MySQL", logo: skillsIcons.mysql },
    { name: "Git", logo: skillsIcons.git },
    { name: "Sass", logo: skillsIcons.sass },
  ];
  return (
    <div id="stack">
      <div className="grid grid-cols-3 gap-4">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center bg-(--bg-tertiary) group hover:shadow-(--shadow-primary) p-4 rounded-md grayscale-100 hover:grayscale-0 duration-300"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-(--accent-tertiary) rounded-xs group-hover:w-8 group-hover:h-8 duration-300" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-(--accent-tertiary) rounded-xs group-hover:w-8 group-hover:h-8 duration-300" />
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-12 h-12"
              loading="lazy"
            />
            <span className="mt-2 text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
      <ViewMore text={"View Full Technologies and Tools"} />
    </div>
  );
};
