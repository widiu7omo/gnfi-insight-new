import { motion } from "motion/react"

export function SectionFourCustomImage() {
    return <div className="bg-cover relative xl:bg-position-[center_top_-30rem]" style={{ backgroundImage: `url(/assets/berdamai-dengan-gempa/4.1.1.png)` }}>
        <div className="absolute bg-linear-to-b from-black/20 to-[#FAFAFA] z-0 left-0 right-0 top-0 bottom-0" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-6 z-20 relative">
            <div className="relative flex flex-col justify-end">
                <motion.img
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    src={`/assets/berdamai-dengan-gempa/4.1.png`} alt="Illustration" />
                <motion.img
                    initial={{ opacity: 0, x: -30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    src={`/assets/berdamai-dengan-gempa/4.2.png`} alt="Title" className="absolute z-10" />
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    src={`/assets/berdamai-dengan-gempa/4.3.png`} alt="Thinking" className="absolute" />
            </div>
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                src={`/assets/berdamai-dengan-gempa/4.4.png`} alt="Card 1" className="-mt-7 sm:-mt-8 xl:-mt-14 z-20 relative" />
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                src={`/assets/berdamai-dengan-gempa/4.5.png`} alt="Card 2" className=" z-20 relative" />
            <motion.img
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                src={`/assets/berdamai-dengan-gempa/4.6.png`} alt="Card 3" className="-mt-3 xl:-mt-6 z-20 relative" />
            <motion.img
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/berdamai-dengan-gempa/4.7.png`} alt="Drop Cover Hold" className="pt-0 " />
            <motion.img
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                src={`/assets/berdamai-dengan-gempa/4.8.png`} alt="Steps" className="pt-0 " />
        </div>
    </div>
}