"use client";
import { useEffect } from "react";
import StepItem from "./step-item";
import { stagger, useAnimate, useInView } from "framer-motion";
export default function Steps() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      animate(
        "div",
        { opacity: 1, y: 0 },
        { delay: stagger(0.1, { startDelay: 0.15 }), duration: 0.3 }
      );
    } else {
      animate("div", { opacity: 0, y: 20 });
    }
  }, [isInView, animate]);
  return (
    <div
      className="flex flex-col items-center justify-center py-12"
      ref={scope}
    >
      <StepItem
        withRightOrnament
        imageSource={"/assets/yogya.png"}
        title={"Yogyakarta"}
        desc={"Januari 1946-Desember 1949"}
      />
      <StepItem
        imageSource={"/assets/bukittinggi.png"}
        title={"Bukittinggi"}
        desc={
          "Desember 1848-Juni 1949 \n *(Ibu Kota Pemerintahan Darurat Republik Indonesia)"
        }
      />
      <StepItem
        withLeftOrnament
        imageSource={"/assets/bireuen.png"}
        title={"Bireuen"}
        desc={
          "Konon, Bireuen pernah menjadi ibu kota selama sepekean pada Juni 1948. Namun hal ini tidak tercatat \n dalam buku sejarah sehingga \n perlu diteliti lebih lanjut"
        }
      />
    </div>
  );
}
