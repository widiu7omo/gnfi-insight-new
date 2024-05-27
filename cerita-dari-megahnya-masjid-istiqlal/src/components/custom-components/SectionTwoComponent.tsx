"use client"
import { COMPONENT_IMAGE, COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Image } from "@/stories/Image";
import { Paragraph } from "@/stories/Paragraph";
import { motion } from "framer-motion";

export function SectionTwoComponent() {
    return <>
        <section className="bg-gradient-to-b from-[#ffeca8] to-[#FEDC60] text-black">
            <div className="w-full relative">
                <img src="/assets/istiqlal.webp" alt="Masjid Istiqlal" className="w-full h-screen relative sm:h-[500px] object-cover object-center " />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/55" />
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="max-w-5xl text-center text-3xl font-bold leading-snug text-white lg:text-4xl xl:text-5xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                >
                    Masjid Penuh Simbol
                </motion.h2>
            </div>
            <Paragraph block={{
                component: COMPONENT_PARAGRAPH,
                componentProps: {
                    children: (<>
                        <p>
                            Jika kawan GNFI datang ke Masjid Istiqlal, tidak banyak hiasan atau ornamen yang terlihat sehingga suasana yang dihasilkan cenderung lebih clean. Di bagian mihrab atau tempat imam terdapat kiswah, yakni bekas kain penutup ka’bah
                            yang merupakan hadiah dari Raja Arab Saudi.
                        </p>
                    </>)
                }
            }} />

            <Image block={{
                component: COMPONENT_IMAGE,
                componentProps: {
                    imageUrl: '/assets/ragam-simbol-masjid.webp',
                    imageAlt: "Ragam Simbol Masjid",
                }
            }} />
            <Paragraph block={{
                component: COMPONENT_PARAGRAPH,
                componentProps: {
                    children: (<>
                        <p>
                            Masjid Istiqlal mengadopsi konsep bangunan tropis dengan tidak menggunakan jendela atau pintu sehingga udara dapat bebas masuk ke dalam masjid. Konsep itu digunakan untuk menciptakan kesan sejuk secara alami sehingga
                            meminimalisir penggunaan AC.
                        </p>
                        <p>
                            Masjid Istiqlal selain dikenal akan sejarahnya, juga dikenal dengan fasilitas yang sangat nyaman. Bahkan, setiap bagian dari bangunannya memiliki makna tersendiri. Karena masjid ini adalah wujud rasa syukur atas kemerdekaan,
                            banyak simbol-simbol dalam Masjid Istiqlal yang merujuk pada keislaman dan keindonesiaan.
                        </p>
                        <p>
                            “Desain arsitektur Masjid Istiqlal ini mengandung beberapa simbol terkait dengan nilai-nilai Islam atau simbol-simbol Islam, dan juga terkait nilai-nilai atau simbol negara,” papar Saparwadi.
                        </p>
                    </>)
                }
            }} />
        </section>
        <section className="relative bg-black" style={{ background: "url('/assets/tiang.jpeg'),linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,1))", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
            <div className="bg-gradient-to-b from-black via-black/50 to-black h-full z-0 w-full absolute top-0 " />
            <div className="mx-auto prose py-8 flex flex-col relative">
                <Paragraph block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        className: "text-custom-yellow",
                        children: (<>
                            <p>
                                Masjid Istiqlal tersusun dalam lima lantai yang merupakan lambang dari Rukun Islam. Lima lantai masjid juga merujuk pada Dasar Negara Republik Indonesia, yakni Pancasila. Kelima lantai tersebut disangga oleh tiang-tiang dengan
                                berbagai ukuran.
                            </p>

                            <p>
                                Tiang berukuran kecil berjumlah sekitar 4 ribu, sedangkan tiang yang berukuran besar berjumlah 12 buah. Angka 12 tersebut merujuk pada tanggal lahir Nabi Muhammad SAW, yakni 12 Rabiul Awwal.
                            </p>

                            <p>
                                Dari luar, Masjid Istiqlal juga terlihat kubah besar di bagian atas bangunan. Itu adalah kubah utama dengan diameter 45 meter yang merujuk pada tahun kemerdekaan Republik Indonesia, yakni 1945. Selain itu, Masjid Istiqlal juga
                                memiliki kubah kedua yang berdiameter 8 meter. Angka tersebut menunjukkan bahwa Kemerdekaan Indonesia tepat pada bulan ke-8, yakni Agustus. Di atas kubah utama terdapat simbol bulan bintang dengan ketinggian 17 meter yang
                                merujuk pada tanggal kemerdekaan Republik Indonesia.
                            </p>
                        </>)
                    }
                }} />
                <div className="bg-[#FEDC60] text-black p-5 flex flex-col gap-5">
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative">
                        <img src="/assets/tiang.webp" alt="tiang raksasa" className="relative w-full h-full object-cover opacity-85 m-0" />
                        <div className="absolute bottom-0 bg-white w-full p-1">
                            <p className="text-sm sm:text-lg font-semibold px-2 my-0">
                                12 Tiang Raksasa - <span className="font-thin text-sm">Tanggal Lahir Nabi Muhammad SAW, 12 Rabiul Awwal</span>
                            </p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative">
                        <img src="/assets/lima-lantai.webp" alt="lima lantai" className="relative w-full h-full object-cover opacity-85 m-0" />
                        <div className="absolute bottom-0 bg-white w-full p-1">
                            <p className="text-sm sm:text-lg font-semibold px-2 my-0">
                                Lima lantai - <span className="font-thin text-sm">Rukun Islam dan Pancasila</span>
                            </p>
                        </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="relative">
                        <img src="/assets/kubah-masjid.webp" alt="kubah masjid" className="relative w-full h-full object-cover opacity-85 m-0" />
                        <div className="absolute bottom-0 bg-white w-full p-1">
                            <p className="text-sm sm:text-lg font-semibold px-2 my-0">
                                Kubah berdiameter 45 dan 8 meter, plus simbol bulan bintang setinggi 17 meter - <span className="font-thin text-sm">Tanggal Kemerdekaan Indonesia, 17 Agustus 1945</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
                <Paragraph block={{
                    component: COMPONENT_PARAGRAPH,
                    componentProps: {
                        className: "text-custom-yellow",
                        children: (<>
                            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                Sementara itu, menara Masjid Istiqlal hanya satu ini menunjukkan bahwa Allah itu esa. Tingginya yang 6666 cm atau 66,66 meter melambangkan jumlah ayat Al Qur’an, dengan bentuk seperti obor atau lilin yang merepresentasikan bahwa
                                Masjid Istiqlal berfungsi sebagai cahaya penunjuk jalan. Di bagian puncak menara terdapat besi anti petir dengan ketinggian 30 meter yang merujuk pada jumlah juz dalam Al Qur’an.
                            </motion.p>
                            <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                                Jika ditotal, menara Masjid Istiqlal memiliki ketinggian 114 meter yang menyimbolkan jumlah surat dalam Al Qur’an.
                            </motion.p></>)
                    }
                }} />
            </div>
        </section>
    </>
}