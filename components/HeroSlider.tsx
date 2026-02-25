'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { SlideItem } from '@/data/ui-content';

interface HeroSliderProps {
  slides: SlideItem[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[68vh] min-h-[520px] w-full overflow-hidden">
      {slides.map((slide, idx) => (
        <article
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-700 ${
            idx === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={idx === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/70 to-emerald-950/40" />
          <div className="relative z-10 h-full">
            <div className="mx-auto flex h-full max-w-7xl items-center px-4">
              <div className="max-w-3xl rounded-2xl border border-white/20 bg-slate-900/45 p-5 backdrop-blur-sm md:p-8">
                <p className="mb-4 inline-block max-w-full rounded-full border border-cyan-300/40 bg-cyan-300/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-100 md:text-sm">
                  {slide.subtitle}
                </p>
                <h1 className="mb-5 text-3xl font-extrabold leading-tight text-white md:text-5xl">
                  {slide.title}
                </h1>
                <p className="mb-7 max-w-2xl text-base leading-relaxed text-blue-50 md:text-lg">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center rounded-full bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
                  >
                    {slide.ctaText}
                    <ArrowRight size={18} className="ml-2" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-full border border-white/60 bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    Contact Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      ))}

      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
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
