"use client";
import { BlockType } from "@/data/types";
import { ChevronsDownIcon } from "lucide-react";
import { motion, useScroll } from "framer-motion";
export default function IntroductionHero({ block }: { block: BlockType }) {
  const { scrollYProgress } = useScroll();
  return (
    <div
      className="w-full h-screen relative !bg-cover"
      style={{
        background: `url(pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/tangerangkota.go.id.jpeg)`,
      }}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/90">
        <div className="h-full flex justify-between max-w-7xl mx-auto py-8 flex-col">
          <div className="flex justify-between">
            <div className="text-xl font-bold">{""}</div>
            <img
              src="assets/logo_gnfi_white.png"
              alt="Logo GNFI"
              className="w-[80px]"
            />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <motion.h5
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -20 }}
              className="text-7xl font-bold text-white max-w-[80%] text-center leading-snug"
            >
              Pemilu dan Dinamikanya dari Masa ke Masa
            </motion.h5>
          </div>
          <div className="flex items-center justify-center">
            <ChevronsDownIcon size={40} className="text-white animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
