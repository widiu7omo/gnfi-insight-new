"use client";

import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
import { stagger, useAnimate, useInView, motion } from "framer-motion";
import { useEffect, type ReactElement } from "react";
import parse from "html-react-parser";
import Ornament from "./Ornament";
import { baseUrl } from "@/constants/meta";

export type ParagraphType = {
	children: string | ReactElement;
	className?: string;
	ornamentTopLeft?: string;
	ornamentTopRight?: string;
	ornamentBottomLeft?: string;
	ornamentBottomRight?: string;
	classOrnamentTopLeft?: string;
	classOrnamentTopRight?: string;
	classOrnamentBottomLeft?: string;
	classOrnamentBottomRight?: string;
	containerClassName?: string;
};
export function Paragraph({ block }: { block: BlockType }) {
	const {
		children,
		className,
		containerClassName,
		ornamentTopRight,
		ornamentTopLeft,
		ornamentBottomLeft,
		ornamentBottomRight,
		classOrnamentTopLeft,
		classOrnamentTopRight,
		classOrnamentBottomLeft,
		classOrnamentBottomRight,
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
	return (
		<div className={containerClassName}>
			<div
				className={cn(
					"prose relative z-[40] mx-auto py-8 px-4 xl:px-0",
					className,
				)}
				ref={scope}
			>
				{ornamentTopRight && (
					<Ornament className={cn("top-[-3rem] right-[-2rem]", classOrnamentTopRight)}>
						<motion.img initial={{ opacity: 0, x: 10, y: -10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} src={`${baseUrl}/${ornamentTopRight}`} alt={ornamentTopRight} />
					</Ornament>
				)}
				{ornamentTopLeft && (
					<Ornament className={cn("top-[-2rem] left-[-5rem]", classOrnamentTopLeft)}>
						<motion.img initial={{ opacity: 0, x: 10, y: -10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} src={`${baseUrl}/${ornamentTopLeft}`} alt={ornamentTopLeft} />
					</Ornament>
				)}
				{ornamentBottomLeft && (
					<Ornament className={cn("bottom-[-5rem] left-[-4rem]", classOrnamentBottomLeft)}>
						<img src={`${baseUrl}/${ornamentBottomLeft}`} alt={ornamentBottomLeft} />
					</Ornament>
				)}
				{ornamentBottomRight && (
					<Ornament className={cn("bottom-[-5rem] right-[-4rem]", classOrnamentBottomRight)}>
						<img
							src={`${baseUrl}/${ornamentBottomRight}`}
							alt={ornamentBottomRight}
						/>
					</Ornament>
				)}
				{typeof children === "string" ? parse(children) : children}
			</div>
		</div>
	);
}
