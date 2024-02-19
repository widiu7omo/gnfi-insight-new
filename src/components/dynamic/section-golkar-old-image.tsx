"use client";
import { motion } from "framer-motion";
export default function SectionGolkarOldImage() {
  return (
    <div className="py-8 w-full relative h-[650px] max-w-7xl mx-auto">
      <div className="absolute z-10 top-[200px] flex items-center justify-center w-full ">
        <motion.img
          initial={{
            rotate: 0,
            opacity: 0,
            z: -10,
            scale: 0.8,
          }}
          viewport={{ once: true }}
          whileInView={{
            rotate: 1,
            opacity: 1,
            z: 0,
            scale: 1,
          }}
          transition={{ delay: 0.5 }}
          className="px-16 h-[600px] -mt-[180px] rotate-1"
          src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/arsip.jogjaprov.go.id.jpg"
          alt="Jogja Arsip"
        />
      </div>
    </div>
  );
}
