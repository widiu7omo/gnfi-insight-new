"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageSection2() {
  const simpleFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative flex flex-col items-center overflow-hidden bg-cover">
      CustomImageSection2
    </div>
  );
}