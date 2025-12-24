import { motion } from "framer-motion";

export default function Line() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className='w-1/3 h-0.5 bg-white'
    ></motion.div>
  )
}
