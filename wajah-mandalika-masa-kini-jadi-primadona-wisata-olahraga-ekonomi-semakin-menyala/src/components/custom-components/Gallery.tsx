"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { baseUrl } from "@/constants/meta";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ITEMS_PER_SLIDE = 4;

const GALLERY_FILES = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.jpeg",
    "6.jpeg",
    "7.jpeg",
    "8.jpeg",
    "9.jpeg",
    "10.jpeg",
    "11.jpeg",
    "12.jpeg",
    "13.jpeg",
    "14.jpeg",
];

type SlideImage = string | null;

const formatLabel = (index: number) =>
  `Galeri Mandalika ${String(index + 1).padStart(2, "0")}`;

export function Gallery() {
    const gallerySources = useMemo(
        () =>
            GALLERY_FILES.map((file) => `${baseUrl}/assets/gallery/${file}`),
        [baseUrl],
    );

    const slides = useMemo<SlideImage[][]>(() => {
        const chunked: SlideImage[][] = [];

        for (let i = 0; i < gallerySources.length; i += ITEMS_PER_SLIDE) {
            const chunk: SlideImage[] = gallerySources.slice(
                i,
                i + ITEMS_PER_SLIDE,
            );

            while (chunk.length < ITEMS_PER_SLIDE) {
                chunk.push(null);
            }

            chunked.push(chunk);
        }

        return chunked;
    }, [gallerySources]);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const slideCount = slides.length;
  const totalImages = gallerySources.length;
  const isNavigationDisabled = slideCount <= 1;
  const isModalNavigationDisabled = totalImages <= 1;
  const selectedImageSrc =
    selectedIndex !== null ? gallerySources[selectedIndex] : null;
  const selectedImageLabel =
    selectedIndex !== null ? formatLabel(selectedIndex) : "";

    const goToPrevious = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slideCount - 1 : Math.max(prev - 1, 0),
        );
    };

    const goToNext = () => {
        setCurrentSlide((prev) =>
            prev === slideCount - 1 ? 0 : Math.min(prev + 1, slideCount - 1),
        );
    };

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

    const goToModalNext = useCallback(() => {
        if (isModalNavigationDisabled) {
            return;
        }

        setSelectedIndex((prev) => {
            if (prev === null) {
                return 0;
            }

            return (prev + 1) % totalImages;
        });
    }, [isModalNavigationDisabled, totalImages]);

    const goToModalPrevious = useCallback(() => {
        if (isModalNavigationDisabled) {
            return;
        }

        setSelectedIndex((prev) => {
            if (prev === null) {
                return 0;
            }

            return (prev - 1 + totalImages) % totalImages;
        });
    }, [isModalNavigationDisabled, totalImages]);

    useEffect(() => {
        if (selectedIndex === null) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }

            if (event.key === "ArrowRight") {
                goToModalNext();
            }

            if (event.key === "ArrowLeft") {
                goToModalPrevious();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
  }, [closeModal, goToModalNext, goToModalPrevious, selectedIndex]);

    if (slideCount === 0) {
        return null;
    }

    return (
        <section className="bg-[#182121]">
            <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-0 ">
                <button
                    type="button"
                    aria-label="Slide sebelumnya"
                    onClick={goToPrevious}
                    disabled={isNavigationDisabled}
                    className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 sm:h-12 sm:w-12"
                >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>

                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                    >
                        {slides.map((slideImages, slideIndex) => (
                            <div
                                key={`slide-${slideIndex}`}
                                className="grid min-w-full grid-cols-2 gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:p-6"
                            >
                                {slideImages.map((imageSrc, imageIndex) => {
                  const imageOrderIndex =
                    slideIndex * ITEMS_PER_SLIDE + imageIndex;
                  const previewLabel = formatLabel(imageOrderIndex);

                                    if (!imageSrc) {
                    return (
                      <div
                        key={`slide-${slideIndex}-image-${imageIndex}`}
                        className="aspect-[4/3] w-full rounded-2xl border border-white/5 bg-black/40"
                      />
                    );
                                    }

                                    return (
                                        <button
                                            key={`slide-${slideIndex}-image-${imageIndex}`}
                                            type="button"
                                            onClick={() => openModal(imageOrderIndex)}
                                            className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/30 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                                            aria-label={`Lihat pratinjau ${previewLabel}`}
                                        >
                                            <span className="sr-only">Lihat pratinjau {previewLabel}</span>
                                            <img
                                                src={imageSrc}
                                                alt={previewLabel}
                                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                                                loading={slideIndex === 0 ? "eager" : "lazy"}
                                            />
                                        </button>
                                    );
                                })}
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    type="button"
                    aria-label="Slide selanjutnya"
                    onClick={goToNext}
                    disabled={isNavigationDisabled}
                    className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 sm:h-12 sm:w-12"
                >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
            </div>

            {selectedImageSrc ? (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
                    role="dialog"
                    aria-modal="true"
                    aria-label={selectedImageLabel}
                >
                    <div
                        className="absolute inset-0 bg-black/80"
                        onClick={closeModal}
                        aria-hidden="true"
                    />

                    <div className="relative z-10 flex w-full max-w-5xl items-center gap-4">
                        <button
                            type="button"
                            onClick={goToModalPrevious}
                            disabled={isModalNavigationDisabled}
                            aria-label="Foto sebelumnya"
                            className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 md:flex"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>

                        <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60">
                            <button
                                type="button"
                                onClick={closeModal}
                                aria-label="Tutup pratinjau"
                                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white transition hover:bg-white hover:text-black"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <img
                                src={selectedImageSrc}
                                alt={selectedImageLabel}
                                className="h-full w-full max-h-[80vh] object-contain"
                            />

                            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/60 px-4 py-1 text-xs font-medium uppercase tracking-wide text-white/70">
                                <span>{selectedImageLabel}</span>
                                <span className="text-white/40">•</span>
                                <span>
                                    {String((selectedIndex ?? 0) + 1).padStart(2, "0")}/
                                    {String(totalImages).padStart(2, "0")}
                                </span>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={goToModalNext}
                            disabled={isModalNavigationDisabled}
                            aria-label="Foto selanjutnya"
                            className="hidden h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 md:flex"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            ) : null}
        </section>
    );
}
