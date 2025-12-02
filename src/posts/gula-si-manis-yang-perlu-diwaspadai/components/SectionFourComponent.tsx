import { cn } from "@/lib/utils";
import { motion } from 'motion/react'
export function SectionFourComponent() {
  return (
    <>
      {/* Header */}
      <div
        className={cn(
          "flex h-full flex-col items-center justify-start bg-cover bg-top",
        )}
        style={{
          backgroundImage: `linear-gradient(0deg, rgb(208, 184, 229,0.0) 0%, rgb(208, 184, 229,1) 100%),url('assets/DJI_04630001.webp')`,
        }}
      >
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/3.3.png`} />
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/3.4.png`} />
        <motion.img
          initial={{ y: 20, opacity: 0 }}
          transition={{ delay: 0.3 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/3.5.png`} />
      </div>
    </>
  );
}
