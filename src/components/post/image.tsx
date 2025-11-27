import { cn } from "@/lib/utils";
import { motion } from "motion/react";
export type ImageType = {
	imageUrl: string;
	imageAlt: string;
	className?: string;
	imgClassName?: string;
	overlayClassName?: string;
};
export function Image(props: ImageType) {
	const { imageUrl, imageAlt, className, imgClassName, overlayClassName } = props;
	return (
		<div
			className={cn(
				"w-full h-full px-4 lg:px-0 relative",
				className,
			)}
		>
			<div className="max-w-[65ch] mx-auto bg-cover ">
			{!!overlayClassName && <div className={cn("absolute z-10 top-0 left-0 right-0 bottom-0", overlayClassName)} />}
			<div className="flex items-center justify-center">
				<motion.img
					initial={{ y: 20, opacity: 0 }}
					transition={{ delay: 0.3 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
					src={`${imageUrl}`}
					alt={imageAlt ?? "unknown"}
					className={cn("w-full", imgClassName)}
				/>
				</div>
			</div>
		</div>
	);
}
