import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundGradient?: string;
}

export default function Hero({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  backgroundGradient = 'gradient-bg',
}: HeroProps) {
  return (
    <section className={`${backgroundGradient} py-20 md:py-32 text-white relative overflow-hidden`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full -ml-36 -mb-36"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <p className="text-lg md:text-xl font-semibold mb-4 bg-white/20 inline-block px-4 py-2 rounded-full backdrop-blur-sm">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={ctaLink}
              className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300 group"
            >
              {ctaText}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center bg-white/20 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border border-white/30"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
