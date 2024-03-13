"use client";
import type { BlockType } from "@/data/types";
import { motion } from "framer-motion";
import parse from "html-react-parser";
export default function Header({ block }: { block: BlockType }) {
	return (
		<motion.div
			viewport={{ once: true }}
			className="prose py-8 px-4 xl:px-0 text-center"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
		>
			{parse(block.content)}
		</motion.div>
	);
}
