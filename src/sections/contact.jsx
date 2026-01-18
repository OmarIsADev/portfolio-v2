import copy from "../assets/copy.svg";
import Link from "../components/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="flex flex-col items-center gap-16">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4 md:flex-row md:gap-16"
      >
        <div className="flex gap-4 items-center">
          <h2 className="text-2xl font-normal">omarisadev@gmail.com</h2>
          <img className="h-6 w-6 cursor-pointer" src={copy} alt=""  onClick={() => navigator.clipboard.writeText("omarisadev@gmail.com")} />
        </div>
        <div className="flex gap-4">
            <Link href="mailto:omarisadev@gmail.com" className="w-fit h-fit py-2 px-3 hover:bg-transparent transition">Send Email</Link>
        </div>
      </motion.div>
    </div>
  );
}
