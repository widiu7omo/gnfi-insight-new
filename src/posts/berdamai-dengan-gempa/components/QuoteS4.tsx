import { cn } from "@/lib/utils";
import { motion } from 'motion/react'
export function QuoteS4() {
    return <div>
        <div
            className={cn("w-full h-full max-w-[65ch] mx-auto bg-cover px-4 lg:px-0 relative overflow-clip")}
        >
            <div className="flex items-center justify-center relative z-10">
                <motion.img
                    initial={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    src={`/assets/berdamai-dengan-gempa/3.2.png`}
                    alt={"unknown"}
                    className={cn("w-full")}
                />
            </div>
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: 'backOut' }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute z-0 bottom-[-100px] right-[-100px] bg-[#bcdfe5] rounded-full size-[600px]" />
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.8 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                className="absolute z-1 bottom-[-100px] right-[-100px] bg-[#8dc7d3] rounded-full size-[550px]" />
        </div>
    </div>
}