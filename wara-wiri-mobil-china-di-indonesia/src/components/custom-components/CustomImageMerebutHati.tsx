"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageMerebutHati() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <div className="flex-col z-10 relative bg-cover bg-no-repeat items-center justify-center w-full">
        <p className="text-4xl max-w-4xl mx-auto py-10 text-center">Custom Component: Merebut Hati</p>
      </div>
    </div>
  );
}
