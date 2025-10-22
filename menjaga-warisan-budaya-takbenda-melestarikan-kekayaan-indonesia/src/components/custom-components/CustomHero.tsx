"use client";

import { useEffect, useRef } from "react";

import { baseUrl } from "@/constants/meta";
import { cn } from "@/lib/utils";
import { motion, useAnimation, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const titleVariants = {
    hidden: { opacity: 0, y: 56 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4 + index * 0.18,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

export function CustomHero() {
    const heroRef = useRef<HTMLDivElement | null>(null);
    const heroControls = useAnimation();
    const inView = useInView(heroRef, { once: true, amount: 0.45 });

    useEffect(() => {
        if (inView) {
            heroControls.start("visible");
        }
    }, [heroControls, inView]);

    return (
        <div
            ref={heroRef}
            className="relative -top-[150px] -mb-[150px] h-screen w-full !bg-cover !bg-[50%_35%] md:bg-center overflow-hidden"
            style={{
                background: `url('${baseUrl}/assets/0.0.jpg')`,
            }}
        >
            <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-radial from-[#000] z-10" />
            <div className="absolute inset-x-0 bottom-0 h-[30rem] bg-gradient-to-t from-[#000] z-20" />
            <div className={cn("absolute h-full w-full bg-black/0")}>
                <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10 xl:px-0">
                    <div className="relative flex flex-1 flex-col-reverse items-center justify-center gap-10 md:flex-row md:items-center md:justify-between">
                        <h1 className="w-full max-w-2xl text-center font-sora md:max-w-[90%] md:text-left relative z-20">
                            <motion.span
                            initial="hidden"
                            animate={heroControls}
                            variants={titleVariants}
                                className="text-[#fceb11] block text-[3.5rem] font-anton leading-[1.08] tracking-tight uppercase sm:text-[4.5rem] md:text-[5.5rem] lg:text-[6.5rem] xl:text-[8rem]">
                                Menjaga <br />Warisan Budaya <br />Takbenda,
                            </motion.span>
                            <br />
                            <motion.span
                                initial="hidden"
                                animate={heroControls}
                                variants={{ ...titleVariants, visible: { ...titleVariants.visible, transition: { ...titleVariants.visible.transition, delay: 0.3 } } }}
                                className="mt-4 block text-xl font-sora text-white sm:text-2xl md:text-3xl lg:text-5xl font-semibold">
                                Melestarikan Kekayaan <br />Indonesia
                            </motion.span>
                        </h1>
                        <div className="absolute flex w-full flex-col items-end justify-start bottom-[-6rem] right-[-8rem]">
                            <motion.img
                                initial="hidden"
                                animate={heroControls}
                                variants={imageVariants}
                                custom={4}
                                src={`${baseUrl}/assets/0.6.png`}
                                alt="Women do traditional aceh dance"
                                aria-hidden="true"
                                className="absolute right-[15rem] bottom-20 z-0 w-auto"
                            />
                            <motion.img
                                initial="hidden"
                                animate={heroControls}
                                variants={imageVariants}
                                custom={3}
                                src={`${baseUrl}/assets/0.5.png`}
                                alt="Women do play angklung"
                                aria-hidden="true"
                                className="absolute right-[40rem] bottom-[32rem] z-0 w-auto"
                            />
                            <motion.img
                                initial="hidden"
                                animate={heroControls}
                                variants={imageVariants}
                                custom={2}
                                src={`${baseUrl}/assets/0.4.png`}
                                alt="Women do traditional bali dance"
                                aria-hidden="true"
                                className="absolute right-0 bottom-20 z-0 w-auto"
                            />
                            <motion.img
                                initial="hidden"
                                animate={heroControls}
                                variants={imageVariants}
                                custom={1}
                                src={`${baseUrl}/assets/0.3.png`}
                                alt="Women do traditional java dance"
                                aria-hidden="true"
                                className="absolute right-[10rem] bottom-20 z-10 w-auto"
                            />
                            <motion.img
                                initial="hidden"
                                animate={heroControls}
                                variants={imageVariants}
                                custom={0}
                                src={`${baseUrl}/assets/0.2.png`}
                                alt="Women drawing Batik"
                                aria-hidden="true"
                                className="lg:h-[40rem] absolute bottom-0 z-10 w-auto"
                            />
                            <motion.img
                                initial="hidden"
                                animate={heroControls}
                                variants={imageVariants}
                                custom={-1}
                                src={`${baseUrl}/assets/0.1.png`}
                                alt="Tofu"
                                aria-hidden="true"
                                className="block bottom-0 h-40 sm:hidden xl:block lg:h-[17rem] absolute lg:bottom-[24rem] left-[20%] z-10 w-auto"
                            />
                        </div>
                    </div>
                    <div className="flex items-center justify-center pb-4 md:pb-8">
                        <ChevronDown
                            size={32}
                            strokeWidth={1}
                            className="animate-bounce text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
