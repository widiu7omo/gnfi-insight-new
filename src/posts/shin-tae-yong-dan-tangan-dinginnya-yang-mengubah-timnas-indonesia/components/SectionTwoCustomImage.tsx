import { Paragraph } from '@/components/post/paragraph';
import { motion } from 'motion/react';

export function SectionTwoCustomImage() {
    return <div className="bg-cover relative xl:bg-center bg-position-[center_top]" style={{ backgroundImage: `url(/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.1.png)`, backgroundColor: '#517B2C' }}>
        <div className="absolute bg-linear-to-b to-20% from-[#5093DD] z-10 left-0 right-0 top-0 bottom-[40%]" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-16 z-20 relative">
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.2.png`} className="h-[50%] xl:h-full" alt="Title" />
        </div>
        <div className="max-w-4xl mx-auto pt-0 z-20">
            <div className="relative flex items-center justify-center">
                <motion.img
                    initial={{ opacity: 0, y: -40 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.6.png`} alt="World" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.5.png`} className="absolute" alt="World Red Line" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.4.png`} className="absolute" alt="World Red Line" />
                <motion.img
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.3.png`} className="absolute" alt="World Red Line" />
            </div>

        </div>
        <div className="">
            <div className="max-w-4xl mx-auto pt-0 z-20 relative flex items-center justify-center ">
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.7.png`} className="" alt="Badge" />
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.8.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.9.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.10.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.11.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.12.png`} className="absolute" alt="Milk 1" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.13.png`} className="absolute" alt="Milk 2" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.14.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.15.png`} className="absolute" alt="Informasi" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: .5 }}
                    src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/2.16.png`} className="absolute" alt="Informasi" />
            </div>

            <Paragraph className="text-white" >
                <>
                    <p>Selepas bermain, Shin mulai melatih pada 2009 sebagai pelatih interim di klub lamanya yang telah bernama Seongnam Ilhwa Chunwa. Ia mengantar tim ke peringkat kedua di K League dan Piala FA Korea 2009, meskipun saat itu timnya sedang mengalami kekurangan dana.  Lalu, ia pun mempersembahkan gelar juara Liga Champions Asia 2010 dan Piala FA Korea 2011. Shin sekaligus menjadi orang pertama yang memenangkan Liga Champions Asia sebagai pemain dan pelatih.</p>
                    <p>Pada 2014, Shin didapuk sebagai asisten pelatih Timnas Korea Selatan. Di bawah Shin, Korsel mencapai final Piala Asia 2015 untuk pertama kalinya dalam 27 tahun. Pada saat yang sama, ia juga menangani Timnas Korsel U-23, hingga dipromosikan sebagai pelatih kepala di tim senior pasukan Taeguk Warriors pada 2017.</p>
                    <p>Saat memimpin Timnas Korsel di Piala Dunia 2018, timnya secara mengejutkan bisa mengalahkan Jerman walau kalah dari Swedia dan Meksiko. Sayangnya, sebuah pengalaman tak mengenakkan sempat didapatnya kala itu, di mana Shin dan pemain Korsel dilempari telur oleh sekelompok fans yang kecewa saat baru tiba di Bandara Incheon sepulangnya dari Rusia. Untuk diketahui, melempar telur merupakan tradisi masyarakat Korsel untuk meluapkan kekecewaan ke politisi atau pelaku kriminal. </p>
                    <p>Siapa sangka, insiden pelemparan telur itu sekaligus menjadi akhir kebersamaan Shin dengan timnas negaranya. Setelahnya, tibalah sejarah baru dengan dipinangnya sang pelatih oleh Indonesia.</p>
                </>
            </Paragraph>
        </div>
    </div>
}