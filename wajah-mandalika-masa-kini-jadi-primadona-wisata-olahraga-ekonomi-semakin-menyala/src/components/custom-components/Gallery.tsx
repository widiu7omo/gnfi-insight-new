"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { ChevronLeft, ChevronRight, X } from "lucide-react";

const baseUrl = 'https://insight.goodnewsfromindonesia.id/wajah-mandalika-masa-kini-jadi-primadona-wisata-olahraga-ekonomi-semakin-menyala';
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

const formatLabel = (index: number) =>
  `Galeri Mandalika ${String(index + 1).padStart(2, "0")}`;

const slideVariants = {
  initial: (direction: "next" | "prev") => ({
    x: direction === "next" ? "100%" : "-100%",
  }),
  animate: {
    x: "0%",
  },
  exit: (direction: "next" | "prev") => ({
    x: direction === "next" ? "-100%" : "100%",
  }),
};

export function Gallery() {
  const gallerySources = useMemo(
    () =>
      GALLERY_FILES.map((file) => `/assets/gallery/${file}`),
    [baseUrl],
  );

  const totalImages = gallerySources.length;
  const maxVisible =
    totalImages >= ITEMS_PER_SLIDE ? ITEMS_PER_SLIDE : totalImages;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [direction, setDirection] = useState<"next" | "prev">("next");

  const isNavigationDisabled = totalImages <= maxVisible;
  const isModalNavigationDisabled = totalImages <= 1;
  const selectedImageSrc =
    selectedIndex !== null ? gallerySources[selectedIndex] : null;
  const selectedImageLabel =
    selectedIndex !== null ? formatLabel(selectedIndex) : "";

  const visibleImages = useMemo(() => {
    if (totalImages === 0) {
      return [];
    }

    const images: string[] = [];

    for (let offset = 0; offset < maxVisible; offset += 1) {
      images.push(gallerySources[(currentIndex + offset) % totalImages]);
    }

    return images;
  }, [currentIndex, gallerySources, maxVisible, totalImages]);

  const goToPrevious = () => {
    if (isNavigationDisabled) {
      return;
    }

    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToNext = () => {
    if (isNavigationDisabled) {
      return;
    }

    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % totalImages);
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

    if (totalImages === 0) {
        return null;
    }

  const currentLabel = String((currentIndex % totalImages) + 1).padStart(2, "0");
  const totalLabel = String(totalImages).padStart(2, "0");

  return (
      <section className="relative bg-[#182121]">
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-12 sm:px-6 lg:px-0">
        <button
          type="button"
          aria-label="Foto sebelumnya"
          onClick={goToPrevious}
          disabled={isNavigationDisabled}
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/90 backdrop-blur">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none opacity-0"
            >
              <div className="grid min-w-full grid-cols-2 gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:p-6">
                {visibleImages.map((_, index) => (
                  <div
                    key={`placeholder-${index}`}
                    className="aspect-[4/3] rounded-2xl"
                  />
                ))}
              </div>
            </div>
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={`slide-${currentIndex}`}
                className="absolute inset-0 grid min-w-full grid-cols-2 gap-4 p-4 sm:gap-5 sm:p-5 md:grid-cols-3 lg:grid-cols-4 md:gap-6 md:p-6"
                variants={slideVariants}
                custom={direction}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              >
                {visibleImages.map((imageSrc, imageIndex) => {
                  const actualIndex = (currentIndex + imageIndex) % totalImages;
                  const previewLabel = formatLabel(actualIndex);

                  return (
                    <button
                      key={`image-${actualIndex}`}
                      type="button"
                      onClick={() => openModal(actualIndex)}
                      className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/30 focus:outline-none focus:ring-2 focus:ring-white/60 focus:ring-offset-2 focus:ring-offset-black"
                      aria-label={`Lihat pratinjau ${previewLabel}`}
                    >
                      <span className="sr-only">Lihat pratinjau {previewLabel}</span>
                      <img
                        src={`${baseUrl}${imageSrc}`}
                        alt={previewLabel}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                        loading={imageIndex === 0 ? "eager" : "lazy"}
                      />
                    </button>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button
          type="button"
          aria-label="Foto selanjutnya"
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

              <img src={`${baseUrl}${selectedImageSrc}`}
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
