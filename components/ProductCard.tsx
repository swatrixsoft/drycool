import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  features?: string[];
  image?: string;
}

export default function ProductCard({
  title,
  description,
  icon,
  link,
  features = [],
  image,
}: ProductCardProps) {
  return (
    <Link href={link}>
      <div className="card-hover flex h-full cursor-pointer flex-col overflow-hidden rounded-xl bg-white shadow-lg">
        <div className="relative h-52 overflow-hidden">
          {image ? (
            <>
              <Image src={image} alt={title} fill className="object-cover transition duration-500 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 to-slate-900/10" />
              <div className="absolute bottom-4 left-4 text-5xl">{icon}</div>
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-r from-blue-50 to-green-50 p-8">
              <span className="text-6xl">{icon}</span>
            </div>
          )}
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
          <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{description}</p>

          {features.length > 0 && (
            <ul className="mb-4 space-y-1 text-sm text-gray-600">
              {features.slice(0, 2).map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-green-600">-</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="group mt-4 inline-flex items-center font-semibold text-blue-600 transition-colors hover:text-emerald-600">
            Learn More
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
          </div>
        </div>
      </div>
    </Link>
  );
}
