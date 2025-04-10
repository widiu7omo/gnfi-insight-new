"use client";

import { baseUrl } from "@/constants/meta";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  animate,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";

const AnimatedCounter = ({ target }: { target: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, target, {
      duration: 1.5,
      ease: "easeOut",
    });

    const unsubscribe = rounded.on("change", (v) => {
      setDisplay(v);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [isInView, target]);
  return (
    <p
      ref={ref}
      className="text-center font-sora text-[40px] font-bold text-[#E97401] xs:text-5xl md:text-7xl"
    >
      {display}
    </p>
  );
};

export function CustomImageC() {
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-center pb-10 pt-16 md:pb-16 md:pt-20"
        style={{ backgroundImage: `url(${baseUrl}/assets/3.1.png)` }}
      >
        <div className="absolute left-0 top-0 h-[30%] w-full bg-gradient-to-b from-[#272727]" />
        <div className="z-1 relative mx-auto max-w-4xl items-center px-4 lg:px-0">
          <div className="w-full md:w-1/2">
            <motion.h3
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-left font-sora text-[1.75rem] font-bold leading-normal text-white md:text-[48px] lg:text-[64px]"
            >
              Ada Berapa Ragam Soto di Indonesia?
            </motion.h3>
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.6 }}
              className="mx-auto mb-4 w-full max-w-2xl text-left font-sora text-xl font-semibold text-white md:mb-6 md:text-3xl"
            >
              Inovasi dari tiap-tiap daerah di Indonesia memunculkan <br />
              <span className="rounded-full bg-[#E97401] px-4">
                ragam soto khas,{" "}
              </span>
              <br />
              Tercatat ada:
            </motion.p>
          </div>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.2.png`}
            alt="Soto"
            className="relative z-10 -mt-[10%] h-auto w-full md:ml-8"
          />
          <div className="mx-auto mt-[30%] flex w-full max-w-4xl flex-col items-center justify-center space-y-14 xs:mt-4 xs:flex-row xs:space-x-4 xs:space-y-0 sm:space-x-10 md:space-x-16">
            <div className="relative size-36 overflow-visible rounded-xl bg-[#E3E3E3] xs:size-48">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/3.3.png`}
                alt="Notes"
                className="absolute inset-x-0 -top-16 z-20 mx-auto h-auto w-20"
              />
              <div className="absolute bottom-0 flex h-3/4 w-full flex-col items-center justify-center px-10">
                <AnimatedCounter target={49} />
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="-mt-2 text-center font-sora text-lg font-semibold leading-tight text-[#282828] xs:mt-0 xs:text-2xl"
                >
                  resep soto
                </motion.p>
              </div>
            </div>
            <div className="relative size-36 overflow-visible rounded-xl bg-[#E3E3E3] xs:size-48">
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/3.4.png`}
                alt="Soto"
                className="absolute inset-x-0 -top-12 z-20 mx-auto h-auto w-20"
              />
              <div className="absolute bottom-0 flex h-3/4 w-full flex-col items-center justify-center px-10">
                <AnimatedCounter target={75} />
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="-mt-2 text-center font-sora text-lg font-semibold leading-tight text-[#282828] xs:mt-0 xs:text-2xl"
                >
                  jenis soto
                </motion.p>
              </div>
            </div>
            <div className="relative size-36 overflow-visible rounded-xl bg-[#E3E3E3] xs:size-48">
              <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl"></div>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                src={`${baseUrl}/assets/3.5.png`}
                alt="Bendera"
                className="absolute inset-x-0 -top-8 z-20 mx-auto h-auto w-20"
              />
              <div className="absolute bottom-0 flex h-3/4 w-full flex-col items-center justify-center">
                <AnimatedCounter target={22} />
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  className="-mt-2 text-center font-sora text-lg font-semibold leading-tight text-[#282828] xs:mt-0 xs:text-2xl"
                >
                  daerah kuliner di Indonesia
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex w-full flex-col justify-center bg-[#0a0000] bg-cover bg-center px-0 text-center md:flex-row">
        <div className="relative w-full md:w-1/2">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.6.png`}
            alt="Soto"
            className="h-[10rem] w-full object-cover md:h-[14rem] lg:h-[20rem]"
          />
          <div className="absolute bottom-0 left-0 h-[30%] w-full bg-gradient-to-t from-[#0A0000] md:hidden" />
        </div>
        <div className="relative w-full md:w-1/2">
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut" }}
            src={`${baseUrl}/assets/3.7.png`}
            alt="Peta Indonesia"
            className="h-[10rem] w-full object-cover md:h-[14rem] lg:h-[20rem]"
          />
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="absolute inset-0 mt-0 flex w-full items-center px-4 text-left md:-mt-10 md:max-w-[400px] md:px-0"
          >
            <motion.p className="font-sera text-xl text-white drop-shadow-lg md:text-2xl lg:text-3xl">
              Dari 75 resep soto tersebut,{" "}
              <span className="font-semibold text-[#FFA44B] lg:font-bold">
                61 varietas
              </span>{" "}
              terdapat di seluruh{" "}
              <span className="font-semibold text-[#FFA44B] lg:font-bold">
                Jawa
              </span>
              , sisanya ada di luar Pulau Jawa
            </motion.p>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 z-50 mx-auto max-w-4xl">
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </div>
    </div>
  );
}
