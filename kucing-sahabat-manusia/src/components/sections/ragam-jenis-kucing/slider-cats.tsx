"use client";
import { cn, uniqueKey } from "@/lib/utils";
import { ArrowLeft, ArrowRight, PawPrintIcon } from "lucide-react";
import { type PropsWithChildren, useRef } from "react";
import CardCat from "./card-cat";
import { indoCats } from "./indonesian-cats";
import { useActiveSlide } from "@/store/useSlider";
import Slider from "react-slick";
export default function SliderCats() {
	const constraintsRef = useRef<HTMLDivElement | null>(null);
	const [active, setActive] = useActiveSlide();
	const slickRef = useRef<Slider | null>(null);

	const slides = indoCats
		.map((item) => {
			return <CardCat cat={item} />;
		})
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
	const SliderIndicator = ({
		totalSlide,
		className,
	}: { totalSlide: number; className?: string }) => {
		return (
			<div className={cn("absolute space-x-2", className)}>
				<button type="button" onClick={() => slickRef.current?.slickPrev()}>
					<ArrowLeft className="text-neutral-600" />
				</button>
				{new Array(totalSlide).fill(0).map((item, i) => (
					<button
						type="button"
						onClick={() => slickRef.current?.slickGoTo(i)}
						className={`${active === i ? "text-white" : "text-neutral-600"}`}
						key={uniqueKey()}
					>
						<PawPrintIcon />
					</button>
				))}
				<button type="button">
					<ArrowRight
						className="text-neutral-600"
						onClick={() => slickRef.current?.slickNext()}
					/>
				</button>
			</div>
		);
	};
	return (
		<div className="relative h-full w-full pb-12 " ref={constraintsRef}>
			<SliderIndicator
				className="xl:flex hidden right-[4rem] z-20"
				totalSlide={slides.length}
			/>
			<SliderIndicator
				className="flex xl:hidden bottom-0 right-[25%] pb-2 z-20"
				totalSlide={slides.length}
			/>
			<Slider
				ref={slickRef}
				{...{
					dots: true,
					infinite: false,
					adaptiveHeight: true,
					speed: 500,
					slidesToShow: 1,
					slidesToScroll: 1,
					beforeChange: (_current: number, next: number) => setActive(next),
				}}
				className="bottom-0 left-0 right-0 top-0 flex w-full flex-row"
			>
				{slides}
			</Slider>
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
