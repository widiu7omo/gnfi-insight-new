"use client"

import { baseUrl } from "@/constants/meta"

export function SectionTwoCustomImage() {
    return <div className="bg-cover bg-[center_top_-1rem] relative xl:bg-[center_top_-10rem]" style={{ backgroundImage: `url(${baseUrl}/assets/2.1.1.png)` }}>
        <img className="absolute left-[-40%] xl:left-[-4rem] bottom-0 xl:bottom-[-9rem]" src={`${baseUrl}/assets/2.10.png`} alt="" />
        <div className="max-w-4xl mx-auto pt-0 xl:pt-[14rem] z-20">
            <img src={`${baseUrl}/assets/2.2.png`} alt="Title" />
            <div className="relative flex items-center">
                <img src={`${baseUrl}/assets/2.3.png`} alt="Who memperkirakan" className="" />
                <img src={`${baseUrl}/assets/2.4.png`} alt="Semakin banyak pula" className="absolute" />
            </div>
            <div className="relative left-[-5rem]">
                <div className="relative">
                    <img className="absolute z-20 right-[-5rem] sm:right-[-8rem] xl:right-[-10rem] top-[-1.5rem]" src={`${baseUrl}/assets/2.5.png`} alt="Title" />
                    <img src={`${baseUrl}/assets/2.8.png`} alt="" className="size-[8rem] sm:size-[14rem] md:size-[20rem] absolute right-[-2rem] top-[9rem] sm:top-[15rem] md:top-[18rem]" />
                    <img className="absolute size-[5rem] right-[16rem] bottom-[-15rem]" src={`${baseUrl}/assets/2.9.png`} alt="" />
                </div>
                <img src={`${baseUrl}/assets/2.2.1.png`} className="" alt="Globe" />
                <img className="absolute left-[5rem] bottom-0" src={`${baseUrl}/assets/2.6.png`} alt="Title" />
            </div>
        </div>
        <img className="absolute hidden xl:block z-10 right-[-4rem] bottom-[-12rem]" src={`${baseUrl}/assets/2.7.png`} alt="" />
    </div>
}