import type { BlockType } from "@/data/types";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
export type SectionGroupType = {
	children: ReactNode;
	className?: string;
	sectionId: string;
};
export default function SectionGroup({ block }: { block: BlockType }) {
	const { children, className, sectionId } =
		block.componentProps as SectionGroupType;
	return (
		<section id={sectionId} className={cn("max-w-full", className)}>
			{children}
		</section>
	);
}
