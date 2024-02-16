"use client";
import { BlockType } from "@/data/types";
import parse from "html-react-parser";
import { motion } from "framer-motion";
export default function Content({ block }: { block: BlockType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      transition={{ delayChildren: 0.3 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="prose text-left z-20"
    >
      {parse(block.content)}
    </motion.div>
  );
}
