import { motion } from "motion/react";

export function SectionThreeCustomImage() {
  return (
    <div className="flex flex-col bg-[hsl(30,40%,90%)]" >
      <div className="flex flex-col z-10 relative bg-cover bg-position-[center_top] bg-no-repeat" style={{ backgroundImage: `url('/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.0.png')` }}>
        <div className="flex justify-center max-w-4xl mx-auto relative lg:mt-108 xl:mt-140 2xl:mt-160">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.1.png`} alt="" className="top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.2.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.3.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.4.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.5.png`} alt="" className="absolute top-0" />
        </div>
        <div className="flex justify-center max-w-4xl mx-auto relative">
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.1 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.6.png`} alt="" className="top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.7.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.8.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.9.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.10.png`} alt="" className="absolute top-0" />
          <motion.img
            initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
            src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.11.png`} alt="" className="absolute top-0" />
          <div className="absolute -bottom-4">
            <motion.img
              initial={{ opacity: 0, y: 20 }} viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .7, delay: 0.4 }}
              src={`/assets/ki-hajar-dewantara-sang-bapak-pendidikan-dan-sumbangan-pemikirannya-untuk-indonesia/2.12.png`} alt="Footer" className="invert" />
          </div>
        </div>
      </div>
    </div>
  );
}
