"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiNodedotjs,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiPostman,
  SiElasticsearch,
  SiApachekafka,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
} from "react-icons/si";

type GuiBoxProps = {
  id: number;
  title: string;
  type: "introduce" | "project" | "contact" | "certificate" | "skills";
  onDelete: (id: number) => void;
};

const skillCategories = [
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
      { name: "Express", icon: SiExpress, color: "text-white" }, // Express สีขาวบนพื้นดำสวยกว่า
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
    ],
  },
  {
    title: "Tools & Database",
    skills: [
      { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
      { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]" },
      { name: "Elasticsearch", icon: SiElasticsearch, color: "text-[#005571]" },
      { name: "Kafka", icon: SiApachekafka, color: "text-white" }, // หรือสีแดง
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "Prisma", icon: SiPrisma, color: "text-white" },
      { name: "Git", icon: SiGit, color: "text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "text-white" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "C++", icon: SiCplusplus, color: "text-[#00599C]" },
    ],
  },
];

function GuiBox({ id, title, type, onDelete }: GuiBoxProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const boxRef = useRef<HTMLDivElement>(null);

  //scroll to box when created
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  //content based on type
  const renderContent = () => {
    switch (type) {
      case "introduce":
        return (
          <div className="space-y-4 text-gray-300">
            <h2 className="text-2xl font-bold text-white">
              Hello, I'm student 3rd year at{" "}
            </h2>
            <p>
              I am a Computer Engineering student passionate about
              <span className="text-green-400 font-mono mx-1">
                Backend Systems
              </span>
              and{" "}
              <span className="text-green-400 font-mono mx-1">CLI Tools</span>.
            </p>
          </div>
        );

      case "certificate":
        return (
          <div>
            <p>Helloo</p>
          </div>
        );

      case "skills":
        return (
          // <div className="grid grid-cols-1 md:grid-cols-2">
          //   {/* backend */}
          //   <div className="w-100% border border-gray-600 p-2 mb-4 md:mb-0 md:mr-4 rounded-lg bg-[#161b22]">
          //     {/* header */}
          //     <div className="border border-gray-500 text-2xl p-2 rounded-lg bg-gray-600/30">
          //       <h2>Backend</h2>
          //     </div>
          //     <div className="flex gap-2 flex-wrap mt-2 text-gray-400">
          //       <div className="flex flex-col items-center p-2">
          //         <SiNodedotjs size={30} className="text-green-500" />
          //         <p>Node.js</p>
          //       </div>
          //       <div className="flex flex-col items-center p-2">
          //         <SiExpress size={30} className="text-green-500" />
          //         <p>Express</p>
          //       </div>
          //     </div>
          //   </div>

          //   {/* frontend */}
          //   <div>
          //     <h2>Frontend</h2>
          //     <div>
          //       <p>React</p>
          //       <p>Next.js</p>
          //       <p>HTML</p>
          //       <p>CSS</p>
          //     </div>
          //   </div>

          //   {/* tools and database */}
          //   <div>
          //     <h2>Tools & Database</h2>
          //     <div>
          //       <p>Docker</p>
          //       <p>Postman</p>
          //       <p>Elasticsearch</p>
          //       <p>Kafka</p>
          //       <p>Postgresql</p>
          //       <p>MySQL</p>
          //       <p>PrismaORM</p>
          //       <p>Git & Github</p>
          //     </div>
          //   </div>

          //   {/* language */}
          //   <div>
          //     <h2>Programming Languages</h2>
          //     <div>
          //       <p>JavaScript</p>
          //       <p>TypeScript</p>
          //       <p>Python</p>
          //       <p>C++</p>
          //     </div>
          //   </div>
          // </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="w-full border border-gray-600 p-4 rounded-lg bg-[#161b22] hover:border-gray-400 transition-colors"
              >
                {/* header */}
                <div className="border border-gray-500 rounded-lg bg-gray-600/30 p-2">
                  <h2 className="text-xl md:text-2xl font-bold text-gray-200">
                    {category.title}
                  </h2>
                </div>

                {/* icon */}
                <div className="flex gap-4 flex-wrap mt-4 px-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col items-center justify-center gap-2 p-3 min-w-20"
                    >
                      <skill.icon
                        size={30}
                        className={`${skill.color} 
                        drop-shadow-md transition-transform duration-300 
                        group-hover:scale-125
                        group-hover:border-current
                        group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
                        bg-transparent group:hover:bg-white
                        `}
                      />

                      <p className="text-xs text-gray-400 font-mono text-center transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                        {skill.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      default:
        return <p>No content</p>;
    }
  };
  return (
    <div
      id={`box-${type}`}
      ref={boxRef}
      className="w-full max-h-4xl mx-auto mt-8 transition-all duration-500 ease-in-out"
    >
      {/* outer container */}
      <div className="border border-gray-600 rounded-lg overflow-hidden shadow-xl bg-[#0d1117]">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#161b22] border-b border-gray-700">
          <span className="font-mono font-bold text-gray-200">{title}</span>

          {/* icon group*/}
          <div className="flex items-center space-x-3">
            {/* delete button */}
            <button
              onClick={() => onDelete(id)}
              className="text-gray-400 hover:text-red-500 transition-colors"
              title="Close Panel"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>

            {/* collapse expand button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transform transition-transform ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {isExpanded && (
          <div className="p-4 bg-[#1e1e1e]">
            <div className="bg-[#2a2e37] rounded p-6 shadow-inner min-h-[200px] border border-gray-700/50">
              {renderContent()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GuiBox;
