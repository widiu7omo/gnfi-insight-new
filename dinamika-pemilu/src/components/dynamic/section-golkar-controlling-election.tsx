"use client";
import { motion } from "framer-motion";
export default function SectionGolkarControllingElection() {
  return (
    <div
      className="h-full !bg-cover w-full flex items-center justify-center"
      style={{
        background:
          "url('pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/golkar/bg-title.png')",
      }}
    >
      <div className="bg-black/60 flex items-center justify-center w-full py-24 xl:py-64">
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-tr from-yellow-400 via-orange-600 to-red-600 min-w-full rounded bg-clip-text p-2 text-center text-transparent caret-pink-600 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
        >
          Ketika Golkar Menguasai Pemilu
        </motion.h2>
      </div>
    </div>
  );
}
