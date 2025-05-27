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
    summary: "Better javascript.",
    description:
      "TypeScript is a typed superset of JavaScript Which helps finding bugs in your code in the development phase.",
  },
  {
    title: "Reactjs",
    image: react,
    summary: "Lego of web.",
    description:
      "A JavaScript library for building user interfaces, Helps breaking down complex UIs into easy-to-manage pieces of code that can be reused across the site 'components'.",
  },
  {
    title: "Tailwind",
    image: tailwind,
    summary: "A utility-first CSS framework.",
    description: "A utility-first CSS framework for rapidly building custom designs."
  },
  {
    title: "Next.js",
    image: next,
    summary: "React with tools and faster development.",
    description: "It's a Reactjs Framework that includes tools ready for production and faster development."
  },
  {
    title: "Supabase",
    image: supabase,
    summary: "A ready to use backend.",
    description: "A ready to use backend instead of building backend from scratch to save time."
  },
  {
    title: "Firebase",
    image: firebase,
    summary: "Google's ready to use backend.",
    description: "Google's ready to use backend instead of building backend from scratch to save time."
  },
];

export default function About() {
  return (
    <div
      id="about"
      className="flex flex-col items-center gap-16 px-6 *:max-w-5xl sm:px-16 lg:px-32"
    >
      <h2>About me</h2>

      <div className="flex max-w-2xl flex-col gap-4 *:indent-4 md:!p-0">
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

      <div className="grid justify-center gap-12 md:grid-cols-2 xl:grid-cols-3">
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
