"use client";
import { baseUrl } from "@/constants/meta";
// TODO: add motion
import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export type ImageType = {
	imageUrl: string;
	imageAlt: string;
	className?: string;
	imgClassName?: string;
	overlayClassName?: string;
};
export function Image({ block }: { block: BlockType }) {
	const { imageUrl, imageAlt, className, imgClassName, overlayClassName } =
		block.componentProps as ImageType;
	return (
		<div
			className={cn(
				"w-full h-full max-w-[65ch] mx-auto bg-cover px-4 lg:px-0 relative",
				className,
			)}
		>
			{!!overlayClassName && <div className={cn("absolute z-10 top-0 left-0 right-0 bottom-0", overlayClassName)} />}
			<div className="flex items-center justify-center">
				<motion.img
					initial={{ y: 20, opacity: 0 }}
					transition={{ delay: 0.3 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					src={baseUrl + imageUrl}
					alt={imageAlt ?? "unknown"}
					className={cn("w-full", imgClassName)}
				/>
			</div>
		</div>
	);
}
