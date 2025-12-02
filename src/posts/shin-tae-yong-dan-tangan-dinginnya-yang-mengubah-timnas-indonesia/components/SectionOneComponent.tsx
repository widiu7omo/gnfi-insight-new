import { Paragraph } from '@/components/post/paragraph'
import { motion } from 'motion/react'
export function SectionOneComponent() {
    return <section id="section-1" className="bg-[#fff6e9] text-black -mt-1 overflow-clip ">
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
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: .2 }}
                    transition={{ ease: 'easeInOut', duration: .3, }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/ball.svg`} alt="Ball Big" className="absolute -right-32 top-0 size-160 -bottom-32" />
                <motion.img
                    initial={{ x: -300, rotate: 0, opacity: 0 }}
                    whileInView={{ x: 0, rotate: 360 * 0.298, opacity: .3 }}
                    transition={{ ease: 'easeInOut', duration: 2 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/ball.svg`} alt="Ball " className="absolute -left-40 size-80 -bottom-40" />
            </h2>
        </div>
        <div className="mb-16">
            <Paragraph>
                <>
                    <p>Akhir 2019 adalah lembaran sejarah baru bagi sepak bola Indonesia sekaligus karier Shin Tae-yong. Ia resmi diperkenalkan oleh Persatuan Sepakbola Seluruh Indonesia (PSSI) sebagai pelatih Timnas Indonesia di Stadion Pakansari, Kabupaten Bogor pada Sabtu, 28 Desember 2019 sore.</p>
                    <p>Saat itulah, Shin menandatangani kontrak, juga menerima jersi dan jaket yang secara simbolis menandai bahwa perjalanannya di Indonesia resmi dimulai. Dalam kontrak tersebut tercatat, Shin diplot untuk menjalankan projek jangka panjang dengan durasi kerja sama selama empat tahun hingga akhir 2023, yang mana kemudian kontrak itu diberi perpanjangan singkat selama enam bulan lantaran Piala Asia 2023 diputuskan digelar pada Januari 2024.</p>
                    <p>Kedatangan Shin tentu bukan hal yang tiba-tiba. Para petinggi PSSI rupanya telah lama menimbang sosoknya sebagai salah satu kandidat pelatih Indonesia. Sebelum akhirnya memilih Shin, ada beberapa nama yang juga digadang-gadang bakal menduduki kursi pelatih Indonesia, mulai dari Luis Milla, Rahmad Darmawan, hingga Widodo Cahyono Putro.</p>
                    <p>Saat Shin diumumkan sebagai pelatih Indonesia, publik pun heboh. Bagaimana tidak, ia adalah pelatih yang punya rekam jejak mentereng. Pada 2018 saja, Shin pernah menyita perhatian lantaran membawa Korsel mengalahkan raksasa sepak bola dunia, Jerman dengan skor 2-0 di Piala Dunia.</p>
                    <p>“Shin Tae-yong telah dipilih Komite Eksekutif PSSI dengan berbagai pertimbangan dan masukan dari Departemen Teknik PSSI serta sejumlah pelatih," ujar Ketua Umum PSSI saat itu, Mochamad Iriawan alias Iwan Bule.</p>
                </>
            </Paragraph>
        </div>
        <div className="relative flex items-start justify-center overflow-clip">
            <div className="w-full bg-cover bg-no-repeat bg-position-[center_top_-8rem]" style={{ backgroundImage: `url(/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.1.webp)` }}>
                <div className="absolute z-0 bg-linear-to-b top-0 bottom-[10%] left-0 right-0 from-[#fff6e9] to-80% to-black/0" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="space-y-0">
                        <div className="relative flex items-center justify-center z-0">
                            <motion.img
                                initial={{ opacity: 0, x: 20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: .8 }}
                                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.2.png`} alt="Title" />
                            <motion.img
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: .3 }}
                                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.3.png`} className="absolute" alt="Sub Title" />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: .8 }}
                                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.4.png`} className="absolute top-0" alt="Shy Lg" />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: .8 }}
                                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.8.png`} className="absolute top-0" alt="Card" />
                        </div>
                    </div>
                </div>
                <div className="relative z-10">
                    <div className="z-10 relative max-w-4xl mx-auto">
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.5.png`} className="z-20 w-full" alt="Shin Tae Young Md" />
                    </div>
                    <div className="z-11 bottom-0 top-[40%] to-90% absolute left-0 right-0 w-full bg-linear-to-b from-white/0 to-[#1d1d1d]" />
                </div>
                <div className="bg-[#1d1d1d]">
                    <div className="max-w-4xl pb-16 mx-auto relative z-20">
                        <div className="space-y-0">
                            <div className="flex items-center justify-center z-0 relative">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: .5 }}
                                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.6.png`} className="z-40 bottom-0 absolute" alt="Shin Taeyoung sm" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: .8 }}
                                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.9.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: .8 }}
                                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.10.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1, duration: .5 }}
                                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.11.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.3, duration: .5 }}
                                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/1.12.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                            </div>
                        </div>
                        <Paragraph className='text-white'>
                            <>
                                <p>Sejak saat itulah, Shin mengemban amanah untuk membangun tim sepak bola Indonesia yang solid dan berprestasi. Beberapa tugas awal yang harus dijalankannya saat pertama kali melatih Indonesia di antaranya adalah mempersiapkan tim untuk Kualifikasi Piala Dunia 2022, Piala AFF. Tak hanya di tim senior, Shin juga membesut timnas level U-16 dan U-19 guna menyambut Piala Asia.</p>
                            </>
                        </Paragraph>
                    </div>
                </div>
            </div>
        </div>
    </section>
}
