import { Paragraph } from '@/components/post/paragraph';
import { motion } from 'motion/react';

export function SectionTwoCustomImage() {
    return <div className="bg-cover relative xl:bg-position-[center_top_-30rem]" style={{ backgroundImage: `url(/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.1.1.webp)` }}>
        <div className="absolute bg-linear-to-b to-70% from-[#624029] z-0 left-0 right-0 top-0 bottom-[20%]" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-56 z-20 relative">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.1.png`} alt="Title" />
            <motion.img
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.2.png`} alt="Who memperkirakan" className="" />
        </div>
        <div className="max-w-4xl mx-auto pt-0 z-20">
            <div className="relative flex items-center justify-center">
                <motion.img
                    initial={{ opacity: 0, y: -40 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.6.png`} alt="World" />

                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.5.png`} className="absolute" alt="World Red Line" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.4.png`} className="absolute" alt="World Red Line" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.3.png`} className="absolute" alt="World Red Line" />
            </div>

        </div>
        <div className="bg-white">
            <div className="max-w-4xl mx-auto pt-0 z-20 relative flex items-center justify-center ">
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.7.png`} className="xl:-mt-16 -mt-8" alt="Badge" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.8.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.9.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.10.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.11.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.12.png`} className="absolute" alt="Milk 1" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.13.png`} className="absolute" alt="Milk 2" />
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    src={`/assets/hikayat-segelas-susu-dari-minuman-bergizi-hingga-jadi-komoditas-politik/2.15.png`} className="invert absolute bottom-0" alt="Informasi" />
            </div>

            <Paragraph>
                <>
                    <p>Ali mengaku belum menemukan adanya bukti bahwa orang-orang Nusantara telah mengolah susu sebelum zaman Belanda. Tetapi, dirinya meyakini bahwa orang Nusantara sudah mengkonsumsi susu pada zaman neolitik.</p>
                    <p>“Tetapi sebelum itu harusnya sudah karena bukan perkara sulit buat mendapatkan susu. Terpenting dia bisa berternak, masyarakat Indonesia bisa menjinakkan hewan. Karena bukti terbatas kita patokannya di era kolonial,” jelasnya. </p>
                </>
            </Paragraph>
        </div>
    </div>
}