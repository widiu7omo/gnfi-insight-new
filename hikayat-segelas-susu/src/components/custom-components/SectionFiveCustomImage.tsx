"use client"

import { baseUrl } from "@/constants/meta"
import { motion } from "framer-motion"

export function SectionFiveCustomImage() {
    return <div className="bg-cover relative xl:bg-[center_top_-30rem]" style={{ backgroundImage: `url(${baseUrl}/assets/5.1.png)` }}>
        <div className="max-w-4xl mx-auto pt-0 xl:pt-6 z-20 relative ">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src={`${baseUrl}/assets/5.2.png`} alt="Illustration" />

        </div>
        <div className="" style={{ background: `url(${baseUrl}/assets/4.1.1.png),white` }}>
            <div className="max-w-4xl mx-auto pt-0 xl:pt-6 z-20 relative]">
                <div className="relative flex flex-col justify-end">
                    <motion.img
                        initial={{ opacity: 0, x: -30 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        src={`${baseUrl}/assets/5.3.png`} alt="Title" className="-mt-[7rem] sm:-mt-[8rem] xl:-mt-[15rem] z-10" />
                    <motion.img
                        initial={{ opacity: 0, x: 30 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        src={`${baseUrl}/assets/5.4.png`} alt="Thinking" className="absolute bottom-0" />

                </div>
                <div className="relative flex flex-col justify-end ">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        src={`${baseUrl}/assets/5.5.png`} alt="Card 1" className="mix-blend-darken" />
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        src={`${baseUrl}/assets/5.6.png`} alt="Card 1" className="absolute" />
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        src={`${baseUrl}/assets/5.7.png`} alt="Card 2" className="absolute z-20 " />
                </div>
            </div>
        </div>
    </div>
}