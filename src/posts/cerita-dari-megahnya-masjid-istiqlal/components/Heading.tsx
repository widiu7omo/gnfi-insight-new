"use client";
import { useAnimation, useInView, motion } from "motion/react";
import type React from "react";
import { useEffect, useRef } from "react";
interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  color: string;
}
const Heading: React.FC<HeadingProps> = ({ className, children, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView, mainControl, slideControl]);
  return (
    <div
      ref={ref}
      style={{ position: "relative", width: "fit-content", overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControl}
        transition={{ duration: 0.5, delay: 0.25 }}
        className={`font-serif py-5 ${className}`}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: color,
          zIndex: 50,
        }}
      />
    </div>
  );
};

export default Heading;
