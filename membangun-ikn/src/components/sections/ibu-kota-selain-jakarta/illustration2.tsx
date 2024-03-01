"use client";
import YelloArrow from "@/components/reusable/yellow-arrow";
import { useAnimate, useInView, stagger } from "framer-motion";
import { useEffect } from "react";

export default function Illustration2() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      animate(
        "p",
        { opacity: 1, y: 0 },
        { delay: stagger(0.1, { startDelay: 0.15 }), duration: 0.3 }
      );
    } else {
      animate("p", { opacity: 0, y: 20 });
    }
  }, [isInView, animate]);
  return (
    <div className=" bg-neutral-800 relative w-full">
      <div className="absolute top-0 w-full flex items-center justify-start flex-col ">
        <YelloArrow className="" />
      </div>
      <div
        ref={scope}
        className="text-white pt-16 pb-12 text-center text-2xl font-light leading-snug"
      >
        <p className="font-bold">Saat baru merdeka,</p>
        <p>pemerintah memindahkan ibu kota</p>
        <p>ke kota berikut ini karena situasi yang tidak kondusif</p>
        <p>akibat agresi militer Belanda:</p>
      </div>
    </div>
  );
}
