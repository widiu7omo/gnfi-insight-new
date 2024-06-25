"use client"
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFiveCustomImage() {
    return <div className="bg-cover relative xl:bg-[center_top_-30rem]" style={{ backgroundImage: `url(${baseUrl}/assets/3.1.png)` }}>
        <div className="absolute bg-gradient-to-t from-[#04070B] z-0 left-0 right-0 top-[20%] bottom-0" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-[14rem] z-20 relative">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src={`${baseUrl}/assets/3.2.png`} alt="Title" />
            <div className="relative flex flex-col justify-end">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`${baseUrl}/assets/3.3.png`} alt="Who memperkirakan" className="" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    src={`${baseUrl}/assets/3.4.png`} alt="Who memperkirakan" className="absolute" />
            </div>
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src={`${baseUrl}/assets/3.5.png`} alt="Who memperkirakan" className="" />
            <motion.img
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/3.6.png`} alt="Who memperkirakan" className="pt-0 xl:pt-[10rem]" />
            <div className="relative flex flex-col justify-end">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    src={`${baseUrl}/assets/3.7.png`} alt="Who memperkirakan" className="absolute" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                    src={`${baseUrl}/assets/3.8.png`} alt="Who memperkirakan" className="" />
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                    src={`${baseUrl}/assets/3.9.png`} alt="Who memperkirakan" className="absolute bottom-0" />
            </div>

        </div>
    </div>
}