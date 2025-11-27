import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import parse from "html-react-parser";
export type HeadingType = {
	content: string;
	className?: string;
	containerClassName?: string;
};
export function Heading(props: HeadingType) {
	const { content, className, containerClassName } = props;
	return (
		<div className={cn(containerClassName)}>
			<motion.div
				className={cn("prose py-8 px-4 xl:px-0 text-center mx-auto", className)}
				viewport={{ once: true }}
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.3 }}
			>
				{content && parse(content)}
				{!content && <div>Heading Component</div>}
			</motion.div>
		</div>
	);
}
