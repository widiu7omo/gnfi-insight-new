import { motion } from "motion/react";

export function SectionFourCustomImage() {
  return (
    <section className="relative">
      <div className="flex flex-col">
        <div className="flex flex-col z-10 relative bg-cover bg-position-[center_top] bg-no-repeat" style={{ backgroundImage: `url('/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.0.png')` }}>
          <div className="absolute top-0 bg-linear-to-b from-[#82ded8] to-[#82ded8]/0 left-0 right-0 bottom-[90%] w-full" />
          <div className="flex justify-center max-w-4xl mx-auto relative lg:mt-108 xl:mt-140 2xl:mt-160">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.1.png`} alt="" className="top-0" />
          </div>
          <div className="flex justify-center max-w-4xl mx-auto relative xl:mt-20">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.2.png`} alt="" className="top-0 invert" />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.3.png`} alt="" className="absolute top-0 " />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.4.png`} alt="" className="absolute top-0 " />
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.5.png`} alt="" className="absolute top-0 " />
          </div>
          <div className="flex justify-center max-w-4xl mx-auto relative lg:top-32 lg:pb-32">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
              src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.6.png`} alt="" className="top-0" />
            <div className="absolute bottom-0 lg:pb-32">
              <div className="relative bottom-0 top-0 left-0 right-0">
                <motion.img
                  initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
                  whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
                  src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/3.7.png`} alt="" className="z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
