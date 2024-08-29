"use client";

import { baseUrl } from "@/constants/meta";
import { motion } from "framer-motion";

export function SectionSixCustomImage() {
  const principles = [
    {
      title: "Ing Ngarsa Sung Tuladha",
      description:
        "Pendidik hendaknya menjadi pribadi yang bermutu dalam hal apapun, terutama dalam kerohanian agar menjadi teladan",
      image: "ing-ngarsa-img.png",
    },
    {
      title: "Ing Madya Mangun Karsa",
      description:
        "Pendidik sebagai pemimpin harus mampu menumbuhkan minat dan kemauan siswa untuk berkreasi dan berkarya guna mencapai cita-citanya",
      image: "ing-madya-img.png",
    },
    {
      title: "Tut Wuri Handayani",
      description:
        "Pendidik adalah pendorong atau motivator murid dan memberikan kebebasan, namun juga tidak lepas dari pengawasan",
      image: "tut-wuri-img.png",
    },
  ];

  return <section
    className="w-full min-h-screen relative overflow-hidden bg-cover bg-center"
    style={{ backgroundImage: "url('/assets/background-old-paper.png')" }}
  >
    <motion.img
      src="/assets/cover-ki-hajar-dewantara.png"
      alt="Ki Hajar Dewantara"
      className="w-full mb-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    />
    <motion.div
      className="mb-8 relative w-full h-full flex flex-col px-4 sm:px-8 md:px-16 lg:px-24 xl:px-40"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src="/assets/title.png"
        alt="Title"
        className="w-full sm:w-2/3 md:w-1/2 lg:w-2/3 xl:max-w-4xl"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
      />
      <motion.img
        src="/assets/logo-tut-wuri-handayani.png"
        alt="Tut Wuri Handayani Logo"
        className="absolute w-1/3 sm:w-1/4 md:w-1/3 lg:w-1/2 right-0 -top-16 sm:-top-24 md:-top-32 lg:-top-48"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
      />
      <ul className="mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        {principles.map((item, i) => (
          <motion.li
            key={`key-${// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              i}`}
            className={`flex flex-col md:flex-row gap-4 md:gap-10 items-center mb-8 md:mb-12 ${i === 1 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.8 + 1,
              duration: 0.4,
              ease: "easeOut",
            }}
          >
            <motion.img
              src={`/assets/${item.image}`}
              alt={item.title}
              className="w-full md:w-1/2"
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.8 + 1.2,
                duration: 0.4,
                ease: "easeOut",
              }}
            />
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <h2 className="font-bold bg-[#19505c] w-fit text-white px-2">
                {item.title}
              </h2>
              <motion.img
                src="/assets/separator.png"
                alt={item.title}
                className="w-3/4"
                initial={{ opacity: 0, scaleX: 0.9 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.8 + 1.4,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.8 + 1.6,
                  duration: 0.4,
                  ease: "easeOut",
                }}
              >
                {item.description}
              </motion.p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </section>
}
