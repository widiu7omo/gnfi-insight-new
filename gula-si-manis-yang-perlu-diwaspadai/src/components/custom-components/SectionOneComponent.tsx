"use client"
import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from 'framer-motion'
export function SectionOneComponent() {
    return <section id="section-1" className="bg-[#fff6e9] -mt-1 overflow-clip ">
        <div className="flex flex-col h-[300px] items-center justify-center bg-cover bg-center">
            <h2 className="max-w-5xl px-4 sm:px-0 text-center text-3xl font-bold leading-snug lg:text-4xl xl:text-5xl relative">
                <motion.span
                    initial={{ opacity: 0, y: 20, scale: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative z-10">
                    Asal-usul Gula, Bermula dari Papua Nugini
                </motion.span>
                <motion.img
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: .2 }}
                    transition={{ ease: 'easeInOut', duration: .3, }}
                    src={`${baseUrl}/assets/ball.svg`} alt="Ball Big" className="absolute right-[-8rem] top-0 size-[40rem] bottom-[-8rem]" />
                <motion.img
                    initial={{ x: -300, rotate: 0, opacity: 0 }}
                    whileInView={{ x: 0, rotate: 360 * 0.298, opacity: .3 }}
                    transition={{ ease: 'easeInOut', duration: 2 }}
                    src={`${baseUrl}/assets/ball.svg`} alt="Ball " className="absolute left-[-10rem] size-[20rem] bottom-[-10rem]" />
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
                                <p>Gula bisa dibuat dari berbagai macam bahan, tetapi tebu adalah yang paling lazim digunakan. Ternyata, gula tebu memiliki sejarah panjang yang mengiringi perkembangan peradaban manusia. Asal mula manusia mengonsumsi gula pun dapat ditelusuri ribuan tahun lalu, dari kebudayaan kuno hingga menjadi komoditas penting dalam perdagangan global.</p>
                                <p>Asal-usul gula ternyata bermula di Papua Nugini. Bila mengacu dari The Origins of Sugar Cane karya H. Bakker, di sana adalah tempat dilakukannya domestikasi tebu pertama, di mana tebu yang didomestikasi ini adalah dari spesies liar Saccharum robustum. Dari sana, penduduk Kepulauan Pasifik Selatan membawa tebu dalam perjalanan laut mereka hingga dikenal di India dan Asia Tenggara. </p>
                                <p>Di India, gula sangat diterima oleh masyarakat setempat. Bahkan sekitar 2000 tahun lalu, India menjadi tempat produksi pertama gula dalam bentuk kasar. Teknik produksi gula dari tebu ini kemudian menyebar ke Persia, Mesir, dan negara-negara di sekitar Laut Mediterania.</p>
                                <p>Seiring waktu, gula dari tebu mulai menjadi komoditas yang sangat dicari, menggantikan madu sebagai pemanis utama. Penaklukan Muslim di Afrika Utara kemudian membawa tebu lebih jauh ke barat hingga mencapai Spanyol dan Portugal. Pada era ini teknik produksi gula berkembang pesat. Pasca Perang Salib, gula pun menyebar ke seluruh Eropa hingga menjadi bagian penting dari kuliner di sana.</p>
                            </>)
                    }
                }}
            />
        </div>
        <div className="relative flex items-start justify-center overflow-clip">
            <div className="w-full bg-cover bg-no-repeat bg-[center_top_-8rem]" style={{ backgroundImage: `url(${baseUrl}/assets/1.1.webp)` }}>
                <div className="absolute z-0 bg-gradient-to-b top-0 bottom-[10%] left-0 right-0 from-[#fff6e9] to-[80%] to-black/0" />
                <div className="max-w-4xl mx-auto relative z-10">
                    <div className="space-y-0">
                        <div className="relative flex items-center justify-center z-0">
                            <motion.img
                                initial={{ opacity: 0, x: 20 }}
                                viewport={{ once: true }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: .8 }}
                                src={`${baseUrl}/assets/1.2.png`} alt="Title" />
                            <motion.img
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: .3 }}
                                src={`${baseUrl}/assets/1.3.png`} className="absolute" alt="Sub Title" />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, duration: .8 }}
                                src={`${baseUrl}/assets/1.4.png`} className="absolute top-0" alt="Shy Lg" />
                            <motion.img
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: .8 }}
                                src={`${baseUrl}/assets/1.8.png`} className="absolute top-0" alt="Card" />
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
                            src={`${baseUrl}/assets/1.5.png`} className="z-20 w-full" alt="Shin Tae Young Md" />
                    </div>
                    <div className="z-[11] bottom-0 top-[40%] to-[90%] absolute left-0 right-0 w-full bg-gradient-to-b from-white/0 to-[#1d1d1d]" />
                </div>
                <div className="bg-[#1d1d1d]">
                    <div className="max-w-4xl pb-[4rem] mx-auto relative z-20">
                        <div className="space-y-0">
                            <div className="flex items-center justify-center z-0 relative">
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: .5 }}
                                    src={`${baseUrl}/assets/1.6.png`} className="z-40 bottom-0 absolute" alt="Shin Taeyoung sm" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: .8 }}
                                    src={`${baseUrl}/assets/1.9.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.8, duration: .8 }}
                                    src={`${baseUrl}/assets/1.10.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1, duration: .5 }}
                                    src={`${baseUrl}/assets/1.11.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 1.3, duration: .5 }}
                                    src={`${baseUrl}/assets/1.12.png`} className="z-30 absolute bottom-0" alt="Shin Tae Young Md" />
                            </div>
                        </div>
                        <Paragraph
                            block={{
                                component: COMPONENT_PARAGRAPH,
                                componentProps: {
                                    className: "text-white",
                                    children: (<>
                                        <p>Pada masa kolonial, bangsa Spanyol membawa tebu ke Amerika Selatan dan pulau-pulau Karibia. Di wilayah ini, tebu menjadi dasar industri gula modern pertama. Hingga akhirnya perkebunan tebu di Karibia dan Amerika Selatan menjadi pusat produksi gula dunia dengan iklim tropisnya.</p>
                                        <p>Lalu, bagaimana di Indonesia?</p>
                                        <p>Gula di Indonesia memiliki sejarah panjang yang dimulai dengan kedatangan bangsa Cina pada abad ke-15 yang memperkenalkan teknologi pengolahan tebu menjadi gula. Sebelumnya, Indonesia tidak mengenal gula. </p>
                                        <p>Proses pembuatan gula tradisional menggunakan alat sederhana seperti silinder batu atau kayu untuk menggiling tebu dan menghasilkan nira. Perdagangan gula oleh komunitas Tionghoa menarik perhatian VOC (Vereenigde Oost-Indische Compagnie), yang memindahkan pusat perdagangan dari Banten ke Batavia pada 1596 demi alasan strategis.</p>
                                        <p>Batavia berkembang menjadi pusat perdagangan gula yang menarik migrasi besar-besaran warga Tionghoa, yang tidak hanya memperluas bisnis gula tetapi juga menginspirasi pendatang baru untuk terlibat dalam industri ini.</p>
                                        <p>Secara ilmiah, Carl Linnaeus memberikan nama Saccharum untuk varietas tebu pada tahun 1753. Nama ini berasal dari kata Sanskerta "Karkara" atau "Carkara", yang berarti kerikil.  Perkembangan kata gula dari tebu juga menunjukkan jejak sejarah dan budaya yang beragam sesuai dengan garis waktunya:</p>
                                        <p>Bahasa Prakrit: Sakkara</p>
                                        <p>Bahasa Arab: Sakkar atau Sukkar</p>
                                        <p>Yunani Kuno: Sakchar atau Sakcharon</p>
                                        <p>Romawi: Saccharum</p>
                                        <p>Penyerapan bahasa ini tak ketinggalan diterapkan dalam bahasa Inggris hingga menjadi sugar. Evolusi kata ini menunjukkan bagaimana tebu dan gula telah menjadi bagian dari berbagai budaya di seluruh dunia.</p>
                                    </>)
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
}
