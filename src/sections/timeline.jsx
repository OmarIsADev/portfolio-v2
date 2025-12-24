import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2025",
    title: "Continuing the Journey",
    description:
      "Working on advanced web applications and exploring new technologies, and taking the feild seriously.",
  },
  {
    year: "2024",
    title: "Freelance & Open Source",
    description:
      "Started my first freelance and contributing to open-source projects to give back to the community.",
  },
  {
    year: "2023",
    title: "Deep Dive into Web Development",
    description:
      "Mastered HTML, CSS and JavaScript, building various projects.",
  },
  {
    year: "2022",
    title: "Hello World",
    description:
      "Wrote my first line of code and fell in love with problem-solving through programming.",
  },
];

export default function Timeline() {
  return (
    <div
      id="timeline"
      className="flex w-full flex-col items-center gap-16 px-6 sm:px-16"
    >
      <h2>Timeline</h2>

      <div className="relative ml-3 space-y-12 md:ml-6">
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            {/* Dot on the line */}
            <div className="absolute -left-[5px] top-3 h-2.5 w-2.5 rounded-full bg-[var(--color)] ring-4 ring-[var(--background)]" />

            <div className="flex flex-col items-start gap-1 text-start">
              <span className="font-mono text-sm text-[var(--sub)]">
                {item.year}
              </span>
              <h4>{item.title}</h4>
              <p className="max-w-prose">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
