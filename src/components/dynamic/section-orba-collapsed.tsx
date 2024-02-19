"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
export default function SectionOrbaCollapsed() {
  let indexImage = 0;
  const containerAnimate = {
    visible: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  useEffect(() => {
    if (isInView) {
      animate(
        "p",
        { opacity: 1, y: 0 },
        { delay: stagger(0.1, { startDelay: 0.15 }), duration: 0.3 }
      );
    } else {
      animate("p", { opacity: 0, y: 20 });
    }
  }, [isInView, animate]);
  const [scopeP2, animateP2] = useAnimate();
  const isInViewP2 = useInView(scopeP2, { once: true });
  useEffect(() => {
    if (isInViewP2) {
      animateP2(
        "p",
        { opacity: 1, y: 0 },
        { delay: stagger(0.1, { startDelay: 0.15 }), duration: 0.3 }
      );
    } else {
      animateP2("p", { opacity: 0, y: 20 });
    }
  }, [isInViewP2, animateP2]);
  return (
    <div className="bg-[#1A1218] w-full py-12 mx-auto relative">
      <div className="mx-auto flex items-center justify-center flex-col">
        <motion.h5
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white font-bold leading-snug text-2xl md:text:3xl lg:text-4xl xl:text-5xl text-center max-w-4xl mx-auto py-0 lg:py-14"
        >
          Orde Baru Runtuh, Lahirlah Pemilu Luber Jurdil
        </motion.h5>
        <div className="h-[350px] xl:h-[800px] w-full relative flex justify-center items-center">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="!bg-cover absolute z-0 w-full xl:w-[calc(100%-32rem)] flex items-center justify-center h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(26, 18, 24, 0.6), rgba(26, 18, 24, 0.6)), url('pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/collapsed/collapse.jpg')",
              filter: "blur(50px)",
              transform: "scale(1.1)",
            }}
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/collapsed/collapse.jpg"
            alt="Demo"
            className="absolute w-full xl:w-[1000px] z-20 px-4 xl:px-0"
          />
        </div>
        <div className="prose text-white mx-auto z-50 px-4 xl:px-0" ref={scope}>
          <p>
            Rezim Orde Baru beserta kedigdayaan Golkar runtuh pada 1998.
            Kejadian ini mengubah struktur politik dan ketatanegaraan di
            Indonesia.
          </p>
          <p>
            Suharto mengundurkan diri dari kursi Presiden RI pada 21 Mei 1998
            saat masa jabatannya nyaris 32 tahun. Momen bersejarah itu diawali
            krisis moneter dan fiskal sepanjang Juli—Agustus 1997, lalu
            berlanjut hingga tahun berikutnya.
          </p>
          <p>
            Sidang Umum Majelis Permusyawaratan Rakyat (MPR) RI pada 10 Maret
            1998 memutuskan Suharto kembali menjadi presiden hingga 2003,
            berpasangan dengan Bacharudin Jusuf (B.J.) Habibie. Pengumuman ini
            membuat rakyat tambah berang.
          </p>
          <p>
            Ribuan mahasiswa dan masyarakat umum turun ke jalan. Gelombang unjuk
            rasa gempar di seluruh Indonesia. Empat orang mahasiswa Universitas
            Trisakti Jakarta dilaporkan tewas tertembak saat berdemonstrasi di
            gedung DPR/MPR RI pada 12 Mei 1998. Peristiwa itu hingga kini
            diperingati sebagai Tragedi Trisakti. Situasi semakin tidak
            terkendali. Desakan mundur terus berdatangan, termasuk dari para
            aktivis dan cendekiawan.
          </p>
          <p>
            Tuntutan “Presiden Turun” untuk Soeharto mencapai puncaknya ketika
            Ketua DPR/MPR RI saat itu, Harun Mohamad Kohar alias Harmoko,
            menyampaikan permintaan agar Suharto melepas jabatannya. Tepat 21
            Mei 1998, Suharto mengumumkan pengunduran dirinya di Credentials
            Room, Istana Merdeka, Jakarta. Jabatan presiden pun dia serahkan
            kepada sang wakil, Habibie. Saat itu juga, Ketua Mahkamah Agung,
            Muladi, melantik Habibie sebagai Presiden RI ketiga pada pukul 09.10
            WIB.
          </p>
        </div>
      </div>

      <div className="mx-auto flex items-center justify-center flex-col">
        <div className="h-[350px] xl:h-[800px] w-full relative flex justify-center items-center">
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="!bg-cover absolute z-0 w-full xl:w-[calc(100%-32rem)] flex items-center justify-center h-full"
            style={{
              background:
                "linear-gradient(0deg, rgba(26, 18, 24, 0.6), rgba(26, 18, 24, 0.6)),url('pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/collapsed/collapse2.png')",
              filter: "blur(50px)",
              transform: "scale(1.1)",
            }}
          />
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            src="pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/collapsed/collapse2.png"
            alt="Demo 2"
            className="absolute w-full xl:w-[1000px] z-20 px-4 xl:px-0"
          />
        </div>
        <div
          className="prose text-white mx-auto z-20 px-4 xl:px-0"
          ref={scopeP2}
        >
          <p>
            Era reformasi pun dimulai. Di bawah tangan Habibie, pemilu
            legislatif kembali digelar pada Senin, 7 Juni 1999. Pesta demokrasi
            kali ini dianggap publik sebagai pemilu Indonesia yang paling
            langsung, umum, bebas, rahasia, jujur, dan adil alias Luber Jurdil,
            setelah terakhir kali pada 1955.
          </p>
          <p>
            Sejak 1999, Indonesia tetap melaksanakan pemilu setiap lima tahun
            sekali. Kebebasan pers dan berpendapat menguat di era Habibie.
            Pemilu legislatif 1999 berkonsep multipartai. Parpol menjamur pada
            masa Reformasi setelah Habibie mengesahkan UU No.2 Tahun 1999
            Tentang Parpol, UU No.3 Tahun 1999 tentang Pemilu, dan UU No.4 Tahun
            1999 Tentang MPR dan DPR.
          </p>
          <p>
            Sebanyak 48 parpol mengikuti kontestasi Pemilu 1999. Pemungutan
            suara dilaksanakan serentak di seluruh Indonesia pada 7 Juni 1999
            untuk memilih 462 anggota Dewan Perwakilan Rakyat (DPR), Dewan
            Perwakilan Rakyat Daerah (DPRD) Provinsi, dan DPRD Kabupaten/Kota
            periode 1999—2004.
          </p>
          <p>
            Pada tahun itu, untuk pertama kalinya, Komisi Pemilihan Umum (KPU),
            selaku penyelenggara pemilu bersifat independen. Pemilu 1999
            terlaksana sangat terbuka dan transparan karena melibatkan lembaga
            pengawas independen dalam dan luar negeri.
          </p>
          <p>
            Menurut Bahrul Ulum dalam{" "}
            <i>
              Bodohnya NU apa NU dibodohi?: Jejak Langkah NU Era Reformasi:
              Menguji Khittah, Meneropong Paradigma Politik,
            </i>
            sejumlah lembaga pemantau pemilu independen menilai Pemilu 1999 jauh
            lebih baik dan memenuhi syarat sebagai pemilu yang demokratis atau{" "}
            <i>free</i> and <i>fair election</i>.
          </p>
        </div>
      </div>
      <div className="relative h-[1230px] xl:h-[1800px] flex flex-col items-center">
        <div className="flex flex-row items-start justify-center w-full h-fit xl:h-[1500px] z-0">
          <motion.div
            viewport={{ once: true }}
            className="relative w-full h-[785px]"
            initial="hidden"
            whileInView="visible"
            variants={containerAnimate}
          >
            {new Array(7).fill(0).map((_, i) => {
              indexImage++;
              return (
                <motion.img
                  viewport={{ once: true }}
                  variants={item}
                  key={`${
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    i
                  }`}
                  className={`absolute z-0 w-full xl:w-[50%] left-0 xl:left-[25%]`}
                  src={`pemilu-dan-dinamikanya-dari-masa-ke-masa/assets/collapsed/${indexImage}.png`}
                  alt={indexImage.toString()}
                />
              );
            })}
          </motion.div>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
          variants={containerAnimate}
          className="prose absolute bottom-0 text-white mx-auto z-10 px-4 xl:px-0"
        >
          <motion.p variants={item} viewport={{ once: true }}>
            Meski dianggap demikian, Pemilu 1999 masih mengadopsi sistem Pemilu
            Orde Baru. Beberapa di antaranya: penggunaan sistem proporsional
            daftar tertutup, susunan MPR masih menggunakan utusan daerah dan
            golongan, KPU masih melibatkan pemerintah ditambah anggota parpol.
          </motion.p>
          <motion.p variants={item} viewport={{ once: true }}>
            Setelah pemilihan dewan legislatif selesai, MPR RI menggelar sidang
            umum untuk memilih presiden dan wakil presiden. Pemilihan presiden
            Indonesia berlangsung pada 20 Oktober 1999, sedangkan pemilihan
            wakil presiden dilaksanakan pada 21 Oktober.
          </motion.p>
          <motion.p variants={item} viewport={{ once: true }}>
            Dalam pemilu tidak langsung itu, Abdurrahman Wahid alias Gus Dur
            dilantik sebagai Presiden RI bersama wakilnya, Megawati
            Soekarnoputri. Dua tahun kemudian, terjadi pergantian presiden. MPR
            RI mengadakan sidang istimewa dan menetapkan Megawati sebagai
            presiden, menggantikan Gus Dur, dan Hamzah Haz sebagai wakilnya.
            Itulah pemilihan presiden tidak langsung terakhir di era Reformasi.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
