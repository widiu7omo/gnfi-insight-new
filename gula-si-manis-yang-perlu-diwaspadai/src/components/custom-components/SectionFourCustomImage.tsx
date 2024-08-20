"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform } from "framer-motion";

export function SectionFourCustomImage() {
  return (
    <section>
      <div className="relative w-full h-[500px] bg-cover bg-center flex items-center justify-center" style={{ backgroundImage: `url(${baseUrl}/assets/header-image.png)` }}>
        <motion.p initial={{ opacity: 0, y: 20 }} viewport={{ once: true }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-3xl font-bold text-center lg:text-4xl xl:text-5xl">
          Hati-hati, <br /> Jangan Berlebihan <br /> Mengonsumsi Gula!
        </motion.p>
      </div>
    </section>
  );
}
