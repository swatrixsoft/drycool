import Image from 'next/image';
import Link from 'next/link';

interface ClientLogo {
  name: string;
  image: string;
}

interface ClientLogoMarqueeProps {
  logos: ClientLogo[];
  showLink?: boolean;
}

export default function ClientLogoMarquee({ logos, showLink = true }: ClientLogoMarqueeProps) {
  const items = [...logos, ...logos];

  return (
    <section className="section-padding bg-slate-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-blue-600">Trusted By Industry</p>
          <h2 className="text-4xl font-extrabold text-slate-900">Our Clients</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Long-term partnerships built through reliable performance and consistent after-sales support.
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

          <div className="marquee-track">
            {items.map((logo, idx) => (
              <div
                key={`${logo.name}-${idx}`}
                className="mx-3 flex h-24 min-w-[180px] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4"
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={130}
                  height={56}
                  className="max-h-12 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>

        {showLink && (
          <div className="mt-8 text-center">
            <Link href="/our-clients" className="btn-outline">
              View Complete Client List
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
