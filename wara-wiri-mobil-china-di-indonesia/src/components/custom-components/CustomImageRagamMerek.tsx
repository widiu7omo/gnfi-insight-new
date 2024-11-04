"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function CustomImageRagamMerek() {
  const variants = {
    pOpen: {
      opacity: 1, y: 0, transition: {
        staggerChildren: 0.2,
      },
    },
    pClose: { opacity: 0, y: 5 },
  }
  const childVariants = {
    pOpen: {
      opacity: 1, x: 0, transition: { duration: .3 }
    },
    pClose: { opacity: 0, x: -5, transition: { duration: .3 } },
  }

  return (
    <section id="section-1" className="bg-[#fffcf3] -mt-1 overflow-clip">
      <div className="relative flex items-start justify-center">
        <div
          className="w-full bg-no-repeat bg-[cover,contain] xl:bg-[cover,auto] bg-[center_top] relative bg-blend-multiply"
          style={{ backgroundImage: `url('${baseUrl}/assets/1.0.png')` }}
        >
          <div className="absolute top-0 h-[10%] bg-gradient-to-b from-[#cec5be] left-0 right-0" />
          <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b to-[#cec5be] from-[#cec5be]/40 md:hidden" />

          <div className="absolute top-0 left-0 w-full from-[80%] h-full bg-gradient-to-b from-[#090d16]/0 to-[#fffcf3]" />
        </div>
      </div>
    </section>
  );
}
