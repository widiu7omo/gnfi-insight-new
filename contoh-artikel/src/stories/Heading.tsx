"use client";
import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import parse from "html-react-parser";
export type HeadingType = {
	content: string;
	className?: string;
};
export function Heading({ block }: { block: BlockType }) {
	const { content, className } = block.componentProps as HeadingType;
	return (
		<motion.div
			viewport={{ once: true }}
			className={cn("prose py-8 px-4 xl:px-0 text-center mx-auto", className)}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			{parse(content)}
		</motion.div>
	);
}
