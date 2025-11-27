import { motion } from "motion/react";
import type { Cat } from "./IndonesianCats";
import { Paragraph } from "@/components/post/paragraph";
const CardCat = ({ cat }: { cat: Cat }) => {
	return (
		<div className="flex flex-col items-start h-full space-y-3 z-20 max-w-2xl mx-auto">
			<div className="relative flex items-center justify-center h-[258px] flex-none  top-0">
				<img
					src={cat.image}
					alt="Busok Cat"
					className="left-4 xl:left-0 top-0 w-fit relative z-10 h-[258px]"
				/>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					style={{
						backgroundImage: `url(${cat.image})`,
						filter: "blur(200px)",
					}}
					className="absolute z-0 w-[500px] h-[300px] bg-cover"
				/>
			</div>
			<Paragraph className="text-white flex-grow">{cat.desc as string}</Paragraph>
		</div>
	);
};
export default CardCat;
