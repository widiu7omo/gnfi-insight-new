"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

export function SectionFiveCustomImage() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section>
      <div className="relative w-full">
        {" "}
        {/* Background Image */}
        <motion.img
          src={`${baseUrl}/assets/11.7.png`}
          width={1079}
          height={601}
          alt="Background Cows"
          className="w-full h-full object-cover object-center"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {/* Gradient Overlay */}
        <motion.div
          className="absolute bg-gradient-to-b from-black/10 to-[#000] z-0 left-0 right-0 top-0 bottom-0 p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {/* Main Title */}
        <motion.div
          className="bg-[#B58F47] z-0 absolute text-3xl top-28 left-14 text-white p-2 rounded-lg font-bold"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Susu (dan Makan Siang) Gratis
        </motion.div>
        {/* Description */}
        <motion.div
          className="z-0 absolute text-xl top-28 right-8 text-white p-2 rounded-lg w-96"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Calon Presiden dan Wakil Presiden terpilih, Prabowo Subianto dan
          Gibran Rakabuming, punya program pemberian makanan dan susu gratis.
        </motion.div>
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="w-full text-8xl font-bold text-white absolute top-48 left-10 -translate-x-1/2 -translate-y-1/2"
        >
          Akankah <br />
          Terealisasi?
        </motion.h2>
        {/* Program Target */}
        <motion.div
          className="z-0 absolute text-xl top-72 bg-[#FFC949] right-14 text-black p-2 rounded-lg w-52"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Sasaran program:
          <span className="font-bold text-4xl">
            <br />
            82.9 Juta
            <br />
          </span>
          orang
          <br />
          yang terdiri dari anak-anak usia dini, murid SD, SMP, SMA/SMK, santri,
          hingga ibu hamil.
        </motion.div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col sm:flex-row items-center mx-auto max-w-6xl mt-5">
        <div className="w-full">
          <div className="relative flex items-end justify-center gap-x-10">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1, duration: 1, ease: "easeOut" }}
              src={`${baseUrl}/assets/11.5.png`}
              alt="Eclipse"
              className="w-2/5 sm:w-1/4 h-full"
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ delay: 1.5, duration: 1, ease: "easeOut" }}
              src={`${baseUrl}/assets/11.6.png`}
              alt="Susu"
              className="w-1/2 sm:w-1/4 h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
