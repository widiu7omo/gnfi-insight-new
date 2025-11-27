"use client";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * CustomImageA component - Responsive hero section for Jakarta-Surabaya high-speed train article
 * Features responsive design with mobile-first approach and optimized layouts for different screen sizes
 */
export function CustomImageA() {
  // Refs for scroll animations
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef(null);
  const infoBoxRef = useRef<HTMLDivElement | null>(null);

  // InView states for animations
  const heroInView = useInView(heroRef, { once: true });
  const titleInView = useInView(titleRef, { once: true });
  const infoBoxInView = useInView(infoBoxRef, { once: true });

  // Parallax for the large background image section
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  return (<motion.div
    ref={heroRef}
    className="relative overflow-clip font-sora bg-[#ffffff] pt-6 sm:pt-10 md:pt-20"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <div className="absolute inset-0 bg-no-repeat z-40 opacity-15 bg-cover" style={{ backgroundImage: `url(${'/assets/manis-bisnis-es-krim-di-indonesia/1.0.png'})` }}></div>
    <div className="absolute h-80 z-40 bg-linear-to-b from-neutral-50 top-0 w-full"></div>
    <div className="max-w-4xl mx-auto w-full relative px-4 sm:px-6 md:px-8 lg:px-0 z-40">
      <motion.div
        ref={titleRef}
        className="max-w-xl mx-auto w-full space-y-3 sm:space-y-4 md:space-y-5 py-6 sm:py-10 md:py-20 relative z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl text-[#f25a91] text-center md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight sm:leading-tight md:leading-snug"
          initial={{ opacity: 0, y: -15 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Es Krim Masuk ke Indonesia
        </motion.h1>
        <motion.p
          className="text-sm sm:text-base text-[#1410ff] text-center md:text-lg leading-relaxed! md:leading-loose!"
          initial={{ opacity: 0, y: 15 }}
          animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Panganan es krim sendiri dibawa pendatang Eropa pada zaman kolonialisme Belanda sekitar abad awal abad ke-20.
        </motion.p>
      </motion.div>
    </div>
    <motion.div
      className="relative max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.img
        src={'/assets/manis-bisnis-es-krim-di-indonesia/1.1.png'}
        alt="People with ice cream"
        className="h-full"
        initial={{ filter: "blur(6px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.1 }}
      />
    </motion.div>
    <div className="relative" ref={infoBoxRef}>
      <motion.img
        src={'/assets/manis-bisnis-es-krim-di-indonesia/1.2.png'}
        alt="Background pink"
        className="w-full -mt-[35%] sm:-mt-[26%] md:-mt-[20%] xl:-mt-[12%] relative z-0 md:h-200 xl:h-280 object-cover object-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <div className="absolute inset-0 flex items-end justify-end md:justify-center">
        <div className="max-w-full sm:max-w-4xl md:mx-auto xl:w-auto w-full px-4 sm:px-6 md:px-8 lg:px-0 relative">
          <motion.div
            className="bg-[#1410ff] w-[280px] md:w-[350px] pr-4 md:pr-8 py-6 md:py-10 pl-12 xl:pl-20 text-white absolute bottom-0 xl:bottom-40 right-0 xl:-right-16 h-fit z-0"
            initial={{ opacity: 0, x: 40 }}
            animate={infoBoxInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <p className="text-sm xs:text-sm sm:text-lg xl:text-xl font-medium">
              Dibukanya peternakan sapi perah di beberapa daerah sejuk
              di Indonesia contohnya Bogor, Bandung, dan Malang turut berperan menghadirkan si dingin nan manis ini
              di meja penikmatnya.
            </p>
          </motion.div>
          <motion.img
            src={'/assets/manis-bisnis-es-krim-di-indonesia/1.3.png'}
            alt="Ice Cream"
            className="bottom-0 -left-20 md:left-0 h-80 xs:h-112 sm:h-128 md:h-200 xl:h-auto relative z-10"
            initial={{ opacity: 0, x: -40, rotate: -2 }}
            animate={infoBoxInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -6, rotate: -1 }}
          />
        </div>
      </div>
    </div>

    <motion.div
      className="absolute bottom-0 pt-3 sm:pt-5 md:pt-8 lg:pt-10 z-50 left-0 right-0 mx-auto max-w-4xl px-3 sm:px-4 md:px-6 lg:px-0"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
    >
      <motion.img
        src={`/assets/manis-bisnis-es-krim-di-indonesia/footer.png`}
        className="z-50 mx-auto hidden w-full sm:block filter-[brightness(0)_saturate(100%)_invert(15%)_sepia(89%)_saturate(6127%)_hue-rotate(357deg)_brightness(86%)_contrast(112%)]"
        alt="Footer decoration"
        initial={{ filter: "blur(4px)" }}
        animate={{ filter: "blur(0px)" }}
        transition={{ duration: 0.8, delay: 0.8 }}
      ></motion.img>
    </motion.div>
  </motion.div>
  );
}
