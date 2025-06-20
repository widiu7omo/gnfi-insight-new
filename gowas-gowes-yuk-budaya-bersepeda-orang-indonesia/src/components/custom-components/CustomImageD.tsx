"use client";
import { baseUrl } from "@/constants/meta";
import { COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Paragraph } from "@/stories/Paragraph";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CustomImageD() {
  const heroRef = useRef(null);
  const competitionRef = useRef(null);
  const businessRef = useRef(null);
  const cardsRef = useRef(null);
  const paragraphRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const competitionInView = useInView(competitionRef, { once: true });
  const businessInView = useInView(businessRef, { once: true });
  const cardsInView = useInView(cardsRef, { once: true });
  const paragraphInView = useInView(paragraphRef, { once: true });

  return (
    <motion.div
      className="relative flex flex-col items-center overflow-hidden font-sora"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className="relative w-full justify-center bg-cover bg-top pt-6 md:pt-20 lg:py-32 lg:pb-4"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.1.jpg)` }}
      >
        <div className="absolute bottom-[-2px] w-full h-full block lg:hidden bg-gradient-to-t from-white"></div>
        <motion.div
          ref={heroRef}
          className="max-w-4xl mx-auto pb-28 relative z-10"
        >
          <motion.div
            className="w-full lg:w-[70%] space-y-8 px-4 lg:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={heroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-2xl sm:text-4xl xl:text-6xl font-extrabold pr-20"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Lebih dari sekadar hobi
            </motion.div>
            <motion.div
              className="text-xl lg:text-3xl font-semibold pr-[8rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Yang mulanya dari hobi pribadi, bersepeda bisa mengarah ke ajang silaturahmi.
            </motion.div>
            <motion.div
              className="text-base lg:text-xl font-medium pr-[8rem]"
              initial={{ opacity: 0, y: 15 }}
              animate={heroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Komunitas sepeda yang diikuti goweser lintas usia buktinya menjamur di mana-mana. Agenda yang dimiliki mereka pun beragam, seperti meramaikan event sepeda gembira (fun bike), piknik bareng sambil bersepeda, sampai touring keluar kota.
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#bda686] h-[60%] hidden lg:block 2xl:hidden"></div>
      </div>
      <motion.div
        ref={competitionRef}
        className="relative w-full h-[30rem] bg-cover bg-right"
        style={{ backgroundImage: `url(${baseUrl}/assets/4.3.png)` }}
      >
        <div className="h-full absolute w-full bg-gradient-to-b from-[20%] block lg:hidden from-white" />
        <div className="h-full absolute w-full bg-gradient-to-l from-[20%] hidden lg:block from-[#12150c]" />
        <div className="max-w-7xl h-full mx-auto relative flex flex-col">
          <motion.img
            src={baseUrl + '/assets/4.2.png'}
            alt="Gowes"
            className="bottom-0 lg:-top-[7.4rem] h-auto sm:h-[20rem] left-0 sm:left-[18rem] lg:left-0 lg:h-fit absolute object-bottom mt-auto w-full sm:w-fit lg:w-full"
            initial={{ opacity: 0, x: -100 }}
            animate={competitionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          <motion.div
            className="ml-auto w-full lg:w-[55%] mb-auto p-4 lg:p-0 lg:my-auto space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={competitionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div
              className="text-sm lg:text-xl text-black lg:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={competitionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Kompetisi sering pula digelar antarsesama penghobi. Sekalipun bukan atlet dan terkadang tak ada hadiah dijanjikan, pesepeda kerap dipancing beradu gengsi.
            </motion.div>
            <motion.div
              className="text-sm lg:text-xl text-black lg:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={competitionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <b>Salasakahiji, Bentang Jawa, dan Lintang Flores</b> adalah beberapa event bagi penggila sepeda di Indonesia yang ingin memacu adrenalin lewat kompetisi.
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      <div className="relative w-full py-8 lg:py-20 bg-cover bg-bottom" style={{ backgroundImage: `url(${baseUrl}/assets/4.4.jpg)` }}>
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={businessRef}
            className="text-xl lg:text-4xl text-white font-bold px-4 lg:px-6"
            initial={{ opacity: 0, y: 30 }}
            animate={businessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
          >
            Dan bersepeda jauh dari kata rugi karena pundi-pundi rupiah bisa diraih.
          </motion.div>
          <motion.div
            ref={cardsRef}
            className="space-y-8 py-12"
            initial={{ opacity: 0 }}
            animate={cardsInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="bg-[#ffbc25] shadow-lg lg:rounded-[3rem] flex lg:flex-row flex-col items-start p-4 lg:p-6 lg:space-x-8"
              initial={{ opacity: 0, y: 50 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={baseUrl + '/assets/4.5.png'}
                alt=""
                className="-mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              />
              <div className="text-base lg:text-xl tracking-wide mt-4 leading-normal">Bisa dilihat di Tanjung Priok, Jakarta Utara, <b>ojek sepeda</b> tetap eksis meski harus bersaing dengan transportasi bermotor.</div>
            </motion.div>
            <motion.div
              className="bg-[#ffbc25] shadow-lg lg:rounded-[3rem] flex lg:flex-row flex-col items-start p-4 lg:p-6 lg:space-x-8"
              initial={{ opacity: 0, y: 50 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <motion.img
                src={baseUrl + '/assets/4.6.png'}
                alt=""
                className="-mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={cardsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
              <div className="text-base lg:text-xl tracking-wide mt-4 leading-normal">Lalu di lingkup kepariwisataan sepeda suka dihadirkan sebagai hiburan memanjakan turis yang ingin merasakan sensasi <b>bersepeda di alam</b> pedesaan Indonesia.</div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          ref={paragraphRef}
          initial={{ opacity: 0, y: 30 }}
          animate={paragraphInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Paragraph block={{
            component: COMPONENT_PARAGRAPH,
            componentProps: {
              className: "max-w-[65ch] mx-auto text-white font-sans",
              children: (<>
                <p>Satu hal yang layak ditegaskan ialah sepeda kuat kaitannya sebagai transportasi penyambung hidup. Di samping atlet profesional, sepeda artinya bagi orang-orang biasa semisal bapak-bapak di kawasan Tanjung Priok, Jakarta Utara. Di tengah ketatnya persaingan melawan kendaraan bermotor, mereka masih memiliki semangat dan daya energi mencari lembar-lembar rupiah sebagai tukang ojek sepeda. Selain itu, jangan lupa bisnis kepariwisataan kerap didukung dengan fasilitas sepeda. Seperti yang dilakukan Muntowil dengan Towilfiets-nya di Yogyakarta yang mana ia menyediakan sepeda onthel bagi wisatawan untuk tur keliling desa.</p>
                <p>Kesadaran akan lingkungan juga memicu pemakaian sepeda pada era modern. Komunitas semacam Bike to Work (B2W) Indonesia lantas muncul di mana mereka menggalakkan kampanye pergi bekerja dengan cara bersepeda sebagai salah satu bentuk kepedulian kesehatan dan lingkungan.</p>
                <p>Banyak tantangan untuk mengembalikan budaya bersepeda masyarakat Indonesia. Biasanya, cuaca menjadi alasan klasik untuk tidak memakai transportasi ini dalam keseharian. Namun, harapan untuk menuju ke sana kelihatannya masih ada. Booming sepeda pada pandemi Covid-19 lalu dan semakin sadarnya orang Indonesia akan kesehatan dengan cara berolahraga mendorong pemerintah ikut mendukung kebijakan pengadaan jalur sepeda di beberapa kota di Indonesia.</p>
              </>)
            }
          }} />
        </motion.div>
      </div>
      <div className="absolute top-0 h-[10%] w-full bg-gradient-to-b from-[#d4d6de]" />

      <motion.div
        className="absolute bottom-0 z-50 mx-auto max-w-4xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <img
          src={`${baseUrl}/assets/footer.png`}
          className="z-50 mx-auto hidden w-full sm:block"
        />
      </motion.div>
    </motion.div>
  );
}
