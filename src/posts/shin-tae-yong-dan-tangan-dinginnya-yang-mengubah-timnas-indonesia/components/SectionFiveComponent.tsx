import { Paragraph } from '@/components/post/paragraph'
import { SectionHeader } from '@/components/post/section-header'
import { motion } from 'motion/react'
export function SectionFiveComponent() {
    return <div style={{ backgroundImage: `url(/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.2.png)` }} className="bg-repeat">
        <SectionHeader title="Pola Hidup Sehat, Jurus Jitu Mencegah Kanker"
            coverImage="/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.1.png"
            className='bg-top' />
        <Paragraph>
            <>
                <p>Mencegah lebih baik daripada mengobati. Ungkapan itu agaknya perlu diresapi oleh Kawan GNFI yang memiliki awareness terhadap kanker. Dengan begitu banyak cara untuk mengobati kanker, mencegahnya tetap selalu jadi jalan terbaik.</p>
                <p>Kunci pencegahan kanker terletak pada pola hidup. Semakin sehat pola hidup seseorang, semakin kecil kemungkinan mereka terkena penyakit ini. Hal ini disebabkan karena kanker lebih banyak dipengaruhi oleh faktor eksternal daripada faktor keturunan.</p>
                <p>Menurut Pratiwi Astar, Humas Yayasan Kanker Indonesia, sekitar 90 persen kasus kanker disebabkan oleh faktor eksternal, sedangkan faktor genetik hanya berkontribusi sekitar 10 persen. Ini menunjukkan betapa pentingnya mengadopsi pola hidup sehat untuk menurunkan risiko terkena kanker.</p>
                <p>"Faktor eksternal itu disebabkan oleh pola hidup, termasuk merokok, (dan jadi) perokok pasif. Maka dari itu, yang sehat-sehat ini belum tentu (sepenuhnya) sehat, karena pola hidup yang kita lakukan sekarang ini dampaknya bisa terlihat jelas 20 tahun kemudian," ujar Pratiwi pada Kamis (1/2/2024) lalu.</p>
            </>
        </Paragraph>
        <div className="relative max-w-4xl mx-auto">
            <motion.img
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.3.png`} alt="Illustration 1" className="absolute" />
            <motion.img
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.3.1.png`} alt="Step 1" className="" />
        </div>
        <Paragraph >
            <>
                <p>Faktor eksternal yang paling signifikan tentu saja adalah pola hidup. Selain merokok, kebiasaan makan juga menjadi bagian penting yang perlu diperhatikan. Konsumsi makanan instan, kalengan, dan makanan olahan secara berlebihan diketahui sebagai pemicu kanker. Meskipun jenis makanan ini sangat umum dikonsumsi, bahkan oleh orang-orang muda, hal ini dapat berdampak buruk bagi kesehatan dalam jangka panjang.</p>
                <p>Pratiwi juga mengungkapkan bahwa saat ini banyak penderita kanker yang berusia di bawah 50 tahun. Kondisi ini semakin memperkuat seruan untuk menerapkan pola hidup sehat sejak dini. Langkah-langkah seperti menjaga pola makan yang seimbang, rutin berolahraga, menghindari rokok dan alkohol, serta melakukan pemeriksaan kesehatan secara berkala sangat disarankan.</p>
                <p>"Pola hidup tidak sehat orang yang masih muda, misalnya 15 tahun, 15 tahun kemudian saat unur 30 sudah bisa kena (kanker)," katanya.</p>
                <p>Mengadopsi pola hidup sehat tidak hanya bermanfaat untuk mencegah kanker, tetapi juga meningkatkan kualitas hidup secara keseluruhan. Maka dari itu, penting bagi kita semua untuk mulai memperhatikan dan menerapkan gaya hidup sehat demi masa depan yang lebih baik dan bebas dari kanker.</p>
            </>
        </Paragraph>
        <div className="relative max-w-4xl mx-auto">
            <motion.img
                initial={{ opacity: 0, x: -30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.4.png`} alt="Step 2" className="absolute" />
            <motion.img
                initial={{ opacity: 0, x: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                src={`/assets/shin-tae-yong-dan-tangan-dinginnya-yang-mengubah-timnas-indonesia/5.4.1.png`} alt="Illustration 2" className="" />
        </div>
    </div>
}