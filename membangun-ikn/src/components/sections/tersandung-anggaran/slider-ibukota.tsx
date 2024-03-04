"use client";
import { PanInfo, motion, useMotionValue } from "framer-motion";
import { PropsWithChildren, useRef, useState } from "react";
const generateSlide = () => {
  return [
    {
      image: "/assets/section6/sukarno-square.png",
      title: "Palangkaraya",
      desc: "Wacana pada era Orde Lama saat Palangkaraya dibangun pada 1957",
    },
    {
      image: "/assets/section6/suharto-square.png",
      title: "Jonggol",
      desc: "Ingin dikembangkan sebagai kota mandiri, namun tak terwujud hingga Orde Baru tumbang pada Mei 1988",
    },
    {
      image: "/assets/section6/sby-square.png",
      title: "Jawa Barat",
      desc: "Presiden Susilo Bambang Yudhoyono mulai mewacanakan perpindahan ibu kota sejak 2009, namun tak terwujud karena tersandung anggaran",
    },
  ];
};
const Card = ({
  title,
  image,
  desc,
}: {
  title: string;
  image: string;
  desc: string;
}) => {
  return (
    <div className="space-y-2 px-4">
      <img src={image} alt={title} className="h-[150px] object-cover" />
      <div>
        <div className="text-2xl font-bold text-white">{title}</div>
        <div className="leading-6 text-neutral-900">{desc}</div>
      </div>
    </div>
  );
};
export default function SliderIbukota() {
  const constraintsRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const x = useMotionValue(0);
  const drag = useMotionValue(0);
  const slides = generateSlide().map((item, i) => (
    <SlideItem
      key={`number-card-${
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        i
      }`}
    >
      <Card title={item.title} desc={item.desc} image={item.image} />
    </SlideItem>
  ));
  const width = constraintsRef.current?.offsetWidth || 350;
  const dragEndHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // TODO: fix offset
    const offset = info.offset.x;
    if (Math.abs(offset) > 20) {
      const direction = offset < 0 ? 1 : -1;
      setActive((active) => clamp(active + direction, 0, slides.length - 1));
    }
  };
  return (
    <div
      className="relative block h-[300px] w-full overflow-hidden md:hidden"
      ref={constraintsRef}
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-row"
        onDragEnd={dragEndHandler}
        drag="x"
        animate={{
          x: -1 * active * (width - 40),
        }}
      >
        {slides}
      </motion.div>
    </div>
  );
}

const SlideItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-w-[calc(100%-40px)] items-center justify-center">
      {children}
    </div>
  );
};
function clamp(value: number, lower: number, upper: number): number {
  if (value < lower) {
    return lower;
  }
  if (value > upper) {
    return upper;
  }
  return value;
}
