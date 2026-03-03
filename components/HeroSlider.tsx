'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { SlideItem } from '@/data/ui-content';

interface HeroSliderProps {
  slides: SlideItem[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[55vh] sm:h-[60vh] lg:h-[68vh] min-h-[300px] w-full overflow-hidden">
      {slides.map((slide, idx) => (
        <article
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-contain"
              priority={idx === 0}
            />
          </div>
          
          {/* Text Overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 z-10">
            <p className="text-xs sm:text-sm text-cyan-300 font-semibold mb-1">{slide.subtitle}</p>
            <h2 className="text-lg sm:text-2xl font-bold text-white truncate">{slide.title}</h2>
          </div>
        </article>
      ))}

      {/* Previous Arrow - Mobile Only */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 -translate-y-1/2 flex sm:hidden items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>

      {/* Next Arrow - Mobile Only */}
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 -translate-y-1/2 flex sm:hidden items-center justify-center w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 transition"
      >
        <ChevronRight size={24} className="text-white" />
      </button>

      {/* Indicator Dots - Desktop Only */}
      <div className="absolute bottom-8 left-1/2 z-20 hidden sm:flex -translate-x-1/2 gap-2">
        {slides.map((slide, idx) => (
          <button
            key={slide.title}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setActiveIndex(idx)}
            className={`h-2.5 rounded-full transition-all ${
              idx === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
