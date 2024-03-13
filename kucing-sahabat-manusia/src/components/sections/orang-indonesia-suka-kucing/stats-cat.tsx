import Counter from "@/components/reusable/counter";
import { motion } from "framer-motion";
export default function StatsCat() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.5, y: 0 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ delay: 0.4 }}
			className="rounded-full absolute z-10 ml-[14rem] xl:ml-[28rem] mb-[10rem] xl:mb-[28rem] size-[5rem] xl:size-[10rem] flex items-center justify-center bg-[#FF9600] flex-col text-white"
		>
			<p className="font-bold text-base xl:text-2xl">Kucing</p>
			<Counter from={0} to={47} />
		</motion.div>
	);
}
