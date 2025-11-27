import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { ChevronsDown } from "lucide-react";

type AnimatedTitleProps = {
	text: string;
	className?: string;
};

function AnimatedTitle({ text, className }: AnimatedTitleProps) {
	const words = text.split(" ");

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.12,
			},
		},
	};

	const wordVariants = {
		hidden: {
			opacity: 0,
			filter: "blur(10px)",
			y: 20,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
			},
		},
	};

	return (
		<motion.h1
			className={className}
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
		>
			{words.map((word, index) => (
				<motion.span
					key={`${word}-${index}`}
					variants={wordVariants}
					className="inline-block mr-[0.25em]"
				>
					{word}
				</motion.span>
			))}
		</motion.h1>
	);
}

export type HeroType = {
	coverUrl: string;
	title: string | ReactNode;
	swipeUpIcon: ReactNode;
	gradientColor?: string;
};

export function Hero(props: HeroType) {
	const { coverUrl, title, swipeUpIcon, gradientColor } = props;
	return (
		<div
			className="relative -top-[150px] -mb-[150px] h-screen w-full bg-cover! bg-position-[50%_30%]! md:bg-center"
			style={{
				background: `url(${coverUrl})`,
			}}
		>
			<div className={cn("absolute h-full w-full bg-black/30", gradientColor)}>
				<div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-8 xl:px-0">
					<div className="flex flex-1 items-center justify-center">
						{typeof title === "string" ? (
							<AnimatedTitle
								text={title}
								className="max-w-full xl:max-w-[80%] text-center text-4xl font-bold leading-snug! text-white lg:text-5xl xl:text-7xl"
							/>
						) : (
							title
						)}
					</div>
					<div className="flex items-center justify-center">
						<ChevronsDown className="animate-bounce text-white" />
					</div>
				</div>
			</div>
		</div>
	);
}
