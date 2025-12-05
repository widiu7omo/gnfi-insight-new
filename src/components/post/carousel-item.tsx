import { motion } from "motion/react";
import type { CarouselItemType } from "./carousel";
import { Paragraph } from "./paragraph";
import { ReactElement } from "react";
const CarouselItem = ({ item, className, includeName = false, withBackground = false }: { item: CarouselItemType, className?: string, includeName?: boolean, withBackground?: boolean }) => {
	return (
		<div className="flex flex-col items-start h-full space-y-3 z-20 max-w-2xl mx-auto">
			<div className="relative flex flex-col items-start justify-center h-[258px] flex-none  top-0">
				<motion.img
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0, duration: 0.5 }}
					src={item.image}
					alt={item.name}
					className="left-4 xl:left-0 top-0 w-fit relative z-10 h-[258px]"
				/>
				{includeName && <p className="font-bold pt-4">{item.name}</p>}
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					style={{
						backgroundImage: withBackground ? `url(${item.image})` : undefined,
						filter: withBackground ? "blur(200px)" : undefined,
					}}
					className="absolute z-0 w-[500px] h-[300px] bg-cover"
				/>
			</div>
			<Paragraph className={className ?? 'text-white grow'}>
				{item.desc as ReactElement}
			</Paragraph>
		</div>
	);
};
export default CarouselItem;
