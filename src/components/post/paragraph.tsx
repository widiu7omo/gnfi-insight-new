import { cn } from "@/lib/utils";
import { stagger, useAnimate, useInView, motion } from "motion/react";
import { useEffect, type ReactElement } from "react";
import parse from "html-react-parser";
import Ornament from "./ornament";

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
export function Paragraph(props: ParagraphType) {
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
	} = props;
	const [scope, animate] = useAnimate<HTMLDivElement>();
	const isInView = useInView(scope, { once: true });
	useEffect(() => {
		if (isInView && scope.current.childNodes.length > 0) {
			animate(
				"p",
				{ opacity: 1, y: 0 },
				{ delay: stagger(0.1, { startDelay: 0.15 }), duration: 0.3 },
			);
		} else {
			if (scope.current.childNodes.length > 0)
			animate("p", { opacity: 0, y: 20 });
		}
	}, [isInView, animate]);
	return (
		<div className={containerClassName}>
			<div
				className={cn(
					"prose relative z-40 mx-auto py-8 px-4 xl:px-0",
					className,
				)}
				ref={scope}
			>
				{ornamentTopRight && (
					<Ornament className={cn("-top-12 -right-8", classOrnamentTopRight)}>
						<motion.img initial={{ opacity: 0, x: 10, y: -10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} src={`${ornamentTopRight}`} alt={ornamentTopRight} />
					</Ornament>
				)}
				{ornamentTopLeft && (
					<Ornament className={cn("-top-8 -left-20", classOrnamentTopLeft)}>
						<motion.img initial={{ opacity: 0, x: 10, y: -10 }} whileInView={{ opacity: 1, x: 0, y: 0 }} src={`${ornamentTopLeft}`} alt={ornamentTopLeft} />
					</Ornament>
				)}
				{ornamentBottomLeft && (
					<Ornament className={cn("-bottom-20 -left-16", classOrnamentBottomLeft)}>
						<img src={`${ornamentBottomLeft}`} alt={ornamentBottomLeft} />
					</Ornament>
				)}
				{ornamentBottomRight && (
					<Ornament className={cn("-bottom-20 -right-16", classOrnamentBottomRight)}>
						<img
							src={`${ornamentBottomRight}`}
							alt={ornamentBottomRight}
						/>
					</Ornament>
				)}
				{typeof children === "string" ? parse(children) : children}
			</div>
		</div>
	);
}
