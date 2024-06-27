"use client"

import { baseUrl } from "@/constants/meta"
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from 'framer-motion';

export function SectionTwoCustomImage() {
    return <div className="bg-cover relative xl:bg-[center_top_-30rem]" style={{ backgroundImage: `url(${baseUrl}/assets/2.1.1.webp)` }}>
        <div className="absolute bg-gradient-to-b from-[#04070B] z-0 left-0 right-0 top-0 bottom-[20%]" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-[14rem] z-20 relative">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/2.2.png`} alt="Title" />
            <motion.img
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/2.3.png`} alt="Who memperkirakan" className="" />
        </div>
        <div className="max-w-full mx-auto pt-0 z-20">
            <div className="relative flex items-center justify-center">
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`${baseUrl}/assets/2.2.1.png`} className="absolute top-0" alt="Cincin" />
                <img
                    src={`${baseUrl}/assets/2.4.png`} alt="World" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={`${baseUrl}/assets/2.5.png`} className="absolute mix-blend-color-dodge" alt="World Red Line" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    src={`${baseUrl}/assets/2.6.png`} className="absolute" alt="America" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    src={`${baseUrl}/assets/2.7.png`} className="absolute" alt="America" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    src={`${baseUrl}/assets/2.8.png`} className="absolute" alt="America" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    src={`${baseUrl}/assets/2.9.png`} className="absolute" alt="America" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    src={`${baseUrl}/assets/2.10.png`} className="absolute" alt="America" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    src={`${baseUrl}/assets/2.11.png`} className="absolute" alt="America" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: false }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                    src={`${baseUrl}/assets/2.12.png`} className="absolute" alt="America" />
            </div>

        </div>
        <div className="max-w-4xl mx-auto pt-0 z-20 relative">
            <motion.img
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/2.13.png`} alt="90 Persen" />
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/2.14.png`} alt="Informasi" />
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`${baseUrl}/assets/2.15.png`} alt="GNFI Insight" />
        </div>
        <div className="absolute left-0 z-0 right-0 bottom-0 top-[40%] bg-gradient-to-b from-black/0 to-black" />
        <Paragraph block={{
            component: COMPONENT_PARAGRAPH,
            componentProps: {
                className: "text-white",
                children: (<>
                    <p>Selain Cincin Api Pasifik, berbagai daerah di Indonesia sangat rawan bencana gempa bumi dan tsunami karena wilayah Indonesia dikelilingi oleh lempeng eurasia, lempeng Indo-Australia dan juga Lempeng Pasifik.</p>
                    <p>“Setiap saat lempeng ini akan bergeser dan bergerak menimbulkan gempa bumi. Gerakan gempa yang terjadi di dasar laut dapat mengguncangkan massa air laut dan menimbulkan terjadinya tsunami,” tulis Dadang Sungkawa dalam jurnal Gea.</p>
                    <p>Menurut Direktorat Vulkanologi dan Mitigasi Bencana Geologi (DVMBG) Departemen Energi dan Sumber Daya Mineral tercatat ada 28 wilayah di Indonesia yang dinyatakan rawan gempa bumi dan tsunami. Ke-28 daerah tersebut tersebar di berbagai penjuru, mulai dari Aceh dan Sumatra Utara di ujung barat Indonesia, hingga Yapen dan Fak-Fak di ujung timur Indonesia.</p>
                </>)
            }
        }} />
    </div>
}