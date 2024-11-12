"use client";
import { baseUrl } from "@/constants/meta";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";

export function CustomImageSection3() {
  const ref = useRef(null);
  const paragraphVariant: Variants = {
    open: {
      opacity: 1,
      y: 0,
    },
    close: {
      opacity: 0,
      y: -20,
    },
  };
  return (
    <div
      className="flex flex-col text-center overflow-clip "
      ref={ref}
    >
      CustomImageSection3
    </div>
  );
}
