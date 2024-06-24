"use client"
import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
export function SectionOneComponent() {
    const { scrollYProgress } = useScroll();
    const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 })
    const rotate3 = useTransform(spring, progress => `${progress * 360}deg`)
    const scale2 = useTransform(spring, progress => progress / .08)
    return <section id="section-1" className="bg-[#b1aa92] -mt-1">
        <div className="flex flex-col h-[300px] overflow-clip items-center justify-center bg-cover bg-center">
            <h2 className="max-w-5xl px-4 sm:px-0 text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl relative">
                <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10">Mengenal Apa itu Kanker
                </motion.span>
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    style={{ scale: scale2, rotate: rotate3 }}
                    src={`${baseUrl}/assets/virus.svg`} alt="Virus Tencacle" className="absolute right-[-20rem] top-[-9rem]" />
                <motion.img
                    animate={{ rotate: 360 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 50, ease: "linear", repeatType: 'loop', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0 }}
                    src={`${baseUrl}/assets/virus3.svg`} alt="Virus Star" className="absolute left-[-3rem] top-[-3rem] size-[5rem]" />
                <motion.img
                    animate={{ x: -100, y: -200 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 20, ease: "linear", repeatType: 'mirror', repeat: Number.POSITIVE_INFINITY, repeatDelay: 0 }}
                    src={`${baseUrl}/assets/virus5.svg`} alt="Virus Orange" className="absolute right-[-8rem] size-[6rem] bottom-[-8rem]" />
            </h2>
        </div>
        <div className="mb-[0.5rem] xl:mb-[4rem]">
            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        className: "text-white",
                        children: (<>
                            <p>Pada dasarnya, kanker adalah gangguan kesehatan yang ditandai dengan pertumbuhan sel abnormal dan tidak terkendali di dalam tubuh. Sel kanker ini umumnya berkembang pada satu organ tertentu yang kemudian bisa menyebar ke bagian tubuh lainnya. </p>
                            <p>Kanker merupakan penyakit yang perlu diwaspadai karena dapat berujung pada berbagai macam komplikasi hingga berujung pada kematian. Di samping itu, kanker juga bisa menyerang siapa saja.</p>
                            <p>Ya, kanker tidak hanya bisa menjangkiti masyarakat usia lanjut, melainkan juga anak-anak hingga orang dewasa, laki-laki, dan perempuan. </p>
                        </>)
                    }
                }}
            />
        </div>
        <div className="relative flex items-start justify-center overflow-clip">
            <div className="w-full !bg-cover !bg-[center_top_-20rem] xl:!bg-center !bg-no-repeat" style={{ background: `linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.10) 80%),url(${baseUrl}/assets/1.1.png),black` }}>
                <div className="max-w-4xl pb-[0.5rem] xl:pb-[4rem] mx-auto">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        src={`${baseUrl}/assets/1.2.png`} alt="Apa Itu Kanker" />
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        src={`${baseUrl}/assets/1.3.png`} alt="Quote" />
                    <div className="space-y-0">
                        <motion.img
                            viewport={{ once: true }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            src={`${baseUrl}/assets/1.4.png`} className="pt-0 xl:pt-[15rem]" alt="Menurut" />
                        <motion.img
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            src={`${baseUrl}/assets/1.5.png`} alt="Question" />
                        <motion.img
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            src={`${baseUrl}/assets/1.6.png`} alt="Question" />
                        <motion.img
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            src={`${baseUrl}/assets/1.7.png`} alt="Question" />
                    </div>
                    <Paragraph
                        block={{
                            component: COMPONENT_PARAGRAPH,
                            componentProps: {
                                className: "!text-white",
                                children: (<>
                                    <p>Lembaga kesehatan milik Pemerintah Amerika Serikat National Cancer Institute menjelaskan bahwa penyebab kanker adalah perubahan genetik yang mengontrol fungsi sel dalam tubuh, terutama pada cara sel tumbuh dan membelah. Adapun perubahan genetik penyebab kanker yang dimaksud dapat terjadi karena kondisi berikut:</p>
                                    <motion.ol
                                        viewport={{ once: true }}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                    >
                                        <li className="!text-white">Kesalahan yang terjadi saat sel membelah.</li>
                                        <li className="!text-white">Kerusakan DNA (Deoxyribo Nucleic Acid) yang disebabkan oleh zat berbahaya, misalnya bahan kimia dalam asap tembakau dan sinar ultraviolet dari matahari.</li>
                                        <li className="!text-white">Gen yang diwariskan dari orang tua.</li>
                                    </motion.ol>
                                    <p>Secara alami, tubuh sebetulnya punya kemampuan untuk menghilangkan sel-sel dengan DNA yang rusak sebelum berubah menjadi kanker. Namun, kemampuan tubuh untuk melakukan hal tersebut juga akan semakin menurun seiring bertambahnya usia seseorang. Itulah mengapa risiko kanker pada usia lanjut akan lebih tinggi.</p>
                                    <p>Selain faktor risiko yang berasal dari dalam tubuh dan lingkungan, kanker juga berpotensi menjangkiti seseorang yang mengidap penyakit tertentu. Salah satunya adalah HIV/AIDS yang menyebabkan sistem imun tubuh melemah sehingga tubuh mudah terinfeksi virus yang memicu kanker.</p>
                                </>)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
}
