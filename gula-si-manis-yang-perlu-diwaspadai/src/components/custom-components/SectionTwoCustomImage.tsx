"use client"

import { baseUrl } from "@/constants/meta"
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from 'framer-motion';

export function SectionTwoCustomImage() {
    return <div className="bg-cover relative xl:bg-center bg-[center_top]" >
        <div className="absolute top-[-4rem] bottom-[120rem] left-0 mx-[25rem] right-0 bg-no-repeat blur-3xl" style={{ backgroundImage: `url(${baseUrl}/assets/2.0.png)` }} />
        <div className="absolute bg-gradient-to-b to-[20%] z-10 left-0 right-0 top-0 bottom-[40%]" />
        <div className="max-w-4xl mx-auto pt-0 z-20">
            <div className="relative flex items-center justify-center">
                <motion.img
                    initial={{ opacity: 0, y: -40 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="relative"
                    src={`${baseUrl}/assets/2.0.png`} alt="World" />
                <div className="absolute top-0">
                    <div className="relative flex items-center justify-center">
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            src={`${baseUrl}/assets/2.1.png`} className="top-0" alt="Title" />
                        <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            src={`${baseUrl}/assets/2.2.png`} className="absolute top-0" alt="Title" />
                    </div>
                    <div className="relative top-0 flex items-center justify-center">
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            src={`${baseUrl}/assets/2.3.png`} className="" alt="World Red Line" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            src={`${baseUrl}/assets/2.4.png`} className="absolute" alt="World Red Line" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            src={`${baseUrl}/assets/2.5.png`} className="absolute" alt="World Red Line" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            src={`${baseUrl}/assets/2.6.png`} className="absolute" alt="World Red Line" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            src={`${baseUrl}/assets/2.7.png`} className="absolute" alt="World Red Line" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            src={`${baseUrl}/assets/2.8.png`} className="absolute" alt="World Red Line" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            src={`${baseUrl}/assets/2.9.png`} className="absolute" alt="World Red Line" />
                        <motion.img
                            initial={{ opacity: 0 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            src={`${baseUrl}/assets/2.10.png`} className="absolute" alt="World Red Line" />
                    </div>
                </div>
            </div>
        </div>
        <div className="">
            <Paragraph block={{
                component: COMPONENT_PARAGRAPH,
                componentProps: {
                    className: "text-white",
                    children: (<>
                        <p>Seperti dicatat M. Sumarto dalam Manisnya Dunia Sejarah dan Budaya Gula, berikut di antaranya:</p>
                        <ul className="list-none">
                            <li className="font-bold -ml-1.5">Gula Pasir</li>
                            <p>Gula pasir merupakan gula yang paling jamak digunakan di Indonesia. Berbentuk butir-butir kecil, gula pasir terbuat dari tebu atau buah bit.</p>
                            <p>Gula pasir memiliki warna tergantung pada tahap pengolahan. Gula pasir yang diolah secara sempurna memiliki warna putih bersih seperti salju. Sementara itu, gula yang tidak diproses sepenuhnya biasanya berwarna cokelat kekuningan.</p>
                            <li className="font-bold -ml-1.5">Gula Semut</li>
                            <p>Gula semut berbentuk mirip seperti gula pasir. Akan tetapi, yang membedakan ialah bahan baku pembuatan. Gula semut dibuat dari gula kelapa yang diolah dari nira pohon kelapa dan dihaluskan. Gula semut jamak ditemui di Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta (DIY).</p>
                            <li className="font-bold -ml-1.5">Gula Merah</li>
                            <p>Gula merah terbuat dari nira, yakni cairan manis yang keluar dari batang tanaman. Gula merah biasanya dibuat dari nira dari tanaman sejenis palem, seperti kelapa, aren, dan siwalan.</p>
                            <p>Gula merah berbentuk bulat pipih. Gula merah kerap kali digunakan untuk menambah cita rasa pada masakan Indonesia, di antaranya, klepon, dodol, hingga rendang.</p>
                            <li className="font-bold -ml-1.5">Gula Aren</li>
                            <p>Gula aren kerap kali disamakan dengan gula merah. Padahal, keduanya berbeda, meskipun sama-sama berasal dari nira pohon aren.</p>
                            <p>Bedanya, gula aren hanya dibuat dari nira pohon aren atau enau. Hal ini berbeda dengan gula merah yang dapat dibuat dari nira pohon lainnya.</p>
                            <p>Perbedaan utamanya antara gula merah dan gula aren terletak pada rasanya. Gula aren memiliki rasa yang khas, legit, gurih, smokey, ringan, dan ada sedikit aroma kelapa. Hal ini disebabkan proses pencetakan gula aren menggunakan batok kelapa.</p>
                            <p>Gula aren berwarna cokelat muda dan biasanya dijadikan sebagai bahan pemanis minuman khas Indonesia, seperti cendol, es kelapa muda, hingga es kopi.</p>
                            <li className="font-bold -ml-1.5">Gula Batu</li>
                            <p>Gula batu merupakan gula yang berbentuk kristal-kristal seperti batu. Gula batu adalah gula yang tidak melalui proses kristalisasi tebu. Gula batu juga didapatkan dari proses pemurnian gula pasir atau gula merah. Gula batu biasanya digunakan untuk membuat minuman seperti teh tarik dan kopi susu. </p>
                            <li className="font-bold -ml-1.5">Gula Jawa</li>
                            <p>Gula Jawa memiliki ciri yang mirip dengan gula merah. Gula Jawa dibuat dari nira pohon kelapa. Gula Jawa berwarna lebih gelap, yakni cokelat kehitaman.</p>
                            <p>Gula Jawa memiliki beberapa varian, tergantung jenis pohon kelapa yang dijadikan sebagai bahan dasar. Di antaranya Gula Jawa Merah yang berasal dari nira kelapa merah, Gula Jawa Putih dari nira kelapa hijau, dan Gula Jawa Muda yang berasal dari nira kelapa muda.</p>
                            <li className="font-bold -ml-1.5">Gula Bit</li>
                            <p>Gula beet merupakan gula yang berasal dari buah bit. Konon, buah bit lebih sehat untuk dikonsumsi dibandingkan gula tebu. Gula bit juga digunakan dalam industri farmasi dan kosmetik.</p>
                            <li className="font-bold -ml-1.5">Gula Jagung</li>
                            <p>Selain gula bit, gula jagung juga menjadi opsi untuk konsumsi gula. Gula jagung biasanya dibuat dengan cara menggiling jagung untuk mendapatkan tepung jagung. Tepung jagung ini nantinya diubah menjadi sirop dan ditambah dengan senyawa tertentu agar mendapat rasa gula seperti pada umumnya. Gula ini juga bisa diproses lagi hingga berbentuk gula pasir. </p>
                        </ul>

                    </>)
                }
            }} />
        </div>
    </div>
}