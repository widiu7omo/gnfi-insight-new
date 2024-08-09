'use client'
import { type PanInfo, motion, useMotionValue } from 'framer-motion'
import { type PropsWithChildren, useRef, useState } from 'react'
import { generateSlide } from './step-numbers-sm'

export default function SliderIkn() {
  const constraintsRef = useRef<HTMLDivElement | null>(null)
  const [active, setActive] = useState(0)
  const x = useMotionValue(0)
  const drag = useMotionValue(0)
  const slides = generateSlide().map((item, i) => (
    <SlideItem
      key={`number-card-${
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        i
        }`}
    >
      {item}
    </SlideItem>
  ))
  const width = constraintsRef.current?.offsetWidth || 350
  const dragEndHandler = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    // TODO: fix offset
    const offset = info.offset.x
    if (Math.abs(offset) > 20) {
      const direction = offset < 0 ? 1 : -1
      setActive((active) => clamp(active + direction, 0, slides.length - 1))
    }
  }
  return (
    <div
      className="relative block h-[250px] w-full  overflow-hidden bg-neutral-700 md:hidden"
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
  )
}

const SlideItem = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-w-[calc(100%-40px)] items-center justify-center">
      {children}
    </div>
  )
}
function clamp(value: number, lower: number, upper: number): number {
  if (value < lower) {
    return lower
  }
  if (value > upper) {
    return upper
  }
  return value
}
