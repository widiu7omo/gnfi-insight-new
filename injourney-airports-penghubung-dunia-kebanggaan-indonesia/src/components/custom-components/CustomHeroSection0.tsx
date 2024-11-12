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
                                    whileInView={{ opacity: 1 }} className="bg-[#0d192f] px-2 xl:px-6 py-1 xl:py-2 box-decoration-clone">
                                    Injourney Airports, Penghubung
                                </motion.span>
                            </BoxReveal>
                            <BoxReveal boxColor={"#0d192f"} duration={.5} delay={0.1}>
                                <motion.span
                                    viewport={{ once: true }}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }} className="bg-[#0d192f] px-2 xl:px-6 py-1 xl:py-2 box-decoration-clone"
                                >Dunia Kebanggaan Indonesia
                                </motion.span>
                            </BoxReveal>

                        </h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <Icon
                            size={40}
                            strokeWidth={1}
                            className="animate-bounce text-white"
                            name={"plane-takeoff" as keyof typeof dynamicIconImports}
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
