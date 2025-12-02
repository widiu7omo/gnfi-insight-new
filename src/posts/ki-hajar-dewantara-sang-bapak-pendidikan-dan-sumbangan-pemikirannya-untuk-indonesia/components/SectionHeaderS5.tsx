import { Image } from "@/components/post/image";
import { Paragraph } from "@/components/post/paragraph";
import { cn } from "@/lib/utils";
import { motion } from 'motion/react'
export function SectionHeaderS5() {
    return (
        <>
            {/* Header */}
            <div
                className={cn("flex h-full relative flex-col items-center justify-start bg-cover bg-no-repeat bg-[center_top_20%]",
                )}
                style={{
                    backgroundImage: `linear-gradient(to top, #2A201B,rgb(208, 184, 229,0.0)),linear-gradient(0deg, rgb(208, 184, 229,0.0) 0%, rgba(122, 187, 202, 1) 100%),url('assets/5.1.png')`,
                }}
            >
                <motion.img
                    initial={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/5.2.png`} />
                <div className="relative flex md:flex-row flex-col space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-end md:justify-center items-center md:items-end h-[800px] w-full overflow-clip">
                    <motion.img
                        initial={{ x: -20, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="overflow-hidden size-[400px] object-cover"
                        src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/5.3.png`} />
                    <motion.img
                        initial={{ x: 20, opacity: 0 }}
                        transition={{ delay: 0.5 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="overflow-hidden size-[400px] object-cover"
                        src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/5.4.png`} />
                </div>
                {/* Paragraph */}
                <Paragraph className="text-white">
                    <>
                        <p>
                            Setelah menambah fasilitas untuk penyandang disabilitas, giliran anak-anak yang mendapat perhatian. Pada tahun lalu, tepatnya Februari 2023, Badan Pengelola Masjid Istiqlal (BPMI) yang bekerja sama dengan PT Niramas Utama, membangun taman bermain anak yang diberi nama “Taman Persaudaraan”. Taman ini diresmikan bersamaan dengan Milad ke-45 Masjid Istiqlal pada Februari 2023.
                        </p>
                        <p>
                            Keberadaan taman bermain tersebut menjadi contoh tentang bagaimana umat Islam seharusnya mendekatkan anak-anak dengan masjid. Keberadaan taman bermain menunjukkan Masjid Istiqlal yang ramah anak. Arena ini menjadi ruang yang nyaman bagi anak-anak untuk bermain, sekaligus menjadi tempat menjalin silaturahmi persaudaraan antarumat.
                        </p>


                    </>
                </Paragraph>
                <Image imageUrl="assets/5.5.png"
                    imageAlt="Kegiatan di masjid Istiqlal" />
                <Paragraph className="text-white">
                    <>
                        <p>
                            Dengan segala kegiatan, semangat toleransi, keterbukaan, dan inklusivitasnya, Masjid Istiqlal akhirnya tampil sebagai “rumah” bagi segenap masyarakat Indonesia, apapun latar belakangnya. Dalam satu kesempatan, Ketua Harian Badan Pengelola Masjid Istiqlal (BPMI), Dr. Ismail Chawidu menyampaikan kepada GFNI perihal sebuah tujuan mulia di balik begitu hidupnya masjid ini.
                        </p>
                        <p>
                            “Jadi, masjid berfungsi tidak hanya untuk pelaksanaan peribadatan. Visi Istiqlal itu sudah mengarah kepada bagaimana pemberdayaan umat,” ujar Ismail.
                        </p>
                    </>
                </Paragraph>
            </div>
        </>
    );
}
