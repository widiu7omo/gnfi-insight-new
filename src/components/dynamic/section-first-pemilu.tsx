"use client";
import { motion } from "framer-motion";
export default function SectionFirstPemilu() {
  return (
    <div className="w-full">
      <div
        className="!bg-cover flex items-center justify-center py-28"
        style={{
          background:
            'url("pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/first-pemilu-bg.png")',
        }}
      >
        <motion.h5
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: -20 }}
          className="font-bold text-white text-5xl text-center leading-snug h-fit"
        >
          Pemilu 1955, <br />
          <span>Pemilu “Resmi” Pertama Indonesia</span>
        </motion.h5>
      </div>
    </div>
  );
}
