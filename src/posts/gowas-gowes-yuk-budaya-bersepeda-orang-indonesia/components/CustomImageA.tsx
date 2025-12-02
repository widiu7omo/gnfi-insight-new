import { motion } from "motion/react";

export function CustomImageA() {
  return (
    <motion.div
      className="relative overflow-clip font-sora py-14 bg-no-repeat bg-cover bg-neutral-100 noise2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* <div className="absolute left-0 w-full bottom-0 h-[20%] z-0 bg-linear-to-t from-black"></div> */}
      {/* <div className="absolute left-0 w-full top-0 h-full bg-black/30 z-0"></div> */}
      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="top-0 absolute left-0 space-y-6 px-4 lg:px-0 text-black"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight lg:max-w-[60%]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Orang Indonesia suka bersepeda sejak dulu, beneran nih?
          </motion.div>
          <motion.p
            className="lg:max-w-[60%] font-medium leading-normal text-sm lg:text-base tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Setelah diproduksi massal di Eropa pada 1863, sepeda lalu masuk ke
            Indonesia yang dulu masih disebut Hindia Belanda. Walau masih samar,
            awal mula masuknya sepeda diperkirakan pada abad ke-20.
          </motion.p>
        </motion.div>
        <motion.img
          src={"/assets/gowas-gowes-yuk-budaya-bersepeda-orang-indonesia/1.0.1.png"}
          alt="Couple on bike"
          className="pt-60 lg:pt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </div>
      <motion.div
        className="max-w-4xl mx-auto relative z-10 -mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="flex flex-col p-4 bg-white rounded-xl shadow-lg text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <img src={"/assets/gowas-gowes-yuk-budaya-bersepeda-orang-indonesia/1.2.png"} alt="Card 1" />
            <p className="mt-6 text-base lg:text-lg leading-normal">
              Aktivitas bersepeda mulanya terlihat dari pegawai pemerintahan, tapi
              setelahnya rakyat biasa juga melakukannya. Firman Lubis dalam memoar
              Jakarta 1950-an bahkan menyebut budaya bersepeda begitu kentara di
              ibu kota pada awal-awal masa kemerdekaan.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col p-4 bg-white rounded-xl shadow-lg text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
          >
            <img src={"/assets/gowas-gowes-yuk-budaya-bersepeda-orang-indonesia/1.1.png"} alt="Card 1" />
            <p className="mt-6 text-base lg:text-lg leading-normal">
              Aktivitas bersepeda mulanya terlihat dari pegawai pemerintahan, tapi
              setelahnya rakyat biasa juga melakukannya. Firman Lubis dalam memoar
              Jakarta 1950-an bahkan menyebut budaya bersepeda begitu kentara di
              ibu kota pada awal-awal masa kemerdekaan.
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.img
        src={`/assets/gowas-gowes-yuk-budaya-bersepeda-orang-indonesia/footer.png`}
        className="z-50 -mt-10 hidden invert sm:block relative bottom-0 h-full w-fit mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.6 }}
      />
    </motion.div>
  );
}
