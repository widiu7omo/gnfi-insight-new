"use client";
import { BlockType } from "@/data/types";
import parse from "html-react-parser";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
export default function Content({ block }: { block: BlockType }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

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
  }, [isInView]);
  return (
    <div ref={scope} className="prose text-left z-20 py-4">
      {parse(block.content)}
    </div>
  );
}
