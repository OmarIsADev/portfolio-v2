import ts from "../assets/tech/ts.svg";
import react from "../assets/tech/react.svg";
import tailwind from "../assets/tech/tailwind.svg";
import next from "../assets/tech/next.svg";
import supabase from "../assets/tech/supabase.svg";
import firebase from "../assets/tech/firebase.svg";
import Tech from "../components/tech";

const techs = [
  {
    title: "TypeScript",
    image: ts,
    description: "Better javascript.",
  },
  {
    title: "React",
    image: react,
    description: "Lego of web.",
  },
  {
    title: "Tailwind",
    image: tailwind,
    description: "A utility-first CSS framework.",
  },
  {
    title: "Next.js",
    image: next,
    description: "React with tools and faster development.",
  },
  {
    title: "Supabase",
    image: supabase,
    description: "A ready to use backend.",
  },
  {
    title: "Firebase",
    image: firebase,
    description: "Google's ready to use backend.",
  }
]

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center gap-16 lg:px-32 sm:px-16 px-6 *:max-w-5xl">
      <h2>About me</h2>

      <div className="*:indent-4 flex flex-col gap-4 max-w-2xl md:!p-0">
        <p>
          Hello! My name is Omar Saad. I&apos;m from Egypt. During my free time,
          I usually code, learn New technologies, New languages, And play video
          games.
        </p>
        <p>
          My journey into the world of technology began with a strong passion
          for problem-solving and development, which led me to pursue the
          Computer Systems Technology program. Despite its challenges, I
          remained determined and forged lasting friendships that supported me
          throughout this demanding program.
        </p>
        <p>
          I love both, working in a team splitting tasks and independently. I am
          eager to continue exploring exciting projects in the future, with a
          particular interest in web development and android development. I have
          become confident using the following technologies:
        </p>
      </div>

      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-12 justify-center">

        {techs.map((tech) => (
          <Tech key={tech.title} {...tech} />
        ))}
        {/* <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={ts} alt="" />
        <img src={tailwind} alt="" />
        <img src={react} alt="" />
        <img src={vue} alt="" />
        <img src={next} alt="" />
        <img src={vite} alt="" />
        <img src={firebase} alt="" />
        <img src={supabase} alt="" /> */}
      </div>
    </div>
  );
}
