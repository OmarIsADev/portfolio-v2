import { useState, useMemo } from "react";
import Link from "../components/link";
import axyl from "../assets/projects/axyl.webp";
import chainio from "../assets/projects/chain-io.webp";
import dashboard from "../assets/projects/dashboard.webp";
import exodia from "../assets/projects/exodia.webp";
import formuia from "../assets/projects/formuia.webp";
import { motion } from "framer-motion";
import timer from "../assets/projects/timer-app.webp";
import uttt from "../assets/projects/ultimatexo.webp";
import weather from "../assets/projects/weather-app.webp";
import whatsapp from "../assets/projects/whatsapp.webp";
import taskspaces from "../assets/projects/task-spaces.webp";
import digitalBank from "../assets/projects/digitalbank-landing.webp";

const projects = [
  {
    header: "Chain-io",
    description: "A social-media but using numbers and operations!",
    img: chainio,
    category: "Fullstack",
    demo: "https://chain-io.vercel.app/",
    github: "https://github.com/OmarIsADev/mini-calc-chain-webapp",
    stack: ["Nextjs", "TailwindCSS", "Reactjs", "MongoDB", "ShadCN UI"],
  },
  {
    header: "UltimateXO",
    description: "Ultimate Tic Tac Toe Game with a multiplayer and bot mods.",
    img: uttt,
    category: "Game",
    demo: "https://ultimatexo.com",
    stack: [
      "Reactjs",
      "Vite",
      "TailwindCSS",
      "HeroUI",
      "React-Router",
      "WebSocket",
    ],
  },
  {
    header: "Task Spaces",
    description:
      "Task Spaces is a modern, privacy-focused productivity workspace designed to help you organize your life with ease. Seamlessly toggle between managing tasks and capturing quick notes in a beautiful, distraction-free environment.",
    img: taskspaces,
    category: "Frontend",
    demo: "https://task-spaces.vercel.app/",
    github: "https://github.com/OmarIsADev/Task-Spaces",
    stack: ["Reactjs", "Vite", "TailwindCSS", "React-Router", "DnD-kit"],
  },
  {
    header: "Mini Dashboard",
    description: "A mini dashboard template.",
    img: dashboard,
    category: "Frontend",
    demo: "https://dashboard-green-alpha-48.vercel.app/",
    github: "https://github.com/OmarIsADev/Dashboard",
    stack: ["Reactjs", "Vite", "TailwindCSS", "Redux"],
  },
  {
    header: "Digital Bank Landing Page",
    description: "Digital Bank Landing Page challenge by Frontend Mentor.",
    img: digitalBank,
    category: "Landing Page",
    demo: "https://digitalbank-landing-page-tau.vercel.app/",
    github: "https://github.com/OmarIsADev/digitalbank-landing-page",
    stack: ["Reactjs", "Vite", "TailwindCSS"],
  },
  {
    header: "Exodia-OS",
    description: "Exodia-OS Website rebuild.",
    img: exodia,
    category: "Landing Page",
    demo: "https://exodia-os.vercel.app/",
    github: "https://github.com/OmarIsADev/exodia-OS",
    stack: ["Astro", "Reactjs", "TailwindCSS"],
  },
  {
    header: "Linux Distro",
    description: "Linux distro landing page",
    img: axyl,
    category: "Landing Page",
    demo: "https://axyl-landing.vercel.app/",
    github: "https://github.com/OmarIsADev/Axyl-landing",
    stack: ["Reactjs", "Vite", "TailwindCSS"],
  },
  {
    header: "Weather App",
    description: "A Working weather web app",
    img: weather,
    category: "Frontend",
    demo: "https://omarisadev.github.io/PRODIGY_WD_05",
    github: "https://github.com/OmarIsADev/PRODIGY_WD_05",
    stack: ["Reactjs", "TailwindCSS"],
  },
  {
    header: "Timer App",
    description: "A Working timer web app",
    img: timer,
    category: "Frontend",
    demo: "https://omarisadev.github.io/PRODIGY_WD_02",
    github: "https://github.com/OmarIsADev/PRODIGY_WD_02",
    stack: ["Reactjs", "TailwindCSS"],
  },
  {
    header: "Formuia",
    description:
      "Formuia is a social media platform, It is a new gamified experience.",
    img: formuia,
    category: "Fullstack",
    demo: "https://formuia.vercel.app",
    github: "https://github.com/omarisadev/formuia",
    stack: ["Nextjs", "TailwindCSS", "Firebase", "HeroUI"],
  },
  {
    header: "Whatsapp Clone",
    description: "Whatsapp landing page clone.",
    img: whatsapp,
    category: "Landing Page",
    demo: "https://whatsapp-rose-seven.vercel.app/",
    github: "https://github.com/OmarIsADev/whatsapp",
    stack: ["Reactjs", "Vite"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Frontend", "Fullstack", "Landing Page", "Game"];

  const filteredProjects = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.category === filter);
  }, [filter]);

  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-16 px-6 sm:px-16"
    >
      <div className="flex flex-col items-center gap-4">
        <h2>Projects</h2>
        <h3>Personal projects</h3>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === cat
                ? "bg-[var(--color)] text-bg scale-105 shadow-md"
                : "bg-transparent text-[var(--color)] border border-[var(--color)] hover:bg-[var(--color)] hover:text-bg opacity-70 hover:opacity-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-8">
        {filteredProjects.map((project, index) => (
          <Project key={`${filter}-${project.header}`} index={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function Project({ project, index }) {
  const { header, description, img, stack, demo, github } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
      className="grid max-w-[1312px] gap-8 lg:grid-cols-2"
    >
      <img
        src={img}
        className={`rounded-2xl ${index % 2 === 0 ? "-order-1 justify-self-end" : "lg:order-1"}`}
        alt=""
      />
      <div
        className={`flex flex-col justify-center gap-8 ${index % 2 === 0 ? "items-start" : "md:items-end"}`}
      >
        <div
          className={`flex flex-col gap-1 ${index % 2 === 0 ? "text-start" : "md:text-end"}`}
        >
          <h4 className="">{header}</h4>
          <p>{description}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {stack.map((item) => (
            <div
              key={item}
              className="h-fit w-fit rounded-lg bg-[var(--color)] px-2 py-1 text-bg"
            >
              {item}
            </div>
          ))}
        </div>
        <div className="flex gap-3">
          {github && (
            <Link href={github} variant="outline">
              Github
            </Link>
          )}
          {demo && <Link href={demo}>Demo</Link>}
        </div>
      </div>
    </motion.div>
  );
}
