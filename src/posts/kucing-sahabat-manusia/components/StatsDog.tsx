import { motion } from "motion/react";
import Counter from "./Counter";
export default function StatsDog() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, y: 0 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ delay: 0.6 }}
			className="rounded-full absolute z-10 mr-[18rem] xl:mr-[38rem] mt-[10rem] size-[5rem] xl:size-[7rem] flex items-center justify-center bg-[#7F7F7F] flex-col text-white"
		>
			<p className="font-bold text-base xl:text-xl">Anjing</p>
			<Counter from={0} to={10} />
		</motion.div>
	);
}
