"use client";

import { baseUrl } from "@/constants/meta";
import { motion, type Variants } from "framer-motion";

export function CustomImageSection1() {
  const variants: Variants = {
    pOpen: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: { duration: .4, delay: 0.2 },
    },
    pClose: {
      opacity: 0,
      y: -20,
      x: -20,
      rotate: 1,
      transition: { duration: 1 },
    },
  };
  const flagVariant: Variants = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, delay: 0.3 },
    },
    close: { opacity: 0, x: -20, transition: { duration: 0.3 } },
  };
  const paragraphVariant: Variants = {
    open: {
      opacity: 1,
      y: 20
    },
    close: {
      opacity: 0,
      y: 0
    }
  };

  const carsVariant: Variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0,
        duration: 3
      }
    },
    close: {
      opacity: 0
    }
  }

  const carVariant: Variants = {
    open: {
      opacity: 1,
      y: 20, transition: {
        duration: .5
      }
    },
    close: {
      opacity: 0,
      y: 0
    }
  }

  return (
    <div className="relative">
      CustomImageSection1
    </div>
  );
}
