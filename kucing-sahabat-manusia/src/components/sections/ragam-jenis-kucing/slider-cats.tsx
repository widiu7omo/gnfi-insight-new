"use client";
import { cn, uniqueKey } from "@/lib/utils";
import { type PanInfo, motion, useMotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, PawPrintIcon } from "lucide-react";
import { type PropsWithChildren, useRef, useState } from "react";
import CardCat from "./card-cat";
import { indoCats } from "./indonesian-cats";

export default function SliderCats() {
	const constraintsRef = useRef<HTMLDivElement | null>(null);
	const [active, setActive] = useState(0);
	const x = useMotionValue(0);
	const drag = useMotionValue(0);
	const slides = indoCats
		.map((item) => <CardCat cat={item} />)
		.map((item, i) => (
			<SlideItem
				key={`number-card-${
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					i
				}`}
			>
				{item}
			</SlideItem>
		));
	const width = constraintsRef.current?.offsetWidth || 350;
	const dragEndHandler = (
		event: MouseEvent | TouchEvent | PointerEvent,
		info: PanInfo,
	) => {
		// TODO: fix offset
		const offset = info.offset.x;
		if (Math.abs(offset) > 20) {
			const direction = offset < 0 ? 1 : -1;
			setActive((active) => clamp(active + direction, 0, slides.length - 1));
		}
	};
	const SliderIndicator = ({
		totalSlide,
		className,
	}: { totalSlide: number; className?: string }) => {
		return (
			<div className={cn("absolute space-x-2", className)}>
				<button type="button" onClick={() => setActive((prev) => prev - 1)}>
					<ArrowLeft className="text-neutral-600" />
				</button>
				{new Array(totalSlide).fill(0).map((item, i) => (
					<div
						className={`${active === i ? "text-white" : "text-neutral-600"}`}
						key={uniqueKey()}
					>
						<PawPrintIcon />
					</div>
				))}
				<button type="button">
					<ArrowRight className="text-neutral-600" />
				</button>
			</div>
		);
	};
	return (
		<div
			className="relative block h-[650px] xl:h-[600px] w-full overflow-hidden"
			ref={constraintsRef}
		>
			<SliderIndicator
				className="xl:flex hidden right-[4rem]"
				totalSlide={slides.length}
			/>
			<SliderIndicator
				className="flex xl:hidden bottom-0 right-[25%] pb-2"
				totalSlide={slides.length}
			/>
			<motion.div
				className="absolute bottom-0 left-0 right-0 top-0 flex w-full flex-row"
				onDragEnd={dragEndHandler}
				drag="x"
				animate={{
					x: -1 * active * width,
				}}
			>
				{slides}
			</motion.div>
		</div>
	);
}

const SlideItem = ({ children }: PropsWithChildren) => {
	return (
		<div className="flex min-w-[calc(100%)] items-center justify-start">
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
