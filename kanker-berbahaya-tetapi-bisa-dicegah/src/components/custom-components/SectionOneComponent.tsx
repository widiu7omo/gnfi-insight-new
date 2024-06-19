"use client"
import ImageAnimation from "../animation/Image";
import Image from "next/image";
import Heading from "../animation/Heading";
import { Paragraph } from "@/stories/Paragraph";
import { COMPONENT_HERO, COMPONENT_PARAGRAPH } from "@/data/component-front";
import { Hero } from "@/stories/Hero";
import { motion } from 'framer-motion'
import { baseUrl } from "@/constants/meta";
export function SectionOneComponent() {
    return <section id="section-1">
        <img src={`${baseUrl}/assets/Layer_4_2.png`} alt="Cancer Cover" className="object-cover w-full" />
        <div>

        </div>
    </section>
}
