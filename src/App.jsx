import Line from "./components/line";
import About from "./sections/about";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import Thesis from "./sections/thesis";
import { Analytics } from "@vercel/analytics/react"

export default function App() {

  return (
    <div className="flex flex-col px-4 pb-16 gap-16 items-center bg-bg min-h-screen w-screen">
      <Thesis />
      <Line />
      <Projects />
      <Line />
      <About />
      <Line />
      <Contact />
      <Analytics />
    </div>
  )
}
