"use client";
import type React from "react";
import { motion } from "framer-motion";
const ImageAnimation = ({
  children,
  start,
  className,
}: {
  children: React.ReactNode;
  start: "left" | "right";
  className?: string;
}) => {
  const x = start === "left" ? -50 : 50;
  return (
    <motion.div
      initial={{ opacity: 0, x: x }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ImageAnimation;
