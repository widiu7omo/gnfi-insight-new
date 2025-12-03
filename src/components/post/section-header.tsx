import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import parse from "html-react-parser";
import { motion } from 'motion/react'
import { BoxReveal } from "./box-reveal";
export type SectionHeaderType = {
	title?: string;
	coverImage: string;
	customTitle?: ReactNode;
	className?: string;
	reveal?: boolean;
	linearGradient?: string;
};
export function SectionHeader(props: SectionHeaderType) {
	const { title, coverImage, className, customTitle, reveal, linearGradient } = props
	return (
		<div
			className={cn(
				"flex h-[600px] items-center justify-center bg-cover bg-center px-4 md:px-0",
				className,
			)}
			style={{
				backgroundImage: coverImage ? `${linearGradient ?? 'linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.2) 100%)'},url('${coverImage}')` : undefined,
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
				{reveal ? <BoxReveal boxColor="#0d192f">
					<div className="text-center text-3xl font-bold leading-snug! lg:text-4xl xl:text-5xl font-sora">{parse(title as string)}</div>
				</BoxReveal> : <motion.h2
					viewport={{ once: true }}
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
							className="text-center text-inherit text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug">
					{title}
					</motion.h2>}
				</div>
			)}
		</div>
	);
}
