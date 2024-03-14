import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
type HeroType = {
	coverUrl: string;
	title: string | ReactNode;
	swipeUpIcon: ReactNode;
	gradientColor?: string;
};
export function Hero({
	coverUrl,
	title,
	swipeUpIcon,
	gradientColor,
}: HeroType) {
	return (
		<div
			className="relative -top-[150px] -mb-[150px] h-screen w-full !bg-cover !bg-[50%_30%] md:bg-center"
			style={{
				background: `url(${coverUrl})`,
			}}
		>
			<div className={cn("absolute h-full w-full bg-black/30", gradientColor)}>
				<div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-8 xl:px-0">
					<div className="flex flex-1 items-center justify-center">
						<motion.h1
							viewport={{ once: true }}
							initial={{ opacity: 0, y: 0 }}
							whileInView={{ opacity: 1, y: -20 }}
							className="max-w-full xl:max-w-[80%] text-center text-4xl font-bold !leading-snug text-white lg:text-5xl xl:text-7xl"
						>
							{title}
						</motion.h1>
					</div>
					<div className="flex items-center justify-center">{swipeUpIcon}</div>
				</div>
			</div>
		</div>
	);
}
