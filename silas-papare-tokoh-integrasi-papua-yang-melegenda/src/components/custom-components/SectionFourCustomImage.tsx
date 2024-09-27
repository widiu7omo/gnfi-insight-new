"use client";
import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionFourCustomImage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      className="relative bg-cover flex flex-col min-h-screen"
      style={{ backgroundImage: `url('${baseUrl}/assets/4.5.png')` }}
    >
      <img src={`${baseUrl}/assets/4.0.png`} className="absolute top-0 left-0 w-full" alt="Background" />
      <div className="grid grid-cols-2 mx-auto max-w-4xl pt-[340px] max-sm:-mt-40 2xl:pt-[480px]">
        <motion.div
          className="space-y-5 lg:pt-20 xl:pt-56"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1
            className="bg-red-500 text-base whitespace-nowrap lg:text-3xl p-1 lg:p-2 font-bold text-white text-center w-fit"
            variants={fadeIn}
          >
            Perjuangan Silas Papare
          </motion.h1>
          <motion.h1
            className="font-black text-[#5A0E0E] text-4xl lg:text-6xl"
            variants={fadeIn}
          >
            Demi Integrasi Irian dengan NKRI
          </motion.h1>
          <motion.ul
            className="px-5 text-lg lg:text-2xl space-y-5 w-full lg:w-3/4"
            style={{ listStyleImage: `url('${baseUrl}/assets/list.png')` }}
            variants={staggerChildren}
          >
            <motion.li variants={fadeIn}>
              <span>
                Meski awalnya bekerja untuk Belanda dan Sekutu, Silas berbelok
                arah saat keduanya menguasai Papua. Ia menyatakan pro terhadap
                kemerdekaan Indonesia dan tak mau mendukung Netherlands Indies
                Civil Administration (NICA).
              </span>
            </motion.li>
            <motion.li variants={fadeIn}>
              Keberpihakan Silas tak lepas dari pertemuannya dengan berbagai
              tokoh yang sama-sama menginginkan Indonesia merdeka, mulai dari
              Sugoro hingga Sam Ratulangi.
            </motion.li>
          </motion.ul>
          <motion.img
            src={`${baseUrl}/assets/4.2.png`}
            variants={fadeIn}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
        <div className="bg-[#0C6958] text-white -mt-20 xl:mt-0 ">
          <motion.img
            src={`${baseUrl}/assets/4.4.png`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          />
          <motion.ul
            className="px-8 text-lg lg:text-2xl space-y-5 w-full lg:w-3/4 "
            style={{ listStyleImage: `url('${baseUrl}/assets/list.png')` }}
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.li variants={fadeIn}>
              <span>
                Ngotot mendukung kemerdekaan Indonesia, Silas berkali-kali ingin
                memberontak kepada Belanda. Namun, rencana pemberontakan itu
                selalu gagal hingga membuatnya langganan masuk penjara
              </span>
            </motion.li>
            <motion.li variants={fadeIn}>
              Selain pemberontakan, Silas juga menempuh jalur perjuangan melalui
              Partai Kemerdekaan Indonesia lrian (PKII). Dalam perjalanannya,
              organisasi ini terus berkibar bersama gerakan-gerakan lainnya yang
              sejalur, kendati Belanda menganggapnya berbahaya.
            </motion.li>
            <motion.li variants={fadeIn}>
              Perjuangan Silas demi integrasi Papua dengan Indonesia akhirnya
              berakhir manis meski prosesnya begitu rumit. Berdasarkan hasil
              Penentuan Pendapat Rakyat (PEPERA) pada 1969, Papua atau Irian
              Barat berhasil menjadi bagian dari Indonesia.
            </motion.li>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
