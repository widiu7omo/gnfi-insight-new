"use client";

import Icon from "@/components/reusable/Icon";
import { baseUrl } from "@/constants/meta";
import { cn } from "@/lib/utils";
import { BoxReveal } from "@/stories/BoxReveal";
import { motion } from "framer-motion";
import type dynamicIconImports from "lucide-react/dynamicIconImports";
import type { ReactNode } from "react";
export type HeroType = {
    coverUrl: string;
    title: string | ReactNode;
    swipeUpIcon: ReactNode;
    gradientColor?: string;
};
export function CustomHeroSection0() {
    return (
        <div
            className="relative -top-[150px] -mb-[150px] h-screen w-full !bg-cover !bg-[50%_30%] md:bg-center"
            style={{
                background: `url("${baseUrl}/assets/0.1.jpg")`,
            }}
        >
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={cn("absolute h-full w-full bg-gradient-to-tr from-black/80")}>
                <div className="mx-auto flex h-full max-w-7xl flex-col justify-between px-4 py-8 xl:px-0">
                    <div className="flex flex-1 items-center xl:items-end justify-center xl:justify-start w-full ">
                        <h1
                            className="max-w-full text-center xl:text-start text-4xl font-bold !leading-snug text-[#fb8a24] lg:text-5xl xl:text-7xl py-6 relative"
                        >
                            <motion.img
                                viewport={{ once: true }}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: .8, duration: 1 }}
                                src={`${baseUrl}/assets/0.2.png`} alt="Gnfi Insight" className="absolute top-[-13%] hidden sm:block h-[2rem] xl:h-auto" />
                            <BoxReveal boxColor={"#0d192f"} duration={.5}>
                                <motion.span
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }} className="bg-[#0d192f] px-2 xl:px-6 py-1 xl:py-2 box-decoration-clone font-sora">
                                    Injourney Airports, Penghubung
                                </motion.span>
                            </BoxReveal>
                            <BoxReveal boxColor={"#0d192f"} duration={.5} delay={0.1}>
                                <motion.span
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }} className="bg-[#0d192f] px-2 xl:px-6 py-1 xl:py-2 box-decoration-clone font-sora"
                                >Dunia Kebanggaan Indonesia
                                </motion.span>
                            </BoxReveal>

                        </h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="animate-[bounce_2s_ease_infinite]">
                            <svg className="size-[40px] animate-[spin_9s_linear_infinite]" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo" role="img">
                                <path fillRule="evenodd" clipRule="evenodd" d="M39.8056 0C35.1492 0 31.0194 2.24618 28.4474 5.71087C31.0194 9.17556 35.1492 11.4217 39.8056 11.4217C42.9479 11.4217 45.8506 10.3986 48.1966 8.66835C46.4606 11.0064 45.4341 13.8992 45.4341 17.0309C45.4341 21.6718 47.6878 25.7877 51.1642 28.351C54.6407 25.7877 56.8948 21.6718 56.8948 17.0309C56.8948 12.3904 54.6407 8.27415 51.1642 5.71087C48.5919 2.24618 44.462 0 39.8056 0Z" fill="#4DC2C6" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.0888 0C21.7451 0 25.875 2.24618 28.4474 5.71087C25.875 9.17556 21.7451 11.4217 17.0888 11.4217C13.9465 11.4217 11.0442 10.3986 8.69821 8.66835C10.4341 11.0064 11.4607 13.8992 11.4607 17.0309C11.4607 21.6718 9.20656 25.7877 5.73052 28.351C2.25374 25.7877 0 21.6718 0 17.0309C0 12.3904 2.25374 8.27415 5.73052 5.71087C8.30249 2.24618 12.4324 0 17.0888 0Z" fill="#EC6A56" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M39.8056 56.702C35.1492 56.702 31.0194 54.4558 28.4474 50.9911C31.0194 47.5264 35.1492 45.2803 39.8056 45.2803C42.9479 45.2803 45.8506 46.3034 48.1966 48.0336C46.4606 45.6956 45.4341 42.8028 45.4341 39.6711C45.4341 35.0305 47.6878 30.9147 51.1642 28.351C54.6407 30.9147 56.8948 35.0305 56.8948 39.6711C56.8948 44.3119 54.6407 48.4278 51.1642 50.9911C48.5919 54.4558 44.462 56.702 39.8056 56.702Z" fill="#9EBC2E" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.0888 56.702C21.7451 56.702 25.875 54.4558 28.4474 50.9911C25.875 47.5264 21.7451 45.2803 17.0888 45.2803C13.9465 45.2803 11.0442 46.3034 8.69821 48.0336C10.4341 45.6956 11.4607 42.8028 11.4607 39.6711C11.4607 35.0305 9.20656 30.9147 5.73052 28.351C2.25374 30.9147 0 35.0305 0 39.6711C0 44.3119 2.25374 48.4278 5.73052 50.9911C8.30249 54.4558 12.4324 56.702 17.0888 56.702Z" fill="#FAAF40" />
                            </svg>

                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
