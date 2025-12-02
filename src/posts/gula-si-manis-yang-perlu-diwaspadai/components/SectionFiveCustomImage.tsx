import { motion, Variants } from "motion/react";

export function SectionFiveCustomImage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.section
      className="relative max-w-4xl h-screen mx-auto flex justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="relative w-full h-full grid place-items-center">
        {/* Title 1 */}
        <motion.img
          variants={itemVariants}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/title-1.png`}
          alt="Can"
          className="absolute z-20 top-0 left-0 w-1/2 sm:w-2/5 md:w-1/3"
        />
        {/* Title 2 */}
        <motion.img
          variants={itemVariants}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/title-2.png`}
          alt="Can"
          className="absolute z-20 top-1/4 right-0 w-2/5 sm:w-1/3 md:w-1/4"
        />
        {/* Layer 1 */}
        <motion.img
          variants={itemVariants}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/Can.png`}
          alt="Can"
          className="relative z-10 top-0 right-0 inset-0 mx-auto w-3/4 sm:w-2/3 md:w-1/2"
        />
        {/* Layer 2 */}
        <motion.img
          variants={itemVariants}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/Layer 12.png`}
          alt="Layer 12"
          className="relative z-20 pt-12 w-1/3 sm:w-1/4 md:w-1/5 bottom-[15%] "
        />
        {/* Layer 3 */}
        <motion.img
          variants={itemVariants}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/Group 1.png`}
          alt="Group 1"
          className="absolute z-30 sm:right-0 w-2/5 md:w-1/3 bottom-[15%] right-5"
        />
        {/* Layer 4 */}
        <motion.img
          variants={itemVariants}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/Group 2.png`}
          alt="Group 2"
          className="absolute z-40 sm:left-0 w-2/5 md:w-1/3 bottom-[15%] left-5"
        />
        {/* Layer 5 */}
        <motion.img
          variants={itemVariants}
          src={`/assets/gula-si-manis-yang-perlu-diwaspadai/Group 3.png`}
          alt="Group 3"
          className="absolute z-50 bottom-0 w-full sm:w-3/4 md:w-2/3"
        />
      </div>
    </motion.section>
  );
}
