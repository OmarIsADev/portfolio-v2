import Link from "../components/link";
import axyl from "../assets/projects/axyl.png";
import formuia from "../assets/projects/formuia.png";
import whatsapp from "../assets/projects/whatsapp.png";
import exodia from "../assets/projects/exodia.png";
import uttt from "../assets/projects/ultimatexo.png"
import chainio from "../assets/projects/chain-io.png"


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
    description: "Ulitmate Tic Tac Toe Game with a multiplayer and bot mods.",
    img:uttt,
    demo: "https://ultimatexo.com",
    stack: ["Reactjs", "Vite", "TailwindCSS", "HeroUI", "React-Router", "WebSocket"]
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
    description:
      "Whatsapp landing page clone.",
    img: whatsapp,
    demo: "https://whatsapp-rose-seven.vercel.app/",
    github: "https://github.com/OmarIsADev/whatsapp",
    stack: ["Reactjs", "Vite"],
  },
];

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center gap-16">
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
    <div className="grid max-w-[1312px] md:grid-cols-2 gap-8">
      <img
        src={img}
        className={`rounded-2xl ${index % 2 === 0 ? "-order-1 justify-self-end" : "md:order-1"}`}
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
        <div className="flex gap-3 flex-wrap">
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
    </div>
  );
}
