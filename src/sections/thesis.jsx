import HeroGradient from "../assets/hero-grad.svg";
import { motion } from "framer-motion";

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
