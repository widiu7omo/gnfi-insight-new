"use client"

import { baseUrl } from "@/constants/meta"
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Carousel } from "@/stories/Carousel";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from 'framer-motion';
import { BoxIcon } from "lucide-react";

export function SectionTwoCustomImage() {
    return <div className="bg-cover relative xl:bg-center bg-[center_top]" >
        <div className="absolute right-0 bottom-0 top-0 left-0 bg-no-repeat bg-cover" />
        <div className="absolute bg-gradient-to-b to-[20%] z-10 left-0 right-0 top-0 bottom-[40%]" />
        <div className="absolute top-0 left-0 right-0 bottom-0" style={{ background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(81,123,44,.1) 61%)' }} />
        <div className="max-w-4xl mx-auto pt-0 z-20">
            <div className="relative flex items-center justify-center">
                <div className="relative flex items-center justify-center">

                    <motion.img
                        initial={{ opacity: 0, y: 20 }}
                        viewport={{ once: true }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        src={`${baseUrl}/assets/2.1.png`} className="relative top-0" alt="Title" />

                    {/* <motion.img
                            initial={{ opacity: 0, y: 20 }}
                            viewport={{ once: true }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            src={`${baseUrl}/assets/2.2.png`} className="absolute top-0" alt="Title" /> */}
                </div>
            </div>
        </div>
        <div className="">
            <Paragraph block={{
                component: COMPONENT_PARAGRAPH,
                componentProps: {
                    className: "",
                    children: (<>
                        <p>Seperti dicatat M. Sumarto dalam <i>Manisnya Dunia Sejarah dan Budaya Gula</i>, berikut di antaranya:</p>
                    </>)
                }
            }} />
        </div>
        <Carousel items={[
            {
                name: "Gula Pasir",
                image: `${baseUrl}/assets/pasir.png`,
                desc: <>
                    <p>Gula pasir merupakan gula yang paling jamak digunakan di Indonesia. Berbentuk butir-butir kecil, gula pasir terbuat dari tebu atau buah bit.</p>
                    <p>Gula pasir memiliki warna tergantung pada tahap pengolahan. Gula pasir yang diolah secara sempurna memiliki warna putih bersih seperti salju. Sementara itu, gula yang tidak diproses sepenuhnya biasanya berwarna cokelat kekuningan.</p></>,
                slug: "gula-pasir"
            },
            {
                name: "Gula Semut",
                image: `${baseUrl}/assets/semut.png`,
                desc: <>
                    <p>Gula semut berbentuk mirip seperti gula pasir. Akan tetapi, yang membedakan ialah bahan baku pembuatan. Gula semut dibuat dari gula kelapa yang diolah dari nira pohon kelapa dan dihaluskan. Gula semut jamak ditemui di Kabupaten Kulon Progo, Daerah Istimewa Yogyakarta (DIY).</p>
                </>,
                slug: "gula-semut"
            },
            {
                name: "Gula Merah",
                image: `${baseUrl}/assets/jawa.png`,
                desc: <>
                    <p>Gula merah terbuat dari nira, yakni cairan manis yang keluar dari batang tanaman. Gula merah biasanya dibuat dari nira dari tanaman sejenis palem, seperti kelapa, aren, dan siwalan.</p>
                    <p>Gula merah berbentuk bulat pipih. Gula merah kerap kali digunakan untuk menambah cita rasa pada masakan Indonesia, di antaranya, klepon, dodol, hingga rendang.</p>
                </>,
                slug: "gula-merah"
            },
            {
                name: "Gula Aren",
                image: `${baseUrl}/assets/aren.png`,
                desc: <>
                    <p>Gula aren kerap kali disamakan dengan gula merah. Padahal, keduanya berbeda, meskipun sama-sama berasal dari nira pohon aren.</p>
                    <p>Bedanya, gula aren hanya dibuat dari nira pohon aren atau enau. Hal ini berbeda dengan gula merah yang dapat dibuat dari nira pohon lainnya.</p>
                    <p>Perbedaan utamanya antara gula merah dan gula aren terletak pada rasanya. Gula aren memiliki rasa yang khas, legit, gurih, <i>smokey</i>, ringan, dan ada sedikit aroma kelapa. Hal ini disebabkan proses pencetakan gula aren menggunakan batok kelapa.</p>
                    <p>Gula aren berwarna cokelat muda dan biasanya dijadikan sebagai bahan pemanis minuman khas Indonesia, seperti cendol, es kelapa muda, hingga es kopi.</p>
                </>,
                slug: "gula-aren"
            },
            {
                name: "Gula Batu",
                image: `${baseUrl}/assets/batu.png`,
                desc: <>
                    <p>Gula batu merupakan gula yang berbentuk kristal-kristal seperti batu. Gula batu adalah gula yang tidak melalui proses kristalisasi tebu. Gula batu juga didapatkan dari proses pemurnian gula pasir atau gula merah. Gula batu biasanya digunakan untuk membuat minuman seperti teh tarik dan kopi susu. </p>
                </>,
                slug: "gula-batu"
            },
            {
                name: "Gula Jawa",
                image: `${baseUrl}/assets/jawa.png`,
                desc: <>
                    <p>Gula Jawa memiliki ciri yang mirip dengan gula merah. Gula Jawa dibuat dari nira pohon kelapa. Gula Jawa berwarna lebih gelap, yakni cokelat kehitaman.</p>
                    <p>Gula Jawa memiliki beberapa varian, tergantung jenis pohon kelapa yang dijadikan sebagai bahan dasar. Di antaranya Gula Jawa Merah yang berasal dari nira kelapa merah, Gula Jawa Putih dari nira kelapa hijau, dan Gula Jawa Muda yang berasal dari nira kelapa muda.</p>
                </>,
                slug: "gula-jawa"
            },
            {
                name: "Gula Bit",
                image: `${baseUrl}/assets/bit.png`,
                desc: <>
                    <p>Gula beet merupakan gula yang berasal dari buah bit. Konon, buah bit lebih sehat untuk dikonsumsi dibandingkan gula tebu. Gula bit juga digunakan dalam industri farmasi dan kosmetik.</p>
                </>,
                slug: "gula-jawa"
            },
            {
                name: "Gula Jagung",
                image: `${baseUrl}/assets/jagung.png`,
                desc: <>
                    <p>Selain gula bit, gula jagung juga menjadi opsi untuk konsumsi gula. Gula jagung biasanya dibuat dengan cara menggiling jagung untuk mendapatkan tepung jagung. Tepung jagung ini nantinya diubah menjadi sirup dan ditambah dengan senyawa tertentu agar mendapat rasa gula seperti pada umumnya. Gula ini juga bisa diproses lagi hingga berbentuk gula pasir. </p>
                </>,
                slug: "gula-jawa"
            },
        ]} indicator={<BoxIcon />} childClassName="text-gray-900" />

    </div>
}