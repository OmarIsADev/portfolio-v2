import HeroGradient from "../assets/hero-grad.svg";
import { motion } from "framer-motion";
import Link from "../components/link";

const routes = ["Projects", "About", "Certificates", "Timeline", "Contact"];

export default function Thesis() {
  return (
    <div className="relative grid h-svh w-screen grid-rows-4 place-content-center md:grid-cols-3 md:grid-rows-1">
      <Hero />
      <Nav />
    </div>
  );
}

function Hero() {
  return (
    <div className="col-span-2 row-span-3 flex items-center justify-center md:row-span-1">
      <img
        src={HeroGradient}
        alt=""
        className="pointer-events-none absolute z-0 p-3 md:p-0"
      />
      <div className="z-10 flex flex-col items-start gap-2.5 max-sm:items-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-sm:text-7xl"
        >
          Welcome!
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-fit max-sm:max-w-[80vw]"
        >
          I&apos;m Omar,
          <br /> A Fullstack web Developer.
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4"
        >
          <Link
            href="/Frontend-Engineer_Omar-Saad_Resume.pdf"
            download="Frontend-Engineer_Omar-Saad_Resume.pdf"
            className="flex items-center gap-2 hover:bg-transparent transition duration-300"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              ></path>
            </svg>
            Download CV
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

function Nav() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="col-span-3 row-span-1 flex items-center justify-center md:col-span-1"
    >
      <ul className="flex flex-col gap-8 border-t-2 border-[var(--sub)] p-4 *:text-xl *:leading-5 md:border-l-2 md:border-t-0">
        {routes.map((route) => (
          <li key={route}>
            <a href={`#${route.toLowerCase()}`}>{route}</a>
          </li>
        ))}
      </ul>
    </motion.aside>
  );
}
