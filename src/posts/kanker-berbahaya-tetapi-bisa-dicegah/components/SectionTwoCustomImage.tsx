import { motion } from 'motion/react';

export function SectionTwoCustomImage() {
    return <div className="bg-cover bg-position-[center_top_-1rem] relative xl:bg-position-[center_top_-10rem]" style={{ backgroundImage: `url(/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.1.1.png)` }}>
        <motion.img
            animate={{ rotate: 360 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 200, ease: "linear", repeatType: 'loop', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0 }}
            className="absolute left-[-40%] xl:-left-16 bottom-0 xl:-bottom-36" src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.10.png`} alt="Blue Virus" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-56 z-20">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.2.png`} alt="Title" />
            <div className="relative flex items-center">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.3.png`} alt="Who memperkirakan" className="" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.4.png`} alt="Semakin banyak pula" className="absolute" />
            </div>
            <div className="relative -left-20">
                <div className="relative">
                    <motion.img
                        initial={{ opacity: 0, x: 30 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute z-20 -right-20 sm:-right-32 xl:-right-40 -top-6" src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.5.png`} alt="Data Kemenkes" />
                    <img
                        src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.8.png`} alt="Virus Orange" className="size-32 sm:size-56 md:size-80 absolute -right-8 top-36 sm:top-60 md:top-72" />
                </div>
                <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0 }}
                    src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.2.1.png`} alt="Globe" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="absolute left-20 bottom-0" src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.6.png`} alt="Title" />
            </div>
        </div>
        <motion.img
            animate={{ x: -100, y: -200 }}
            transition={{ duration: 20, ease: "linear", repeatType: 'reverse', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0 }}
            className="absolute hidden xl:block z-10 -right-16 -bottom-48" src={`/assets/kanker-berbahaya-tetapi-bisa-dicegah/2.7.png`} alt="" />
    </div>
}