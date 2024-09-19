"use client";

import Icon from "@/components/reusable/Icon";
import { baseUrl } from "@/constants/meta";
import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type dynamicIconImports from "lucide-react/dynamicIconImports";
import type { ReactNode } from "react";
export type HeroType = {
	coverUrl: string;
	title: string | ReactNode;
	swipeUpIcon: ReactNode;
	gradientColor?: string;
};
export function Hero({ block }: { block: BlockType }) {
	const { coverUrl, title, swipeUpIcon, gradientColor } =
		block.componentProps as HeroType;
	return (
		<div
			className="relative -top-[150px] -mb-[150px] h-screen w-full !bg-cover !bg-[50%_30%] md:bg-center"
			style={{
				background: `url(${baseUrl}/${coverUrl})`,
			}}
		>
			<div className={cn("absolute h-full w-full bg-black/30", gradientColor)}>
				<div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-8 xl:px-0">
					<div className="flex flex-1 items-center justify-center">
						{typeof title === "string" ?
							<motion.h1
								viewport={{ once: true }}
								initial={{ opacity: 0, y: 0 }}
								whileInView={{ opacity: 1, y: -20 }}
								className="max-w-full xl:max-w-[80%] text-center text-4xl font-bold !leading-snug text-white lg:text-5xl xl:text-7xl"
							>
								{title}
							</motion.h1>
							: title
						}

					</div>
					<div className="flex items-center justify-center">
						{typeof swipeUpIcon === "string" ? (
							<Icon
								size={40}
								strokeWidth={1}
								className="animate-bounce text-white"
								name={swipeUpIcon as keyof typeof dynamicIconImports}
							/>
						) : (
							swipeUpIcon
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
