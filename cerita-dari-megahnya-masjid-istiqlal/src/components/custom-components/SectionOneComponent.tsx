"use client"
import ImageAnimation from "../animation/Image";
import Image from "next/image";
import Heading from "../animation/Heading";
import { Paragraph } from "@/stories/Paragraph";
import { COMPONENT_HERO, COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Hero } from "@/stories/Hero";
import { motion } from 'framer-motion'
export function SectionOneComponent() {
    return <>
        <Hero
            block={{
                component: COMPONENT_HERO,
                componentProps: {
                    coverUrl: "assets/cover-1.jpg",
                    title: (<motion.h1
                        viewport={{ once: true }}
                        initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: -20 }}
                        className="max-w-full xl:max-w-[80%] text-center text-4xl font-bold !leading-snug text-white lg:text-5xl xl:text-7xl"
                    >
                        <span className="font-bold">Masjid</span>
                        {" "}
                        <span className="italic">Istiqlal</span>
                    </motion.h1>),
                    swipeUpIcon: 'chevrons-down',
                    gradientColor: "bg-gradient-to-t from-[rgb(254_220_96/1)] from-[0%] to-[60%]"
                }
            }} />
        <section className="relative flex items-center justify-center flex-col min-h-screen space-y-6 sm:space-y-10 bg-custom-yellow pb-20 pt-80 text-black lg:px-20 overflow-hidden">
            <Heading
                className="prose py-8 px-4 xl:px-0 text-center mx-auto"
                color="#000"
            >
                <h3 className="heading">
                    Sejarah <span className="font-bold italic">Masjid Istiqlal</span>{" "}
                    Sebagai Simbol{" "}
                    <span className="font-bold italic">Kemerdekaan Indonesia</span>.
                </h3>
            </Heading>
            <ImageAnimation start="right">
                <Image
                    src={`/assets/pahlawan.png`}
                    alt=""
                    width={1080}
                    height={893}
                    className="z-50 mx-auto max-w-4xl"
                />
            </ImageAnimation>
            <ul className="space-y-12 sm:space-y-20 max-w-4xl w-full">
                <ImageAnimation start="left" className="timeline-box-1 !rounded-none sm:!rounded-xl">
                    <h1 className="text-center text-3xl sm:text-5xl font-bold xl:text-7xl">1950</h1>
                    <p className="text-xs sm:text-sm font-light xl:text-xl">
                        Sejumlah tokoh Islam menggelar rapat di Deca Park untuk membahas
                        pembangunan masjid. Tokoh yang mengikuti rapat di antaranya Anwar
                        Tjokroaminoto, Taufiqurrahman, dan Wahid Hasyim.
                    </p>
                </ImageAnimation>
                <ImageAnimation start="right" className="">
                    <div className="relative flex flex-col items-start justify-center">
                        <div className="absolute sm:bg-gradient-to-tr bg-gradient-to-r xl:bg-gradient-to-tr from-[20%] to-[60%] from-black to-white/0 h-full flex items-end">
                            <div className="w-[80%] xl:w-[60%] sm:w-[40%]">
                                <div className="flex flex-col justify-start items-start">
                                    <ImageAnimation start="left" className="bg-transparent p-5 text-custom-yellow">
                                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold xl:text-7xl">1955</h1>
                                        <p className="text-xs sm:text-sm font-light xl:text-xl">
                                            Pemerintah mengadakan sayembara maket Masjid Istiqlal dan
                                            menggalang dana dari masyarakat untuk membiayai pembangunan.
                                        </p>
                                    </ImageAnimation>
                                    <ImageAnimation start="left" className="bg-transparent p-5 text-custom-yellow">
                                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold xl:text-7xl">1954</h1>
                                        <p className="text-xs sm:text-sm font-light xl:text-xl">
                                            Yayasan Masjid Istiqlal diresmikan setelah Presiden Sukarno
                                            menyetujui rencana pembangunan masjid.
                                        </p>
                                    </ImageAnimation>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={"/assets/doc-2.png"}
                            alt=""
                            width={750}
                            height={512}
                            className="w-full h-auto"
                        />
                    </div>
                    <p className="p-1 text-justify text-xs tracking-wider max-md:text-xs">
                        Presiden Sukarno dan dewan juri sayembara perancangan Masjid
                        Istiqlal berfoto dengan tiga panel gambar karya F. Silaban
                        yang ditetapkan sebagai pemenang pada 1955. Sumber: Selayang
                        pandang Masjid Istiqlal (1987).
                    </p>
                </ImageAnimation>
                <ImageAnimation start="right" className="">
                    <div className="relative flex flex-col items-end justify-center">
                        <div className="absolute w-full sm:bg-gradient-to-tl bg-gradient-to-l xl:bg-gradient-to-tl from-[20%] to-[60%] from-black to-white/0 h-full flex items-end">
                            <div className="flex flex-col justify-start items-end">
                                <div className="w-[80%] xl:w-[60%] sm:w-[60%]">
                                    <ImageAnimation start="right" className="bg-transparent p-5 text-custom-yellow">
                                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold xl:text-7xl text-right">1961</h1>
                                        <p className="text-xs md:text-sm font-light xl:text-xl text-right">
                                            Pemerintah mengadakan sayembara maket Masjid Istiqlal dan
                                            menggalang dana dari masyarakat untuk membiayai pembangunan.
                                        </p>
                                    </ImageAnimation>
                                    <ImageAnimation
                                        start="right"
                                        className="bg-transparent p-5 text-custom-yellow"
                                    >
                                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold xl:text-7xl text-right">1978</h1>
                                        <p className="text-xs md:text-sm font-light xl:text-xl text-right">
                                            Masjid Istiqlal selesai dibangun, peresmiannya dihadiri oleh
                                            Presiden Suharto.
                                        </p>
                                    </ImageAnimation>
                                </div>
                            </div>
                        </div>
                        <Image
                            src={"/assets/doc-1.png"}
                            alt=""
                            width={772}
                            height={462}
                            className="h-auto w-full"
                        />
                    </div>
                    <p className="p-1 text-justify text-xs tracking-wider">
                        KOMPAS/H Kodhyat Persiapan pengecoran kubah Masjid Istiqlal
                        pada awal Agustus 1971. Lokasi masjid negara yang tengah
                        dibangun itu bersebelahan dengan Gereja Katheral Jakarta.
                    </p>
                </ImageAnimation>
            </ul>
        </section>
        <section className="relative flex flex-col items-center space-y-6 sm:space-y-10 bg-white pb-20 pt-10 text-black md:pt-40 overflow-hidden">
            <Heading
                className="prose py-8 px-4 xl:px-0 text-center mx-auto"
                color="#000"
            >
                <h3 className="heading">
                    Ide <span className="font-bold italic">Proklamasi</span> hingga
                    Monumen <span className="font-bold italic">Keagungan Nasional</span>.
                </h3>
            </Heading>
            <ImageAnimation start="left">
                <Image
                    src={"/assets/doc-3.png"}
                    alt=""
                    width={700}
                    height={393}
                    className="h-auto w-full"
                />
            </ImageAnimation>
            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        children: (<>
                            <p>
                                Empat tahun pascaproklamasi kemerdekaan, tokoh agama Islam di Tanah
                                Air mulai membicarakan rencana pendirian masjid monumental yang
                                agung dan megah. Bangunan itu perlu untuk menunjukkan identitas
                                Indonesia sebagai negara berpenduduk muslim terbesar sedunia.
                            </p>
                            <p>
                                Achmad Rizki Nugraha dalam Pandangan Politik Soekarno dalam
                                Membangun Masjid Istiqlal mencatat bahwa pada 1950, Wahid Hasyim
                                yang saat itu menjabat Menteri Agama (Menag) RI bersama anak tokoh
                                Syarikat Islam, Anwar Tjokroaminoto, menggelar pertemuan di Deca
                                Park, Jalan Medan Merdeka Utara, tak jauh dari Istana Merdeka.
                                Sekitar 200—300 orang tokoh Islam hadir mengikuti rapat yang
                                dipimpin Mantan Menag RI, Taufiqurrahman.
                            </p>
                            <p>
                                Pertemuan itu membentuk pengurus Yayasan Masjid Istiqlal. Para
                                hadirin sepakat, Anwar Tjokroaminoto menjadi ketua. Setelah rapat
                                usai, sejumlah tokoh Islam mengajukan ide kepada Anwar untuk
                                membangun Masjid Istiqlal di ibu kota Jakarta. Lantas, dia pun
                                menyampaikan ide itu kepada Presiden RI Sukarno.
                            </p>
                            <p>
                                Sukarno ternyata setuju dan menyatakan siap membantu pembangunan
                                masjid tersebut. Singkat cerita, Yayasan Masjid Istiqlal diresmikan
                                di depan Notaris Elisa Pondaag pada 7 Desember 1954. Sukarno
                                diangkat sebagai kepala bagian teknik.
                            </p>
                        </>)
                    }
                }}
            />
        </section>
        <section className="relative flex flex-col items-center space-y-6 sm:space-y-10 pt-10 text-custom-yellow px-0 md:px-20 md:pt-40 overflow-hidden">
            <Image
                src={"/assets/cover-3.png"}
                alt=""
                width={1739}
                height={1737}
                className="absolute bottom-0 h-auto w-full opacity-50"
            />
            <div className="absolute -bottom-40 left-0 -z-10 h-[40rem] w-full bg-gradient-to-t from-transparent via-[rgb(0_0_0/1)_30%] to-transparent" />
            <Heading
                className="prose py-8 px-4 xl:px-0 text-center mx-auto"
                color="#FEDC60">
                <h3 className="heading">
                    <span className="italic">Sayembara</span> dan{" "}
                    <span className="italic">Lokasi</span>: Perjalanan Awal Pembangunan{" "}
                    <span className="italic">Masjid Istiqlal</span>
                </h3>
            </Heading>

            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        children: (
                            <>
                                <p>
                                    Setelah panitia terbentuk dan lokasi pembangunan masjid ditentukan,
                                    pemerintah mengadakan sayembara maket Masjid Istiqlal. Kegiatan ini
                                    diumumkan melalui surat kabar dan media massa pada 22 Februari 1955
                                    dan ditutup pada 30 Mei 1955. Sukarno bertindak sebagai ketua dewan
                                    juri.
                                </p>
                                <p>
                                    Setelah menggelar berkali-kali sidang di Istana Negara, dewan juri
                                    akhirnya memutuskan maket milik arsitek Friedrich Silaban sebagai
                                    pemenang dengan sandi “Ketuhanan”. Kemudian, perdebatan muncul saat
                                    menentukan lokasi pembangunan Masjid Istiqlal. Hingga akhirnya,
                                    Sukarno memutuskan masjid ini dibangun di Taman Wijaya Kusuma yang
                                    dahulu bernama Wilhelmina Park.
                                </p>
                            </>
                        )
                    }
                }}
            />
            <div className="flex w-full flex-col items-center">
                <ImageAnimation start="right">
                    <Image
                        src={"/assets/doc-4.png"}
                        alt=""
                        width={920}
                        height={420}
                        className="full h-auto"
                    />
                    <p className="w-full px-4 text-sm tracking-wider text-gray-500">
                        Wilhelmina Park. Tropen museum
                    </p>
                </ImageAnimation>
            </div>
            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        children: (
                            <>
                                <p>
                                    Wilhelmina Park pernah digunakan sebagai tempat penobatan nenek Ratu
                                    Beatrix, yaitu Ratu Wilhelmina, pada 1898. Taman ini terletak di
                                    sebelah tenggara kawasan Weltervreden dan dihiasi pepohonan rindang.
                                    Di sana, terdapat dua alur sungai Ciliwung dan beberapa jembatan
                                    yang menghubungkan kedua tepiannya. Di tengah Wilhelmina Park, ada
                                    sebuah benteng yang dibangun Gubernur Jenderal van der Bosch pada
                                    1834, yakni Citadel Frederik Henderik.
                                </p>
                            </>
                        )
                    }
                }}
            />
        </section>
        <section className="relative flex flex-col items-center space-y-6 sm:space-y-10 pt-10 text-custom-yellow lg:px-20 overflow-hidden">
            <Heading
                className="prose py-8 px-4 xl:px-0 text-center mx-auto"
                color="#FEDC60">
                <h3 className="heading">
                    Proses Panjang Pembangunan Masjid Istiqlal:{" "}
                    <span className="italic">Pembongkaran Benteng</span> dan{" "}
                    <span className="italic">Kendala Dana</span>.
                </h3>
            </Heading>


            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        children: (
                            <>
                                <p>
                                    Pada 26 November 1954, Pemerintah Kota Jakarta mulai membongkar
                                    kompleks Benteng tersebut untuk dijadikan lahan bangunan Masjid
                                    Istiqlal. Pada 1960, ribuan orang dari berbagai daerah datang untuk
                                    membersihkan taman itu yang dahulu sepi, kotor, tak terurus. Mereka
                                    bahkan membawa peralatan sendiri.
                                </p>
                                <p>
                                    Proses pembangunan Masjid Istiqlal cukup lama. Pembongkaran benteng
                                    saja menghabiskan waktu nyaris satu setengah tahun karena petugas
                                    mesti menghancurkan terowongan bawah tanah. Selama pembongkaran,
                                    petugas menemukan juga bagian benteng berupa terowongan Berland
                                    Matraman yang dahulu menjadi tempat pelatihan militer. Pemerintah
                                    mengerahkan prajurit Zeni Angkatan darat untuk menghancurkan benteng
                                    menggunakan dinamit.
                                </p>
                                <p>
                                    Di samping itu, jalur kereta api di sebelah proyek Masjid Istiqlal
                                    dipindahkan ke daerah pinggiran. Gedung-gedung milik angkatan darat
                                    di sekitar masjid juga dibongkar untuk menyediakan lapangan parkir
                                    dan halaman kosong sebagai penyeimbang dari kemegahan dan luasnya
                                    masjid ini.
                                </p>
                                <p>
                                    &ldquo;Dibangun pada masa Presiden Sukarno, lalu diresmikan atau
                                    selesai pembangunannya pada 1978 oleh Presiden Suharto. Hampir 17
                                    tahun untuk membangun masjid Istiqlal yang besar ini,&rdquo; ujar
                                    Kasubbag Humas Badan Pengelola Masjid Istiqlal (BPMI), Saparwadi
                                    dalam acara GNFI Virtual Tour Jelajah Kota Eps 1: Masjid Istiqlal.
                                </p>
                                <p>
                                    Awalnya, pemerintah tidak punya modal yang cukup untuk membangun
                                    Masjid Istiqlal ini. Pada malam pengumuman hasil sayembara di Istana
                                    Negara, biaya yang terkumpul baru berjumlah Rp 442.000. Kekurangan
                                    dana juga menjadi faktor yang menyebabkan pembangunan masjid ini
                                    berlangsung lama. Sepanjang 1961—1965, pemerintah mengeluarkan dana
                                    sebesar Rp. 3.044.421.717,47.
                                </p>
                            </>
                        )
                    }
                }}
            />

            <Image
                src={"/assets/cover-4.png"}
                alt=""
                width={2178}
                height={1226}
                className="absolute bottom-0 h-auto w-full opacity-50"
            />
            <div className="absolute -bottom-20 left-0 -z-10 h-[20rem] w-full bg-gradient-to-t from-[rgb(0_0_0/1)_10%] to-transparent" />
        </section>
        <section className="pb-12 sm:pb-[30rem] relative flex flex-col items-center space-y-6 sm:space-y-10 pt-10 lg:px-20 overflow-hidden text-custom-yellow">
            <Heading
                className="prose py-8 px-4 xl:px-0 text-center mx-auto"
                color="#FEDC60">
                <h3 className="heading">
                    Gerakan <span className="italic">Penggalangan Dana</span> dan{" "}
                    <span className="italic">Makna</span> di Balik Nama Masjid Istiqlal.
                </h3>
            </Heading>

            <Paragraph
                block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        children: (
                            <>
                                <p>
                                    Pada 1955, pemerintah mengumumkan seruan kepada umat Islam untuk
                                    membantu menggalang dana pembangunan Masjid Istiqlal. Gerakan
                                    masyarakat untuk pembangunan Masjid Istiqlal pun tumbuh karena
                                    taksiran dana yang berubah seiring dengan nilai mata uang saat itu
                                    tidak stabil.
                                </p>
                                <p>
                                    Sedikit demi sedikit dana pun terkumpul. Para tokoh Islam saat itu
                                    meyakini, berapapun dana yang dibutuhkan, asal proyek mulai
                                    dikerjakan, maka masalah keuangan dapat diusahakan. Akhirnya, tiang
                                    pertama Masjid Istiqlal mulai dipancangkan pada 24 Agustus 1961.
                                </p>
                                <p>
                                    Bukan tanpa alasan pula masjid ini diberi nama Istiqlal yang dalam
                                    Bahasa Arab berarti “Merdeka”. Ada makna mendalam di balik nama
                                    tersebut.
                                </p>
                                <p>
                                    &ldquo;Masjid Istiqlal ini adalah salah satu monumen wujud rasa
                                    syukur, rasa terima kasih yang sebesar besarnya kepada Tuhan yang
                                    maha pencipta, Allah Subhanahu Wa Ta&apos;ala atas anugerah,
                                    pemberian, kemerdekaan Republik Indonesia&rdquo;, kata Saparwadi.
                                </p>
                            </>
                        )
                    }
                }}
            />
            <Image
                src={"/assets/cover-5.png"}
                alt=""
                width={1703}
                height={959}
                className="absolute bottom-0 h-auto w-full"
            />
            <div className="absolute bottom-0 left-0 -z-10 h-[20rem] w-full bg-gradient-to-t from-[#FEDC60]/50 to-transparent" />
        </section>
    </>
}
