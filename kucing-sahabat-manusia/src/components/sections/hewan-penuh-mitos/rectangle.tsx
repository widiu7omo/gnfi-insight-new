"use client";
import Paragraph from "@/components/reusable/paragraph";
import { Inter } from "next/font/google";
import Ornament2 from "./ornament2";

export const interFont = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function Rectangle() {
    return (
        <div className="absolute left-[27%] top-[-12%] item-center w-[46%] xl:block bg-[#2C2C2C]">
            <Paragraph
                className={` p-9 z-30 text-white ${interFont.className} relative font-[300]`}
            >
            <Ornament2 />
                <p>
                    Masyarakat di berbagai daerah mengenal mitos mengenai kucing
                </p>
            </Paragraph>
        </div>
    );
}
