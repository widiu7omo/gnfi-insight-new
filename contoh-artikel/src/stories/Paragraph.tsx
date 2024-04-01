"use client";

import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
import { stagger, useAnimate, useInView } from "framer-motion";
import { useEffect, type ReactElement } from "react";
import parse from "html-react-parser";
import Ornament from "./Ornament";

export type ParagraphType = {
	children: string | ReactElement;
	className?: string;
	ornamentTopLeft?: string;
	ornamentTopRight?: string;
	ornamentBottomLeft?: string;
	ornamentBottomRight?: string;
};
export function Paragraph({ block }: { block: BlockType }) {
	const {
		children,
		className,
		ornamentTopRight,
		ornamentTopLeft,
		ornamentBottomLeft,
		ornamentBottomRight,
	} = block.componentProps as ParagraphType;
	const [scope, animate] = useAnimate();
	const isInView = useInView(scope, { once: true });
	useEffect(() => {
		if (isInView) {
			animate(
				"p",
				{ opacity: 1, y: 0 },
				{ delay: stagger(0.1, { startDelay: 0.15 }), duration: 0.3 },
			);
		} else {
			animate("p", { opacity: 0, y: 20 });
		}
	}, [isInView, animate]);
	console.log(ornamentTopRight);
	return (
		<div
			className={cn(
				"prose relative z-[40] mx-auto py-8 px-4 xl:px-0",
				className,
			)}
			ref={scope}
		>
			{ornamentTopRight && (
				<Ornament className="top-[-3rem] right-[-2rem]">
					<img src={ornamentTopRight} alt={ornamentTopRight} />
				</Ornament>
			)}
			{ornamentTopLeft && (
				<Ornament className="top-[-2rem] left-[-5rem]">
					<img src={ornamentTopLeft} alt={ornamentTopLeft} />
				</Ornament>
			)}
			{ornamentBottomLeft && (
				<Ornament className="bottom-[-5rem] right-[-4rem]">
					<img src={ornamentBottomLeft} alt={ornamentBottomLeft} />
				</Ornament>
			)}
			{ornamentBottomRight && (
				<Ornament className="bottom-[-5rem] left-[-4rem]">
					<img
						src={ornamentBottomRight}
						alt={ornamentBottomRight}
					/>
				</Ornament>
			)}
			{typeof children === "string" ? parse(children) : children}
		</div>
	);
}
