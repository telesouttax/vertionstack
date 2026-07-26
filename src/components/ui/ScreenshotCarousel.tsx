"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type ShowcaseImage = {
  src: string;
  alt: string;
  label: string;
};

type ScreenshotCarouselProps = {
  images: readonly ShowcaseImage[];
};

export function ScreenshotCarousel({ images }: ScreenshotCarouselProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4000);

    return () => clearInterval(id);
  }, [images.length]);

  const current = images[index];

  return (
    <div className="relative h-full w-full">
      <AnimatePresence mode="wait" initial={false}>
        <motion.img
          key={current.src}
          src={current.src}
          alt={current.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="h-full w-full object-contain"
        />
      </AnimatePresence>

      {images.length > 1 && (
        <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2 md:bottom-5">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver mockup de ${img.label}`}
              aria-current={i === index}
              className="flex h-11 w-11 cursor-pointer items-center justify-center"
            >
              <span
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  i === index ? "bg-primary" : "bg-border"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
