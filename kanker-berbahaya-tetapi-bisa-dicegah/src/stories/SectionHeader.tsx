"use client";

import React from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import type { BlockType } from "@/data/types";
import parse from "html-react-parser";
import { motion } from 'framer-motion'
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
				backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%),url(${coverImage})`,
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
					className="max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl">
					{title}
				</motion.h2>
			)}
		</div>
	);
}
