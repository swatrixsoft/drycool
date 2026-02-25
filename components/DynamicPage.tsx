import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import Navigation from './Navigation';
import Footer from './Footer';

interface DynamicPageProps {
  title: string;
  breadcrumb?: string;
  description?: string;
  content?: string;
  heroImage?: string;
}

function normalizeLegacyText(input: string): string {
  return input
    .replace(/â€™/g, "'")
    .replace(/â€œ/g, '"')
    .replace(/â€/g, '"')
    .replace(/â€“/g, '-')
    .replace(/â€”/g, '-')
    .replace(/â€¢/g, '-')
    .replace(/âœ“/g, '-')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function isBulletLine(line: string): boolean {
  return /^(?:[\-*])\s+/.test(line);
}

function renderContentBlocks(content: string) {
  const clean = normalizeLegacyText(content);
  const blocks = clean
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) => {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    const allBullets = lines.length > 0 && lines.every(isBulletLine);
    const headingLike = lines.length === 1 && /:$/.test(lines[0]) && lines[0].length < 90;

    if (/^Download file:\s+/i.test(block)) {
      const file = block.replace(/^Download file:\s+/i, '').trim();
      return (
        <a
          key={index}
          href={file}
          className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          <Download size={18} className="mr-2" />
          Download Brochure
        </a>
      );
    }

    if (allBullets) {
      return (
        <ul key={index} className="list-none space-y-2">
          {lines.map((item, itemIdx) => (
            <li key={itemIdx} className="flex items-start gap-3 leading-relaxed text-gray-700">
              <span className="mt-1 text-blue-600">-</span>
              <span>{item.replace(/^(?:[\-*])\s+/, '')}</span>
            </li>
          ))}
        </ul>
      );
    }

    if (headingLike) {
      return (
        <h3 key={index} className="mb-1 mt-6 text-2xl font-bold text-gray-900">
          {lines[0].replace(/:$/, '')}
        </h3>
      );
    }

    return (
      <p key={index} className="leading-relaxed text-gray-700">
        {block}
      </p>
    );
  });
}

export default function DynamicPage({
  title,
  breadcrumb = 'Home',
  description,
  content,
  heroImage,
}: DynamicPageProps) {
  const hasContent = Boolean(content && content.trim().length > 0);

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="text-blue-600 hover:text-blue-700">
                Home
              </Link>
              <span>/</span>
              <span className="font-medium text-gray-900">{breadcrumb}</span>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden py-16 text-white">
          {heroImage ? (
            <>
              <Image src={heroImage} alt={title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/70 to-emerald-950/50" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-900" />
          )}

          <div className="relative mx-auto max-w-7xl px-4">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
            {description && <p className="max-w-2xl text-lg text-blue-100">{normalizeLegacyText(description)}</p>}
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-8 rounded-2xl bg-white p-8 shadow-md">
                {hasContent ? (
                  <div className="space-y-5">{renderContentBlocks(content!)}</div>
                ) : (
                  <p className="leading-relaxed text-gray-700">Content for this page is being prepared.</p>
                )}
              </div>
            </div>

            <div>
              <div className="sticky top-24 mb-6 rounded-2xl bg-white p-6 shadow-md">
                <h3 className="mb-6 text-xl font-bold text-gray-900">Need More Information?</h3>

                <a
                  href="tel:+91334070500"
                  className="mb-3 flex items-center space-x-3 rounded-lg bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
                >
                  <Phone size={20} />
                  <div>
                    <p className="text-xs text-blue-100">Call Us</p>
                    <p className="font-semibold">+91 33 4070 5000</p>
                  </div>
                </a>

                <a
                  href="mailto:info@drycoolchillers.com"
                  className="mb-3 flex items-center space-x-3 rounded-lg bg-blue-600 p-3 text-white transition-colors hover:bg-blue-700"
                >
                  <Mail size={20} />
                  <div>
                    <p className="text-xs text-blue-100">Email Us</p>
                    <p className="text-sm font-semibold">info@drycoolchillers.com</p>
                  </div>
                </a>

                <Link
                  href="/address"
                  className="flex items-center space-x-3 rounded-lg bg-gray-100 p-3 text-gray-700 transition-colors hover:bg-gray-200"
                >
                  <MapPin size={20} />
                  <div>
                    <p className="text-xs text-gray-600">Visit Us</p>
                    <p className="font-semibold">Kolkata, India</p>
                  </div>
                </Link>

                <Link
                  href="/contact"
                  className="mt-6 block w-full rounded-lg bg-blue-600 py-3 text-center font-bold text-white transition-colors hover:bg-blue-700"
                >
                  Get a Quote
                </Link>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-md">
                <h3 className="mb-4 font-bold text-gray-900">Quick Navigation</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/products" className="text-blue-600 hover:text-blue-700">
                      Back to Products
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-blue-600 hover:text-blue-700">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us" className="text-blue-600 hover:text-blue-700">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-blue-600 hover:text-blue-700">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-blue-700 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Upgrade Your Cooling System?</h2>
            <p className="mx-auto mb-8 max-w-2xl text-blue-100">
              Contact our expert team today to find the perfect solution for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-blue-600 transition-colors hover:bg-blue-50"
            >
              Get in Touch Today
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
