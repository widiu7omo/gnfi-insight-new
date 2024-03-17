"use client";
// TODO: add motion
import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
export type ImageType = {
	imageUrl: string;
	imageAlt: string;
	className?: string;
};
export function Image({ block }: { block: BlockType }) {
	const { imageUrl, imageAlt, className } = block.componentProps as ImageType;
	return (
		<div
			className={cn(
				"w-full h-full max-w-[65ch] mx-auto bg-cover px-4 lg:px-0",
				className,
			)}
		>
			<div className="flex items-center justify-center">
				<img src={imageUrl} alt={imageAlt ?? "unknown"} className="w-full" />
			</div>
		</div>
	);
}
