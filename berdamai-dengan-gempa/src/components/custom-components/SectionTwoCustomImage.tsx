"use client"

import { baseUrl } from "@/constants/meta"
import { motion } from 'framer-motion';

export function SectionTwoCustomImage() {
    return <div className="bg-cover bg-[center_top_-1rem] relative xl:bg-[center_top_-10rem]" style={{ backgroundImage: `url(${baseUrl}/assets/2.1.1.png)` }}>
        <motion.img
            animate={{ rotate: 360 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 200, ease: "linear", repeatType: 'loop', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0 }}
            className="absolute left-[-40%] xl:left-[-4rem] bottom-0 xl:bottom-[-9rem]" src={`${baseUrl}/assets/2.10.png`} alt="Blue Virus" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-[14rem] z-20">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/2.2.png`} alt="Title" />
            <div className="relative flex items-center">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`${baseUrl}/assets/2.3.png`} alt="Who memperkirakan" className="" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    src={`${baseUrl}/assets/2.4.png`} alt="Semakin banyak pula" className="absolute" />
            </div>
            <div className="relative left-[-5rem]">
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, x: 30 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute z-20 right-[-5rem] sm:right-[-8rem] xl:right-[-10rem] top-[-1.5rem]" src={`${baseUrl}/assets/2.5.png`} alt="Data Kemenkes" />
                    <img
                        src={`${baseUrl}/assets/2.8.png`} alt="Virus Orange" className="size-[8rem] sm:size-[14rem] md:size-[20rem] absolute right-[-2rem] top-[9rem] sm:top-[15rem] md:top-[18rem]" />
                </div>
                <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0 }}
                    src={`${baseUrl}/assets/2.2.1.png`} alt="Globe" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute left-[5rem] bottom-0" src={`${baseUrl}/assets/2.6.png`} alt="Title" />
            </div>
        </div>
        <motion.img
            animate={{ x: -100, y: -200 }}
            transition={{ duration: 20, ease: "linear", repeatType: 'reverse', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0 }}
            className="absolute hidden xl:block z-10 right-[-4rem] bottom-[-12rem]" src={`${baseUrl}/assets/2.7.png`} alt="" />
    </div>
}