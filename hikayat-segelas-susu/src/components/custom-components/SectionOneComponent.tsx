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
                    Manfaat dan Nutrisi Susu
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
                                <p>Susu memang merupakan sumber zat gizi penting bagi manusia. Minuman ini mengandung gizi lengkap: karbohidrat 5 persen, protein 3,5 persen, lemak 3—4 persen, asam lemak, asam amino, kolesterol, vitamin, dan mineral. Profesor Peternakan Universitas Muhammadiyah Malang, Wahyu Widodo, dalam Bioteknologi Industri Susu, menyebut bahwa mutu protein susu sepadan dengan protein daging dan telur.</p>
                                <p>Susu dihasilkan dari kelenjar susu manusia dan hewan mamalia. Menurut Dosen Teknologi Pangan Politeknik Negeri Lampung, Dwi Eva Nirmagustina, susu punya karbohidrat bernama laktosa yang sekaligus memberi cita rasa manis pada susu. Lalu, Asam lemak susu ada tiga jenis: asam lemak rantai pendek (SFA), asam lemak tidak jenuh tunggal (MUFA), dan asam lemak tidak jenuh ganda (PUFA).</p>
                                <p>Protein susu pun terdiri dari tiga komponen besar: protein kasein, protein whey, dan protein terkait dengan membran globula lemak susu. Asam amino susu dan produk olahan susu mencakup asam amino esensial (isoleusina, leusina, lisina, metionina, fenilalanina, treonina, triptofan, valina, histidina) dan nonesensial (sistein, tirosin, arginin).</p>
                                <p>Nutrisi lain yang terkanding dalam susu adalah aneka ragam vitamin. Pertama, vitamin larut air (tiamina, riboflavin, niasin, B6, folat, B12, C) dan vitamin larut lemak (A, D, E). Di dalam susu juga terkandung mineral, yakni kalsium, fosfor, sodium, potasium, magnesium, besi, zink, tembaga, dan iodin. Garam mineral ini memberikan rasa sedikit asin pada susu.</p>
                                <p>Menurut Eva, protein dalam susu penting untuk menurunkan dan memelihara berat badan karena menghasilkan efek kenyang, sehingga mencegah orang mengonsumsi makanan atau minuman berlebihan serta mengurangi simpanan lemak. </p>
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
                                    <p>“Oleh karena itu, susu dan produk olahan susu dapat menurunkan risiko obesitas pada anak-anak. Produk olahan susu dapat memperbaiki komposisi tubuh dan memfasilitasi penurunan berat badan selama pembatasan energi pada orang dewasa,” demikian penjelasan Eva dalam laman resmi Polinela.</p>
                                    <p>Produk olahan susu yang rendah lemak dan kaya kalsium  menurunkan tekanan darah. Jika mengonsumsi susu 200—300 mililiter per hari, seseorang bisa terhindar dari risiko hipertensi dan penyakit kardiovaskular, terutama stroke.</p>
                                    <p>Anak-anak dan remaja membutuhkan mineral dalam susu untuk membangun kesehatan tulang. Magnesium, misalnya, salah satu mineral terpenting untuk membantu pertumbuhan tulang, sedangkan kalsium dapat mencegah kanker. </p>
                                </>)
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    </section>
}
