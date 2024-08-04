"use client"
import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion, useScroll, useSpring } from 'framer-motion'
export function SectionOneComponent() {
    const { scrollYProgress } = useScroll();
    const spring = useSpring(scrollYProgress, { mass: 0.1, restDelta: 0.0001 })
    const renderImages = () => {
        const images = [];
        for (let i = 5; i < 20; i++) {
            images.push(<motion.img key={`${i}`}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: (i * 0.2 / (i % 2 === 0 ? 2 : 4)), duration: i % 2 === 0 ? 0.8 : 0.5 }}
                className="absolute"
                src={`${baseUrl}/assets/1.${i}.png`} alt={`Milk Comp ${i}`} />)
        }
        return images;
    }
    return <section id="section-1" className="bg-[#fff6e9] -mt-1 overflow-clip ">
        <div className="flex flex-col h-[300px] items-center justify-center bg-cover bg-center">
            <h2 className="max-w-5xl px-4 sm:px-0 text-center text-3xl font-bold leading-snug lg:text-4xl xl:text-5xl relative">
                <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10">
                    Shin Tae-yong Melatih Timnas Indonesia sejak 2019
                </motion.span>
                <motion.img
                    src={`${baseUrl}/assets/milk2.svg`} alt="Milk 2" className="absolute left-[-20rem] size-[40rem] bottom-[-27rem]" />
                <motion.img
                    src={`${baseUrl}/assets/milk.svg`} alt="Milk" className="absolute right-[-8rem] size-[20rem] bottom-[-8rem]" />
            </h2>
        </div>
        <div className="mb-[4rem]">
            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        className: "",
                        children: (
                            <>
                                <p>Akhir 2019 adalah lembaran sejarah baru bagi sepak bola Indonesia sekaligus karier Shin Tae-yong. Ia resmi diperkenalkan oleh Persatuan Sepakbola Seluruh Indonesia (PSSI) sebagai pelatih Timnas Indonesia di Stadion Pakansari, Kabupaten Bogor pada Sabtu, 28 Desember 2019 sore.</p>
                                <p>Saat itulah, Shin menandatangani kontrak, juga menerima jersi dan jaket yang secara simbolis menandai bahwa perjalanannya di Indonesia resmi dimulai. Dalam kontrak tersebut tercatat, Shin diplot untuk menjalankan projek jangka panjang dengan durasi kerja sama selama empat tahun hingga akhir 2023, yang mana kemudian kontrak itu diberi perpanjangan singkat selama enam bulan lantaran Piala Asia 2023 diputuskan digelar pada Januari 2024.</p>
                                <p>Kedatangan Shin tentu bukan hal yang tiba-tiba. Para petinggi PSSI rupanya telah lama menimbang sosoknya sebagai salah satu kandidat pelatih Indonesia. Sebelum akhirnya memilih Shin, ada beberapa nama yang juga digadang-gadang bakal menduduki kursi pelatih Indonesia, mulai dari Luis Milla, Rahmad Darmawan, hingga Widodo Cahyono Putro.</p>
                                <p>Saat Shin diumumkan sebagai pelatih Indonesia, publik pun heboh. Bagaimana tidak, ia adalah pelatih yang punya rekam jejak mentereng. Pada 2018 saja, Shin pernah menyita perhatian lantaran membawa Korsel mengalahkan raksasa sepak bola dunia, Jerman dengan skor 2-0 di Piala Dunia.</p>
                                <p>“Shin Tae-yong telah dipilih Komite Eksekutif PSSI dengan berbagai pertimbangan dan masukan dari Departemen Teknik PSSI serta sejumlah pelatih," ujar Ketua Umum PSSI saat itu, Mochamad Iriawan alias Iwan Bule.</p>
                            </>)
                    }
                }}
            />
        </div>
        <div className="relative flex items-start justify-center overflow-clip">
            <div className="w-full bg-cover bg-no-repeat bg-[center_top_-8rem]" style={{ backgroundImage: `url(${baseUrl}/assets/1.1.png)` }}>
                <div className="absolute z-0 bg-gradient-to-b top-0 bottom-[10%] left-0 right-0 from-[#fff6e9] to-black/0" />
                <div className="absolute z-0 bg-gradient-to-t top-[35%] bottom-0 left-0 right-0 from-white to-black/0" />
                <div className="max-w-4xl pb-[4rem] mx-auto relative z-10">
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        src={`${baseUrl}/assets/1.2.png`} alt="Susu" />
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        src={`${baseUrl}/assets/1.3.png`} alt="Manfaat Susu" />
                    <div className="space-y-0">
                        <div className="relative flex items-center justify-center">
                            <motion.img
                                viewport={{ once: false }}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                src={`${baseUrl}/assets/1.4.png`} alt="Nutrition" />
                            {renderImages()}
                        </div>
                    </div>
                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        src={`${baseUrl}/assets/1.20.png`} alt="Manfaat Susu" />
                    <Paragraph
                        block={{
                            component: COMPONENT_PARAGRAPH,
                            componentProps: {
                                className: "",
                                children: (<>
                                    <p>Sejak saat itulah, Shin mengemban amanah untuk membangun tim sepak bola Indonesia yang solid dan berprestasi. Beberapa tugas awal yang harus dijalankannya saat pertama kali melatih Indonesia di antaranya adalah mempersiapkan tim untuk Kualifikasi Piala Dunia 2022, Piala AFF. Tak hanya di tim senior, Shin juga membesut timnas level U-16 dan U-19 guna menyambut Piala Asia.</p>
                                </>)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
}
