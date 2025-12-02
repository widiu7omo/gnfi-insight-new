import { motion } from 'motion/react'
export function SectionOneComponent() {
    return <section id="section-1" className="bg-[#fffcf3] -mt-1 overflow-clip ">
        <div className="relative flex items-start justify-center overflow-clip">
            <div className="w-full bg-cover bg-no-repeat bg-position-[center_top]" style={{ backgroundImage: `url('/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.0.png')` }}>
                <div className="max-w-4xl mx-auto relative z-10 xl:mt-60">
                    <div className="space-y-0">
                        <div className="relative flex items-center justify-center z-0">
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.1.png`} alt="Title" className=" top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.2.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0, y: 5, x: 5 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: .3 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.3.png`} className="absolute" alt="Sub Title" />
                            <motion.img
                                initial={{ x: 40, scaleY: .9, scaleX: .9, scaleZ: .9, opacity: 0 }}
                                whileInView={{ x: 0, scaleY: 1, scaleX: 1, scaleZ: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: .4 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.4.png`} className="absolute top-0" alt="Stamp" />
                            <motion.img
                                initial={{ x: 40, scaleY: .9, scaleX: .9, scaleZ: .9, opacity: 0 }}
                                whileInView={{ x: 0, scaleY: 1, scaleX: 1, scaleZ: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: .6 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.5.png`} className="absolute top-0" alt="Stamp" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: .4 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.6.png`} className="absolute" alt="Sub Title" />
                            <motion.img
                                initial={{ opacity: 0, }}
                                whileInView={{ opacity: 1, }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: .4 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.7.png`} className="absolute" alt="Sub Title" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: .8 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.8.png`} className="absolute" alt="Sub Title" />
                        </div>
                        <div className="relative flex items-center justify-center z-0">
                            <motion.img
                                initial={{ opacity: 0 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.9.1.png`} alt="Title" className=" top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: .5, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.9.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.10.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: .3, duration: .8 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.11.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: .7, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.12.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: .3, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.13.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: .7, duration: .8 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.14.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: .8, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.15.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: .4, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.16.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: .9, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.17.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0, x: -20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: .8, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.18.png`} alt="Title" className="absolute top-0" />
                            <motion.img
                                initial={{ opacity: 0 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 1, duration: .5 }}
                                src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/1.19.png`} alt="Title" className="absolute top-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
