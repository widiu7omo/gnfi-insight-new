import { motion } from "motion/react";

export function CustomImageE() {
  const jamu = [
    {
      title: "Sido Muncul",
      image: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.11.png`,
    },
    {
      title: "Jamu Jago",
      image: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.10.png`,
    },
    {
      title: "Air Mancur",
      image: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.9.png`,
    },
    {
      title: "Mustika Ratu",
      image: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.8.png`,
    },
    {
      title: "Jamu Iboe",
      image: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.7.png`,
    },
    {
      title: "Rahsa Nusantara",
      image: `/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.6.png`,
    },
  ]
  return (
    <div className="relative flex flex-col items-center overflow-hidden">
      <div
        className="relative w-full justify-center bg-cover bg-[#e5e5e5] bg-center pt-16 md:pt-24"
      >
        <img src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.1.png`} alt="Ornamen Top" className="absolute top-0 right-0" />
        <img src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.4.png`} alt="Leaves" className="absolute bottom-0 w-full right-0" />
        <img src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.5.png`} alt="Jamu right" className="absolute bottom-0 w-fit right-0" />
        <img src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/5.0.png`} alt="Jamu left" className="absolute bottom-0 w-fit left-0" />
        <div className="z-10 relative mx-auto max-w-4xl items-center px-4 lg:px-0">
          <motion.h3
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full text-left font-sora text-[2rem] font-bold leading-tight text-[#314516] md:text-[3rem] lg:text-[4.5rem]"
          >
            Jenama Jamu <br /> Kebanggaan Indonesia
          </motion.h3>
          <motion.p
            viewport={{ once: true }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.6 }}
            className="mb-2 mt-6 max-w-2xl text-left font-sora text-base text-[#3b4f64] md:text-3xl"
          >
            Indonesia punya sejumlah jenama jamu yang tak asing di telinga. Beberapa di antaranya:
          </motion.p>
        </div>
        <div className="max-w-4xl mx-auto my-20 lg:pb-44 px-4 lg:px-0">
          <div className="grid lg:grid-cols-3 grid-cols-2 gap-x-12 gap-y-4">
            {jamu.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="z-10 relative scale-125"

                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  />
                  <div className="rounded-xl inset-0 top-[30%] absolute bg-[#314516]"></div>
                  <p className="text-center text-lg lg:text-2xl font-semibold pt-10 text-white relative">{item.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-full bg-[#314516] px-4 pt-12 md:pt-10 lg:pt-24">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl">
          <img
            src={`/assets/jamu-indonesia-minuman-herbal-harta-karun-nasional/footer.png`}
            className="mx-auto hidden w-full invert-0 sm:block"
            alt="Footer"
          />
        </div>
      </div>
    </div>
  );
}
