import { cn } from "@/lib/utils";
import { motion } from 'motion/react'
export function SectionFiveCustomHeader() {
    return (
        <>
            <div
                className={cn("flex h-[600px] items-center justify-center bg-cover bg-center")}
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(113, 29, 176, 1) 0%,rgba(0, 0, 0, 0.40)  100%),url(/assets/kanker-berbahaya-tetapi-bisa-dicegah/4.1.jpg)`,
                }}
            >
                <motion.h2
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl">
                    Beragam Cara Mengobati Kanker
                </motion.h2>
            </div>
        </>
    );
}
