import {
  AnimationPlaybackControls,
  useAnimate,
  useInView,
} from "framer-motion";
import React, { useEffect } from "react";

export default function Counter({ from, to }: { from: number; to: number }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false });
  useEffect(() => {
    let controls: AnimationPlaybackControls | null = null;
    if (isInView) {
      controls = animate(from, to, {
        duration: 5,
        onUpdate(value) {
          if (scope.current) {
            scope.current.textContent = `${value.toFixed(0)}%`;
          }
        },
        stiffness: 260,
        damping: 10,
        bounce: 20,
        type: "spring",
      });
    }

    return () => controls?.stop();
  }, [from, to, animate, isInView, scope.current]);

  return (
    <div className="text-2xl font-medium  transition-opacity" ref={scope} />
  );
}
