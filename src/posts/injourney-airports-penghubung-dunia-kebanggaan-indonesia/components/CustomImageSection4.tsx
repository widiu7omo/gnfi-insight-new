import { delay, motion, stagger } from "motion/react";

export function CustomImageSection4() {
  const containerList = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: .3,
        staggerChildren: 0.8,
        duration: 1,
      },
    },
  };
  const listItem = {
    hidden: { opacity: 0, y: -20, },
    visible: { opacity: 1, y: 0 }
  };


  return (
    <div className="relative flex flex-col items-start overflow-hidden">
      <div className="relative flex flex-col items-center w-full">
        <motion.img
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          src={`/assets/injourney-airports-penghubung-dunia-kebanggaan-indonesia/4.1.png`}
          alt="People"
          className="z-0 object-cover w-full"
        />
        <div className="absolute xl:top-[5%]">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .2, duration: 0.8 }}
            className="mx-auto font-extrabold text-center md:px-15 text-black text-xl xs:text-3xl sm:text-4xl xl:text-5xl sm:pt-8 md:pt-12 font-sora leading-snug tracking-wider"
          >
            Peningkatan Pelayanan
          </motion.p>
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            src={`/assets/injourney-airports-penghubung-dunia-kebanggaan-indonesia/4.2.png`}
            alt="Ala In Journey"
            className="object-contain w-full h-auto px-4 mx-auto my-4 md:my-8 md:max-w-4xl md:px-10"
          />
        </div>
        <div className="absolute bottom-[10%] xl:top-[25%] z-10 space-y-2 md:space-y-4">
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mx-auto font-semibold xl:leading-snug xl:tracking-wide text-center text-white max-w-full leading-tight sm:leading-normal xl:max-w-xl xl:text-black text-xl lg:text-2xl 2xl:text-3xl"
          >
            InJourney Airports mendorong <br /> bandara untuk fokus kepada <br /> pelayanan kepada para penggunanya
          </motion.p>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="mx-auto text-sm text-center md:px-15 md:mt-4 leading-tight sm:leading-normal max-w-md xl:max-w-md sm:text-lg lg:text-xl 2xl:text-2xl text-white xl:text-black"
          >
            Berbagai perbaikan pun dilakukan demi peningkatan pelayanan
          </motion.p>
        </div>
        <div className="block xl:hidden absolute bottom-0 w-full top-20 bg-linear-to-t from-black z-0" />
      </div>
      <div className="relative w-full pt-8 sm:pt-0">
        <div className="absolute inset-0 flex flex-col w-full h-full">
          <img
            src={`/assets/injourney-airports-penghubung-dunia-kebanggaan-indonesia/4.3.png`}
            alt="People in Airport"
            className="z-20 w-full object-cover h-full"
          />
        </div>
        <div className="relative bottom-0 z-40 flex w-full px-4 mx-auto md:max-w-4xl md:px-10">
          <div className="flex flex-col justify-start sm:w-1/2 pb-8 md:pb-16">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="-mt-8 mb-4 ml-4 rounded-md bg-[#ee6a57] px-2 py-2 md:-mt-16 md:mb-8 md:px-4 md:py-4"
            >
              <p
                className="max-w-4xl text-base font-semibold text-white md:max-w-xs md:text-2xl font-sora"

              >
                Aspek pelayanan yang jadi perhatian InJourney Airports di
                antaranya
              </p>
            </motion.div>
            <motion.ul
              viewport={{ once: true }}
              variants={containerList}
              initial="hidden"
              whileInView="visible"
              className="max-w-lg pl-5 text-sm text-left text-white list-disc font-sora"
            >
              <motion.li
                variants={listItem}
                className="mb-2 text-base marker:text-red-500 md:mb-4 md:text-xl">
                Proses pemeriksaan keamanan, pelaporan penumpang, dan
                pengambilan bagasi yang lebih cepat
              </motion.li>
              <motion.li
                variants={listItem}
                className="text-base marker:text-red-500 md:text-xl">
                Pelayanan yang lebih ramah dari petugas
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </div>
      <div className="relative z-30 w-full h-full flex flex-col items-center justify-center bg-cover bg-no-repeat bg-bottom" style={{ backgroundImage: `url("/assets/injourney-airports-penghubung-dunia-kebanggaan-indonesia/4.5.png")` }}>
        <div className="top-0 h-full max-w-4xl mx-auto z-30 sm:pb-80">
          <div className="flex flex-col sm:flex-row justify-center w-full sm:space-x-8 space-y-40 xs:space-y-8 sm:space-y-0 ">
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              transition={{ duration: .8 }}
              className="w-full flex-1 bg-linear-to-t from-[#10a7b5] to-[#0f6e78] px-4 md:px-8 py-4 md:py-8 h-fit mx-4 sm:mx-0 rounded-b-3xl xs:max-w-[70%] xs:ml-auto ml-0 max-w-full sm:ml-0 sm:max-w-full">
              <motion.p
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-base text-white md:text-lg font-sora"
              >
                Berbagai fasilitas pendukung juga disediakan, mulai dari Self
                Bag Drop dan nantinya akan menyusul Automatic Tray Return
                System, juga tak ketinggalan detail-detail seperti penerangan
                dan suhu ruangan turut diperhatikan
              </motion.p>
            </motion.div>
            <div className="w-full flex-1 rounded-t-3xl sm:rounded-t-none rounded-b-none sm:rounded-b-3xl bg-linear-to-t from-[#10a7b5] to-[#0f6e78] relative ">
              <div className="absolute w-full top-0 bottom-0 z-40 bg-linear-to-t from-[#10a7b5] via-[#0f6e78] to-[#0f6e78]/0 via-80% rounded-t-3xl sm:rounded-t-none rounded-b-none sm:rounded-b-3xl" />
              <motion.img
                initial={{ opacity: 0, y: 200 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, ease: "anticipate" }}
                viewport={{ once: true }}
                src={`/assets/injourney-airports-penghubung-dunia-kebanggaan-indonesia/4.4.png`}
                alt="Direktur Utama Faik Fahmi"
                className="absolute top-[-50%] lg:max-h-80 h-full xl:h-auto ml-0 sm:ml-auto mr-auto sm:mr-none sm:w-[80%] object-bottom object-contain z-30"
              />
              <div className="pt-12 pb-8 relative z-40 px-4 md:px-8 ">
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-base text-white md:text-lg font-sora"
                >
                  “Tujuan transformasi bandara yang sedang berjalan adalah untuk
                  menciptakan pengalaman yang menyenangkan pada seluruh rangkaian
                  perjalanan melalui perubahan mindset dan pola manajemen dalam
                  memberikan pelayanan.”
                </motion.p>
                <motion.p
                  viewport={{ once: true }}
                  initial={{ opacity: 0, x: 0, y: -10 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="mt-4 text-base font-bold text-white md:text-lg font-sora"
                >
                  <span className="font-medium">Direktur Utama InJourney Airports,</span>
                  <br />
                  Faik Fahmi
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
