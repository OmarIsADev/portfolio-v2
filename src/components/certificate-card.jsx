import Link from "./link";
import { motion } from "framer-motion";

export default function CertificateCard({ certificate, index }) {
  const { name, issuer, date, img, url } = certificate;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex flex-col gap-4 rounded-2xl border border-gray-100/40 p-4 sm:p-6"
    >
      <div className="aspect-video w-full overflow-hidden rounded-xl bg-gray-800">
        {img ? (
          <img
            src={img}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-500">
            No Image
          </div>
        )}
      </div>
      
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <h4 className="text-xl font-bold">{name}</h4>
          <span className="text-sm opacity-80">{issuer}</span>
        </div>
        <span className="text-xs opacity-60">{date}</span>
      </div>

      <div className="mt-auto pt-2">
        <Link href={url} variant="outline" className="w-full justify-center text-center block">
          View Credential
        </Link>
      </div>
    </motion.div>
  );
}
