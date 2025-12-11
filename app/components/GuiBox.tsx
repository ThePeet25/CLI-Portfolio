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
  SiArduino,
  SiEspressif,
} from "react-icons/si";

import {
  FiGithub,
  FiExternalLink,
  FiArrowLeft,
  FiCalendar,
  FiCpu,
  FiCheckCircle,
  FiFolder,
  FiAward,
  FiX,
  FiMaximize2,
} from "react-icons/fi";

import { FaPhone, FaLine } from "react-icons/fa6";
import { MdEmail,} from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";

type GuiBoxProps = {
  id: number;
  title: string;
  type: "introduce" | "projects" | "contact" | "certificate" | "skills";
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
      { name: "Tailwind CSS", icon: RiTailwindCssFill, color: "text-[#38B2AC]" },
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
  {
    title: "IoT & Embedded Systems",
    skills: [
      { name: "Arduino", icon: SiArduino, color: "text-[#00979D]" },
      { name: "ESP32 & ESP8266", icon: SiEspressif, color: "text-[#E7352C]" },
    ],
  },
];

const projects = [
  {
    title: "POS System Backend",
    type: `Group project`,
    date: "July 2025 - October 2025",
    role: "Backend Developer",
    github: "https://github.com/ThePeet25/POS-server",
    describe:
      "This project is a backend Node.js server for a Point of Sale (POS) system, built using Express.js and PostgreSQL. It provides a full retail management API, including user authentication, product management, inventory tracking, promotions, and order processing. Prisma is used as the ORM for efficient database operations, while JWT and bcryptjs handle secure authentication and password hashing.",
    describeFull:
      "This is a backend Node.js server for a Point of Sale (POS) system built with Express.js and PostgreSQL. The project implements a complete e-commerce/retail management API with user authentication, product management, inventory tracking, promotions, and order processing. It uses Prisma as the ORM for database interactions and JWT for secure authentication, with bcryptjs for password hashing.",
    techStack: [
      "Javascript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
    ],
    responsibilities: [
      "Developed RESTful APIs for product management, order processing, and user authentication.",
      "Designed and implemented a PostgreSQL database schema for efficient data storage and retrieval.",
      "Implemented JWT authentication with RBAC, supporting two access levels: Cashier and Manager",
      "Integrated Prisma ORM for type-safe database queries and migrations.",
      "Created backend docker images for easy deployment and scalability.",
    ],
  },
  {
    title: "Search & Review Restaurant",
    type: `Group project`,
    date: "July 2025 - October 2025",
    role: "Backend Developer",
    github: "https://github.com/KMITL-PCC/TasteTrail",
    describe: `TasteTrail is a restaurant discovery and review platform built with an Express.js + TypeScript backend. It provides secure authentication (OTP and Google OAuth), restaurant and review management, and efficient data operations through Prisma ORM. The system integrates PostgreSQL for storage, Redis for caching, Cloudinary for media handling, and Nodemailer for OTP delivery, ensuring reliability and high performance.`,
    describeFull:
      "TasteTrail is a full-stack web application designed to help users discover, review, and manage restaurants in the KMITL PCC area. The platform features a modern frontend built with Next.js 15, React 19, and Tailwind CSS, offering a responsive and intuitive user experience. Users can browse restaurants, filter results, and interact with location-based maps, while restaurant owners have tools to create and manage their listings. The backend is powered by Express.js with TypeScript and Prisma ORM, providing a robust API for authentication, restaurant management, and review handling. Key features include secure login and registration with OTP and Google OAuth, real-time notifications, and advanced security measures such as CSRF protection and rate limiting. The system integrates PostgreSQL for data storage, Redis for caching, Cloudinary for image uploads, and Nodemailer for email services, ensuring scalability and reliability.",
    techStack: [
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Docker",
      "Redis",
    ],
    responsibilities: [
      "Developed RESTful APIs for searching restaurants, filter by categories, reviews, create restaurant profile and user authentication.",
      "Designed and implemented a PostgreSQL database schema for efficient data storage and retrieval.",
      "Implemented session authentication with RBAC, supporting two access levels: User and Restaurant Owner",
      "Integrated Prisma ORM for type-safe database queries and migrations.",
      "Created docker to run backend, postgreSQL and redis for session store.",
      "Create unit test with jest to ensure authentication system work as intended.",
      "Implement protect CSRF attack with csurf middleware.",
      "Implemented Authentication with Google OAuth2.0 for secure and convenient user login.",
    ],
  },
  {
    title: "Log Process",
    type: `Personal project`,
    date: "February 2025 - March 2025",
    role: "Backend Developer",
    github: "https://github.com/ThePeet25/log-process",
    describe:
      "This project utilizes Nodejs, Kafka, Elasticsearch, Docker, and Auth0 as the authentication provider. It focuses on log processing to provide real-time insights. When a user logs in or out, the log is sent via Kafka to Elasticsearch. Only administrators have access to view the logs.",
    describeFull:
      "This project is a log-processing system built with Node.js, Kafka, Elasticsearch, Auth0, Docker, and EJS. It records user login and logout activities in real time. When a user authenticates through Auth0, the system generates logs and sends them through Kafka, which are then stored and indexed in Elasticsearch. Only administrators—defined via Auth0 roles—can view these logs.",
    techStack: [
      "Javascript",
      "Node.js",
      "Express.js",
      "Elasticsearch",
      "Kafka",
      "Docker",
      "EJS",
    ],
    responsibilities: [
      "Developed RESTful APIs for create log when user login and logout with Auth0 authentication.",
      "Implemented API for search log with Elasticsearch for fast and efficient log retrieval.",
      "Integrated Kafka for real-time log streaming to Elasticsearch.",
      "Implemented role-based access control (RBAC) using Auth0 to restrict log viewing to administrators only.",
      "Created docker images for easy deployment of the log processing system.",
      "Created EJS templates for admin log viewing interface.",
    ],
  },
  {
    title: "CLI Portfolio",
    type: `Personal project`,
    date: "December 2025",
    role: "Frontend developer",
    github: "https://github.com/ThePeet25/log-process",
    live:"https://cli-portfolio-kappa.vercel.app/",
    describe:
      "This is my CLI with GUI portfolio. It is built with Next.js and Tailwindcss. The project showcases my skills and experience as a frontend developer.",
    describeFull:
      "This is my CLI with GUI portfolio. It's built with Next.js and Tailwindcss. The project showcases my skills and experience as a frontend developer.",
    techStack: ["Javascript", "HTML", "Tailwind CSS", "React"],
    responsibilities: [
      `Implemented a hybrid portfolio with both a polished GUI (Next.js + React) 
      and a developer-friendly CLI, sharing a single core library for business logic`,
    ],
  },
];

