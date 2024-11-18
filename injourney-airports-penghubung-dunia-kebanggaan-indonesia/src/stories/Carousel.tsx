"use client";
import "slick-carousel/slick/slick.css";
import "@/app/slick-carousel.css";
import React, { type PropsWithChildren, useRef, type ReactNode } from "react";
import Slider from "react-slick";
import { cn, uniqueKey } from "@/lib/utils";
import { useActiveSlide } from "@/store/useSlider";
import { ArrowBigLeftDashIcon, ArrowBigRightDashIcon, ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, DotIcon, PawPrintIcon } from "lucide-react";
import CarouselItem from "./CarouselItem";
export type CarouselItemType = {
    name: string;
    image: string;
    desc: ReactNode;
    slug: string;
};
type CarouselType = {
    items: CarouselItemType[];
    indicator: ReactNode;
    childClassName?: string;
};
export function Carousel({ items, childClassName, indicator }: CarouselType) {
    const constraintsRef = useRef<HTMLDivElement | null>(null);
    const [active, setActive] = useActiveSlide();
    const slickRef = useRef<Slider | null>(null);
    const slides = items
        .map((item) => {
            return <CarouselItem item={item} key={item.slug} className={childClassName} />;
        })
        .map((item, i) => (
            <SlideItem key={`number-card-${item.key}`}>{item}</SlideItem>
        ));
    const SliderIndicator = ({
        totalSlide,
        className,
        indicator
    }: { totalSlide: number; className?: string, indicator?: ReactNode }) => {
        return (
            <div className={cn("absolute space-x-2", className)}>
                <button type="button" onClick={() => slickRef.current?.slickPrev()}>
                    <ChevronLeft className="text-neutral-600" />
                </button>
                {new Array(totalSlide).fill(0).map((item, i) => (
                    <button
                        type="button"
                        onClick={() => slickRef.current?.slickGoTo(i)}
                        className={`${active === i ? "text-gray-600" : "text-neutral-400"}`}
                        key={uniqueKey()}
                    >
                        {indicator ?? <DotIcon />}
                    </button>
                ))}
                <button type="button">
                    <ChevronRight
                        className="text-neutral-600"
                        onClick={() => slickRef.current?.slickNext()}
                    />
                </button>
            </div>
        );
    };
    return (
        <div className="relative flex items-center justify-center w-full h-full pb-12" ref={constraintsRef}>
            <SliderIndicator
                indicator={indicator}
                className="xl:flex hidden right-[4rem] z-20"
                totalSlide={slides.length}
            />
            <SliderIndicator
                indicator={indicator}
                className="z-20 flex pb-2 xl:hidden bottom-5"
                totalSlide={slides.length}
            />
            <Slider
                ref={slickRef}
                {...{
                    dots: true,
                    infinite: false,
                    adaptiveHeight: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    beforeChange: (_current: number, next: number) => setActive(next),
                }}
                className="top-0 bottom-0 left-0 right-0 flex flex-row w-full"
            >
                {slides}
            </Slider>
        </div>
    );
}
const SlideItem = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex min-w-[calc(100%)] items-center justify-start">
            {children}
        </div>
    );
};
