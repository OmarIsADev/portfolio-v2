import Line from "./components/line";
import About from "./sections/about";
import Certificates from "./sections/certificates";
import Contact from "./sections/contact";
import Projects from "./sections/projects";
import Thesis from "./sections/thesis";
import Timeline from "./sections/timeline";
import { Analytics } from "@vercel/analytics/react"

export default function App() {

  return (
    <div className="flex flex-col px-4 pb-16 gap-16 items-center bg-bg min-h-screen w-screen">
      <Thesis />
      <Line />
      <Projects />
      <Line />
      <Certificates />
      <Line />
      <About />
      <Line />
      <Timeline />
      <Line />
      <Contact />
      <Analytics />
    </div>
  )
}
