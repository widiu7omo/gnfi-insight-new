"use client";
import { motion } from "framer-motion";
export default function SectionGolkarControllingElection() {
  return (
    <div
      className="h-[400px] !bg-cover w-full flex items-center justify-center relative"
      style={{
        background:
          "url('pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/golkar/2.png')",
      }}
    >
      <div className="absolute bg-black/70 top-0 bottom-0 right-0 left-0 flex items-center justify-center">
        <motion.h5
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-tr from-yellow-400 via-amber-600 to-red-600 min-w-full rounded bg-clip-text p-2 text-center text-transparent caret-pink-600 text-5xl font-bold"
        >
          Ketika Golkar Menguasai Pemilu
        </motion.h5>
      </div>
    </div>
  );
}
