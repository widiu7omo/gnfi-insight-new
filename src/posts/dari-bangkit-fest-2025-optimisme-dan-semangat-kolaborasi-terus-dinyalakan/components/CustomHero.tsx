import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)" }
};

const textVariants = {
    hidden: { opacity: 0, y: 20, color: "#f97316" }, // Orange-500
    visible: {
        opacity: 1,
        y: 0,
        color: "#ffffff",
        transition: {
            opacity: { duration: 0.8, ease: "easeOut" as const },
            y: { duration: 0.8, ease: "easeOut" as const },
            color: { duration: 1, delay: 1.5 }
        }
    }
};

const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut" as const,
            delay: 0.2
        }
    }
};

export default function CustomHero() {
    const images = Array.from({ length: 17 }, (_, i) => `/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/0/person${i + 1}.jpg`);

    return (
        <div className="relative -top-[150px] -mb-[150px] h-screen w-full bg-[#1a237e] bg-cover! bg-position-[50%_35%]! md:bg-center overflow-hidden">
            {/* Grid Background */}
            <motion.div
                className="grid grid-cols-3 grid-rows-6 md:grid-cols-6 md:grid-rows-3 w-full h-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={cn("relative w-full h-full border-[0.5px] border-blue-900/30 group overflow-hidden", index === 7 && 'col-span-2')}
                    >
                        <img
                            src={src}
                            alt=""
                            className={cn(
                                "w-full h-full object-cover grayscale mix-blend-luminosity opacity-60 transition-all duration-500 ease-in-out",
                                "group-hover:grayscale-0 group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-110"
                            )}
                        />
                        <div className="absolute inset-0 bg-[#1a237e] mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-0"></div>
                    </motion.div>
                ))}
                {/* Empty slot for the 18th grid item */}
                <motion.div variants={itemVariants} className="relative w-full h-full bg-[#1a237e] border-[0.5px] border-blue-900/30"></motion.div>
            </motion.div>

            {/* Overlay Content */}
            <motion.div
                className="absolute inset-0 z-10 py-8 md:py-12 flex flex-col justify-start md:justify-between pointer-events-none max-w-7xl mx-auto px-4 md:px-8"
                initial="hidden"
                animate="visible"
            >

                {/* Top Section */}
                <div className="flex justify-end items-start">
                    {/* Logo */}
                    <motion.div variants={logoVariants} className="w-24 md:w-48 lg:w-64">
                        <img
                            src="/assets/dari-bangkit-fest-2025-optimisme-dan-semangat-kolaborasi-terus-dinyalakan/bangkit-fest-logo.png"
                            alt="Bangkit Fest Logo"
                            className="w-full h-auto drop-shadow-lg"
                        />
                    </motion.div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col items-start gap-2 md:gap-6 absolute top-1/2 left-1/2 md:top-auto transform -translate-x-1/2 md:translate-x-0 md:translate-y-0 -translate-y-1/2 md:bottom-12 md:left-8 right-4 md:right-8">
                    {/* Main Title - Part 1 */}
                    <div className="flex flex-col leading-none font-anton tracking-tighter mix-blend-hard-light">
                        <motion.span variants={textVariants} className="text-[20vw] md:text-[9vw] lg:text-[10vw]">DARI</motion.span>
                        <motion.span variants={textVariants} className="text-[20vw] md:text-[9vw] lg:text-[10vw]">BANGKIT</motion.span>
                    </div>
                    {/* Main Title - Part 2 */}
                    <div className="flex flex-col leading-none font-anton tracking-tighter mix-blend-hard-light w-full">
                        <motion.div variants={textVariants} className="text-[20vw] md:text-[9vw] lg:text-[10vw] relative flex flex-col md:flex-row md:items-center">
                            FEST
                            {/* Subtitle */}
                            <div className="mt-4 md:mt-0 md:absolute md:left-88 max-w-[200px] md:max-w-sm hidden md:block ">
                                <motion.p variants={textVariants} transition={{ delay: 0.5 }} className="md:text-4xl font-sans font-medium leading-snug! tracking-wide uppercase text-white/90 md:text-white">
                                    Optimisme<br className="hidden md:block" /> dan Semangat <br className="hidden md:block" /> Kolaborasi Terus <br className="hidden md:block" />Dinyalakan
                                </motion.p>
                            </div>
                        </motion.div>
                        <motion.span variants={textVariants} className="text-[20vw] md:text-[9vw] lg:text-[10vw]">2025</motion.span>
                        <motion.p variants={textVariants} transition={{ delay: 0.5 }} className="block md:hidden md:text-4xl font-sans font-medium leading-snug! tracking-wide uppercase text-white/90 md:text-white">
                            Optimisme<br className="hidden md:block" /> dan Semangat <br className="hidden md:block" /> Kolaborasi Terus <br className="hidden md:block" />Dinyalakan
                        </motion.p>
                    </div>
                </div>
            </motion.div>

            {/* Global Blue Overlay for unification */}
            <div className="absolute inset-0 bg-blue-900/40 mix-blend-overlay pointer-events-none"></div>
        </div>
    );
}