const certificates = [
  {
    id: 1,
    title: "KLIX Python Programming",
    image: "pythoncer.jpg",
  },
  {
    id: 2,
    title: "Fullstack with HTML, CSS, Node.js, Express, EJS, MySQL",
    image: "udemyfull.jpg",
  },
  {
    id: 3,
    title: "AI and cyber security",
    image: "AIandCypher.png",
  },
];

function GuiBox({ id, title, type, onDelete }: GuiBoxProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null
  >(null);
  const boxRef = useRef<HTMLDivElement>(null);

  //scroll to box when created
  useEffect(() => {
    if (boxRef.current) {
      boxRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  //scroll to project when selected
  useEffect(() => {
    if (selectedProject && boxRef.current) {
      boxRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [selectedProject]);

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
          <>
            {/* --- GRID VIEW --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
              {certificates.map((cert) => (
                <div
                  key={cert.id}
                  className="p-2 md:p-4 group bg-[#161b22] border border-gray-700 rounded-lg overflow-hidden hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)] transition-all duration-300 flex flex-col"
                >
                  {/* ส่วนรูปภาพ (Thumbnail) */}
                  <div
                    className="relative h-48 overflow-hidden cursor-pointer bg-gray-900"
                    onClick={() => setSelectedCert(cert)} // คลิกเพื่อขยาย
                  >
                    {/* รูปภาพ */}
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />

                    {/* Overlay ไอคอนขยายตอน Hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-black/70 p-2 rounded-full text-green-400">
                        <FiMaximize2 size={24} />
                      </div>
                    </div>
                  </div>

                  {/* ส่วนรายละเอียดด้านล่าง */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="mb-auto">
                      <h3 className="text-white font-bold text-lg leading-tight mb-1 group-hover:text-green-400 transition-colors">
                        {cert.title}
                      </h3>
                      {/* <p className="text-green-600 text-sm font-medium mb-2">{cert.issuer}</p> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- IMAGE MODAL (LIGHTBOX) --- */}
            {selectedCert && (
              <div
                className="fixed inset-0 z-100 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200"
                onClick={() => setSelectedCert(null)} // คลิกพื้นหลังเพื่อปิด
              >
                {/* ปุ่มปิด */}
                <button
                  className="absolute top-4 right-4 p-2 bg-gray-800 rounded-full text-white hover:bg-red-500 transition-colors z-10"
                  onClick={() => setSelectedCert(null)}
                >
                  <FiX size={24} />
                </button>

                {/* กล่องแสดงภาพใหญ่ */}
                <div
                  className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
                  onClick={(e) => e.stopPropagation()} // คลิกที่รูปไม่ปิด
                >
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[85vh] rounded-lg shadow-2xl border border-gray-700"
                  />

                  {/* Caption ใต้ภาพ */}
                  <div className="mt-4 text-center">
                    <h2 className="text-xl font-bold text-white">
                      {selectedCert.title}
                    </h2>
                    {/* <p className="text-green-500">{selectedCert.issuer}</p> */}
                  </div>
                </div>
              </div>
            )}
          </>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-1 md:p-0">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="w-full border border-gray-600  p-2 md:p-4 rounded-lg bg-[#161b22] hover:border-gray-400 transition-colors"
              >
                {/* header */}
                <div className="border border-gray-500 rounded-lg bg-gray-600/30 p-2">
                  <h2 className="text-sm md:text-2xl font-bold text-gray-200">
                    {category.title}
                  </h2>
                </div>

                {/* icon */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4 px-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col items-center justify-center gap-2 p-3 min-w-20"
                    >
                      <skill.icon
                        className={`${skill.color} 
                        drop-shadow-md transition-transform duration-300 
                        group-hover:scale-125
                        group-hover:border-current
                        group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]
                        bg-transparent
                        text-[30px] md:text-[40px]
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

      case "contact":
        return (
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-4 gap-4 w-full text-gray-400 place-items-center h-full">
            {/* 1. Phone (แถม: กดโทรได้เลย) */}
            <a
              href="tel:+66991327031"
              className="group border border-transparent hover:border-white hover:bg-white/10 p-4 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <FaPhone
                size={30}
                className="group-hover:text-green-400 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="font-mono text-sm group-hover:text-white transition-colors">
                +66 99-132-7031
              </p>
            </a>

            {/* 2. Line */}
            <div className="group border border-transparent hover:border-white hover:bg-white/10 p-4 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer">
              <FaLine
                size={30}
                className="group-hover:text-[#06C755] group-hover:scale-110 transition-transform duration-300"
              />
              <p className="font-mono text-sm group-hover:text-white transition-colors">
                0991327031
              </p>
            </div>

            <a
              href="https://github.com/ThePeet25"
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-transparent hover:border-white hover:bg-white/10 p-4 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <SiGithub
                size={30}
                className="group-hover:text-white group-hover:scale-110 transition-transform duration-300"
              />
              <p className="font-mono text-sm group-hover:text-white transition-colors">
                ThePeet25
              </p>
            </a>

            {/* 4. Email */}
            <a
              href="mailto:b.pattaradanai22@gmail.com"
              className="group border border-transparent hover:border-white hover:bg-white/10 p-4 rounded-xl flex flex-col items-center gap-3 transition-all duration-300 cursor-pointer"
            >
              <MdEmail
                size={30}
                className="group-hover:text-red-400 group-hover:scale-110 transition-transform duration-300"
              />
              <p className="font-mono text-sm group-hover:text-white transition-colors">
                b.pattaradanai22@gmail.com
              </p>
            </a>
          </div>
        );

      case "projects":
        return (
          <div className="min-h-[500px] p-2 relative">
            {/* not select project */}
            {!selectedProject && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-between bg-[#161b22] p-2 md:p-6 border border-gray-800 rounded-lg text-gray-400 md:min-h-[400px]"
                  >
                    {/* header */}
                    <div
                    onClick={() => setSelectedProject(project)} 
                    className="flex flex-col justify-between items-start mb-4 gap-2 hover:cursor-pointer">
                      <h2 className="text-sm md:text-xl text-white bg-green-400 p-2 rounded-lg">
                        {project.title}
                      </h2>
                      <div className="flex flex-col md:flex-row md:items-cetner gap-1 md:gap-3 text-xs mt-2">
                        <p className="text-xs ">{project.type} </p>
                        <span className="hidden md:block text-gray-400">|</span>
                        <div className="flex items-center gap-2">
                          <FiCalendar size={14} className="inline mr-1 md:hidden" />
                          <span>{project.date}</span>
                        </div>
                      </div>
                    </div>

                    {/* describe */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="group relative flex flex-col text-xs md:text-base border border-transparent cursor-pointer h-full"
                    >
                      <p>{project.describe}</p>

                      {/* hover */}
                      <div className="absolute inset-0 bg-[#161b22] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-black border bg-green-400 p-2 rounded-xl font-bold flex items-center gap-2">
                          More Information
                        </span>
                      </div>

                      {/* mobile & ipad*/}
                      <div className="lg:hidden text-black font-bold text-xs p-2 mt-auto border border-gray-400 bg-gray-400 rounded-xl">
                        More Information...
                      </div>

                    </div>

                    {/* footer */}
                    <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-800">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                      >
                        <SiGithub size={24} className="text-white" />
                        <span>Github</span>
                      </a>
                      {project.live && (
                        <a href={project.live}
                          target="_blank"
                          rel="noreferrer"
                          className="ml-auto group flex gap-2 hover:text-red-500 transition-colors text-sm items-center"
                          >
                            <FiExternalLink size={24} className="group-hover:text-red-500"/>
                            Live
                        </a>
                      )}
                    </div>

                    {/* {selectedProject && (
                      <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                      />
                    )} */}
                  </div>
                ))}
              </div>
            )}

            {/* select project */}
            {selectedProject && (
              <div 
              ref={boxRef}
              className="text-xs md:text-base h-full bg-[#161b22] rounded-lg animate-in slide-in-from-right duration-300 fade-in overflow-auto">
                {/* header */}
                <div className="flex items-center gap-4 border-b border-gray-800 pb-4 mb-6 sticky top-0 bg-[#0d1117]/95 backdrop-blur z-10 p-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 px-2 py-1.5 rounded-md bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors text-xs md:text-sm font-bold"
                  >
                    <FiArrowLeft /> Back
                  </button>
                  <h2 className="text-base md:text-xl font-bold text-green-500 tracking-wide">
                    {selectedProject.title}{" "}
                  </h2>
                </div>

                {/* content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-2">
                  {/* Left: Main Info */}
                  <div className="lg:col-span-2 space-y-6">
                    <div>
                      {/* summary */}
                      <h4 className="text-xs md:text-base font-bold text-green-400 mb-2">
                        Summary
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-xs md:text-base">
                        {selectedProject.describeFull}
                      </p>
                    </div>

                    {/* responsibilties */}
                    <h4 className="text-green-400 font-bold mb-3 flex items-center gap-2 text-xs md:text-base">
                      Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {selectedProject.responsibilities?.map(
                        (item: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-xs md:text-base text-gray-300"
                          >
                            <FiCheckCircle className="text-green-500 mt-1 shrink-0" />
                            <span>{item}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Right: Meta Info & Links */}
                  <div className="space-y-6">
                    {/* Info Card */}
                    <div className="bg-[#161b22] p-5 rounded-lg border border-gray-700">
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase mb-1">
                            Role
                          </p>
                          <p className="text-white font-mono text-xs md:text-base">
                            {selectedProject.role}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase mb-1">
                            Timeline
                          </p>
                          <div className="flex items-center gap-2 text-gray-300 text-xs md:text-base">
                            <FiCalendar /> {selectedProject.date}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase mb-2">
                            Tech Stack
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.techStack.map(
                              (t: string, i: number) => (
                                <span
                                  key={i}
                                  className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded border border-gray-600"
                                >
                                  {t}
                                </span>
                              )
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Buttons */}
                      <div className="mt-6 pt-4 border-t border-gray-700 flex flex-col gap-3">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          className="flex items-center justify-center gap-2 w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded transition-colors text-sm font-bold"
                        >
                          <FiGithub /> Github
                        </a>
                        {selectedProject.live && (
                          <a
                            href={selectedProject.live}
                            target="_blank"
                            className="flex items-center justify-center gap-2 w-full py-2 border border-green-600 text-green-500 hover:bg-green-900/20 rounded transition-colors text-sm font-bold"
                          >
                            <FiExternalLink /> Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
            <div className="bg-[#2a2e37] rounded p-0 md:p-6 shadow-inner min-h-[200px] border border-gray-700/50 flex flex-col justify-center">
              {renderContent()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GuiBox;
