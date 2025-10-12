"use client";

import { useEffect, useRef } from "react";

import { baseUrl } from "@/constants/meta";
import { cn } from "@/lib/utils";
import { delay, motion, useAnimation, useInView } from "framer-motion";
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

const trackVariants = {
    hidden: {
        opacity: 0,
        x: 120,
        scale: 0.9,
        filter: "blur(12px)",
    },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        filter: "blur(0px)",
        transition: {
            duration: 1.4,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.4,
        },
    },
};

const motorcycleVariants = {
    hidden: {
        opacity: 0,
        x: 220,
        y: 40,
        rotate: 10,
        scale: 0.85,
        filter: "brightness(0.95)",
    },
    visible: {
        opacity: [0, 1, 1],
        x: [220, -40, 0],
        y: [40, -12, 0],
        rotate: [10, -3, 0],
        scale: [0.85, 1, 1],
        filter: ["brightness(0.95)", "brightness(1.1)", "brightness(1)"],
        transition: {
            duration: 1.6,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.55, 1],
        },
    },
};

const shadowVariants = {
    hidden: {
        opacity: 0,
        x: 200,
        y: 60,
        scale: 0.9,
        skewX: -10,
    },
    visible: {
        opacity: [0, 0.35, 0.25],
        x: [200, -20, 0],
        y: [60, -6, 0],
        scale: [0.9, 1.05, 1],
        skewX: [-10, -4, -6],
        transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            times: [0, 0.58, 1],
        },
    },
};

const speedLinesVariants = {
    hidden: { opacity: 0, x: 0 },
    visible: {
        opacity: 0.35,
        x: [-6, 6, -4, 4, 0],
        transition: {
            delay: 1.1,
            duration: 0.8,
            ease: "easeOut",
        },
    },
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
            className="relative -top-[150px] -mb-[150px] h-screen w-full !bg-cover !bg-[50%_35%] md:bg-center"
            style={{
                background: `url('${baseUrl}/assets/hero-cover2.jpg')`,
            }}
        >
            <div className="absolute inset-x-0 bottom-0 h-[10rem] bg-gradient-to-t from-[#e5024b]" />
            <div className={cn("absolute h-full w-full bg-black/0")}>
                <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-8 xl:px-0">
                    <div className="relative flex flex-1 items-center justify-start">
                        <motion.h1
                            initial="hidden"
                            animate={heroControls}
                            variants={titleVariants}
                            className="max-w-full font-sora xl:max-w-[60%]"
                        >
                            <span className="text-[#fceb11] text-[8rem] font-anton leading-[1.1] tracking-normal uppercase">
                                Wajah  Mandalika Masa Kini:
                            </span>
                            <br />
                            <span className="mt-2 block text-4xl font-sora text-white">
                                Jadi Primadona Wisata Olahraga, Ekonomi Semakin Menyala
                            </span>
                        </motion.h1>
                        <div className="absolute right-0 flex flex-col items-center justify-start">
                            <motion.div
                                initial="hidden"
                                animate={heroControls}
                                variants={speedLinesVariants}
                                className="pointer-events-none absolute -left-24 top-[48%] hidden h-1 w-44 rounded-full bg-white/70 blur-sm md:block"
                            />
                            <div className="relative flex flex-col items-center z-20">
                                <motion.img
                                    initial="hidden"
                                    animate={heroControls}
                                    variants={motorcycleVariants}
                                    src={`${baseUrl}/assets/0.1.png`}
                                    alt="Motorcycle racing at Mandalika Circuit"
                                    className="w-[80%] drop-shadow-[0_35px_45px_rgba(0,0,0,0.35)]"
                                />
                                <motion.img
                                    initial="hidden"
                                    animate={heroControls}
                                    variants={shadowVariants}
                                    src={`${baseUrl}/assets/0.2.png`}
                                    alt=""
                                    aria-hidden="true"
                                    className="mt-[-1rem] mr-[-5rem] w-[90%]"
                                />
                            </div>
                            <motion.div
                                className="absolute -top-40 right-0 z-0"
                                initial="hidden"
                                animate={heroControls}
                                variants={trackVariants}
                            >
                                <motion.img
                                    src={`${baseUrl}/assets/0.3.png`}
                                    alt="Mandalika MotoGP track"
                                    className="w-full max-w-[540px] scale-110"
                                />
                            </motion.div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <ChevronDown
                            size={40}
                            strokeWidth={1}
                            className="animate-bounce text-white"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
