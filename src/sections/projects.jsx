import Link from "../components/link";
import axyl from "../assets/projects/axyl.png";
import chainio from "../assets/projects/chain-io.png";
import dashboard from "../assets/projects/dashboard.png";
import exodia from "../assets/projects/exodia.png";
import formuia from "../assets/projects/formuia.png";
import { motion } from "framer-motion";
import timer from "../assets/projects/timer-app.png";
import uttt from "../assets/projects/ultimatexo.png";
import weather from "../assets/projects/weather-app.png";
import whatsapp from "../assets/projects/whatsapp.png";
import taskspaces from "../assets/projects/task-spaces.png";

const projects = [
  {
    header: "Chain-io",
    description: "A social-media but using numbers and operations!",
    img: chainio,
    demo: "https://chain-io.vercel.app/",
    github: "https://github.com/OmarIsADev/mini-calc-chain-webapp",
    stack: ["Nextjs", "TailwindCSS", "Reactjs", "MongoDB", "ShadCN UI"],
  },
  {
    header: "UltimateXO",
    description: "Ultimate Tic Tac Toe Game with a multiplayer and bot mods.",
    img: uttt,
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
    demo: "https://task-spaces.vercel.app/",
    github: "https://github.com/OmarIsADev/Task-Spaces",
    stack: ["Reactjs", "Vite", "TailwindCSS", "React-Router", "DnD-kit"],
  },
  {
    header: "Mini Dashboard",
    description: "A mini dashboard template.",
    img: dashboard,
    demo: "https://dashboard-green-alpha-48.vercel.app/",
    github: "https://github.com/OmarIsADev/Dashboard",
    stack: ["Reactjs", "Vite", "TailwindCSS", "Redux"],
  },
  {
    header: "Exodia-OS",
    description: "Exodia-OS Website.",
    img: exodia,
    demo: "https://exodia-os.vercel.app/",
    github: "https://github.com/OmarIsADev/exodia-OS",
    stack: ["Astro", "Reactjs", "TailwindCSS"],
  },
  {
    header: "Linux Distro",
    description: "Linux distro landing page",
    img: axyl,
    demo: "https://axyl-landing.vercel.app/",
    github: "https://github.com/OmarIsADev/Axyl-landing",
    stack: ["Reactjs", "Vite", "TailwindCSS"],
  },
  {
    header: "Weather App",
    description: "A Working weather web app",
    img: weather,
    demo: "https://omarisadev.github.io/PRODIGY_WD_05",
    github: "https://github.com/OmarIsADev/PRODIGY_WD_05",
    stack: ["Reactjs", "TailwindCSS"],
  },
  {
    header: "Timer App",
    description: "A Working timer web app",
    img: timer,
    demo: "https://omarisadev.github.io/PRODIGY_WD_02",
    github: "https://github.com/OmarIsADev/PRODIGY_WD_02",
    stack: ["Reactjs", "TailwindCSS"],
  },
  {
    header: "Formuia",
    description:
      "Formuia is a social media platform, It is a new gamified experience.",
    img: formuia,
    demo: "https://formuia.vercel.app",
    github: "https://github.com/omarisadev/formuia",
    stack: ["Nextjs", "TailwindCSS", "Firebase", "HeroUI"],
  },
  {
    header: "Whatsapp Clone",
    description: "Whatsapp landing page clone.",
    img: whatsapp,
    demo: "https://whatsapp-rose-seven.vercel.app/",
    github: "https://github.com/OmarIsADev/whatsapp",
    stack: ["Reactjs", "Vite"],
  },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-16 px-6 sm:px-16"
    >
      <div className="flex flex-col items-center gap-4">
        <h2>Projects</h2>
        <h3>Personal projects</h3>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <Project key={project.header} index={index} project={project} />
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
