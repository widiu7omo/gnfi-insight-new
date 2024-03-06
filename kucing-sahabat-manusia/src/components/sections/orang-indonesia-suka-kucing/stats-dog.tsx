import Counter from "@/components/reusable/counter";
import { motion } from "framer-motion";
export default function StatsDog() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 0 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="rounded-full absolute z-10 mr-[38rem] mt-[10rem] size-[7rem] flex items-center justify-center bg-[#7F7F7F] flex-col text-white"
    >
      <p className="font-bold text-xl">Anjing</p>
      <Counter from={0} to={10} />
    </motion.div>
  );
}
