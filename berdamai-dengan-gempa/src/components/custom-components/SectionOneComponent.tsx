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
    return <section id="section-1" className="bg-[#0A121D] -mt-1">
        <div className="flex flex-col h-[300px] overflow-clip items-center justify-center bg-cover bg-center">
            <h2 className="max-w-5xl px-4 sm:px-0 text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl relative">
                <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10">
                    Bagaimana Gempa Terjadi?
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
        <div className="mb-[4rem]">
            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        className: "text-white",
                        children: (
                            <>
                                <p>Gempa bumi adalah salah satu fenomena geologi yang paling kuat dan berdampak besar di Bumi. Pada dasarnya, gempa ditandai dengan bergetarnya bumi secara tiba-tiba akibat patahnya lapisan batuan pada kerak bumi.</p>
                                <p>Penyebab terjadinya gempa bumi dapat dijelaskan dengan teori lempeng tektonik, di mana permukaan bumi terpecah menjadi beberapa lempeng tektonik besar. BMKG mendefinisikan lempeng tektonik sebagai segmen keras kerak bumi yang mengapung di atas astenosfer yang cair dan panas.</p>
                                <p>Lempeng tektonik itu bebas bergerak dan saling berinteraksi satu sama lain. Daerah perbatasan lempeng-lempeng tektonik merupakan kawasan yang aktif menyebabkan gempa bumi, gunung berapi dan pembentukan dataran tinggi.</p>
                                <p>“Kadang-kadang, gerakan lempeng tektonik macet dan saling mengunci sehingga terjadi pengumpulan energi yang berlangsung terus-menerus sampai pada suatu saat tidak kuat lagi menahan gerakan. Akibatnya terjadi pelepasan mendadak yang kita kenal sebagai gempa bumi,” demikian petikan dalam keterangan BMKG.</p>
                            </>)
                    }
                }}
            />
        </div>
        <div className="relative flex items-start justify-center overflow-clip">
            <div className="w-full bg-cover bg-no-repeat bg-[center_top_-8rem]" style={{ backgroundImage: `url(${baseUrl}/assets/1.1.png)` }}>
                <div className="absolute z-0 bg-gradient-to-b top-0 bottom-[10%] left-0 right-0 from-[#0A121D] to-black/0" />
                <img src={`${baseUrl}/assets/1.7.png`} className="absolute w-full right-0 left-0 bottom-0" alt="Bottom Earth" />
                <div className="absolute z-0 bg-gradient-to-t top-[35%] bottom-0 left-0 right-0 from-black to-black/0" />

                <div className="max-w-4xl pb-[4rem] mx-auto relative z-10">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        src={`${baseUrl}/assets/1.2.png`} alt="Gempa Bumi Bagaiman Terjadi" />
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        src={`${baseUrl}/assets/1.3.png`} alt="Quote" />
                    <div className="space-y-0 relative">
                        <div className="relative z-10">
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                src={`${baseUrl}/assets/1.4.png`} className="pt-0 xl:pt-[15rem]" alt="Menurut" />
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                src={`${baseUrl}/assets/1.5.png`} alt="Question" />
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                src={`${baseUrl}/assets/1.6.png`} alt="Question" />
                        </div>
                    </div>
                    <Paragraph
                        block={{
                            component: COMPONENT_PARAGRAPH,
                            componentProps: {
                                className: "!text-white",
                                children: (<>
                                    <p>Dengan kata lain, gempa bumi terjadi ketika terdapat energi yang dilepaskan dari titik fokus. Titik ini disebut episenter dan biasanya ditemukan di kedalaman dangkal di permukaan bumi. Dari episenter, gelombang seismik diproduksi dan dikirim ke segala arah. </p>
                                    <p>Gelombang seismik tersebut kemudian bergerak dengan kecepatan yang bervariasi tergantung pada jenis material yang mereka lalui. Intensitas gelombang yang dilepas akan menentukan gempa. Semakin kuat energinya, maka semakin kuat getaran yang dirasakan oleh penduduk di bumi.</p>
                                    <p>Kekuatan gempa (magnitude) pada sebuah daerah dapat diukur dan dinyatakan dengan Skala Richter. Pengukuran didasarkan pada amplitudo atau grafik gelombang seismik di seismogram. Skala Richter menunjukkan besarnya energi gempa yang dilepaskan dengan rentang antara 1,0–10,0.</p>
                                </>)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
}
