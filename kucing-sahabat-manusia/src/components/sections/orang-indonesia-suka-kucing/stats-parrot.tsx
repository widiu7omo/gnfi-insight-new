import Counter from "@/components/reusable/counter";
import { motion } from "framer-motion";
export default function StatsParrot() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, y: 0 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ delay: 0.8 }}
			className="rounded-full absolute z-10 ml-[18rem] xl:ml-[40rem] mt-[10rem] size-[5rem] xl:size-[9rem] flex items-center justify-center bg-[#BF7100] flex-col text-white"
		>
			<p className="font-bold text-base xl:text-2xl">Burung</p>
			<Counter from={0} to={18} />
		</motion.div>
	);
}
