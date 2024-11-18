"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { BlockType } from "@/data/types";
import parse from "html-react-parser";
import { motion } from 'framer-motion'
import { baseUrl } from "@/constants/meta";
import { BoxReveal } from "./BoxReveal";
export type SectionHeaderType = {
	title?: string;
	coverImage: string;
	customTitle?: ReactNode;
	className?: string;
};
export function SectionHeader({ block }: { block: BlockType }) {
	const { title, coverImage, className, customTitle } =
		block.componentProps as SectionHeaderType;

	return (
		<div
			className={cn(
				"flex h-[600px] items-center justify-center bg-cover bg-center px-4 sm:px-12 xl:px-0",
				className,
			)}
			style={{
				// backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%),url('${baseUrl}/${coverImage}')`,
			}}
		>
			{customTitle ? (
				<motion.div
					viewport={{ once: true }}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					{parse(customTitle as string)}
				</motion.div>
			) : (<div className="max-w-5xl mx-auto">
				<BoxReveal boxColor="#0d192f"
				>
					<div className="text-center text-3xl font-bold !leading-snug lg:text-4xl xl:text-5xl font-sora">{title}</div>
				</BoxReveal>
			</div>
			)}
		</div>
	);
}
