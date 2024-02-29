"use client";

import { stagger, useAnimate, useInView } from "framer-motion";
import { PropsWithChildren, useEffect } from "react";

export default function Paragraph({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
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
    <div className={`prose mx-auto z-[5] relative ${className}`} ref={scope}>
      {children}
    </div>
  );
}
