"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageMobilListrik() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="relative bg-cover flex flex-col"
    >
      <div className="flex flex-col z-10 relative bg-cover bg-no-repeat">
        <p className="text-4xl max-w-4xl mx-auto py-10">Custom Component: Mobil Listrik</p>
      </div>
    </section>
  );
}
