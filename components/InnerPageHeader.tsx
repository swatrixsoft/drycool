import Link from 'next/link';
import Image from 'next/image';

interface InnerPageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
  heroImage?: string;
}

export default function InnerPageHeader({
  title,
  description,
  breadcrumb,
  heroImage,
}: InnerPageHeaderProps) {
  return (
    <>
      <div className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="text-blue-600 hover:text-blue-700">
              Home
            </Link>
            <span>/</span>
            <span className="font-medium text-gray-900">{breadcrumb || title}</span>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden py-16 text-white">
        {heroImage ? (
          <>
            <Image src={heroImage} alt={title} fill quality={95} className="image-enhanced object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/65 via-blue-950/45 to-emerald-950/30" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900" />
        )}

        <div className="relative mx-auto max-w-7xl px-4">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
          {description && <p className="max-w-2xl text-lg text-blue-100">{description}</p>}
        </div>
      </div>
    </>
  );
}
