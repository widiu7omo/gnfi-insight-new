"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { BlockType } from "@/data/types";
import parse from "html-react-parser";
import { motion } from 'framer-motion'
import { baseUrl } from "@/constants/meta";
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
				"flex h-[600px] items-center justify-center bg-cover bg-center",
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
			) : (
				<motion.h2
					viewport={{ once: true }}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
					className="max-w-5xl text-center text-inherit text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug">
					{title}
				</motion.h2>
			)}
		</div>
	);
}
