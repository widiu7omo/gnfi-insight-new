import React from "react";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionHeaderProps = {
	title?: string;
	coverImage: string;
	customTitle?: ReactNode;
	className?: string;
};
export function SectionHeader({
	title,
	coverImage,
	className,
	customTitle,
}: SectionHeaderProps) {
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
				customTitle
			) : (
				<h2 className="max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl">
					{title}
				</h2>
			)}
		</div>
	);
}
