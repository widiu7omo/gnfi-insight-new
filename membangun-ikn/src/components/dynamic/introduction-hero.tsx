"use client";
import { BlockType } from "@/data/types";
import { ChevronsDownIcon } from "lucide-react";
import { motion } from "framer-motion";
export default function IntroductionHero({ block }: { block: BlockType }) {
  return (
    <div
      className="relative !bg-cover w-full h-screen -top-[150px] -mb-[150px]"
      style={{
        background:
          "url(membangun-ikn-mewujudkan-wacana-lama-indonesia/assets/hero-bg.png)",
      }}
    >
      <div className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/90">
        <div className="h-full flex justify-between max-w-7xl mx-auto py-8 flex-col px-4 xl:px-0">
          <div className="flex-1 flex items-center justify-center">
            <motion.h5
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: -20 }}
              className="text-2xl md:text-3xl lg:text-5xl xl:text-7xl font-bold text-white max-w-[80%] text-center !leading-snug"
            >
              Membangun IKN, Mewujudkan Wacana Lama Indonesia
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
