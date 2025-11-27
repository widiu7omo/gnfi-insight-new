import { Paragraph } from '@/components/post/paragraph';
import { motion, useScroll, useSpring } from 'motion/react'
export function SectionOneComponent() {
    const { scrollYProgress } = useScroll();
    const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 })
    return <section id="section-1" className="bg-[#0A121D] -mt-1 overflow-clip ">
        <div className="flex flex-col h-[300px] items-center justify-center bg-cover bg-center">
            <h2 className="max-w-5xl px-4 sm:px-0 text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl relative">
                <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10">
                    Bagaimana Gempa Terjadi?
                </motion.span>
                <motion.img
                    src={`/assets/berdamai-dengan-gempa/crack2.svg`} alt="Crack 2" className="absolute -left-80 size-160 -bottom-108" />
                <motion.img
                    src={`/assets/berdamai-dengan-gempa/crack.svg`} alt="Crack" className="absolute -right-32 size-80 -bottom-32" />
            </h2>
        </div>
        <div className="mb-16">
            <Paragraph className="text-white">
                <>
                    <p>Gempa bumi adalah salah satu fenomena geologi yang paling kuat dan berdampak besar di Bumi. Pada dasarnya, gempa ditandai dengan bergetarnya bumi secara tiba-tiba akibat patahnya lapisan batuan pada kerak bumi.</p>
                    <p>Penyebab terjadinya gempa bumi dapat dijelaskan dengan teori lempeng tektonik, di mana permukaan bumi terpecah menjadi beberapa lempeng tektonik besar. BMKG mendefinisikan lempeng tektonik sebagai segmen keras kerak bumi yang mengapung di atas astenosfer yang cair dan panas.</p>
                    <p>Lempeng tektonik itu bebas bergerak dan saling berinteraksi satu sama lain. Daerah perbatasan lempeng-lempeng tektonik merupakan kawasan yang aktif menyebabkan gempa bumi, gunung berapi dan pembentukan dataran tinggi.</p>
                    <p>“Kadang-kadang, gerakan lempeng tektonik macet dan saling mengunci sehingga terjadi pengumpulan energi yang berlangsung terus-menerus sampai pada suatu saat tidak kuat lagi menahan gerakan. Akibatnya terjadi pelepasan mendadak yang kita kenal sebagai gempa bumi,” demikian petikan dalam keterangan BMKG.</p>
                </>
            </Paragraph>
        </div>
        <div className="relative flex items-start justify-center overflow-clip">
            <div className="w-full bg-cover bg-no-repeat bg-position-[center_top_-8rem]" style={{ backgroundImage: `url(/assets/berdamai-dengan-gempa/1.1.webp)` }}>
                <div className="absolute z-0 bg-linear-to-b top-0 bottom-[10%] left-0 right-0 from-[#0A121D] to-black/0" />
                <img src={`/assets/berdamai-dengan-gempa/1.7.png`} className="absolute w-full right-0 left-0 bottom-0" alt="Bottom Earth" />
                <div className="absolute z-0 bg-linear-to-t top-[35%] bottom-0 left-0 right-0 from-black to-black/0" />
                <div className="max-w-4xl pb-16 mx-auto relative z-10">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        src={`/assets/berdamai-dengan-gempa/1.2.png`} alt="Gempa Bumi Bagaiman Terjadi" />
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        src={`/assets/berdamai-dengan-gempa/1.3.png`} alt="Quote" />
                    <div className="space-y-0 relative">
                        <div className="relative z-10">
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                src={`/assets/berdamai-dengan-gempa/1.4.png`} className="pt-0 xl:pt-60" alt="Menurut" />
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                src={`/assets/berdamai-dengan-gempa/1.5.png`} alt="Question" />
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                                src={`/assets/berdamai-dengan-gempa/1.6.png`} alt="Question" />
                        </div>
                    </div>
                    <Paragraph className="text-white!"><>
                        <p>Dengan kata lain, gempa bumi terjadi ketika terdapat energi yang dilepaskan dari titik fokus. Titik ini disebut episenter dan biasanya ditemukan di kedalaman dangkal di permukaan bumi. Dari episenter, gelombang seismik diproduksi dan dikirim ke segala arah. </p>
                        <p>Gelombang seismik tersebut kemudian bergerak dengan kecepatan yang bervariasi tergantung pada jenis material yang mereka lalui. Intensitas gelombang yang dilepas akan menentukan gempa. Semakin kuat energinya, maka semakin kuat getaran yang dirasakan oleh penduduk di bumi.</p>
                        <p>Kekuatan gempa (magnitude) pada sebuah daerah dapat diukur dan dinyatakan dengan Skala Richter. Pengukuran didasarkan pada amplitudo atau grafik gelombang seismik di seismogram. Skala Richter menunjukkan besarnya energi gempa yang dilepaskan dengan rentang antara 1,0–10,0.</p>
                    </>
                    </Paragraph>
                </div>
            </div>
        </div>
    </section>
}
