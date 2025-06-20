"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export function CustomImageB() {
  const heroRef = useRef(null);
  const cardRef = useRef(null);
  const brandsRef = useRef(null);
  const questionRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const cardInView = useInView(cardRef, { once: true });
  const brandsInView = useInView(brandsRef, { once: true });
  const questionInView = useInView(questionRef, { once: true });

  return (
    <motion.div
      className="relative flex flex-col font-sora items-center overflow-hidden bg-cover"
      style={{ backgroundImage: `url(${baseUrl}/assets/2.1.png)` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-4xl mx-auto h-fit relative">
        <motion.div
          ref={heroRef}
          className="pt-20 flex relative"
          initial={{ opacity: 0, y: 50 }}
          animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={baseUrl + '/assets/2.2.png'}
            alt="Girl on bike"
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.div
            className="absolute lg:w-[60%] right-0 top-[20%]"
            initial={{ opacity: 0, x: 50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h6
              className="text-[3.6rem] leading-[4rem] text-white font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Geliat industri sepeda Indonesia
            </motion.h6>
            <motion.p
              className="text-white text-2xl font-medium mt-4 leading-normal tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Sepeda buatan Indonesia memikat hati penghobi gowes dalam maupun luar negeri.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div
          ref={cardRef}
          className="bg-[#0f4a8c] rounded-xl p-8 max-w-4xl mx-auto absolute -bottom-28 z-10"
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 80, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-3xl text-center leading-snug tracking-wide text-white">Tak hanya soal desain, tapi beberapa jenama antara lain seperti Polygon, Element, Pacific memiliki kualitas komponen berstandar internasional. </p>
        </motion.div>
      </div>
      <motion.div
        ref={brandsRef}
        className="bg-white noise2 w-full flex flex-col items-center justify-center py-32 relative z-0 space-y-10"
        initial={{ opacity: 0 }}
        animate={brandsInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="z-50 relative"
          initial={{ opacity: 0, y: 50 }}
          animate={brandsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={baseUrl + '/assets/2.3.png'} alt="Polygon" />
        </motion.div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={brandsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={brandsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img src={baseUrl + '/assets/2.4.png'} alt="Element" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={brandsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <img src={baseUrl + '/assets/2.5.png'} alt="Pacific" />
          </motion.div>
        </motion.div>
        <motion.div
          ref={questionRef}
          className="text-center py-10 pb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={questionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-4xl font-bold text-[#0f4a8c]">Mana favorit kalian?</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-0 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full invert sm:block"
        />
      </motion.div>
    </motion.div>
  );
}
