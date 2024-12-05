import { motion } from "framer-motion";
import type { CarouselItemType } from "./Carousel";
import { Paragraph } from "./Paragraph";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
const CarouselItem = ({ item, className }: { item: CarouselItemType, className?: string }) => {
	return (
		<div className="flex flex-col items-start h-full space-y-3 z-20 max-w-2xl mx-auto">
			<div className="relative flex items-center justify-center h-[258px] flex-none  top-0">
				<motion.img
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0, duration: 0.5 }}
					src={item.image}
					alt={item.name}
					className="left-4 xl:left-0 top-0 w-fit relative z-10 h-[258px]"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					// style={{
					// 	backgroundImage: `url(${item.image})`,
					// 	filter: "blur(200px)",
					// }}
					className="absolute z-0 w-[500px] h-[300px] bg-cover"
				/>
			</div>
			<Paragraph block={{
				componentProps: {
					children: item.desc,
					className: className ?? 'text-white flex-grow',
				},
				component: COMPONENT_PARAGRAPH
			}} />
		</div>
	);
};
export default CarouselItem;
